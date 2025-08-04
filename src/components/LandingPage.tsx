import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import Footer from './Footer';

interface LandingPageProps {
  onStartQuiz: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStartQuiz }) => {
  return (
    <div className="min-h-screen bg-background flex flex-col px-3 sm:px-4 md:px-6 py-4 md:py-7">
      {/* Main Content - Centered */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="text-center w-full max-w-2xl mx-auto px-1 sm:px-2">
          {/* Header/Logo */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 "
          >
            <div className="text-[40px] lg:text-[70px] xl:text-[100px] font-playwright font-bold px-2 sm:px-4">
              <span className="text-accent">oh</span>
              <span className="text-white">yaml.wtf</span>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-4"
          >
            <h2 className="text-base text-[24px] lg:text-[24px] font-quicksand font-medium text-white">
              How good is your knowledge of yaml?
            </h2>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-6 sm:mb-8 md:mb-12"
          >
            <p className="text-xs sm:text-sm md:text-[16px] font-quicksand text-white/90 leading-relaxed">
              [Based on yaml 1.1 as used by <span className="font-bold">PyYAML</span> or <span className="font-bold">Go YAML (Kubernetes)</span>, unless otherwise specified]
            </p>
          </motion.div>

          {/* Start Quiz Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-8 md:mb-16"
          >
            <Button
              onClick={onStartQuiz}
              size="lg"
              className="text-base sm:text-lg md:text-[24px] px-6 sm:px-8 py-3"
            >
              Start Quiz
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Footer - Bottom of page, centered */}
      <Footer />
    </div>
  );
};

export default LandingPage; 