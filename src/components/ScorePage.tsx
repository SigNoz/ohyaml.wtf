import { motion } from 'framer-motion';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { RiLink } from 'react-icons/ri';
import Button from './Button';
import Footer from './Footer';
import { useState } from 'react';
import TrackingLink from './TrackingLink';
import TrackingButton from './TrackingButton';

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

          {/* Fun Reads on YAML Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mb-2"
          >
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-accent font-playwright text-base font-bold mb-3">
                📚 Fun reads on yaml for you! 📚
              </p>
              <div className="space-y-2">
                <TrackingLink 
                  href="https://ruudvanasseldonk.com/2023/01/11/the-yaml-document-from-hell" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-white font-bold font-quicksand text-sm hover:text-accent transition-colors underline"
                  clickType="link"
                  clickName="yaml_document_from_hell"
                  clickLocation="score_page"
                  clickText="YAML document from hell"
                  pathname="/score"
                >
                   YAML document from hell
                </TrackingLink>
                <TrackingLink 
                  href="https://noyaml.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-white font-bold font-quicksand text-sm hover:text-accent transition-colors underline"
                  clickType="link"
                  clickName="noyaml_com"
                  clickLocation="score_page"
                  clickText="noyaml.com"
                  pathname="/score"
                >
                   noyaml.com
                </TrackingLink>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="border-t border-white/30 mb-2"
          />

          {/* Contest Eligibility Section - Only show if not a retake */}
          {score > 0 && !isRetake && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-center mb-6"
            >
              <div className="bg-accent rounded-lg p-4">
                <p className="text-white font-playwright text-base font-bold mb-4">
                🎁 You're eligible for swags! 🎁
                </p>
                  <p className="text-white font-quicksand text-sm">
                  With a score that high, you're eligible for some sweet SigNoz swag! Share it on X or LinkedIn and tag us. If you're in the top 5 by Aug 30th, we'll send you a
                  free t-shirt and sticker pack.{"  "}
                  </p>
              
              </div>
            </motion.div>
          )}

          {/* Share Section - Only show if not a retake */}
          {!isRetake && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-center mb-8"
            >
            <p className="text-accent font-quicksand text-base mb-4 font-bold">
              Share with your pals!
            </p>
            <div className="flex justify-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <TrackingButton
                  className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  clickType="button"
                  clickName="share_twitter"
                  clickLocation="score_page"
                  clickText="Share on Twitter"
                  pathname="/score"
                  onClick={() => {
                    const text = `Although there were a LOT of gotchas, I scored ${score}/${totalQuestions}. Try https://www.ohyaml.wtf/ by @SigNozHQ! 🎯`;
                    const url = window.location.href;
                    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
                    window.open(twitterUrl, '_blank');
                  }}
                >
                  {FaXTwitter({ size: 28, className: "text-white" })}
                </TrackingButton>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <TrackingButton
                  className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  clickType="button"
                  clickName="share_linkedin"
                  clickLocation="score_page"
                  clickText="Share on LinkedIn"
                  pathname="/score"
                  onClick={() => {
                    const text = `Although there were a LOT of gotchas, I scored ${score}/${totalQuestions}. Try https://www.ohyaml.wtf/ by SigNoz now! 🎯`;
                    const url = window.location.href;
                    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`;
                    window.open(linkedinUrl, '_blank');
                  }}
                >
                  {FaLinkedin({ size: 28, className: "text-white" })}
                </TrackingButton>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <TrackingButton
                  className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  clickType="button"
                  clickName="share_copy_link"
                  clickLocation="score_page"
                  clickText="Copy Link"
                  pathname="/score"
                  onClick={() => {
                    const text = `Although there were a lot of gotchas, I scored ${score}/${totalQuestions}. Try https://www.ohyaml.wtf/ now! 🎯`;
                    const url = window.location.href;
                    navigator.clipboard.writeText(`${text}\n${url}`);
                  }}
                >
                  {RiLink({ size: 28, className: "text-white" })}
                </TrackingButton>
              </motion.div>
            </div>
          </motion.div>
          )}

                  {/* Restart Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="text-center"
        >
          <TrackingButton
            onClick={onRestart}
            className="text-accent font-bold hover:text-accent/60 underline cursor-pointer font-quicksand text-[16px] transition-colors"
            clickType="button"
            clickName="restart_quiz"
            clickLocation="score_page"
            clickText="Take Quiz Again"
            pathname="/score"
          >
            Take Quiz Again
          </TrackingButton>
        </motion.div>
        </motion.div>
      </div>

      {/* Footer - At the bottom */}
      <Footer delay={1.2} />

    </div>
  );
}

export default ScorePage; 