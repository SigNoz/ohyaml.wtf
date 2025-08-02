import { ReactNode } from 'react';

export interface QuestionData {
  id: number;
  questionNumber: number;
  question: ReactNode;
  options: ReactNode[];
  correctAnswer: number;
  explanation: ReactNode;
} 