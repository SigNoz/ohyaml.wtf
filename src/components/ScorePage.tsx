import { motion } from 'framer-motion';
import { FaXTwitter } from 'react-icons/fa6';
import { RiLink } from 'react-icons/ri';
import Button from './Button';

interface ScorePageProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

function ScorePage({ score, totalQuestions, onRestart }: ScorePageProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  return (
    <div className="min-h-screen bg-background flex flex-col px-4 py-8">
      {/* Main Content - Centered */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-background border-2 border-white rounded-2xl p-8 md:p-12 max-w-md w-full shadow-xl"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-6"
          >
            <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-playwright font-bold text-accent mb-4">
              Kudos!
            </div>
            <p className="text-accent font-quicksand text-base md:text-lg">
              You've completed the quiz. Here's your score.
            </p>
          </motion.div>

          {/* Score Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-8"
          >
            <div className="text-4xl md:text-5xl lg:text-7xl font-playwright font-bold text-white mb-4">
              {score}/{totalQuestions}
            </div>
            <div className="text-lg md:text-xl font-bold font-quicksand text-white/80 mb-4">
              {percentage}% correct
            </div>
            <div className="text-[14px] font-quicksand font-medium text-white/80">
            Hope all the YAML gotchas didn't get to you! 🙇‍♀️
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="border-t border-white/30 mb-6"
          />

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center mb-8"
          >
            <p className="text-accent font-quicksand text-base mb-4">
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="text-center"
      >
        <p className="text-xs font-quicksand text-white/70">
          created by{' '}
          <span className="text-white hover:underline cursor-pointer">
            Elizabeth Mathew
          </span>
          . inspired by{' '}
          <a 
            href="https://fstrings.wtf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            fstrings.wtf
          </a>
          . read{' '}
          <span className="text-white hover:underline cursor-pointer">
            origin story
          </span>{' '}
          here
        </p>
      </motion.div>
    </div>
  );
}

export default ScorePage; 