import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Award, 
  Target, 
  Clock, 
  TrendingUp,
  Code,
  Zap,
  Edit3,
  Save,
  X,
  LogOut
} from 'lucide-react';
import { useStore } from '../store/useStore';
import { useLanguage } from '../contexts/LanguageContext';
import toast from 'react-hot-toast';

const Profile = () => {
  const navigate = useNavigate();
  const { user, progress, logout, problems } = useStore();
  const { t } = useLanguage();
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: user?.name || '',
    email: user?.email || ''
  });

  if (!user || !progress) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900">Please log in to view your profile</h1>
        </div>
      </div>
    );
  }

  const handleSave = () => {
    // In a real app, this would update the user profile
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm({
      name: user.name,
      email: user.email
    });
    setIsEditing(false);
  };

  const handleLogout = () => {
    logout();
    toast.success(t.profile.loggedOutSuccessfully);
    navigate('/');
  };

  const achievements = [
    {
      id: '1',
      name: 'First Problem',
      description: 'Solved your first problem',
      icon: '🎯',
      color: 'success',
      earnedAt: new Date('2024-01-15')
    },
    {
      id: '2',
      name: 'Streak Master',
      description: 'Maintained a 7-day streak',
      icon: '🔥',
      color: 'warning',
      earnedAt: new Date('2024-01-20')
    },
    {
      id: '3',
      name: 'Algorithm Explorer',
      description: 'Learned 5 different algorithms',
      icon: '🧠',
      color: 'primary',
      earnedAt: new Date('2024-01-18')
    }
  ];

  // Get actual solved problems
  const solvedProblems = problems.filter(problem => 
    progress.problemsSolved.includes(problem.id)
  );

  // Calculate learning path progress by category
  const learningPathData = (() => {
    const categories = [...new Set(problems.map(p => p.category))];
    
    return categories.map(category => {
      const categoryProblems = problems.filter(p => p.category === category);
      const solvedInCategory = categoryProblems.filter(p => 
        progress.problemsSolved.includes(p.id)
      );
      
      const total = categoryProblems.length;
      const completed = solvedInCategory.length;
      const progressPercentage = total > 0 ? Math.round((completed / total) * 100) : 0;
      
      return {
        name: category,
        progress: progressPercentage,
        completed,
        total,
        solvedProblems: solvedInCategory
      };
    }).sort((a, b) => b.progress - a.progress); // Sort by progress descending
  })();

  const recentActivity = [
    ...solvedProblems.slice(0, 3).map((problem, index) => ({
      id: problem.id,
      type: 'problem_solved',
      title: `Solved "${problem.title}"`,
      points: problem.points,
      time: `${index + 1} day${index > 0 ? 's' : ''} ago`
    })),
    {
      id: 'achievement-1',
      type: 'achievement',
      title: 'Earned "Streak Master" badge',
      points: 50,
      time: '1 day ago'
    }
  ];

  const stats = [
    {
      label: 'Problems Solved',
      value: progress.problemsSolved.length,
      icon: Target,
      color: 'text-success-600',
      bgColor: 'bg-success-100'
    },
    {
      label: 'Current Streak',
      value: `${progress.currentStreak} days`,
      icon: Zap,
      color: 'text-warning-600',
      bgColor: 'bg-warning-100'
    },
    {
      label: 'Study Time',
      value: `${Math.round(progress.totalTimeSpent / 60)}h`,
      icon: Clock,
      color: 'text-primary-600',
      bgColor: 'bg-primary-100'
    },
    {
      label: 'Level',
      value: user.level,
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-slate-900 mb-4">{t.profile.title}</h1>
        <p className="text-lg text-slate-600">
          {t.profile.subtitle}
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Profile Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          {/* User Card */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-slate-900">{t.profile.profileInformation}</h2>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <Edit3 className="w-4 h-4 text-slate-600" />
                </button>
                <button
                  onClick={handleLogout}
                  className="p-2 rounded-lg hover:bg-danger-100 transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4 text-danger-600" />
                </button>
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">
                  {user.name.charAt(0)}
                </span>
              </div>
              
              {isEditing ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={editForm.name}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    className="input w-full"
                  />
                  <input
                    type="email"
                    value={editForm.email}
                    onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                    className="input w-full"
                  />
                  <div className="flex space-x-2">
                    <button
                      onClick={handleSave}
                      className="btn btn-primary px-4 py-2 text-sm"
                    >
                      <Save className="w-4 h-4 mr-1" />
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="btn btn-secondary px-4 py-2 text-sm"
                    >
                      <X className="w-4 h-4 mr-1" />
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">{user.name}</h3>
                  <p className="text-slate-600 mb-2">{user.email}</p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-slate-500">
                    <span>Level {user.level}</span>
                    <span>•</span>
                    <span>Joined {user.joinDate.toLocaleDateString()}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-slate-200 pt-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Member since</span>
                <span className="font-medium">{user.joinDate.toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">{t.profile.statistics}</h2>
            <div className="space-y-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-slate-600">{stat.label}</div>
                      <div className={`text-lg font-semibold ${stat.color}`}>{stat.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Weekly Goal */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Weekly Goal</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Progress</span>
                <span className="text-sm font-medium text-slate-900">
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
              <p className="text-xs text-slate-500">
                {progress.weeklyGoal - progress.weeklyProgress} more problems to reach your goal
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2 space-y-6"
        >
          {/* Achievements */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">{t.profile.achievements}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                  <span className="text-2xl">{achievement.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900">{achievement.name}</h3>
                    <p className="text-sm text-slate-600">{achievement.description}</p>
                    <p className="text-xs text-slate-500">
                      Earned {achievement.earnedAt.toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">{t.profile.recentActivity}</h2>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-4 p-3 hover:bg-slate-50 rounded-lg transition-colors">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    {activity.type === 'problem_solved' && <Code className="w-5 h-5 text-primary-600" />}
                    {activity.type === 'achievement' && <Award className="w-5 h-5 text-primary-600" />}
                    {activity.type === 'level_up' && <TrendingUp className="w-5 h-5 text-primary-600" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-slate-900">{activity.title}</h3>
                    <p className="text-sm text-slate-600">{activity.time}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-primary-600">+{activity.points}</div>
                    <div className="text-xs text-slate-500">points</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solved Problems */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">{t.profile.solvedProblems}</h2>
            {solvedProblems.length > 0 ? (
              <div className="space-y-3">
                {solvedProblems.map((problem) => (
                  <div key={problem.id} className="flex items-center justify-between p-3 bg-success-50 border border-success-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-success-100 rounded-full flex items-center justify-center">
                        <Code className="w-4 h-4 text-success-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-900">{problem.title}</h3>
                        <p className="text-sm text-slate-600">{problem.category} • {problem.difficulty}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-success-600">+{problem.points}</div>
                      <div className="text-xs text-slate-500">points</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Code className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <p className="text-slate-500">{t.profile.noProblemsSolved}</p>
                <p className="text-sm text-slate-400">{t.profile.startSolving}</p>
              </div>
            )}
          </div>

          {/* Learning Path */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">{t.profile.learningPath}</h2>
            <div className="space-y-4">
              {learningPathData.map((path, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-slate-900">{path.name}</span>
                    <span className="text-sm text-slate-600">{path.completed}/{path.total}</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${
                        path.progress === 100 
                          ? 'bg-gradient-to-r from-success-500 to-success-600' 
                          : 'bg-gradient-to-r from-primary-500 to-primary-600'
                      }`}
                      style={{ width: `${path.progress}%` }}
                    />
                  </div>
                  {path.progress === 100 && (
                    <div className="flex items-center space-x-1 text-xs text-success-600">
                      <Award className="w-3 h-3" />
                      <span>{t.profile.categoryCompleted}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Overall Progress Summary */}
            <div className="mt-6 pt-4 border-t border-slate-200">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">{t.profile.overallProgress}</span>
                <span className="font-medium text-slate-900">
                  {solvedProblems.length}/{problems.length} {t.profile.problemsSolvedCount}
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                <div
                  className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-300"
                  style={{ 
                    width: `${problems.length > 0 ? Math.round((solvedProblems.length / problems.length) * 100) : 0}%` 
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
