"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ParallaxSection from "./parallax";

export default function ServicesHero() {
  const [activeTab, setActiveTab] = useState("startups");

  const tabContents = {
    startups:
      "Kick off your product with code that’s built to adapt with your new business while still remaining easily maintainable. Add new features that excite your customers and wow potential investors, and avoid future costs from 'quick and dirty' development.",
    scaleups:
      "High performance websites with quick release cycles? Yes please! Expand your customer base and tackle complex technical problems efficiently with our modern solutions. High quality, futureproofed code designed to fit around your users' needs.",
    saas: "Unlock your potential and create robust features designed to wow customers while making their complex tasks easy. Create seamless experiences between your application and marketing website. With reusable, maintainable solutions built to grow with your business.",
    internalsoftware:
      "Simplify your team’s overcomplicated internal application. Connect with customers and capture valuable information more easily. We’ll figure out the ideal solution to make your team their most effective, letting them focus on doing their best work.",
  };

  return (
    <section className="font-[ISOCP3] font-extrabold bg-stars.png text-white ">
      
      <div 
        className="absolute inset-0 bg-[url('/stars.png')] bg-cover bg-center"
      ></div>{/* Hero Section */}
      <div className="text-center relative top-[20vh] md:top-[28vh] justify-center h-[60vh] md:h-[52vh] bg-gradient-to-b from-[#000000] via-[#000000] via-50% to-[#70381e] px-4 md:px-0">
        <h1 className="text-[4vh] md:text-7xl font-bold max-w-3xl mx-auto capitalize">
          Beautiful frontends. <span className="text-[#D66937]">Powerful results.</span>
        </h1>
        <p className="mt-4 text-[2vh] md:text-[2.5vh] text-gray-300 max-w-[90vw] md:max-w-[80vh] mx-auto">
          We build custom experiences based on our proven best practices. No matter what you’re after, we’ll deliver the best results for your enterprise.
        </p>
        <Link
          href="https://cal.com/janamejaya-agency"
          className="inline-block mt-4 md:mt-[3vh] px-6 py-2 text-[2vh] md:text-[1.5vh] border-2 border-white rounded-full hover:bg-white hover:text-black transition font-bold"
        >
          Improve Your UX →
        </Link>
      </div>

      {/* User Experience Section */}
      <div className="mt-[15vh] md:mt-[25vh] pb-[8vh] text-center text-black bg-white w-full px-4 md:px-0">
        <h1 className="text-[5vh] md:text-[7vh] pt-[6vh] font-bold text-left leading-[6vh] md:leading-[7vh] w-fit whitespace-pre-line capitalize mx-auto">
          Create your Perfect Frontend Solution
        </h1>

        {/* Tab Toggle Container */}
        <div className="mt-[6vh] md:mt-[8vh] p-4 bg-gray-200 rounded-[1vh] flex flex-wrap gap-2 justify-center ">
          {Object.keys(tabContents).map((tab) => (
            <motion.span
              key={tab}
              className={`px-4 py-2 rounded-[1vh] cursor-pointer transition duration-300 text-black ${
                activeTab === tab ? "bg-gray-800 text-white" : "bg-gray-300"
              }`}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.span>
          ))}
        </div>

        {/* Animated Tab Content */}
        <div className="mt-4 text-[2vh] md:text-[2.5vh] text-black max-w-[90vw] md:max-w-[80vh] text-left mx-auto">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {tabContents[activeTab]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* How We Do It Section */}
      <section className="bg-[#0B0E14] text-white py-[5vh] px-4 md:px-10">
        <h2 className="text-[5vh] md:text-[7vh] font-bold text-center">How we do it</h2>
        <p className="text-white text-center mt-4 mx-auto text-[2vh] max-w-[90vw] md:max-w-[80vh]">
          We specialise in building powerful internal software solutions that transform the way your business operates.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-[6vh] max-w-[90vw] md:max-w-[140vh] mx-auto">
          {[
            { title: "Marketing sites", description: "Simple, scalable, headless marketing websites created to perfectly match your product" },
            { title: "Applications & SaaS", description: "Complex goals simplified as scalable yet maintainable code that lasts for years" },
            { title: "Internationalisation", description: "Effectively connect with your customers wherever in the world they may be" },
            { title: "Exceptional user experience", description: "Guarantee your solution remains bug free, high performance, and online for years to come" },
            { title: "Ongoing Support", description: "Keep things running smoothly post-launch with ongoing site reviews and support" },
            { title: "Auditing & Consulting", description: "Get the most out of your website by scoping out potential improvements & enhancements" }
          ].map((item, index) => (
            <div key={index} className="bg-[#13151D] p-6 rounded-lg shadow-lg hover:scale-105">
              <h3 className="text-[2vh] md:text-[2.5vh] font-bold">{item.title}</h3>
              <span className="block w-10 h-[3px] bg-[#D66937] mt-[1vh] mb-4"></span>
              <p className="text-gray-300 text-[2vh] mt-[2vh] md:mt-[4vh] max-w-[80vw] md:max-w-[30vh] mb-[3vh]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <ParallaxSection />
    </section>
  );
}
