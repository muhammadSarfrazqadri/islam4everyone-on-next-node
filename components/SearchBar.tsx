"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
  return (
    <div className="relative max-w-xl mx-auto">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          w-full bg-white dark:bg-gray-900 border dark:border-gray-700
          rounded-xl py-3 px-4 pl-12 shadow 
          focus:ring-2 focus:ring-indigo-500 outline-none
        "
      />
      <Search
        className="absolute left-4 top-3.5 text-gray-500 dark:text-gray-400"
        size={20}
      />
    </div>
  );
}

//  I Have to give props: value, onChange, placeholder