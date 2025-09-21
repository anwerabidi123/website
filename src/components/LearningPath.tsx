import { motion } from 'framer-motion';
import { CheckCircle, Lock, Play, Code, BookOpen, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LearningPathStep {
  id: string;
  title: string;
  description: string;
  icon: any;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  topics: string[];
  isCompleted: boolean;
  isLocked: boolean;
  route: string;
}

const LearningPath = () => {
  const learningSteps: LearningPathStep[] = [
    {
      id: 'python-basics',
      title: 'Python Fundamentals',
      description: 'Master Python syntax, data structures, and basic programming concepts',
      icon: Code,
      difficulty: 'beginner',
      estimatedTime: '2-3 weeks',
      topics: ['Variables & Data Types', 'Control Structures', 'Functions', 'Lists & Dictionaries'],
      isCompleted: false,
      isLocked: false,
      route: '/problems?category=Arrays'
    },
    {
      id: 'basic-algorithms',
      title: 'Basic Algorithms',
      description: 'Learn fundamental algorithms like sorting, searching, and simple data structures',
      icon: Target,
      difficulty: 'beginner',
      estimatedTime: '3-4 weeks',
      topics: ['Linear Search', 'Binary Search', 'Bubble Sort', 'Selection Sort'],
      isCompleted: false,
      isLocked: false,
      route: '/problems?difficulty=easy'
    },
    {
      id: 'data-structures',
      title: 'Data Structures in Python',
      description: 'Implement and use common data structures like stacks, queues, and trees',
      icon: BookOpen,
      difficulty: 'intermediate',
      estimatedTime: '4-5 weeks',
      topics: ['Stacks & Queues', 'Linked Lists', 'Trees', 'Hash Tables'],
      isCompleted: false,
      isLocked: true,
      route: '/problems?category=Graph'
    },
    {
      id: 'advanced-algorithms',
      title: 'Advanced Algorithms',
      description: 'Master complex algorithms including dynamic programming and graph algorithms',
      icon: Play,
      difficulty: 'advanced',
      estimatedTime: '6-8 weeks',
      topics: ['Dynamic Programming', 'Graph Algorithms', 'Greedy Algorithms', 'Backtracking'],
      isCompleted: false,
      isLocked: true,
      route: '/problems?difficulty=hard'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return '🟢';
      case 'intermediate':
        return '🟡';
      case 'advanced':
        return '🔴';
      default:
        return '⚪';
    }
  };

  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Python Algorithm Learning Path
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Follow our structured curriculum to master Python programming and algorithms 
            from beginner to advanced level
          </p>
        </motion.div>

        <div className="space-y-8">
          {learningSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${
                step.isLocked ? 'opacity-60' : ''
              }`}
            >
              {/* Connection Line */}
              {index < learningSteps.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-16 bg-slate-300" />
              )}

              <div className="flex items-start space-x-6">
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    step.isCompleted 
                      ? 'bg-success-500 text-white' 
                      : step.isLocked 
                        ? 'bg-slate-300 text-slate-500' 
                        : 'bg-primary-500 text-white'
                  }`}>
                    {step.isCompleted ? (
                      <CheckCircle className="w-8 h-8" />
                    ) : step.isLocked ? (
                      <Lock className="w-8 h-8" />
                    ) : (
                      <step.icon className="w-8 h-8" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="card p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-slate-600 mb-4">
                          {step.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(step.difficulty)}`}>
                          {getDifficultyIcon(step.difficulty)} {step.difficulty}
                        </span>
                        <span className="text-sm text-slate-500">
                          {step.estimatedTime}
                        </span>
                      </div>
                    </div>

                    {/* Topics */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-slate-700 mb-2">Topics Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {step.topics.map((topic, topicIndex) => (
                          <span
                            key={topicIndex}
                            className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-slate-500">
                        <span className="flex items-center">
                          <BookOpen className="w-4 h-4 mr-1" />
                          {step.topics.length} topics
                        </span>
                        <span className="flex items-center">
                          <Target className="w-4 h-4 mr-1" />
                          {step.estimatedTime}
                        </span>
                      </div>

                      {step.isLocked ? (
                        <button
                          disabled
                          className="btn btn-secondary opacity-50 cursor-not-allowed"
                        >
                          <Lock className="w-4 h-4 mr-2" />
                          Complete Previous Steps
                        </button>
                      ) : (
                        <Link
                          to={step.route}
                          className="btn btn-primary"
                        >
                          {step.isCompleted ? (
                            <>
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Review
                            </>
                          ) : (
                            <>
                              <Play className="w-4 h-4 mr-2" />
                              Start Learning
                            </>
                          )}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 card p-6"
        >
          <div className="text-center">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Your Learning Progress
            </h3>
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">0</div>
                <div className="text-sm text-slate-600">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-600">4</div>
                <div className="text-sm text-slate-600">Total Steps</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success-600">0%</div>
                <div className="text-sm text-slate-600">Progress</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LearningPath;

