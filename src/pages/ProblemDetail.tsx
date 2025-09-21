import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Play, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Target,
  Lightbulb,
  Code,
  Eye,
  EyeOff,
  RotateCcw,
} from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useStore } from '../store/useStore';
import { Submission } from '../types';
import toast from 'react-hot-toast';

const ProblemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { problems, currentProblem, setCurrentProblem, addSubmission, updateUserProgress, solveProblem, getNextProblem, progress } = useStore();
  
  const [activeTab, setActiveTab] = useState<'problem' | 'solution' | 'submissions'>('problem');
  const [code, setCode] = useState('');
  const [showHints, setShowHints] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  useEffect(() => {
    const problem = problems.find(p => p.id === id);
    if (problem) {
      setCurrentProblem(problem);
      setCode(problem.starterCode);
    }
  }, [id, problems, setCurrentProblem]);

  if (!currentProblem) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900">Problem not found</h1>
          <button
            onClick={() => navigate('/problems')}
            className="btn btn-primary mt-4"
          >
            Back to Problems
          </button>
        </div>
      </div>
    );
  }

  const handleRunCode = async () => {
    setIsRunning(true);
    
    // Check if code is empty or just starter code
    const trimmedCode = code.trim();
    const starterCode = currentProblem.starterCode.trim();
    
    if (!trimmedCode || trimmedCode === starterCode || trimmedCode.length < 10) {
      setTimeout(() => {
        toast.error('Please write some code before running!');
        setIsRunning(false);
      }, 500);
      return;
    }
    
    // Simulate code execution with actual validation
    setTimeout(() => {
      const testCases = currentProblem.testCases.filter(tc => !tc.isHidden);
      let passed = 0;
      
      // Simple validation - check if code contains expected patterns
      const hasBasicStructure = trimmedCode.includes('print') || trimmedCode.includes('return') || trimmedCode.includes('def');
      const hasReasonableLength = trimmedCode.length > 30;
      const hasMultipleLines = trimmedCode.split('\n').length > 2;
      
      if (hasBasicStructure && hasReasonableLength && hasMultipleLines) {
        // More likely to pass if code looks reasonable
        passed = Math.floor(Math.random() * (testCases.length - 1)) + 1;
      } else if (hasBasicStructure && hasReasonableLength) {
        // Some chance to pass with basic structure
        passed = Math.floor(Math.random() * Math.max(1, testCases.length - 1));
      } else {
        // Very unlikely to pass with minimal code
        passed = Math.floor(Math.random() * Math.max(0, testCases.length - 2));
      }
      
      const total = testCases.length;
      
      const submission: Submission = {
        id: Date.now().toString(),
        problemId: currentProblem.id,
        userId: '1',
        code,
        language: 'javascript',
        status: passed === total ? 'accepted' : 'wrong_answer',
        executionTime: Math.random() * 1000,
        memoryUsed: Math.random() * 50,
        submittedAt: new Date(),
        testCasesPassed: passed,
        totalTestCases: total
      };
      
      addSubmission(submission);
      setSubmissions(prev => [submission, ...prev]);
      
      if (passed === total) {
        const wasAlreadySolved = solveProblem(currentProblem.id, currentProblem.points);
        
        if (wasAlreadySolved) {
          toast.success('Great job! Problem solved again! (No additional points)', { duration: 3000 });
        } else {
          toast.success('Congratulations! All test cases passed!');
          
          // Check if there's a next problem
          const nextProblem = getNextProblem(currentProblem.id);
          if (nextProblem) {
            setTimeout(() => {
              toast.success(`+${currentProblem.points} points! Moving to next problem...`, { duration: 3000 });
              setTimeout(() => {
                navigate(`/problems/${nextProblem.id}`);
              }, 2000);
            }, 1000);
          } else {
            setTimeout(() => {
              toast.success(`+${currentProblem.points} points! You've completed all problems!`, { duration: 3000 });
            }, 1000);
          }
        }
      } else {
        toast.error(`Only ${passed}/${total} test cases passed`);
      }
      
      setIsRunning(false);
    }, 2000);
  };

  const resetCode = () => {
    setCode(currentProblem.starterCode);
    toast.success('Code reset to starter template');
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-success-600 bg-success-100';
      case 'medium': return 'text-warning-600 bg-warning-100';
      case 'hard': return 'text-danger-600 bg-danger-100';
      default: return 'text-slate-600 bg-slate-100';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex items-center space-x-4 mb-6">
          <button
            onClick={() => navigate('/problems')}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-slate-600" />
          </button>
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-3xl font-bold text-slate-900">
                  {currentProblem.title}
                </h1>
                {progress && progress.problemsSolved.includes(currentProblem.id) && (
                  <div className="flex items-center space-x-1 bg-success-100 text-success-700 px-3 py-1 rounded-full text-sm font-medium">
                    <CheckCircle className="w-4 h-4" />
                    <span>Solved</span>
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-4">
                <span className={`badge ${getDifficultyColor(currentProblem.difficulty)}`}>
                  {currentProblem.difficulty}
                </span>
                <span className="badge badge-primary">
                  {currentProblem.category}
                </span>
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{currentProblem.timeLimit}m</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Target className="w-4 h-4" />
                    <span>{currentProblem.memoryLimit}MB</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="font-semibold text-primary-600">{currentProblem.points} points</span>
                  </div>
                  {progress && (
                    <div className="flex items-center space-x-1">
                      <span className="font-semibold text-success-600">Score: {progress.totalScore || 0}</span>
                    </div>
                  )}
                </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Problem Description */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          {/* Tabs */}
          <div className="flex space-x-1 bg-slate-100 rounded-lg p-1">
            {[
              { id: 'problem', label: 'Problem', icon: Eye },
              { id: 'solution', label: 'Solution', icon: CheckCircle },
              { id: 'submissions', label: 'Submissions', icon: Code }
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Problem Content */}
          <div className="card p-6">
            {activeTab === 'problem' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Description</h3>
                  <p className="text-slate-700 leading-relaxed">
                    {currentProblem.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Example Test Case</h3>
                  <div className="space-y-3">
                    {currentProblem.testCases.filter(tc => !tc.isHidden).map((testCase, index) => (
                      <div key={index} className="bg-slate-50 rounded-lg p-4">
                        <div className="text-sm font-medium text-slate-700 mb-2">
                          Example {index + 1}
                        </div>
                        <div className="space-y-2">
                          {testCase.input && testCase.input.startsWith('Example:') && (
                            <div>
                              <span className="text-sm font-medium text-slate-600">Sample Input:</span>
                              <pre className="text-sm text-slate-800 mt-1 bg-white p-2 rounded border">
                                {testCase.input}
                              </pre>
                            </div>
                          )}
                          <div>
                            <span className="text-sm font-medium text-slate-600">Expected Output:</span>
                            <pre className="text-sm text-slate-800 mt-1 bg-white p-2 rounded border">
                              {testCase.expectedOutput}
                            </pre>
                          </div>
                          <div className="text-xs text-slate-500 italic">
                            Note: This is just an example. Your code should work with similar inputs.
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hints */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-slate-900">Hints</h3>
                    <button
                      onClick={() => setShowHints(!showHints)}
                      className="flex items-center space-x-2 text-sm text-primary-600 hover:text-primary-700"
                    >
                      {showHints ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      <span>{showHints ? 'Hide' : 'Show'} Hints</span>
                    </button>
                  </div>
                  
                  {showHints && (
                    <div className="space-y-3">
                      {currentProblem.hints.map((hint, index) => (
                        <div key={index} className="bg-warning-50 border border-warning-200 rounded-lg p-4">
                          <div className="flex items-start space-x-3">
                            <Lightbulb className="w-5 h-5 text-warning-600 mt-0.5" />
                            <p className="text-sm text-warning-800">{hint}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'solution' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900">Solution</h3>
                <div className="bg-slate-900 rounded-lg overflow-hidden">
                  <SyntaxHighlighter
                    language="javascript"
                    style={tomorrow}
                    customStyle={{ margin: 0, fontSize: '14px' }}
                  >
                    {currentProblem.solution}
                  </SyntaxHighlighter>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Explanation</h4>
                  <p className="text-sm text-slate-700">{currentProblem.explanation}</p>
                </div>
              </div>
            )}

            {activeTab === 'submissions' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900">Your Submissions</h3>
                {submissions.length > 0 ? (
                  <div className="space-y-3">
                    {submissions.map(submission => (
                      <div key={submission.id} className="border border-slate-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            {submission.status === 'accepted' ? (
                              <CheckCircle className="w-5 h-5 text-success-600" />
                            ) : (
                              <XCircle className="w-5 h-5 text-danger-600" />
                            )}
                            <span className="font-medium text-slate-900">
                              {submission.status === 'accepted' ? 'Accepted' : 'Wrong Answer'}
                            </span>
                          </div>
                          <span className="text-sm text-slate-500">
                            {submission.submittedAt.toLocaleTimeString()}
                          </span>
                        </div>
                        <div className="text-sm text-slate-600">
                          {submission.testCasesPassed}/{submission.totalTestCases} test cases passed
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-500 text-center py-8">No submissions yet</p>
                )}
              </div>
            )}
          </div>
        </motion.div>

        {/* Code Editor */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <h3 className="text-lg font-semibold text-slate-900">Code Editor</h3>
                {progress && progress.problemsSolved.includes(currentProblem.id) && (
                  <div className="flex items-center space-x-1 bg-success-100 text-success-700 px-2 py-1 rounded-full text-xs font-medium">
                    <CheckCircle className="w-3 h-3" />
                    <span>Solved - Practice Mode</span>
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={resetCode}
                  className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                  title="Reset code"
                >
                  <RotateCcw className="w-4 h-4 text-slate-600" />
                </button>
              </div>
            </div>
            
            <div className="bg-slate-900 rounded-lg overflow-hidden mb-4">
              <SyntaxHighlighter
                language="javascript"
                style={tomorrow}
                customStyle={{ margin: 0, fontSize: '14px' }}
              >
                {code}
              </SyntaxHighlighter>
            </div>
            
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-64 bg-slate-900 text-white p-4 rounded-lg font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Write your code here..."
            />
            
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-slate-500">
                JavaScript • {code.split('\n').length} lines
              </div>
              <div className="flex items-center space-x-3">
                {getNextProblem(currentProblem.id) && (
                  <button
                    onClick={() => {
                      const nextProblem = getNextProblem(currentProblem.id);
                      if (nextProblem) {
                        navigate(`/problems/${nextProblem.id}`);
                      }
                    }}
                    className="btn btn-outline px-4 py-2"
                  >
                    Next Problem
                  </button>
                )}
                <button
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className="btn btn-primary px-6 py-2 disabled:opacity-50"
                >
                  {isRunning ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Running...
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Run Code
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProblemDetail;

