import { motion } from 'framer-motion';
import { BookOpen, Target, Zap, TrendingUp, Award, Clock, CheckCircle } from 'lucide-react';
import { useStore } from '../store/useStore';

const Sidebar = () => {
  const { sidebarOpen, toggleSidebar, user, progress } = useStore();

  if (!user) return null;

  const stats = [
    {
      label: 'Problems Solved',
      value: user.totalProblemsSolved,
      icon: CheckCircle,
      color: 'text-success-600'
    },
    {
      label: 'Current Streak',
      value: `${user.streak} days`,
      icon: Zap,
      color: 'text-warning-600'
    },
    {
      label: 'Level',
      value: user.level,
      icon: TrendingUp,
      color: 'text-primary-600'
    },
    {
      label: 'Experience',
      value: user.experience,
      icon: Award,
      color: 'text-purple-600'
    }
  ];

  const recentAchievements = user.badges.slice(0, 3);

  return (
    <>
      {/* Overlay */}
      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: sidebarOpen ? 0 : -300 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed left-0 top-16 bottom-0 w-80 sm:w-80 bg-white border-r border-slate-200 z-50 overflow-y-auto"
      >
        <div className="p-4 sm:p-6">
          {/* User Profile */}
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
              <span className="text-lg font-bold text-white">
                {user.name.charAt(0)}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">{user.name}</h3>
              <p className="text-sm text-slate-500">Level {user.level} Student</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="mobile-stats-grid mb-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="mobile-card">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon className={`w-4 h-4 ${stat.color}`} />
                    <span className="text-xs font-medium text-slate-500">
                      {stat.label}
                    </span>
                  </div>
                  <p className={`text-lg font-bold ${stat.color}`}>
                    {stat.value}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Progress */}
          {progress && (
            <div className="mobile-card mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-slate-900">Weekly Goal</h4>
                <span className="text-sm text-slate-500">
                  {progress.weeklyProgress}/{progress.weeklyGoal}
                </span>
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
          )}

          {/* Recent Achievements */}
          <div className="mobile-card mb-6">
            <h4 className="font-semibold text-slate-900 mb-3">Recent Achievements</h4>
            <div className="space-y-2">
              {recentAchievements.length > 0 ? (
                recentAchievements.map((badge) => (
                  <div key={badge.id} className="flex items-center space-x-2">
                    <span className="text-lg">{badge.icon}</span>
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        {badge.name}
                      </p>
                      <p className="text-xs text-slate-500">
                        {badge.description}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-500">No achievements yet</p>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 mb-3">Quick Actions</h4>
            <button className="w-full flex items-center space-x-2 p-3 rounded-lg hover:bg-slate-100 transition-colors text-left touch-target">
              <BookOpen className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">Continue Learning</span>
            </button>
            <button className="w-full flex items-center space-x-2 p-3 rounded-lg hover:bg-slate-100 transition-colors text-left touch-target">
              <Target className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">Practice Problems</span>
            </button>
            <button className="w-full flex items-center space-x-2 p-3 rounded-lg hover:bg-slate-100 transition-colors text-left touch-target">
              <Clock className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">Study Session</span>
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;


