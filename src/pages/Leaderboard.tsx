import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Medal, 
  Crown, 
  Star,
  TrendingUp,
  Users,
  Target,
  Zap,
  Clock
} from 'lucide-react';
import { useStore } from '../store/useStore';
import { LeaderboardEntry } from '../types';

const Leaderboard = () => {
  const { user } = useStore();
  const [timeFilter, setTimeFilter] = useState<'all' | 'week' | 'month' | 'year'>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  // Mock leaderboard data
  const [leaderboard] = useState<LeaderboardEntry[]>([
    {
      userId: '1',
      name: 'Alex Johnson',
      score: 2450,
      problemsSolved: 45,
      rank: 1,
      level: 8,
      avatar: undefined
    },
    {
      userId: '2',
      name: 'Sarah Chen',
      score: 2380,
      problemsSolved: 42,
      rank: 2,
      level: 7,
      avatar: undefined
    },
    {
      userId: '3',
      name: 'Mike Rodriguez',
      score: 2250,
      problemsSolved: 38,
      rank: 3,
      level: 7,
      avatar: undefined
    },
    {
      userId: '4',
      name: 'Emma Wilson',
      score: 2100,
      problemsSolved: 35,
      rank: 4,
      level: 6,
      avatar: undefined
    },
    {
      userId: '5',
      name: 'David Kim',
      score: 1950,
      problemsSolved: 32,
      rank: 5,
      level: 6,
      avatar: undefined
    },
    {
      userId: '6',
      name: 'Lisa Zhang',
      score: 1800,
      problemsSolved: 28,
      rank: 6,
      level: 5,
      avatar: undefined
    },
    {
      userId: '7',
      name: 'John Smith',
      score: 1650,
      problemsSolved: 25,
      rank: 7,
      level: 5,
      avatar: undefined
    },
    {
      userId: '8',
      name: 'Anna Brown',
      score: 1500,
      problemsSolved: 22,
      rank: 8,
      level: 4,
      avatar: undefined
    }
  ]);

  const categories = [
    { id: 'all', name: 'Overall', icon: Trophy },
    { id: 'array', name: 'Arrays', icon: Target },
    { id: 'string', name: 'Strings', icon: Star },
    { id: 'tree', name: 'Trees', icon: TrendingUp },
    { id: 'graph', name: 'Graphs', icon: Zap }
  ];

  const timeFilters = [
    { id: 'all', name: 'All Time' },
    { id: 'week', name: 'This Week' },
    { id: 'month', name: 'This Month' },
    { id: 'year', name: 'This Year' }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Medal className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-slate-600 font-bold">
          {rank}
        </span>;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white';
      case 2:
        return 'bg-gradient-to-r from-gray-300 to-gray-500 text-white';
      case 3:
        return 'bg-gradient-to-r from-amber-500 to-amber-700 text-white';
      default:
        return 'bg-slate-100 text-slate-700';
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
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Leaderboard</h1>
        <p className="text-lg text-slate-600">
          See how you rank against other algorithm masters
        </p>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid md:grid-cols-4 gap-6 mb-8"
      >
        <div className="card p-6">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Trophy className="w-5 h-5 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Total Participants</h3>
          </div>
          <div className="text-3xl font-bold text-yellow-600 mb-1">2,847</div>
          <p className="text-sm text-slate-600">active learners</p>
        </div>

        <div className="card p-6">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Problems Solved</h3>
          </div>
          <div className="text-3xl font-bold text-green-600 mb-1">45,230</div>
          <p className="text-sm text-slate-600">total solutions</p>
        </div>

        <div className="card p-6">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Average Score</h3>
          </div>
          <div className="text-3xl font-bold text-blue-600 mb-1">1,847</div>
          <p className="text-sm text-slate-600">points per user</p>
        </div>

        <div className="card p-6">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Study Time</h3>
          </div>
          <div className="text-3xl font-bold text-purple-600 mb-1">12.5k</div>
          <p className="text-sm text-slate-600">hours logged</p>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Time Filter */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Time Period</h2>
            <div className="space-y-2">
              {timeFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setTimeFilter(filter.id as any)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    timeFilter === filter.id
                      ? 'bg-primary-100 text-primary-700'
                      : 'hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Category</h2>
            <div className="space-y-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setCategoryFilter(category.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                      categoryFilter === category.id
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

          {/* Your Rank */}
          {user && (
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Your Rank</h2>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">#12</div>
                <div className="text-sm text-slate-600 mb-4">out of 2,847</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Problems Solved:</span>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Score:</span>
                    <span className="font-semibold">1,250</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Level:</span>
                    <span className="font-semibold">{user.level}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Leaderboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-3"
        >
          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Top Performers</h2>
              <div className="flex items-center space-x-2 text-sm text-slate-600">
                <Users className="w-4 h-4" />
                <span>{leaderboard.length} participants</span>
              </div>
            </div>

            <div className="space-y-4">
              {leaderboard.map((entry, index) => (
                <motion.div
                  key={entry.userId}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`flex items-center justify-between p-4 rounded-lg transition-all ${
                    entry.userId === user?.id
                      ? 'bg-primary-50 border-2 border-primary-200'
                      : 'bg-slate-50 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getRankColor(entry.rank)}`}>
                      {getRankIcon(entry.rank)}
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-white">
                          {entry.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">{entry.name}</div>
                        <div className="text-sm text-slate-600">Level {entry.level}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <div className="font-bold text-slate-900">{entry.score.toLocaleString()}</div>
                      <div className="text-sm text-slate-600">points</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-slate-900">{entry.problemsSolved}</div>
                      <div className="text-sm text-slate-600">solved</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-slate-900">
                        {Math.round((entry.problemsSolved / 50) * 100)}%
                      </div>
                      <div className="text-sm text-slate-600">accuracy</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-6">
              <button className="btn btn-secondary px-6 py-2">
                Load More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Leaderboard;

