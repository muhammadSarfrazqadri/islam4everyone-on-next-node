"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ListCardProps {
  title: string;
  subtitle: string;
  link: string;
  highlightColor?: string;
}

export default function ListCard({ title, subtitle, link, highlightColor }: ListCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 bg-white dark:bg-gray-900 border dark:border-gray-700 
                 rounded-xl shadow flex justify-between items-center"
    >
      <div>
        <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-300">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">{subtitle}</p>
      </div>

      <Link
        href={link}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-500"
      >
        Read More
      </Link>
    </motion.div>
  );
}


// i have to give these Props: title, subtitle, link , highlightColor