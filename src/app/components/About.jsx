import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <main className="text-white bg-black">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <Image
          src="/aboutbg1.png"
          alt="About Background"
          layout="fill"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-100 flex items-center justify-end px-8 md:px-20">
          <div className="max-w-[600px] text-right">
            <h1 className="text-[4vh] md:text-[6vh] font-bold leading-tight">
              Ancient wisdom meets <br /> modern science
            </h1>
          </div>
        </div>
      </section>

      {/* 3-Circle Section */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center px-4 py-16">
        <div className="flex flex-col md:flex-row justify-center gap-12">
          {[
            { title: "Breathe", info: "Initiate with controlled breath to anchor the mind." },
            { title: "Relax", info: "Move into a parasympathetic state using guided mudras." },
            { title: "Balance", info: "Realign your chakras and reduce stress through precision." }
          ].map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-yellow-100 bg-opacity-10 border border-yellow-300 flex items-center justify-center text-[2.5vh] md:text-[3vh] font-semibold">
                {step.title}
              </div>
              <p className="mt-4 text-[1.8vh] text-gray-400 max-w-xs">
                {step.info}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About the Team Section */}
      <section className="py-16 px-4 md:px-20 flex flex-col md:flex-row items-center gap-12 bg-[#0a0a0a]">
        <div className="w-full md:w-1/2">
          <Image
            src="/team.jpg"
            alt="Team Image"
            width={600}
            height={400}
            className="rounded-xl shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2">
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
        </div>
      </section>
    </main>
  );
}
