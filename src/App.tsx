import { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import QuestionBox from './components/QuestionBox';
import ScorePage from './components/ScorePage';
import PageViewTracker from './components/PageViewTracker';
import { questions } from './data/questions';
import { QuestionData } from './data/types';
import { 
  QuizStatus, 
  QuizState as StorageQuizState,
  saveQuizState, 
  loadQuizState, 
  clearQuizState,
  isQuizOngoing,
  isQuizCompleted,
  isQuizRetake
} from './utils/quizStorage';
import { useLogEvent } from './hooks/useLogEvent';

interface QuizState {
  isStarted: boolean;
  currentQuestionIndex: number;
  score: number;
  totalQuestions: number;
  isFinished: boolean;
  isRetake: boolean;
}

function App() {
  const logEvent = useLogEvent();
  const [quizState, setQuizState] = useState<QuizState>({
    isStarted: false,
    currentQuestionIndex: 0,
    score: 0,
    totalQuestions: questions.length,
    isFinished: false,
    isRetake: false,
  });

  // Load quiz state from localStorage on app initialization
  useEffect(() => {
    const storedState = loadQuizState();
    
    if (storedState) {
      if (storedState.status === QuizStatus.ONGOING) {
        // Resume ongoing quiz
        setQuizState({
          isStarted: true,
          currentQuestionIndex: storedState.currentQn - 1, // Convert to 0-based index
          score: storedState.score,
          totalQuestions: questions.length,
          isFinished: false,
          isRetake: false,
        });
      } else if (storedState.status === QuizStatus.COMPLETED) {
        // Show completed quiz results (first time)
        setQuizState({
          isStarted: false,
          currentQuestionIndex: 0,
          score: storedState.score,
          totalQuestions: questions.length,
          isFinished: true,
          isRetake: false,
        });
      } else if (storedState.status === QuizStatus.RETAKE) {
        // Show completed quiz results (retake)
        setQuizState({
          isStarted: storedState.currentQn > 0,
          currentQuestionIndex: storedState.currentQn - 1,
          score: storedState.score,
          totalQuestions: questions.length,
          isFinished: false,
          isRetake: true,
        });
      }
    }
  }, []);

    const handleStartQuiz = () => {
    // Check if this is a retake or first attempt
    const isRetake = isQuizRetake();
    
    // Log quiz start event
    logEvent({
      eventName: 'Quiz Started',
      eventType: 'track',
      attributes: {
        isRetake: isRetake,
        totalQuestions: questions.length,
      },
    });
    
    // Save initial quiz state to localStorage
    if (isRetake) {
      saveQuizState({
        status: QuizStatus.RETAKE,
        currentQn: 1,
        score: 0,
      });
    } else {  
      saveQuizState({
        status: QuizStatus.ONGOING,
        currentQn: 1,
        score: 0,
      });
    }
    
    setQuizState(prev => ({
      ...prev,
      isStarted: true,
      isRetake: isRetake,
    }));
  };

  const handleAnswer = (selectedAnswer: number, isCorrect: boolean) => {
    const newScore = isCorrect ? quizState.score + 1 : quizState.score;
    const isFirstCompletion = !isQuizRetake();
    const currentQuestion = getCurrentQuestion();
    
    // Log answer event
    logEvent({
      eventName: 'Question Answered',
      eventType: 'track',
      attributes: {
        questionNumber: quizState.currentQuestionIndex + 1,
        isCorrect: isCorrect,
        selectedAnswer: selectedAnswer,
        correctAnswer: currentQuestion.correctAnswer,
        isRetake: !isFirstCompletion,
      },
    });
    
    // Save updated state to localStorage
    saveQuizState({
      status: isFirstCompletion ? QuizStatus.ONGOING : QuizStatus.RETAKE,
      currentQn: quizState.currentQuestionIndex + 1,
      score: newScore,
    });
    
    setQuizState(prev => ({
      ...prev,
      score: newScore,
    }));
  };

  const handleNextQuestion = () => {
    const nextQuestionIndex = quizState.currentQuestionIndex + 1;
    const isFirstCompletion = !isQuizRetake();
    // on quiz completion
    if (nextQuestionIndex >= questions.length) {
      // Quiz completed - determine if this is first completion or retake
      
      // Log quiz completion event
      logEvent({
        eventName: 'Quiz Completed',
        eventType: 'track',
        attributes: {
          score: quizState.score,
          totalQuestions: questions.length,
          scorePercentage: Math.round((quizState.score / questions.length) * 100),
          isRetake: !isFirstCompletion,
        },
      });
      
      // Save completion state to localStorage
      saveQuizState({
        status: isFirstCompletion ? QuizStatus.COMPLETED : QuizStatus.RETAKE,
        currentQn: questions.length,
        score: quizState.score,
      });
      
      setQuizState(prev => ({
        ...prev,
        isFinished: true,
        isRetake: !isFirstCompletion,
      }));
      return;
    }
    console.log("isFirstCompletion", isFirstCompletion, isQuizRetake());
    // Save progress to localStorage
    saveQuizState({
      status: isFirstCompletion ? QuizStatus.ONGOING : QuizStatus.RETAKE,
      currentQn: nextQuestionIndex + 1,
      score: quizState.score,
    });

    setQuizState(prev => ({
      ...prev,
      currentQuestionIndex: nextQuestionIndex,
    }));
  };

  const handleRestart = () => {
    // Log quiz restart event
    logEvent({
      eventName: 'Quiz Restarted',
      eventType: 'track',
      attributes: {
        previousScore: quizState.score,
        totalQuestions: questions.length,
      },
    });
    
    // Update localStorage status to RETAKE when restarting
    saveQuizState({
      status: QuizStatus.RETAKE,
      currentQn: 0,
      score: 0,
    });
    
    setQuizState({
      isStarted: false,
      currentQuestionIndex: 0,
      score: 0,
      totalQuestions: questions.length,
      isFinished: false,
      isRetake: false,
    });
  };

  const getCurrentQuestion = (): QuestionData => {
    return questions[quizState.currentQuestionIndex];
  };

  const getPagePath = () => {
    if (!quizState.isStarted && !quizState.isFinished) {
      return '/';
    } else if (quizState.isFinished) {
      return '/score';
    } else {
      return `/question/${quizState.currentQuestionIndex + 1}`;
    }
  };

  return (
    <div className="App">
      <PageViewTracker pathname={getPagePath()} />
      {(!quizState.isStarted && !quizState.isFinished) ? (
        <LandingPage onStartQuiz={handleStartQuiz} />
      ) : quizState.isFinished ? (
        <ScorePage
          score={quizState.score}
          totalQuestions={quizState.totalQuestions}
          onRestart={handleRestart}
          isRetake={quizState.isRetake}
        />
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
 