"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Breathe",
    info:
      "Start with conscious breathing to activate your vagus nerve. It centers the mind and lays the foundation for a calmer nervous system.",
  },
  {
    title: "Relax",
    info:
      "Guided mudras and breath patterns bring you into a parasympathetic state—reducing heart rate and quieting mental noise.",
  },
  {
    title: "Balance",
    info:
      "Through alignment of chakras and precision in breath, stress melts away and equilibrium is restored.",
  },
];

export default function About() {
  return (
    <main className="text-white bg-black font-castleton">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full flex items-center justify-center text-center px-4">
        <Image
          src="/aboutbg1.png"
          alt="About Background"
          fill={true}
          className="object-cover z-0"
        />
      </section>

      <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 py-16 bg-black text-white">
        {/* Centered Heading */}
        <motion.div
          className="relative z-10 max-w-4xl flex justify-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-[4vh] md:text-[7vh] font-bold leading-tight">
            Ancient wisdom meets <br /> modern science
          </h1>
        </motion.div>

        {/* Circle Steps with Arrows */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mt-16 w-full max-w-6xl px-2 md:px-0">
          {steps.map((step, index, arr) => (
            <React.Fragment key={index}>
              {/* Circle */}
              <motion.div
                className="flex flex-col items-center text-center relative group transition-transform duration-500 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full flex items-center justify-center animate-pulse-slow">
                  {/* Outer Glow */}
                  <div className="absolute -inset-[6px] rounded-full bg-gradient-to-r from-[#FFFDF9] to-[#F6C675] blur-md opacity-70 z-0" />
                  {/* Inner Circle */}
                  <div className="relative z-10 w-full h-full rounded-full bg-gradient-to-r from-[#FFFDF9] to-[#F6C675] flex items-center justify-center shadow-inner">
                    <span className="text-[2vh] sm:text-[2.5vh] md:text-[3vh] font-semibold text-black">
                      {step.title}
                    </span>
                  </div>
                </div>
                {/* Info Text */}
                <p className="mt-4 sm:mt-6 text-[1.6vh] sm:text-[2.2vh] text-gray-300 font-mono max-w-xs leading-relaxed">
                  {step.info}
                </p>
              </motion.div>

              {/* Arrow Between Circles */}
              {index < arr.length - 1 && (
                <motion.div
                  className="hidden md:flex items-center justify-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: [0, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: index * 0.3,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-yellow-300 mx-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* About the Team Section */}
      <section className="py-16 px-4 md:px-20 flex flex-col md:flex-row items-center gap-12 bg-[#0a0a0a]">
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/team.jpg"
            alt="Team Image"
            width={600}
            height={400}
            className="rounded-xl shadow-md"
          />
        </motion.div>
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[3.5vh] md:text-[5vh] font-bold mb-4">Meet the Team</h2>
          <p className="text-[2vh] text-gray-300 mb-4">
            Our interdisciplinary team merges ancient yogic insight with cutting-edge biosignal processing. From researchers in neuroscience to dedicated yoga practitioners and developers, we work together to redefine stress management and holistic wellness.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[1.8vh] text-gray-400">
            <li>Anjali Mehta – Yoga Lead & Mudra Specialist</li>
            <li>Dr. Raghav Nair – EEG/ECG Analysis Expert</li>
            <li>Kiran Rao – UX Research & Experience Designer</li>
            <li>Mehul Shah – Full Stack Developer & AI Model Integration</li>
          </ul>
        </motion.div>
      </section>
    </main>
  );
}
