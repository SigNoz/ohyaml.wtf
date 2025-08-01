export interface QuizState {
  isStarted: boolean;
  currentQuestion: number;
  score: number;
  totalQuestions: number;
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
} 