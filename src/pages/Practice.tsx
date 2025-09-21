import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Clock, 
  CheckCircle, 
  BookOpen,
  Zap,
  TrendingUp,
  Award,
  Play,
  RotateCcw,
  Code,
  Calculator,
  Search,
  SortAsc
} from 'lucide-react';
import { useStore } from '../store/useStore';
import { useLanguage } from '../contexts/LanguageContext';

const Practice = () => {
  const { user, progress } = useStore();
  const { t, isRTL } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [practiceMode, setPracticeMode] = useState<'guided' | 'timed' | 'random'>('guided');
  const [sessionTime, setSessionTime] = useState(25);
  const [isSessionActive, setIsSessionActive] = useState(false);

  const categories = [
    { id: 'all', name: t.problems.allCategories, icon: BookOpen },
    { id: 'operators', name: t.problems.operators, icon: Calculator },
    { id: 'functions', name: t.problems.functions, icon: Code },
    { id: 'types', name: t.problems.types, icon: Target },
    { id: 'controlStructures', name: t.problems.controlStructures, icon: TrendingUp },
    { id: 'subprograms', name: t.problems.subprograms, icon: BookOpen },
    { id: 'sortingAlgorithms', name: t.problems.sortingAlgorithms, icon: SortAsc },
    { id: 'search', name: t.problems.search, icon: Search },
    { id: 'arithmetic', name: t.problems.arithmetic, icon: Calculator }
  ];

  const difficultyLevels = [
    { id: 'all', name: t.problems.allDifficulties, color: 'bg-slate-100 text-slate-700' },
    { id: 'easy', name: t.problems.beginner, color: 'bg-success-100 text-success-700' },
    { id: 'medium', name: t.problems.intermediate, color: 'bg-warning-100 text-warning-700' },
    { id: 'hard', name: t.problems.advanced, color: 'bg-danger-100 text-danger-700' }
  ];

  const practiceModes = [
    {
      id: 'guided',
      name: t.practice.guidedPractice,
      description: t.practice.guidedDescription,
      icon: BookOpen,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'timed',
      name: t.practice.timedChallenge,
      description: t.practice.timedDescription,
      icon: Clock,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'random',
      name: t.practice.randomPractice,
      description: t.practice.randomDescription,
      icon: Target,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const startSession = () => {
    setIsSessionActive(true);
    // Dans une vraie app, cela démarrerait une session de pratique
  };

  const endSession = () => {
    setIsSessionActive(false);
    // Dans une vraie app, cela terminerait la session et sauvegarderait les progrès
  };

  return (
    <div className="max-w-7xl mx-auto mobile-container py-6 sm:py-8" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 sm:mb-8"
      >
        <h1 className="mobile-heading text-slate-900 mb-4">{t.practice.title}</h1>
        <p className="mobile-text text-slate-600">
          {t.practice.subtitle}
        </p>
      </motion.div>

      {/* Stats Overview */}
      {user && progress && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mobile-stats-grid mb-6 sm:mb-8"
        >
          <div className="mobile-card">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-success-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-success-600" />
              </div>
              <h3 className="mobile-subheading text-slate-900">{t.profile.problemsSolved}</h3>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-success-600 mb-1">
              {progress.problemsSolved.length}
            </div>
            <p className="text-sm text-slate-600">{t.success.problemSolved}</p>
          </div>

          <div className="mobile-card">
            <div className="flex items-center space-x-3 mb-3" dir={isRTL ? 'rtl' : 'ltr'}>
              <div className="w-10 h-10 bg-warning-100 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-warning-600" />
              </div>
              <h3 className="mobile-subheading text-slate-900">{t.profile.currentStreak}</h3>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-warning-600 mb-1">
              {progress.currentStreak}
            </div>
            <p className="text-sm text-slate-600">{t.common.days} {t.common.consecutive}</p>
          </div>

          <div className="mobile-card">
            <div className="flex items-center space-x-3 mb-3" dir={isRTL ? 'rtl' : 'ltr'}>
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary-600" />
              </div>
              <h3 className="mobile-subheading text-slate-900">{t.profile.studyTime}</h3>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1">
              {Math.round(progress.totalTimeSpent / 60)}h
            </div>
            <p className="text-sm text-slate-600">{t.common.totalTime}</p>
          </div>

          <div className="mobile-card">
            <div className="flex items-center space-x-3 mb-3" dir={isRTL ? 'rtl' : 'ltr'}>
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="mobile-subheading text-slate-900">{t.common.level}</h3>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1">
              {user.level}
            </div>
            <p className="text-sm text-slate-600">{t.home.title}</p>
          </div>
        </motion.div>
      )}

      <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Practice Configuration */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 sm:space-y-6"
        >
          {/* Practice Mode Selection */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Mode de Pratique</h2>
            <div className="space-y-3">
              {practiceModes.map((mode) => {
                const Icon = mode.icon;
                return (
                  <button
                    key={mode.id}
                    onClick={() => setPracticeMode(mode.id as any)}
                    className={`w-full text-left p-4 rounded-lg border transition-colors ${
                      practiceMode === mode.id
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={`w-8 h-8 bg-gradient-to-r ${mode.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="font-semibold text-slate-900">{mode.name}</h3>
                    </div>
                    <p className="text-sm text-slate-600">{mode.description}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category Selection */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Catégorie</h2>
            <div className="space-y-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-primary-100 text-primary-700'
                        : 'hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Difficulty Selection */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Difficulté</h2>
            <div className="space-y-2">
              {difficultyLevels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setSelectedDifficulty(level.id)}
                  className={`w-full p-3 rounded-lg transition-colors ${
                    selectedDifficulty === level.id
                      ? level.color
                      : 'hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <span className="font-medium">{level.name}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Practice Session */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-2 space-y-6"
        >
          {/* Session Configuration */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Paramètres de Session</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Durée de Session (minutes)
                </label>
                <select
                  value={sessionTime}
                  onChange={(e) => setSessionTime(Number(e.target.value))}
                  className="input"
                >
                  <option value={15}>15 minutes</option>
                  <option value={25}>25 minutes</option>
                  <option value={45}>45 minutes</option>
                  <option value={60}>1 heure</option>
                  <option value={90}>1.5 heures</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Problèmes par Session
                </label>
                <select className="input">
                  <option value={3}>3 problèmes</option>
                  <option value={5}>5 problèmes</option>
                  <option value={10}>10 problèmes</option>
                  <option value={15}>15 problèmes</option>
                </select>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {!isSessionActive ? (
                <button
                  onClick={startSession}
                  className="btn btn-primary px-8 py-3 text-lg"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Démarrer la Session
                </button>
              ) : (
                <button
                  onClick={endSession}
                  className="btn btn-danger px-8 py-3 text-lg"
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Terminer la Session
                </button>
              )}
            </div>
          </div>

          {/* Active Session */}
          {isSessionActive && (
            <div className="card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-slate-900">Session Active</h3>
                <div className="flex items-center space-x-4">
                  <div className="text-sm text-slate-600">
                    Temps restant: <span className="font-mono">24:30</span>
                  </div>
                  <div className="text-sm text-slate-600">
                    Progrès: 2/5 problèmes
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Problème Actuel</h4>
                  <p className="text-slate-700 mb-3">
                    Apprenez les opérateurs arithmétiques de base en Python et en algorithme.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-slate-600">
                    <span className="badge bg-success-100 text-success-700">Débutant</span>
                    <span className="badge bg-primary-100 text-primary-700">Opérateurs</span>
                    <span>10 points</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-success-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">Terminé</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">Actuel</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                    <span className="text-sm text-slate-600">En Attente</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Practice History */}
          <div className="card p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Sessions de Pratique Récentes</h3>
            <div className="space-y-3">
              {[
                { date: '2024-01-20', duration: '25 min', problems: 5, score: 80, category: 'Opérateurs' },
                { date: '2024-01-19', duration: '45 min', problems: 8, score: 75, category: 'Algorithmes de Tri' },
                { date: '2024-01-18', duration: '30 min', problems: 6, score: 90, category: 'Fonctions' },
                { date: '2024-01-17', duration: '20 min', problems: 4, score: 85, category: 'Types' }
              ].map((session, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <div className="font-medium text-slate-900">{session.date}</div>
                    <div className="text-sm text-slate-600">
                      {session.duration} • {session.problems} problèmes • {session.category}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-slate-900">{session.score}%</div>
                    <div className="text-sm text-slate-600">précision</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Path */}
          <div className="card p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Parcours d'Apprentissage</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-success-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-success-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-slate-900">Opérateurs</h4>
                  <p className="text-sm text-slate-600">Arithmétiques, Logiques, Comparaison</p>
                </div>
                <span className="text-sm text-success-600 font-medium">Terminé</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <Target className="w-4 h-4 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-slate-900">Fonctions</h4>
                  <p className="text-sm text-slate-600">Entiers/Réels, Chaînes de caractères</p>
                </div>
                <span className="text-sm text-primary-600 font-medium">En Cours</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-slate-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-slate-900">Types</h4>
                  <p className="text-sm text-slate-600">Types simples, Tableaux</p>
                </div>
                <span className="text-sm text-slate-400 font-medium">À venir</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-slate-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-slate-900">Structures de Contrôle</h4>
                  <p className="text-sm text-slate-600">if/elif/else, Boucles For/While</p>
                </div>
                <span className="text-sm text-slate-400 font-medium">À venir</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Practice;