"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LogoCubes from "@/components/LogoCube";
import Lenis from "lenis";

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const secondContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress:secondContainerScrollProgress } = useScroll({
    target: secondContainerRef,
    offset: ["start end", "end start"],
  });

  //lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis();

    // continuously updating the scroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  // Content blur and opacity
  const firstContentBlur = useTransform(scrollYProgress, [0.1, 0.3], [0, 10]);
  const firstContentOpacity = useTransform(scrollYProgress, [0.1, 0.3], [1, 0]);

  const secondContentBlur = useTransform(scrollYProgress, [0.6, 0.8], [10, 0]);
  const secondContentOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  return (
    <div>
      <div className="relative">
        <div ref={containerRef} className="relative bg-gradient-to-b from-black via-amber-800 to-slate-900 text-white " style={{ height: "500vh" }}>
          {/* Logo Cubes */}
          <LogoCubes scrollProgress={scrollYProgress} secondContainerScrollProgress={secondContainerScrollProgress} />

          {/* Initial Logo State */}
          <motion.div
            className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5"
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.001], [1, 0]),
            }}
          >
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-3 gap-2 mb-8">
                <div className="w-8 h-8 bg-amber-200 rounded-sm"></div>
                <div className="w-8 h-8 bg-amber-200 rounded-sm"></div>
                <div className="w-8 h-8 bg-amber-200 rounded-sm"></div>
              </div>
            </div>
          </motion.div>

          {/* First Content */}
          <motion.div
            className="fixed top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-4xl px-8 z-5  "
            style={{
              filter: `blur(${firstContentBlur}px)`,
              opacity: firstContentOpacity,
            }}
          >
            <h1 className="text-4xl md:text-[70px] line-clamp-4 mb-8 w-full orbitron-header">Where Innovation meets Precision.</h1>
            <p className="text-lg md:text-[12px]  opacity-90 ">
              Symphonia unites visionary thinkers, creative architects, and analytical experts, collaborating seamlessly to transform challenges into opportunities. Together, we deliver tailored solutions that drive impact and inspire growth.
            </p>
          </motion.div>

          {/* Second Content */}
          <motion.div
            className="fixed top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-4xl px-8 z-5"
            style={{
              filter: `blur(${secondContentBlur}px)`,
              opacity: secondContentOpacity,
            }}
          >
            <h1 className="text-4xl md:text-6xl font-light leading-tight">The first media company crafted for the digital first generation.</h1>
          </motion.div>

          {/* Scroll indicator */}
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <motion.div
              className="text-white/60 text-sm"
              style={{
                opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]),
              }}
            >
              Scroll to explore
            </motion.div>
          </div>
        </div>
      </div>
      <div ref={secondContainerRef} className="relative h-[2000px] bg-gradient-to-tr from-slate-950 via-slate-600 to-slate-900 to">
        
      </div>
    </div>
  );
}
