'use client';

import { motion } from "framer-motion";

const FadeInText = ({ text, duration = 3, onAnimationEnd }) => {
  const words = text.split(" ");

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration, delay: 1 }}
      className="fixed inset-0 flex items-center justify-center bg-black"
      onAnimationComplete={onAnimationEnd}
    >
      <div className="flex space-x-4">
        {words.map((word, wordIndex) => (
          <motion.span
            key={wordIndex}
            initial={{ y: 50, opacity: 0, filter: "blur(8px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ filter: "blur(8px)", opacity: 0 }}
            transition={{
              duration: 0.8,
              delay: wordIndex * 0.3,
              ease: "easeOut",
            }}
            className="text-white text-4xl md:text-6xl font-bold"
          >
            {word}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default FadeInText;
