import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

interface LandingPageProps {
  onStartQuiz: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStartQuiz }) => {
  return (
    <div className="min-h-screen bg-background flex flex-col px-4 py-8">
      {/* Main Content - Centered */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="text-center max-w-2xl mx-auto">
          {/* Header/Logo */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-20"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playwright font-bold">
              <span className="text-accent">ohya</span>
              <span className="text-white">ml.wtf</span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-4"
          >
            <h2 className="text-xl md:text-2xl lg:text-[26px] font-quicksand font-medium text-white">
              How good is your knowledge of yaml?
            </h2>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <p className="text-sm md:text-base font-quicksand text-white/90">
              [Based on yaml 1.1 and yaml 1.2, will be explicitly specified when needed]
            </p>
          </motion.div>

          {/* Start Quiz Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-16"
          >
            <Button
              onClick={onStartQuiz}
              size="lg"
              className="text-lg md:text-xl px-8 py-4"
            >
              Start Quiz
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Footer - Bottom of page, centered */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="text-[14px] font-quicksand text-white/80 font-medium text-center"
      >
        created by <a href="#" className="text-white hover:underline transition-all duration-200">Elizabeth Mathew</a>. inspired by <a href="https://fstrings.wtf" target="_blank" rel="noopener noreferrer" className="text-white hover:underline transition-all duration-200">fstrings.wtf</a>. read <a href="#" className="text-white hover:underline transition-all duration-200">origin story</a> here
      </motion.div>
    </div>
  );
};

export default LandingPage; 