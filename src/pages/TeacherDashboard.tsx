import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  BookOpen, 
  Target, 
  TrendingUp,
  Award,
  Download,
  Filter,
  Search,
  Eye,
  MessageSquare,
  AlertCircle,
  CheckCircle,
  Star,
  Zap
} from 'lucide-react';
import { useStore } from '../store/useStore';

const TeacherDashboard = () => {
  const { } = useStore();
  const [selectedTimeRange, setSelectedTimeRange] = useState<'week' | 'month' | 'year'>('week');

  // Mock data for teacher dashboard
  const students = [
    {
      id: '1',
      name: 'Alex Johnson',
      email: 'alex@example.com',
      level: 5,
      problemsSolved: 12,
      lastActive: '2 hours ago',
      streak: 7,
      averageScore: 85,
      status: 'active'
    },
    {
      id: '2',
      name: 'Sarah Chen',
      email: 'sarah@example.com',
      level: 4,
      problemsSolved: 8,
      lastActive: '1 day ago',
      streak: 3,
      averageScore: 78,
      status: 'active'
    },
    {
      id: '3',
      name: 'Mike Rodriguez',
      email: 'mike@example.com',
      level: 6,
      problemsSolved: 15,
      lastActive: '3 hours ago',
      streak: 12,
      averageScore: 92,
      status: 'active'
    },
    {
      id: '4',
      name: 'Emma Wilson',
      email: 'emma@example.com',
      level: 3,
      problemsSolved: 5,
      lastActive: '1 week ago',
      streak: 0,
      averageScore: 65,
      status: 'inactive'
    }
  ];

  const classStats = [
    {
      label: 'Total Students',
      value: '24',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      label: 'Active Students',
      value: '18',
      icon: Target,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      label: 'Problems Solved',
      value: '156',
      icon: BookOpen,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      label: 'Average Score',
      value: '82%',
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  const recentActivity = [
    {
      id: '1',
      student: 'Alex Johnson',
      action: 'completed problem',
      problem: 'Two Sum',
      time: '2 hours ago',
      points: 100
    },
    {
      id: '2',
      student: 'Sarah Chen',
      action: 'earned achievement',
      problem: 'Streak Master',
      time: '4 hours ago',
      points: 50
    },
    {
      id: '3',
      student: 'Mike Rodriguez',
      action: 'leveled up',
      problem: 'Reached Level 6',
      time: '6 hours ago',
      points: 200
    },
    {
      id: '4',
      student: 'Emma Wilson',
      action: 'needs help',
      problem: 'Binary Search',
      time: '1 day ago',
      points: 0
    }
  ];

  const problemStats = [
    {
      name: 'Two Sum',
      difficulty: 'Easy',
      attempts: 24,
      solved: 18,
      averageTime: '12 min',
      successRate: 75
    },
    {
      name: 'Binary Search',
      difficulty: 'Medium',
      attempts: 20,
      solved: 12,
      averageTime: '25 min',
      successRate: 60
    },
    {
      name: 'Merge Sort',
      difficulty: 'Hard',
      attempts: 15,
      solved: 8,
      averageTime: '45 min',
      successRate: 53
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
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Teacher Dashboard</h1>
        <p className="text-lg text-slate-600">
          Monitor student progress and manage your algorithm class
        </p>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid md:grid-cols-4 gap-6 mb-8"
      >
        {classStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="card p-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{stat.label}</h3>
              </div>
              <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <p className="text-sm text-slate-600">This {selectedTimeRange}</p>
            </div>
          );
        })}
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Filters and Controls */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Time Range Filter */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Time Range</h2>
            <div className="space-y-2">
              {[
                { id: 'week', name: 'This Week' },
                { id: 'month', name: 'This Month' },
                { id: 'year', name: 'This Year' }
              ].map((range) => (
                <button
                  key={range.id}
                  onClick={() => setSelectedTimeRange(range.id as any)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedTimeRange === range.id
                      ? 'bg-primary-100 text-primary-700'
                      : 'hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  {range.name}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full btn btn-primary text-left justify-start">
                <Users className="w-4 h-4 mr-2" />
                Add Students
              </button>
              <button className="w-full btn btn-secondary text-left justify-start">
                <BookOpen className="w-4 h-4 mr-2" />
                Create Assignment
              </button>
              <button className="w-full btn btn-secondary text-left justify-start">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </button>
              <button className="w-full btn btn-secondary text-left justify-start">
                <MessageSquare className="w-4 h-4 mr-2" />
                Send Announcement
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Recent Activity</h2>
            <div className="space-y-3">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3 p-3 bg-slate-50 rounded-lg">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    {activity.action === 'completed problem' && <CheckCircle className="w-4 h-4 text-primary-600" />}
                    {activity.action === 'earned achievement' && <Award className="w-4 h-4 text-primary-600" />}
                    {activity.action === 'leveled up' && <TrendingUp className="w-4 h-4 text-primary-600" />}
                    {activity.action === 'needs help' && <AlertCircle className="w-4 h-4 text-primary-600" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900">
                      {activity.student} {activity.action}
                    </p>
                    <p className="text-sm text-slate-600">{activity.problem}</p>
                    <p className="text-xs text-slate-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-2 space-y-6"
        >
          {/* Students Table */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-slate-900">Students</h2>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search students..."
                    className="input pl-10 w-64"
                  />
                </div>
                <button className="btn btn-secondary px-3 py-2">
                  <Filter className="w-4 h-4 mr-1" />
                  Filter
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Student</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Level</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Solved</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Streak</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Score</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
                            <span className="text-sm font-bold text-white">
                              {student.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="font-medium text-slate-900">{student.name}</div>
                            <div className="text-sm text-slate-600">{student.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="badge bg-primary-100 text-primary-700">
                          Level {student.level}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-medium text-slate-900">
                        {student.problemsSolved}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-1">
                          <Zap className="w-4 h-4 text-warning-600" />
                          <span className="text-sm text-slate-900">{student.streak}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-warning-600" />
                          <span className="text-sm text-slate-900">{student.averageScore}%</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`badge ${
                          student.status === 'active' 
                            ? 'bg-success-100 text-success-700' 
                            : 'bg-danger-100 text-danger-700'
                        }`}>
                          {student.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <button className="p-1 rounded hover:bg-slate-100 transition-colors">
                          <Eye className="w-4 h-4 text-slate-600" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Problem Statistics */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Problem Statistics</h2>
            <div className="space-y-4">
              {problemStats.map((problem, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-slate-900">{problem.name}</h3>
                      <span className={`badge ${
                        problem.difficulty === 'Easy' ? 'bg-success-100 text-success-700' :
                        problem.difficulty === 'Medium' ? 'bg-warning-100 text-warning-700' :
                        'bg-danger-100 text-danger-700'
                      }`}>
                        {problem.difficulty}
                      </span>
                    </div>
                    <div className="flex items-center space-x-6 text-sm text-slate-600">
                      <span>{problem.attempts} attempts</span>
                      <span>{problem.solved} solved</span>
                      <span>Avg: {problem.averageTime}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-slate-900">{problem.successRate}%</div>
                    <div className="text-sm text-slate-600">success rate</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeacherDashboard;

