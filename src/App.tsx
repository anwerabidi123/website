import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useStore } from './store/useStore';
import { problems } from './data/problems';
import { LanguageProvider } from './contexts/LanguageContext';
import AuthGuard from './components/AuthGuard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Problems from './pages/Problems';
import ProblemDetail from './pages/ProblemDetail';
import Practice from './pages/Practice';
import Visualize from './pages/Visualize';
import Leaderboard from './pages/Leaderboard';
import Profile from './pages/Profile';
import TeacherDashboard from './pages/TeacherDashboard';

function App() {
  const { setProblems, setLoading, setUser, setProgress } = useStore();

  useEffect(() => {
    // Initialize app data
    setLoading(true);
    
    // Simulate loading data
    setTimeout(() => {
      setProblems(problems);
      
      // Initialize demo user
      const demoUser = {
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
      };
      
      const demoProgress = {
        userId: '1',
        problemsSolved: ['op-1', 'op-2', 'func-1'],
        algorithmsLearned: ['1', '2'],
        totalTimeSpent: 180,
        currentStreak: 7,
        longestStreak: 12,
        weeklyGoal: 5,
        weeklyProgress: 3,
        achievements: [],
        totalScore: 30
      };
      
      setUser(demoUser);
      setProgress(demoProgress);
      setLoading(false);
    }, 1000);
  }, [setProblems, setLoading, setUser, setProgress]);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Toaster 
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
              fontSize: '14px',
              padding: '12px 16px',
            },
          }}
        />
        
        <Navbar />
        <Sidebar />
        
        <main className="pt-16 pb-4 sm:pb-8">
          <div className="min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/problems" element={
                <AuthGuard>
                  <Problems />
                </AuthGuard>
              } />
              <Route path="/problems/:id" element={
                <AuthGuard>
                  <ProblemDetail />
                </AuthGuard>
              } />
              <Route path="/practice" element={
                <AuthGuard>
                  <Practice />
                </AuthGuard>
              } />
              <Route path="/visualize" element={
                <AuthGuard>
                  <Visualize />
                </AuthGuard>
              } />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/profile" element={
                <AuthGuard>
                  <Profile />
                </AuthGuard>
              } />
              <Route path="/teacher" element={
                <AuthGuard>
                  <TeacherDashboard />
                </AuthGuard>
              } />
            </Routes>
          </div>
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
