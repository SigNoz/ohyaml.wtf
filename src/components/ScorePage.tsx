import { motion } from 'framer-motion';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { RiLink } from 'react-icons/ri';
import Button from './Button';
import Footer from './Footer';
import { useState } from 'react';

interface ScorePageProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

function ScorePage({ score, totalQuestions, onRestart }: ScorePageProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const [showContestPopup, setShowContestPopup] = useState(false);
  
  return (
    <div className="min-h-screen bg-background flex flex-col px-4 py-8 ">
      {/* Main Content - Centered */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-background border-2 border-white rounded-2xl p-6 max-w-md w-full shadow-xl mb-4"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-playwright font-bold text-accent mb-6">
              Kudos!
            </div>
            <p className="text-white font-quicksand font-medium text-base md:text-lg pb-10">
            Hope the YAML gotchas didn't get to you! 🙇‍♀️ Here's your score.
            </p>
          </motion.div>

          {/* Score Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-8"
          >
            <div className="text-accent text-4xl md:text-5xl lg:text-6xl font-playwright font-bold mb-4">
              {score}/{totalQuestions}
            </div>
            <div className="text-accent text-lg md:text-xl font-bold font-quicksand mb-4">
              {percentage}% correct
            </div>
       
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="border-t border-white/30 mb-6"
          />

          {/* Contest Eligibility Section */}
          {score > 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-center mb-6"
            >
              <div className="bg-accent rounded-lg p-4">
                <p className="text-white font-playwright text-base font-medium mb-2">
                🎁 Congratulations! 🎁
                </p>
                                 <p className="text-white font-quicksand text-sm">
                   You are eligible for swags.
                   <button 
                     onClick={() => setShowContestPopup(true)}
                     className="text-white underline cursor-pointer font-medium bg-accent px-2 py-1 rounded hover:bg-accent/80 transition-colors"
                   >
                    Enter contest now.
                   </button>
                 </p>
              </div>
            </motion.div>
          )}

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center mb-8"
          >
            <p className="text-accent font-quicksand text-base mb-4 font-bold">
              Share with your pals!
            </p>
            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                onClick={() => {
                  const text = `I scored ${score}/${totalQuestions} on the YAML quiz! 🎯`;
                  const url = window.location.href;
                  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
                  window.open(twitterUrl, '_blank');
                }}
              >
                {FaXTwitter({ size: 28, className: "text-white" })}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                onClick={() => {
                  const text = `I scored ${score}/${totalQuestions} on the YAML quiz! 🎯`;
                  const url = window.location.href;
                  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`;
                  window.open(linkedinUrl, '_blank');
                }}
              >
                {FaLinkedin({ size: 28, className: "text-white" })}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                onClick={() => {
                  const text = `I scored ${score}/${totalQuestions} on the YAML quiz! 🎯`;
                  const url = window.location.href;
                  navigator.clipboard.writeText(`${text}\n${url}`);
                }}
              >
                {RiLink({ size: 28, className: "text-white" })}
              </motion.button>
            </div>
          </motion.div>

                  {/* Restart Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="text-center"
        >
          <Button
            onClick={onRestart}
            size="md"
            className="text-base sm:text-lg"
          >
            Take Quiz Again
          </Button>
        </motion.div>
        </motion.div>
      </div>

      {/* Footer - At the bottom */}
      <Footer delay={1.2} />

      {/* Contest Popup */}
      {showContestPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowContestPopup(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-accent border-2 border-white rounded-2xl p-6 md:p-8 max-w-md w-full shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-playwright font-bold text-background mb-4">
                🎁 Contest Details 🎁
              </h3>
              <p className="text-white font-quicksand text-sm md:text-base leading-relaxed mb-6">
                                 To get cool <a href="https://signoz.io" target="_blank" rel="noopener noreferrer" className="text-white underline transition-all duration-200 font-bold">SigNoz</a> swags*, share this with your network on LinkedIn or Twitter. We will be reaching out to the top 5 scorers, who spread the word around!
              </p>
              <p className="text-white/80 font-quicksand text-xs md:text-sm mb-6">
                *swags = a cool tshirt and an awesome sticker pack :)
              </p>
              <Button
                onClick={() => setShowContestPopup(false)}
                size="md"
                className="text-sm md:text-base bg-background text-accent font-bold hover:bg-background/80"
              >
                Got it!
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default ScorePage; 