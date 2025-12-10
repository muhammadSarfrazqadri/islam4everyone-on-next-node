"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  eng: string;
  ur: string;
  details: string;
}

export default function NameCard({ eng, ur, details }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-xl shadow flex justify-between items-center"
    >
      <div>
        <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-300">
          {eng}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">{ur}</p>
      </div>

      <Link
        href={details}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition shadow"
      >
        Read Details
      </Link>
    </motion.div>
  );
}
