"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/model", label: "Model" },
    { href: "/results", label: "Results" },
    { href: "/chakra", label: "Chakra" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white py-[1vh] px-[5vw] flex items-center justify-between z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-3 cursor-pointer">
        <span className="text-2xl font-mono leading-relaxed font-bold text-[#D66937]">
          MUDRA ANALYTICS
        </span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-[3vh] text-xl ml-auto font-mono font-bold items-center">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="relative py-[0.8vh] px-[1.5vh] transition group"
          >
            {label}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#D66937] transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
        <Link
          href="/report"
          className="px-6 py-2 text-[2.2vh] md:text-[1.5vh] border-2 font-mono hover:border-white rounded-full bg-white hover:text-white text-black hover:bg-black border-[#D66937] transition uppercase font-bold w-fit"
        >
          Upload Report →
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="relative">
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50 relative">
          {isOpen ? <X size={32} color="black" /> : <Menu size={32} />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center z-40"
            >
              {/* Mobile Logo */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/Logo.svg"
                    alt="Logo"
                    width={50}
                    height={50}
                    className="w-auto h-[6vh]"
                  />
                </Link>
                <span className="text-[2.5vh] font-mono font-bold text-[#D66937]">
                  MUDRA ANALYTICS
                </span>
              </div>

              {/* Mobile Nav Links */}
              <div className="flex flex-col items-center gap-[6vh] font-mono font-bold text-[5vh] mt-8">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="relative text-black hover:opacity-70 transition group"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                    <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-[#D66937] transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}

                <Link
                  href="/report"
                  className="mt-[3vh] px-8 py-4 border-4 border-black rounded-full text-white text-2xl font-bold bg-black hover:bg-white hover:text-black transition"
                  onClick={() => setIsOpen(false)}
                >
                  Upload Report →
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
