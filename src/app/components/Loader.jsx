"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const words = ["Will", "you", "be", "remembered?"];

const Loader = ({ setLoading }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => {
        if (prev === words.length - 1) {
          clearInterval(wordInterval);
          setShowParticles(true);
          setTimeout(() => setLoading(false), 2000); // Let particles dissipate
        }
        return prev + 1;
      });
    }, 500); // Change words every 500ms

    return () => clearInterval(wordInterval);
  }, [setLoading]);

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <AnimatePresence>
        {!showParticles && (
          <motion.p
            key={words[currentWordIndex]}
            className="text-white text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {words[currentWordIndex]}
          </motion.p>
        )}
      </AnimatePresence>

      {showParticles && (
        <Particles
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            particles: {
              number: { value: 50 },
              move: { speed: 2, direction: "top", outModes: "out" },
              opacity: { value: { min: 0, max: 1 }, animation: { enable: true, speed: 1 } },
              size: { value: { min: 1, max: 3 }, animation: { enable: true, speed: 2 } },
            },
          }}
          className="absolute inset-0"
        />
      )}
    </div>
  );
};

export default Loader;
