import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Lock, 
  UserPlus, 
  LogIn, 
  BookOpen, 
  Target, 
  Award, 
  BarChart3,
  CheckCircle
} from 'lucide-react';
import { useStore } from '../store/useStore';
import { useLanguage } from '../contexts/LanguageContext';

interface AuthGuardProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children, fallback }) => {
  const { user } = useStore();
  const { t, isRTL } = useLanguage();

  if (user) {
    return <>{children}</>;
  }

  if (fallback) {
    return <>{fallback}</>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center mobile-container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full"
      >
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-10 h-10 text-primary-600" />
          </div>
          <h1 className="mobile-heading text-slate-900 mb-4">
            {t.authGuard.loginRequired}
          </h1>
          <p className="mobile-text text-slate-600 mb-8">
            {t.authGuard.loginMessage}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Benefits */}
          <div className="space-y-6">
            <h2 className="mobile-subheading text-slate-900 mb-4">
              {t.authGuard.benefits.title}
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3" dir={isRTL ? 'rtl' : 'ltr'}>
                <div className="w-8 h-8 bg-success-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-4 h-4 text-success-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {t.authGuard.benefits.trackProgress}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {t.authGuard.benefits.trackProgress}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3" dir={isRTL ? 'rtl' : 'ltr'}>
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-4 h-4 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {t.authGuard.benefits.saveSolutions}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {t.authGuard.benefits.saveSolutions}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3" dir={isRTL ? 'rtl' : 'ltr'}>
                <div className="w-8 h-8 bg-warning-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 text-warning-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {t.authGuard.benefits.participate}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {t.authGuard.benefits.participate}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3" dir={isRTL ? 'rtl' : 'ltr'}>
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {t.authGuard.benefits.personalized}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {t.authGuard.benefits.personalized}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3" dir={isRTL ? 'rtl' : 'ltr'}>
                <div className="w-8 h-8 bg-success-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-success-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {t.authGuard.benefits.achievements}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {t.authGuard.benefits.achievements}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Auth Actions */}
          <div className="space-y-6">
            <div className="mobile-card">
              <h3 className="mobile-subheading text-slate-900 mb-4">
                {t.auth.register.title}
              </h3>
              <p className="mobile-text text-slate-600 mb-6">
                {t.auth.register.subtitle}
              </p>
              <div className="space-y-4">
                <Link
                  to="/register"
                  className="btn btn-primary w-full justify-center text-center"
                >
                  <UserPlus className="w-5 h-5 mr-2" />
                  {t.authGuard.createAccount}
                </Link>
                <Link
                  to="/login"
                  className="btn btn-secondary w-full justify-center text-center"
                >
                  <LogIn className="w-5 h-5 mr-2" />
                  {t.authGuard.signIn}
                </Link>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-slate-500">
                {t.auth.login.noAccount}{' '}
                <Link to="/register" className="text-primary-600 hover:text-primary-700 font-medium">
                  {t.auth.login.signUp}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthGuard;

