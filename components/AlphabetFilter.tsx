"use client";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

interface AlphabetFilterProps {
  selected: string;
  setSelected: (letter: string) => void;
  showClear?: boolean;
  onClearAll?: () => void;
}


export default function AlphabetFilter({
  selected,
  setSelected,
  showClear = true,
  onClearAll,
}: AlphabetFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-6 max-w-xl mx-auto">

      {/* ALL */}
      <button
        onClick={() => setSelected("")}
        className={`px-3 py-1 text-sm rounded-lg border 
          ${selected === "" ? "bg-indigo-600 text-white border-indigo-600" 
          : "border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300"}
        `}
      >
        All
      </button>

      {/* CLEAR */}
      {showClear && (
        <button
          onClick={onClearAll}
          className="px-3 py-1 text-sm border rounded-lg border-red-500 text-red-600 dark:text-red-400"
        >
          Clear
        </button>
      )}

      {/* A–Z */}
      {alphabet.map((letter) => (
        <button
          key={letter}
          onClick={() => setSelected(letter)}
          className={`px-3 py-1 text-sm rounded-lg border transition 
            ${selected === letter ? 
              "bg-indigo-600 text-white border-indigo-600" : 
              "border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300"}
          `}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}


// I Have to give Props: selectedLetter, setSelectedLetter, showClearButton, (true/false)