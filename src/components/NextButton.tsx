import React from 'react';
import { motion } from 'framer-motion';

interface NextButtonProps {
  onClick: () => void;
  isVisible: boolean;
  isLastQuestion?: boolean;
}

function NextButton({ onClick, isVisible, isLastQuestion = false }: NextButtonProps) {
  if (!isVisible) {
    return null;
  }

  const buttonText = isLastQuestion ? 'Finish Quiz' : 'Next Question';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="w-full mt-6 flex justify-center"
    >
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="px-8 py-3 bg-accent text-white font-quicksand font-medium rounded-lg hover:bg-accent/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 underline"
      >
        {buttonText}
      </motion.button>
    </motion.div>
  );
}

export default NextButton; 