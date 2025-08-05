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
  isRetake?: boolean;
}

function ScorePage({ score, totalQuestions, onRestart, isRetake = false }: ScorePageProps) {
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
            className="text-center mb-2"
          >
            <div className="text-accent text-4xl md:text-5xl lg:text-6xl font-playwright font-bold mb-4">
              {score}/{totalQuestions}
            </div>
            <div className="text-accent text-lg md:text-xl font-bold font-quicksand">
              {percentage}% correct
            </div>
       
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="border-t border-white/30 mb-2"
          />

          {/* Contest Eligibility Section - Only show if not a retake */}
          {score > 1 && !isRetake && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-center mb-6"
            >
              <div className="bg-accent rounded-lg p-4">
                <p className="text-white font-playwright text-base font-bold mb-4">
                🎁 You're eligible for swags! 🎁
                </p>
                  <p className="text-white font-quicksand text-sm">
                  With a score that high, you're eligible for some sweet SigNoz swag! Share it on X or LinkedIn and tag us. If you're in the top 5 by Aug 30th, we'll send you a
                  free t-shirt and sticker pack.{"  "}
                  <span className="text-white font-bold font-quicksand text-sm cursor-pointer underline" onClick={() => setShowContestPopup(true)}>
                Read more.
                  </span>
                  </p>
              
              </div>
            </motion.div>
          )}

          {/* Share Section - Only show if not a retake */}
          {!isRetake && (
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
                      const text = `Although there were a LOT of gotchas, I scored ${score}/${totalQuestions}. Try https://www.ohyaml.wtf/ by @SigNozHQ! 🎯`;
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
                  const text = `Although there were a LOT of gotchas, I scored ${score}/${totalQuestions}. Try https://www.ohyaml.wtf/ by SigNoz now! 🎯`;
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
                  const text = `Although there were a lot of gotchas, I scored ${score}/${totalQuestions}. Try https://www.ohyaml.wtf/ now! 🎯`;
                  const url = window.location.href;
                  navigator.clipboard.writeText(`${text}\n${url}`);
                }}
              >
                {RiLink({ size: 28, className: "text-white" })}
              </motion.button>
            </div>
          </motion.div>
          )}

                  {/* Restart Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="text-center"
        >
          <button
            onClick={onRestart}
            className="text-accent font-bold hover:text-accent/60 underline cursor-pointer font-quicksand text-[16px] transition-colors"
          >
            Take Quiz Again
          </button>
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
              <div className="text-white font-quicksand text-[14px] leading-relaxed mb-6">
              1.  Flaunt your score on X (Twitter) or LinkedIn.                 
              <br />
              <br />
              2.  Tag our official account, <span className="text-white font-bold">@SigNozHQ</span> on X and <span className="text-white font-bold">SigNoz</span> on LinkedIn. This is how we'll find you!                                                            
              <br />
              <br />
              3. Alternatively, you can directly share from the social icons below.
              <br />
              <br />
              4. Share your most WTF, face-palm story about YAML or DevOps. Think "accidentally deleted the prod database" level of chaos. 😱
              <br />
              <br />
              5.  The top <span className="text-white font-bold">5 scorers by Aug 30th win </span> and in case of a tie, we will choose the story that made us <span className="text-white font-bold">go max WTF</span>.
              </div>
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