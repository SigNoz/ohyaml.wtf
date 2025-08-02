import { useState } from 'react';
import LandingPage from './components/LandingPage';
import QuestionBox from './components/QuestionBox';
import { questions } from './data/questions';
import { QuestionData } from './data/types';

interface QuizState {
  isStarted: boolean;
  currentQuestionIndex: number;
  score: number;
  totalQuestions: number;
}

function App() {
  const [quizState, setQuizState] = useState<QuizState>({
    isStarted: false,
    currentQuestionIndex: 0,
    score: 0,
    totalQuestions: questions.length,
  });

  const handleStartQuiz = () => {
    setQuizState(prev => ({
      ...prev,
      isStarted: true,
    }));
  };

  const handleAnswer = (selectedAnswer: number, isCorrect: boolean) => {
    setQuizState(prev => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
    }));
  };

  const handleNextQuestion = () => {
    const nextQuestionIndex = quizState.currentQuestionIndex + 1;
    
    // on quiz completion
    if (nextQuestionIndex >= questions.length) {
      // Quiz completed - show results
      console.log('Quiz completed!');
      console.log(`Final Score: ${quizState.score}/${questions.length}`);
      return;
    }

    setQuizState(prev => ({
      ...prev,
      currentQuestionIndex: nextQuestionIndex,
    }));
  };

  const getCurrentQuestion = (): QuestionData => {
    return questions[quizState.currentQuestionIndex];
  };

  return (
    <div className="App">
      {!quizState.isStarted ? (
        <LandingPage onStartQuiz={handleStartQuiz} />
      ) : (
        <QuestionBox
          key={quizState.currentQuestionIndex} // Force remount on question change
          questionNumber={quizState.currentQuestionIndex + 1}
          totalQuestions={quizState.totalQuestions}
          question={getCurrentQuestion().question}
          options={getCurrentQuestion().options}
          correctAnswer={getCurrentQuestion().correctAnswer}
          explanation={getCurrentQuestion().explanation}
          onAnswer={handleAnswer}
          onNext={handleNextQuestion}
        />
      )}
    </div>
  );
}

export default App;
 