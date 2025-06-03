"use client";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Herosection from "./Herosection.jsx";


export default function Hero() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["-20%", "1%"]);
    const sectionRef = useRef(null);
const [scrollEnabled, setScrollEnabled] = useState(false);

const scrollToSection = () => {
  sectionRef.current?.scrollIntoView({ behavior: "smooth" });
};


  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative text-white">
  <div
    className="relative w-full min-h-screen bg-cover bg-no-repeat text-white flex hero-bg"
    style={{
      backgroundImage: `url('/bg2.png')`,
      backgroundPosition: 'right -450px top 0',
    }}
  >
    <style jsx>{`
      @media (min-width: 1000px) {
        .hero-bg {
          background-position: right top !important;
        }
      }
    `}</style>
        <div className="absolute inset-0 bg-black/25 z-0" />
        <div className="relative z-10 w-full px-4 md:px-[10vw] py-[10vh] flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="text-left w-full md:w-2/3 flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-[4vh] sm:text-[4vh] md:text-[8vh] md:mt-[0vh] mt-[10vh] font-bold font-castleton uppercase">
              <span className="block text-fill-blue  ">
                Hack Your Stress.
              </span>
              <span className="block">
                With Your Own Hands.
              </span>
          </h1>

            <p className="text-[2vh] md:text-[2.4vh] text-gray-200  leading-relaxed font-mono  max-w-[80ch]">
              Subtle hand gestures and conscious breathing awaken the body’s healing power.
              <br />
              Release tension, calm the mind, and restore inner balance.
              <br />
              Simple practices. Profound impact. No pills.
              <br/>  No wearables. Just breath and gesture.
            </p>

            <Link
        href="#"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection();
        }}
        className="inline-block mt-4 md:mt-[3vh] px-6 py-3 text-[1.5vh] md:text-[1.5vh] border-2  font-castleton uppercase  hover:border-white rounded-full bg-white hover:text-white text-black hover:bg-black border-[#D66937] transition font-bold   w-fit"
      >
        Let’s See How →
      </Link>
          </motion.div>
        </div>
      </div>
        <Herosection />

      <section ref={sectionRef} className="bg-[#010101] text-white min-h-screen flex flex-col justify-center py-[2.5vh] px-4 md:px-10">
        <motion.h2
          className="text-[5vh] md:text-[7vh] font-bold text-center font-castleton tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          How we do it
        </motion.h2>

        <motion.p
          className="text-white font-extrabold text-center  font-mono mt-4 mx-auto text-[2.2vh] max-w-[90vw] md:max-w-[100vh]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          From collecting raw biosignals to visualizing meaningful insights. Our process bridges wellness and AI with precision.
        </motion.p>

        <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-[6vh] leading-relaxed max-w-[90vw] md:max-w-[140vh] mx-auto">
          {["1. Data Collection", "2. Data Extraction", "3. Database Storage", "4. Data Preprocessing", "5. Model Training & Evaluation", "6. Insight Presentation"].map(
            (title, index) => (
             <motion.div
              key={index}
              className="bg-[#13151D] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true }}
            >

                <div className="group group-hover:scale-105 transition-transform duration-300 ">
                  <h3 className="text-[2.2vh] md:text-[2.5vh] font-fceb text-[#3BC8C9]">{title}</h3>
                  <span className="block w-0 h-[3px] bg-[#D66937] origin-left transition-all duration-500 group-hover:w-[18vw] mt-[1vh] mb-4"></span>
                  <p className="text-white  text-[2vh] mt-[2vh] md:mt-[4vh]  font-mono max-w-[80vw] md:max-w-[30vh] mb-[3vh]">
                    {[
                      "We begin with capturing bio-data using Biowell and EEG devices. This provides a real-time view of the subject’s energy and stress parameters.",
                      "We extract raw metrics from the Biowell report, converting it into structured JSON datasets. This serves as the foundation for advanced analytics.",
                      "The extracted data is parsed and stored securely in a scalable database, enabling smooth retrieval and preprocessing for model training.",
                      "Using Python and Keras, we normalize, filter, and prepare the data — ensuring it's clean, relevant, and ready for machine learning workflows.",
                      "We split the dataset: 50% training, 20% validation, and 30% testing. The model is iteratively trained and evaluated for performance and accuracy.",
                      "The final insights are presented through intuitive visuals and interactive dashboards — empowering wellness practitioners to take informed action."
                    ][index]}
                  </p>
                </div>
              </motion.div>
            )
          )}
        </div>
      </section>
    </section>
  );
}
