import React from 'react';
import { motion } from 'framer-motion';
import { ReactNode, FC } from 'react';

interface QuestionContentProps {
  children: ReactNode;
}

const QuestionContent: FC<QuestionContentProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full "
    >
      <div className="text-white text-base md:text-[18px] font-quicksand leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
};

export default QuestionContent; 