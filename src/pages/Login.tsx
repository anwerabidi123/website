import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowLeft,
  LogIn,
  AlertCircle,
  GraduationCap
} from 'lucide-react';
import { useStore } from '../store/useStore';
import toast from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();
  const { setUser, setAuthenticated } = useStore();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock user data - in real app, this would come from API
      const mockUser = {
        id: '1',
        name: 'Alex Johnson',
        email: formData.email,
        role: 'student' as const,
        level: 5,
        experience: 1250,
        badges: [
          {
            id: '1',
            name: 'First Problem',
            description: 'Solved your first problem',
            icon: '🎯',
            color: 'success',
            earnedAt: new Date()
          }
        ],
        streak: 7,
        totalProblemsSolved: 12,
        joinDate: new Date('2024-01-15')
      };

      setUser(mockUser);
      setAuthenticated(true);
      
      toast.success(`Welcome back, ${mockUser.name}!`);
      navigate('/');
    } catch (error) {
      toast.error('Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleDemoLogin = (role: 'student' | 'teacher') => {
    const demoUser = role === 'student' ? {
      id: '1',
      name: 'Alex Johnson',
      email: 'alex@example.com',
      role: 'student' as const,
      level: 5,
      experience: 1250,
      badges: [
        {
          id: '1',
          name: 'First Problem',
          description: 'Solved your first problem',
          icon: '🎯',
          color: 'success',
          earnedAt: new Date()
        }
      ],
      streak: 7,
      totalProblemsSolved: 12,
      joinDate: new Date('2024-01-15')
    } : {
      id: '2',
      name: 'Dr. Sarah Chen',
      email: 'sarah@university.edu',
      role: 'teacher' as const,
      level: 10,
      experience: 5000,
      badges: [
        {
          id: '1',
          name: 'Expert Teacher',
          description: 'Helped 100+ students learn algorithms',
          icon: '👨‍🏫',
          color: 'primary',
          earnedAt: new Date()
        }
      ],
      streak: 30,
      totalProblemsSolved: 0,
      joinDate: new Date('2023-09-01')
    };

    setUser(demoUser);
    setAuthenticated(true);
    toast.success(`Welcome, ${demoUser.name}!`);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full space-y-8"
      >
        {/* Header */}
        <div className="text-center">
          <Link to="/" className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-6">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Welcome Back
          </h2>
          <p className="text-slate-600">
            Sign in to continue your algorithm learning journey
          </p>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`input pl-10 ${errors.email ? 'border-danger-500' : ''}`}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-danger-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`input pl-10 pr-10 ${errors.password ? 'border-danger-500' : ''}`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-danger-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.password}
                </p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-slate-300 text-primary-600 focus:ring-primary-500" />
                <span className="ml-2 text-sm text-slate-600">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-primary-600 hover:text-primary-700">
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn btn-primary py-3 text-lg font-semibold disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Signing In...
                </>
              ) : (
                <>
                  <LogIn className="w-5 h-5 mr-2" />
                  Sign In
                </>
              )}
            </button>

            {/* Demo Login Buttons */}
            <div className="space-y-3">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-slate-500">Or try demo accounts</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleDemoLogin('student')}
                  className="btn btn-secondary py-2 text-sm"
                >
                  Demo Student
                </button>
                <button
                  type="button"
                  onClick={() => handleDemoLogin('teacher')}
                  className="btn btn-secondary py-2 text-sm"
                >
                  Demo Teacher
                </button>
              </div>
            </div>

            {/* Register Link */}
            <div className="text-center">
              <p className="text-sm text-slate-600">
                Don't have an account?{' '}
                <Link to="/register" className="text-primary-600 hover:text-primary-700 font-medium">
                  Create one here
                </Link>
              </p>
            </div>
          </form>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-sm text-slate-600 mb-4">Continue your learning:</p>
          <div className="flex justify-center space-x-6 text-xs text-slate-500">
            <span className="flex items-center">
              <GraduationCap className="w-3 h-3 mr-1 text-primary-600" />
              Track Progress
            </span>
            <span className="flex items-center">
              <GraduationCap className="w-3 h-3 mr-1 text-primary-600" />
              Solve Problems
            </span>
            <span className="flex items-center">
              <GraduationCap className="w-3 h-3 mr-1 text-primary-600" />
              Visualize Algorithms
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;

