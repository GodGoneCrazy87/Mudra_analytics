"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const ParallaxSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={ref}
      className="relative flex justify-center items-center h-[80vh] overflow-hidden my-[10vh] py-[10vh] px-4 md:px-8"
    >
      {/* Outer Glow Box */}
      <div className="absolute inset-0 flex justify-center items-center p-4 md:p-10">
        <div className="relative w-full max-w-[80vw] h-[60vh] md:h-[80vh] border border-[#D66937] shadow-[0_0_50px_#D66937] rounded-2xl overflow-hidden">
          {/* Parallax Background */}
          <motion.div
            style={{ y }}
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transform will-change-transform"
              style={{
                backgroundImage: "url('/PortfolioImages.jpg')",
                backgroundAttachment: "fixed",
              }}
            ></div>
          </motion.div>
        </div>
      </div>
      
      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center text-center bg-[#0D0F17] text-white p-6 md:p-10 rounded-2xl border border-[#2A3B57] shadow-[0_0_50px_#2A3B57] w-full max-w-[90vw] md:max-w-[1000px]">
        <h2 className="text-3xl md:text-5xl font-bold font-[ISOCP3] capitalize">
          Elevate your enterprise
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-300 max-w-xl">
          Take the first step towards building scalable enterprise software that works for your team, not against them. Let’s chat about future-proofing your business today.
        </p>
        <Link
          href="https://cal.com/janamejaya-agency"
          className="mt-6 px-6 py-3 bg-[#000000] hover:text-[#000000] font-[ISOCP3] border border-white hover:bg-[#ffffff] text-white font-bold text-lg rounded-full shadow-lg hover:opacity-90 transition"
        >
          Let’s Talk →
        </Link>
      </div>
    </section>
  );
};

export default ParallaxSection;
