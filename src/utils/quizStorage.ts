export enum QuizStatus {
  ONGOING = "ONGOING",
  COMPLETED = "COMPLETED", 
  RETAKE = "RETAKE"
}

export interface QuizState {
  status: QuizStatus;
  currentQn: number;
  score: number;
}

const QUIZ_STORAGE_KEY = 'ohyaml_quiz_state';

// Save quiz state to localStorage
export function saveQuizState(state: QuizState): void {
  try {
    localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Failed to save quiz state to localStorage:', error);
  }
}

// Load quiz state from localStorage
export function loadQuizState(): QuizState | null {
  try {
    const stored = localStorage.getItem(QUIZ_STORAGE_KEY);
    if (!stored) return null;
    
    const parsed = JSON.parse(stored);
    return parsed as QuizState;
  } catch (error) {
    console.error('Failed to load quiz state from localStorage:', error);
    return null;
  }
}

// Clear quiz state from localStorage
export function clearQuizState(): void {
  try {
    localStorage.removeItem(QUIZ_STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear quiz state from localStorage:', error);
  }
}

// Check if quiz is ongoing
export function isQuizOngoing(): boolean {
  const state = loadQuizState();
  return state?.status === QuizStatus.ONGOING;
}

// Check if quiz is completed (first time)
export function isQuizCompleted(): boolean {
  const state = loadQuizState();
  return state?.status === QuizStatus.COMPLETED;
}

// Check if quiz is a retake
export function isQuizRetake(): boolean {
  const state = loadQuizState();
  return state?.status === QuizStatus.RETAKE;
} 