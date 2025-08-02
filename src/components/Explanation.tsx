import React from 'react';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ExplanationProps {
  explanation: ReactNode;
  isVisible: boolean;
}

function Explanation({ explanation, isVisible }: ExplanationProps) {
  if (!isVisible) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94] // Smooth easing curve
      }}
      className="w-full pt-4 pl-1"
    >
      <div className="text-white text-sm md:text-base font-quicksand leading-relaxed">
        {explanation}
      </div>
    </motion.div>
  );
}

export default Explanation; 