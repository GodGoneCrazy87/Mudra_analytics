"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    title: "Guided Breathwork",
    description:
      "Experience carefully designed breathwork exercises like Bhramari with real-time visual and audio guidance. This helps you maintain proper rhythm and depth, boosting parasympathetic activation and effectively reducing stress.",
  },
  {
    title: "Animated Exercises",
    description:
      "Engage in smooth, animated yoga mudra flows tailored for neurological relaxation. These visual guides simplify complex gestures, helping to stimulate the nervous system and balance energy channels for overall well-being.",
  },
  {
    title: "Breathwork Calendar",
    description:
      "Maintain a consistent wellness routine with an integrated breathwork calendar. Schedule your sessions, receive reminders, and track your progress automatically to stay motivated and accountable.",
  },
  {
    title: "Chakra Alignment Monitoring",
    description:
      "Utilize real-time EEG and ECG biosignal data to monitor the energetic balance of your chakras. Visual feedback helps you identify blockages and imbalances, empowering you to restore and maintain optimal energy flow.",
  },
  {
    title: "Brainwave Analysis",
    description:
      "Analyze your brain’s alpha, beta, and theta wave patterns to gain insights into your mental and emotional states. Tailor your breath and meditation practices for deeper relaxation and improved cognitive function.",
  },
  {
    title: "Stress Prediction Model",
    description:
      "Leverage advanced machine learning that combines EEG, ECG, and EPI data to predict stress before symptoms arise. Early detection enables personalized recommendations for proactive stress management.",
  },
  {
    title: "Personalized Mudra Suggestions",
    description:
      "Receive individualized yoga mudra recommendations based on your current biosignals and stress patterns. This ensures your practice is optimized for emotional balance and chakra harmonization.",
  },
  {
    title: "Real-time Biosignal Feedback",
    description:
      "Visualize live physiological signals such as heart rate variability, brainwaves, and skin conductance during practice. Real-time feedback guides your breath and mudra technique, fostering greater self-awareness and faster stress recovery.",
  },
];


export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleIndex = (index) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-black text-white py-[8vh] px-4 md:px-10 min-h-[90vh]">
      <div className="flex flex-col md:flex-row items-start justify-between gap-12 h-full">
        {/* Left Text */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[4vh] md:text-[6vh] font-castleton uppercase font-bold leading-tight mb-4">
            Your practice for <br /> better today, Everyday.
          </h2>
          <p className="text-[2vh] md:text-[2.2vh] text-gray-300 font-mono">
            From ancient yogic knowledge to modern-day biosignal tracking, we merge breath, mudras, and measurable change.
          </p>
        </motion.div>

        {/* Right Feature List */}
        <div
          className="w-full md:w-1/2 grid grid-cols-1 gap-y-6 border border-white rounded-lg p-4 overflow-hidden"
          style={{ maxHeight: "100%", overflowY: "auto" }}
        >
          {features.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={index}
                className="group relative p-4 border border-gray-700 rounded-lg cursor-pointer hover:bg-[#111] transition-colors duration-300 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => toggleIndex(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-[2vh] md:text-[2.4vh] font-semibold text-[#3BC8C9]">{item.title}</h3>
                  <motion.span
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#3BC8C9] font-bold text-[2.5vh] select-none"
                  >
                    +
                  </motion.span>
                </div>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="text-[1.6vh] md:text-[1.6vh] text-gray-300 font-mono overflow-hidden"
                    >
                      {item.description}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
