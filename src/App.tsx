import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import { QuizState } from './types';

function App() {
  const [quizState, setQuizState] = useState<QuizState>({
    isStarted: false,
    currentQuestion: 0,
    score: 0,
    totalQuestions: 0,
  });

  const handleStartQuiz = () => {
    setQuizState(prev => ({
      ...prev,
      isStarted: true,
    }));
  };

  return (
    <div className="App">
      {!quizState.isStarted ? (
        <LandingPage onStartQuiz={handleStartQuiz} />
      ) : (
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-2xl font-playwright mb-4">Quiz Coming Soon!</h1>
            <p className="font-quicksand">The quiz functionality will be implemented next.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
