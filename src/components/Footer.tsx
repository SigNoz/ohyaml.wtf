import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  delay?: number;
}

const Footer: React.FC<FooterProps> = ({ delay = 0.9 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      className="text-xs sm:text-[14px] font-quicksand text-white/80 font-medium text-center px-2"
    >
      Built with ☕ and YAML-induced tears by the folks at <a href="https://signoz.io" target="_blank" rel="noopener noreferrer" referrerPolicy="origin" className="text-white font-medium hover:underline transition-all duration-200">SigNoz</a>. inspired by <a href="https://fstrings.wtf" target="_blank" rel="noopener noreferrer" referrerPolicy="origin" className="text-white hover:underline transition-all duration-200">fstrings.wtf</a>. 
    </motion.div>
  );
};

export default Footer; 