"use client";

import { motion } from "framer-motion";

interface AnimatedHeadingProps {
  title: string;
  className?: string;
}

export default function AnimatedHeading({ title, className = "" }: AnimatedHeadingProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`text-4xl font-bold mb-4 text-center text-indigo-600 dark:text-indigo-300 ${className}`}
    >
      {title}
    </motion.h1>
  );
}
