"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // ✅ Detect page changes
import Navbar from "./components/Navbar";

export default function ClientLayout({ children }) {
  const pathname = usePathname(); // ✅ Detect page changes

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 4000);
  }, [pathname]); // ✅ Trigger loader on page change

  return (
    <>
        
        <>
          <Navbar />
          <main>{children}</main>
        </>
     
    </>
  );
}
