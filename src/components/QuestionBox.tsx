import  { useState } from 'react';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import QuestionHeader from './QuestionHeader';
import QuestionContent from './QuestionContent';
import AnswerOption from './AnswerOption';
import Explanation from './Explanation';
import NextButton from './NextButton';

interface QuestionBoxProps {
  questionNumber: number;
  totalQuestions: number;
  question: ReactNode;
  options: ReactNode[];
  correctAnswer: number;
  explanation: ReactNode;
  onAnswer: (selectedAnswer: number, isCorrect: boolean) => void;
  onNext: () => void;
}

function QuestionBox({
  questionNumber,
  totalQuestions,
  question,
  options,
  correctAnswer,
  explanation,
  onAnswer,
  onNext,
}: QuestionBoxProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionClick = (optionIndex: number) => {
    if (isAnswered) return; // Prevent multiple selections

    setSelectedAnswer(optionIndex);
    setIsAnswered(true);
    
    const isCorrect = optionIndex === correctAnswer;
    onAnswer(optionIndex, isCorrect);
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-start pt-8 px-4 pb-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        {/* Header with ohyaml.wtf logo */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl lg:text-[36px] font-playwright font-bold">
            <span className="text-accent">oh</span>
            <span className="text-white">yaml.wtf</span>
          </h1>
        </div>

        {/* Question Card */}
        <div className="bg-accent rounded-2xl p-4 md:pb-6 px-8 pt-2 shadow-xl">
          {/* Question Header */}
          <QuestionHeader
            questionNumber={questionNumber}
            totalQuestions={totalQuestions}
          />

          {/* Question Content */}
          <QuestionContent>
            {question}
          </QuestionContent>

          {/* Explanation */}
          <Explanation
            explanation={explanation}
            isVisible={isAnswered}
          />

          {/* Answer Options */}
          <div className="space-y-3 mt-4 mb-4">
            {options.map((option, index) => (
              <AnswerOption
                key={index}
                option={option}
                letter={String.fromCharCode(65 + index)} // A, B, C, D...
                isSelected={selectedAnswer === index}
                isCorrect={index === correctAnswer}
                isAnswered={isAnswered}
                onClick={() => handleOptionClick(index)}
              />
            ))}
          </div>

          

          {/* Next Button */}
          <NextButton
            onClick={handleNext}
            isVisible={isAnswered}
            isLastQuestion={questionNumber === totalQuestions}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default QuestionBox; 