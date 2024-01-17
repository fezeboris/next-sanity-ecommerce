"use client";

import React from "react";
import { motion } from "framer-motion";
const HeroText = () => {
  const heroText = " Top Fashion for a top price !";
  return (
    <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
      {heroText.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </h1>
  );
};

export default HeroText;
