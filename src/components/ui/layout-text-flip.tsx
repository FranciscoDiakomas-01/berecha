"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const LayoutTextFlip = ({
  text = "Build Amazing",
  words = ["Landing Pages", "Component Blocks", "Page Sections", "3D Shaders"],
  duration = 3000,
}: {
  text: string;
  words: string[];
  duration?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [duration, words.length]);

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4">
      {/* Texto principal */}
      <motion.h1
        layoutId="subtext"
        className="font-bold tracking-tight text-4xl md:text-6xl lg:text-8xl drop-shadow-lg dark:text-white"
      >
        <span className="text-primary">{text.split(" ")[0]}</span>
        {text.replace(text.split(" ")[0], "")}
      </motion.h1>

      {/* Texto animado */}
      <motion.div
        layout
        className="relative w-fit overflow-hidden rounded-md bg-white px-4 py-2 font-sans text-black shadow-sm ring-1 ring-black/10 dark:bg-neutral-900 dark:text-white dark:ring-white/10 "
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -40, filter: "blur(10px)", opacity: 0 }}
            animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
            exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block whitespace-nowrap font-bold text-3xl md:text-4xl lg:text-8xl"
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
