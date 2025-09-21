import { create } from 'zustand';
import { User, Problem, Submission, Progress, Achievement, LeaderboardEntry } from '../types';

interface AppState {
  // User state
  user: User | null;
  isAuthenticated: boolean;
  
  // Problems and submissions
  problems: Problem[];
  currentProblem: Problem | null;
  submissions: Submission[];
  
  // Progress and achievements
  progress: Progress | null;
  achievements: Achievement[];
  leaderboard: LeaderboardEntry[];
  
  // UI state
  isLoading: boolean;
  currentView: 'home' | 'problems' | 'practice' | 'visualize' | 'leaderboard' | 'profile';
  sidebarOpen: boolean;
  
  // Actions
  setUser: (user: User | null) => void;
  setAuthenticated: (authenticated: boolean) => void;
  setProblems: (problems: Problem[]) => void;
  setCurrentProblem: (problem: Problem | null) => void;
  addSubmission: (submission: Submission) => void;
  setProgress: (progress: Progress) => void;
  addAchievement: (achievement: Achievement) => void;
  setLeaderboard: (leaderboard: LeaderboardEntry[]) => void;
  setLoading: (loading: boolean) => void;
  setCurrentView: (view: 'home' | 'problems' | 'practice' | 'visualize' | 'leaderboard' | 'profile') => void;
  toggleSidebar: () => void;
  updateUserProgress: (problemId: string, timeSpent: number) => void;
  solveProblem: (problemId: string, points: number) => void;
  getNextProblem: (currentProblemId: string) => Problem | null;
  logout: () => void;
}

export const useStore = create<AppState>((set, get) => ({
  // Initial state
  user: null,
  isAuthenticated: false,
  problems: [],
  currentProblem: null,
  submissions: [],
  progress: null,
  achievements: [],
  leaderboard: [],
  isLoading: false,
  currentView: 'home',
  sidebarOpen: false,
  
  // Actions
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  setAuthenticated: (authenticated) => set({ isAuthenticated: authenticated }),
  setProblems: (problems) => set({ problems }),
  setCurrentProblem: (problem) => set({ currentProblem: problem }),
  addSubmission: (submission) => set((state) => ({
    submissions: [...state.submissions, submission]
  })),
  setProgress: (progress) => set({ progress }),
  addAchievement: (achievement) => set((state) => ({
    achievements: [...state.achievements, achievement]
  })),
  setLeaderboard: (leaderboard) => set({ leaderboard }),
  setLoading: (loading) => set({ isLoading: loading }),
  setCurrentView: (view) => set({ currentView: view }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  
  updateUserProgress: (problemId, timeSpent) => {
    const state = get();
    if (!state.progress) return;
    
    const updatedProgress = {
      ...state.progress,
      problemsSolved: [...new Set([...state.progress.problemsSolved, problemId])],
      totalTimeSpent: state.progress.totalTimeSpent + timeSpent,
      currentStreak: state.progress.currentStreak + 1,
      weeklyProgress: Math.min(state.progress.weeklyProgress + 1, state.progress.weeklyGoal)
    };
    
    set({ progress: updatedProgress });
  },

  solveProblem: (problemId, points) => {
    const state = get();
    if (!state.progress) return;
    
    const isAlreadySolved = state.progress.problemsSolved.includes(problemId);
    
    const updatedProgress = {
      ...state.progress,
      problemsSolved: isAlreadySolved ? state.progress.problemsSolved : [...state.progress.problemsSolved, problemId],
      totalScore: isAlreadySolved ? state.progress.totalScore : (state.progress.totalScore || 0) + points,
      currentStreak: isAlreadySolved ? state.progress.currentStreak : state.progress.currentStreak + 1,
      weeklyProgress: isAlreadySolved ? state.progress.weeklyProgress : Math.min(state.progress.weeklyProgress + 1, state.progress.weeklyGoal)
    };
    
    set({ progress: updatedProgress });
    return isAlreadySolved; // Return true if already solved
  },

  getNextProblem: (currentProblemId) => {
    const state = get();
    const currentIndex = state.problems.findIndex(p => p.id === currentProblemId);
    
    if (currentIndex === -1 || currentIndex >= state.problems.length - 1) {
      return null; // No next problem
    }
    
    return state.problems[currentIndex + 1];
  },
  
  logout: () => {
    set({
      user: null,
      isAuthenticated: false,
      progress: null,
      currentProblem: null,
      submissions: [],
      sidebarOpen: false
    });
  }
}));
