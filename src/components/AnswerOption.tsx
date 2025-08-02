import React from 'react';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnswerOptionProps {
  option: ReactNode;
  letter: string;
  isSelected: boolean;
  isCorrect: boolean;
  isAnswered: boolean;
  onClick: () => void;
}

function AnswerOption({
  option,
  letter,
  isSelected,
  isCorrect,
  isAnswered,
  onClick,
}: AnswerOptionProps) {
  // Determine background color based on state
  const getBackgroundColor = () => {
    if (!isAnswered) {
      return 'border-[2px] border-[#343232] hover:bg-[#655B5B]';
    }
    
    if (isCorrect) {
      return 'bg-[#5FAD92] border-[2px] border-green-800';
    }
    
    if (isSelected && !isCorrect) {
      return 'bg-[#D16056] border-[2px] border-[#A23D35]';
    }
    
    return 'border-[2px] border-[#343232]';
  };

  // Determine if option is disabled
  const isDisabled = isAnswered;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={!isDisabled ? { scale: 1.02 } : {}}
      whileTap={!isDisabled ? { scale: 0.98 } : {}}
      className={`w-full p-4 rounded-lg cursor-pointer transition-all duration-200 ${getBackgroundColor()} ${
        isDisabled ? 'cursor-not-allowed' : ''
      }`}
      onClick={!isDisabled ? onClick : undefined}
    >
      <div className="flex items-start space-x-3">
        <span className="text-white font-quicksand font-medium text-sm md:text-base min-w-[20px]">
          {letter}.
        </span>
        <div className="text-white font-quicksand text-sm md:text-base flex-1">
          {option}
        </div>
      </div>
    </motion.div>
  );
};

export default AnswerOption; 