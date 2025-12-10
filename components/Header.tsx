"use client";

import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

export default function Header() {
  const [language, setLanguage] = useState("EN");

  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            Islam4Everyone
          </h1>
        </div>

        {/* Center: Language, Email, Mobile */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 dark:text-gray-300 text-sm">
          {/* Language Selector */}
          <div className="flex items-center gap-1 cursor-pointer">
            <span>Language:</span>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded px-2 py-1 text-sm outline-none"
            >
              <option value="EN">EN</option>
              <option value="UR">UR</option>
            </select>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-2">
            <span>Email:</span>
            <a href="mailto:info@islam4everyone.com" className="underline">
              info@islam4everyone.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span>Call:</span>
            <a href="tel:+923001234567" className="underline">
              +92 300 1234567
            </a>
          </div>
        </div>

        {/* Right: Theme Toggle */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
