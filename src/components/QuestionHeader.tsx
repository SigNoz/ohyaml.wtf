import React from 'react';
import { motion } from 'framer-motion';

interface QuestionHeaderProps {
  questionNumber: number;
  totalQuestions: number;
}

const QuestionHeader: React.FC<QuestionHeaderProps> = ({
  questionNumber,
  totalQuestions,
}) => {
  return (
    <div className="w-full">
      {/* Question Counter */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-white text-[10px] font-quicksand font-medium">
          Question {questionNumber} of {totalQuestions}
        </span>
      </motion.div>

    </div>
  );
};

export default QuestionHeader; 