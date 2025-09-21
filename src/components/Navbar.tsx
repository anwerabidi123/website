import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Menu, 
  X, 
  Home, 
  Code, 
  Play, 
  BarChart3, 
  Trophy, 
  User,
} from 'lucide-react';
import { useStore } from '../store/useStore';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useStore();
  const { t, isRTL } = useLanguage();
  const location = useLocation();

  const navigation = [
    { name: t.nav.home, href: '/', icon: Home },
    { name: t.nav.problems, href: '/problems', icon: Code },
    { name: t.nav.practice, href: '/practice', icon: Play },
    { name: t.nav.visualize, href: '/visualize', icon: BarChart3 },
    { name: t.nav.leaderboard, href: '/leaderboard', icon: Trophy },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto mobile-container">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 touch-target" dir={isRTL ? 'rtl' : 'ltr'}>
            <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              <span className="hidden sm:inline">{t.home.title}</span>
              <span className="sm:hidden">AM</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4" dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Language Switcher */}
            <LanguageSwitcher />
            
            {user ? (
              <div className="flex items-center space-x-2 sm:space-x-3" dir={isRTL ? 'rtl' : 'ltr'}>
                <div className="hidden sm:flex items-center space-x-2 bg-slate-100 rounded-lg px-3 py-1" dir={isRTL ? 'rtl' : 'ltr'}>
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">
                      {user.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-slate-700">
                    {t.common.level} {user.level}
                  </span>
                </div>
                
                <Link
                  to="/profile"
                  className="p-2 rounded-lg hover:bg-slate-100 transition-colors touch-target"
                >
                  <User className="w-5 h-5 text-slate-600" />
                </Link>
              </div>
            ) : (
              <div className="hidden sm:flex items-center space-x-2" dir={isRTL ? 'rtl' : 'ltr'}>
                <Link
                  to="/login"
                  className="btn btn-secondary px-4 py-2"
                >
                  {t.nav.login}
                </Link>
                <Link
                  to="/register"
                  className="btn btn-primary px-4 py-2"
                >
                  {t.nav.signup}
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors touch-target"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-200 py-4"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <div className="space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`mobile-nav-item ${
                      isActive(item.href)
                        ? 'bg-primary-100 text-primary-700'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                    dir={isRTL ? 'rtl' : 'ltr'}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              
              {/* Mobile Auth Buttons */}
              {!user && (
                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn btn-secondary w-full justify-center"
                  >
                    {t.nav.login}
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn btn-primary w-full justify-center"
                  >
                    {t.nav.signup}
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


