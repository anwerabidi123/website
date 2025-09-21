import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Code,
  Target,
  Zap
} from 'lucide-react';
import { useStore } from '../store/useStore';
import { useLanguage } from '../contexts/LanguageContext';

const Problems = () => {
  const { problems, progress } = useStore();
  const { t, isRTL } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const categories = useMemo(() => {
    const cats = [...new Set(problems.map(p => p.category))];
    return cats;
  }, [problems]);

  const filteredProblems = useMemo(() => {
    return problems.filter(problem => {
      const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          problem.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          problem.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesDifficulty = difficultyFilter === 'all' || problem.difficulty === difficultyFilter;
      const matchesCategory = categoryFilter === 'all' || problem.category === categoryFilter;
      
      return matchesSearch && matchesDifficulty && matchesCategory;
    });
  }, [problems, searchTerm, difficultyFilter, categoryFilter]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-success-600 bg-success-100';
      case 'medium': return 'text-warning-600 bg-warning-100';
      case 'hard': return 'text-danger-600 bg-danger-100';
      default: return 'text-slate-600 bg-slate-100';
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return <CheckCircle className="w-4 h-4" />;
      case 'medium': return <AlertCircle className="w-4 h-4" />;
      case 'hard': return <Zap className="w-4 h-4" />;
      default: return <Target className="w-4 h-4" />;
    }
  };

  const isProblemSolved = (problemId: string) => {
    return progress?.problemsSolved.includes(problemId) || false;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-slate-900 mb-4">{t.problems.title}</h1>
        <p className="text-lg text-slate-600">
          {t.problems.subtitle.replace('{count}', problems.length.toString())}
        </p>
        {progress && (
          <div className="mt-4 p-4 bg-success-50 border border-success-200 rounded-lg">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-success-700">Total Score:</span>
                <span className="text-2xl font-bold text-success-600">{progress.totalScore || 0}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-slate-700">Problems Solved:</span>
                <span className="text-lg font-bold text-slate-600">{progress.problemsSolved.length}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-slate-700">Current Streak:</span>
                <span className="text-lg font-bold text-slate-600">{progress.currentStreak}</span>
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="card p-6 mb-8"
      >
        <div className="grid md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400`} />
            <input
              type="text"
              placeholder={t.problems.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`input ${isRTL ? 'pr-10' : 'pl-10'}`}
            />
          </div>

          {/* Difficulty Filter */}
          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
            className="input"
          >
            <option value="all">{t.problems.allDifficulties}</option>
            <option value="easy">{t.problems.easy}</option>
            <option value="medium">{t.problems.medium}</option>
            <option value="hard">{t.problems.hard}</option>
          </select>

          {/* Category Filter */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="input"
          >
            <option value="all">{t.problems.allCategories}</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          {/* Stats */}
          <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'} text-sm text-slate-600`}>
            <span>{filteredProblems.length} {t.problems.problems}</span>
            {progress && (
              <span>{progress.problemsSolved.length} {t.problems.solved}</span>
            )}
          </div>
        </div>
      </motion.div>

      {/* Problems Grid */}
      <div className="grid gap-6">
        {filteredProblems.map((problem, index) => (
          <motion.div
            key={problem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="card p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'} mb-2`}>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {problem.title}
                  </h3>
                  {isProblemSolved(problem.id) && (
                    <div className="flex items-center space-x-1 bg-success-100 text-success-700 px-2 py-1 rounded-full text-xs font-medium">
                      <CheckCircle className="w-3 h-3" />
                      <span>Solved</span>
                    </div>
                  )}
                </div>
                <p className="text-slate-600 mb-4 line-clamp-2">
                  {problem.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`badge ${getDifficultyColor(problem.difficulty)}`}>
                    {getDifficultyIcon(problem.difficulty)}
                    <span className={`${isRTL ? 'mr-1' : 'ml-1'} capitalize`}>{problem.difficulty}</span>
                  </span>
                  <span className="badge badge-primary">
                    {problem.category}
                  </span>
                  {problem.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="badge bg-slate-100 text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className={`flex flex-col items-end ${isRTL ? 'space-y-reverse space-y-2' : 'space-y-2'}`}>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary-600">
                    {problem.points}
                  </div>
                  <div className="text-sm text-slate-500">{t.problems.points}</div>
                </div>
                <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'} text-sm text-slate-500`}>
                  <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'}`}>
                    <Clock className="w-4 h-4" />
                    <span>{problem.timeLimit}m</span>
                  </div>
                  <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'}`}>
                    <Target className="w-4 h-4" />
                    <span>{problem.memoryLimit}MB</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'} text-sm text-slate-500`}>
                <span>{problem.testCases.length} {t.problems.testCases}</span>
                <span>{problem.hints.length} {t.problems.hintsAvailable}</span>
              </div>
              <Link
                to={`/problems/${problem.id}`}
                className={`btn px-6 py-2 ${isProblemSolved(problem.id) ? 'btn-outline' : 'btn-primary'}`}
              >
                {isProblemSolved(problem.id) ? t.profile.reviewAndPractice : t.problems.solve}
                <Code className={`w-4 h-4 ${isRTL ? 'mr-2' : 'ml-2'}`} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredProblems.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <Search className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-slate-900 mb-2">{t.problems.noProblemsFound}</h3>
          <p className="text-slate-600">{t.problems.tryAdjusting}</p>
        </motion.div>
      )}
    </div>
  );
};

export default Problems;

