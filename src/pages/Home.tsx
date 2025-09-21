import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Play, 
  BarChart3, 
  Trophy, 
  ArrowRight, 
  Star,
  Users,
  Clock,
  Target,
  Zap
} from 'lucide-react';
import { useStore } from '../store/useStore';
import LearningPath from '../components/LearningPath';
import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
  const { user, problems, progress } = useStore();
  const { t, isRTL } = useLanguage();

  const features = [
    {
      icon: Code,
      title: t.home.pythonProblems,
      description: t.home.pythonProblemsDesc,
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: BarChart3,
      title: t.home.algorithmVisualization,
      description: t.home.algorithmVisualizationDesc,
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Play,
      title: t.home.handsOnPractice,
      description: t.home.handsOnPracticeDesc,
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Trophy,
      title: t.home.progressTracking,
      description: t.home.progressTrackingDesc,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const stats = [
    { label: t.home.problemsAvailable, value: problems.length, icon: Target },
    { label: t.home.studentsLearning, value: '2,500+', icon: Users },
    { label: t.home.successRate, value: '94%', icon: Star },
    { label: t.home.avgStudyTime, value: '45 min/day', icon: Clock }
  ];

  return (
    <div className="min-h-screen" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t.home.masterPython}
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                {t.home.funWay}
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
              {t.home.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/problems"
                className="btn btn-primary bg-white text-primary-700 hover:bg-primary-50 px-8 py-4 text-lg font-semibold"
              >
                {t.home.startLearning}
                <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
              </Link>
              <Link
                to="/visualize"
                className="btn border-2 border-white text-white hover:bg-white hover:text-primary-700 px-8 py-4 text-lg font-semibold"
              >
                {t.home.seeVisualizations}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t.home.whyChoose}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t.home.whyChooseDesc}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card p-6 hover:shadow-lg transition-shadow"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* User Progress Section */}
      {user && progress ? (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {t.home.yourLearningJourney}
              </h2>
              <p className="text-xl text-slate-600">
                {t.home.keepUpGreatWork}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="card p-6">
                <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'} mb-4`}>
                  <div className="w-10 h-10 bg-success-100 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-success-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{t.home.problemsSolved}</h3>
                </div>
                <div className="text-3xl font-bold text-success-600 mb-2">
                  {progress.problemsSolved.length}
                </div>
                <p className="text-slate-600">{t.home.keepSolving}</p>
              </div>

              <div className="card p-6">
                <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'} mb-4`}>
                  <div className="w-10 h-10 bg-warning-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-warning-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{t.home.currentStreak}</h3>
                </div>
                <div className="text-3xl font-bold text-warning-600 mb-2">
                  {progress.currentStreak} {t.common.days}
                </div>
                <p className="text-slate-600">{t.home.amazingConsistency}</p>
              </div>

              <div className="card p-6">
                <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'} mb-4`}>
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{t.home.weeklyProgress}</h3>
                </div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {progress.weeklyProgress}/{progress.weeklyGoal}
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${(progress.weeklyProgress / progress.weeklyGoal) * 100}%`
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {t.home.readyToStart}
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                {t.home.joinThousands}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/register"
                  className="btn btn-primary px-8 py-4 text-lg font-semibold"
                >
                  {t.home.getStartedFree}
                </Link>
                <Link
                  to="/login"
                  className="btn border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-4 text-lg font-semibold"
                >
                  {t.home.signIn}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Learning Path Section */}
      <LearningPath />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.home.readyToMaster}
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              {t.home.joinThousandsMaster}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/problems"
                className="btn bg-white text-primary-700 hover:bg-primary-50 px-8 py-4 text-lg font-semibold"
              >
                {t.home.startYourJourney}
                <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
              </Link>
              <Link
                to="/teacher"
                className="btn border-2 border-white text-white hover:bg-white hover:text-primary-700 px-8 py-4 text-lg font-semibold"
              >
                {t.home.teacherDashboard}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
