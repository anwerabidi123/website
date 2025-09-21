export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher';
  avatar?: string;
  level: number;
  experience: number;
  badges: Badge[];
  streak: number;
  totalProblemsSolved: number;
  joinDate: Date;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  earnedAt: Date;
}

export interface Problem {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  tags: string[];
  timeLimit: number; // in minutes
  memoryLimit: number; // in MB
  points: number;
  testCases: TestCase[];
  starterCode: string;
  solution: string;
  hints: string[];
  explanation: string;
  relatedProblems: string[];
}

export interface TestCase {
  input: string;
  expectedOutput: string;
  isHidden: boolean;
}

export interface Submission {
  id: string;
  problemId: string;
  userId: string;
  code: string;
  language: string;
  status: 'accepted' | 'wrong_answer' | 'time_limit_exceeded' | 'runtime_error' | 'compilation_error';
  executionTime: number;
  memoryUsed: number;
  submittedAt: Date;
  testCasesPassed: number;
  totalTestCases: number;
}

export interface AlgorithmVisualization {
  id: string;
  name: string;
  description: string;
  category: string;
  steps: VisualizationStep[];
  code: string;
  complexity: {
    time: string;
    space: string;
  };
}

export interface VisualizationStep {
  step: number;
  description: string;
  data: any[];
  highlightedIndices: number[];
  variables: Record<string, any>;
}

export interface Progress {
  userId: string;
  problemsSolved: string[];
  algorithmsLearned: string[];
  totalTimeSpent: number; // in minutes
  currentStreak: number;
  longestStreak: number;
  weeklyGoal: number;
  weeklyProgress: number;
  achievements: Achievement[];
  totalScore: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  points: number;
  unlockedAt: Date;
}

export interface LeaderboardEntry {
  userId: string;
  name: string;
  avatar?: string;
  score: number;
  problemsSolved: number;
  rank: number;
  level: number;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: number; // in minutes
  prerequisites: string[];
  objectives: string[];
  resources: Resource[];
}

export interface Resource {
  id: string;
  title: string;
  type: 'video' | 'article' | 'interactive' | 'quiz';
  url: string;
  duration?: number;
}

export interface Quiz {
  id: string;
  title: string;
  questions: QuizQuestion[];
  timeLimit: number;
  passingScore: number;
  attempts: number;
  maxAttempts: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'multiple_choice' | 'true_false' | 'code_completion';
  options?: string[];
  correctAnswer: string | number;
  explanation: string;
  points: number;
}






