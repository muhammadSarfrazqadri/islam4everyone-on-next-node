'use client';

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { PanelLeftOpen, PanelLeftClose, Music, PlayCircle, Search } from "lucide-react";
// import { naats } from "@/src/app/(public)/naats/data";

// const naats = [
//   {
//     id: 1,
//     slug: "ya-nabi-salam-alaika",
//     title: "یا نبی سلام علیک",
//     poet: "حضرت امام بوصیری",
//     content: `
// یا نبی سلام علیک
// یا رسول سلام علیک
// یا حبیب سلام علیک
// صلوات اللہ علیک
//     `,
//   },

//   {
//     id: 2,
//     slug: "tala-al-badru-alayna",
//     title: "طلع البدر علینا",
//     poet: "مدینہ کے صحابہ کرام",
//     content: `
// طلع البدر علینا
// من ثنیات الوداع
// وجـب الشكر علينـا
// ما دعـا لله داع
//     `,
//   },
// ];

// Sample Naats
const naats = [
  { id: 1, title: "Mustafa Jaane Rehmat", reciter: "Owais Raza", src: "/naats/1.mp3" },
  { id: 2, title: "Faslon Ko Takalluf", reciter: "Hafiz Ahmed", src: "/naats/2.mp3" },
  { id: 3, title: "Illahi Teri Chokhat", reciter: "Khursheed Ahmed", src: "/naats/3.mp3" },
  { id: 4, title: "To Kuja Man Kuja", reciter: "Owais Raza", src: "/naats/1.mp3" },
  { id: 5, title: "Allah Ho Allah Ho", reciter: "Hafiz Ahmed", src: "/naats/2.mp3" },
  { id: 6, title: "Madina se Bulawa Arha he", reciter: "Khursheed Ahmed", src: "/naats/3.mp3" },
];

export default function AudioNaatPage() {
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const cardRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const filtered = naats.filter((n) =>
    n.title.toLowerCase().includes(search.toLowerCase())
  );

  const scrollToNaat = (naat: { id: number }) => {
    cardRefs.current[naat.id]?.scrollIntoView({ behavior: "smooth", block: "center" });
    setSidebarOpen(false); // close sidebar on mobile after click
  };

  return (
    <div className="relative flex">
      {/* Mobile Toggle Button */}
      <motion.div
        onClick={() => setSidebarOpen(true)}
        className="fixed left-0 top-1/3 -translate-y-1/3 z-50 bg-indigo-600 text-white p-2 rounded-r-xl shadow-lg cursor-pointer md:hidden"
        whileTap={{ scale: 0.9 }}
      >
        <PanelLeftOpen className="w-6 h-6" />
      </motion.div>

      {/* Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: sidebarOpen ? 0 : "-100%" }}
        transition={{ type: "spring", damping: 18 }}
        className="fixed top-0 left-0 h-full w-72 bg-white dark:bg-gray-900 border-r dark:border-gray-700 z-50 p-5 shadow-xl overflow-y-auto md:block"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-indigo-600 dark:text-indigo-300">Naat List</h2>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden">
            <PanelLeftClose className="w-7 h-7 text-indigo-600 dark:text-indigo-300" />
          </button>
        </div>

        <div className="space-y-3">
          {filtered.map((n) => (
            <div
              key={n.id}
              onClick={() => scrollToNaat(n)}
              className="p-3 rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition flex items-center gap-3"
            >
              <Music className="text-indigo-500" />
              <div>
                <p className="font-semibold">{n.title}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{n.reciter}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Overlay for Mobile */}
      {sidebarOpen && (
        <motion.div
          onClick={() => setSidebarOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          className="fixed inset-0 bg-black z-40 md:hidden"
        />
      )}

      {/* Main Content */}
      <div className="flex-1 max-w-4xl mx-auto px-4 py-10 ml-0 md:ml-72">
        {/* Page Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-300 mb-6"
        >
          Audio Naats
        </motion.h1>

        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search Naats..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 py-2 rounded-lg border dark:bg-gray-900 dark:border-gray-700"
            />
          </div>
        </div>

        {/* Audio Cards */}
        <div className="grid gap-6">
          {filtered.map((naat) => (
            <motion.div
              key={naat.id}
              ref={(el) => {cardRefs.current[naat.id] = el}}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-5 rounded-xl border bg-white dark:bg-gray-900 dark:border-gray-700 shadow-sm"
            >
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl font-semibold">{naat.title}</h2>
                <PlayCircle className="text-indigo-500 w-10 h-10" />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{naat.reciter}</p>
              <audio controls className="w-full mt-4">
                <source src={naat.src} type="audio/mpeg" />
              </audio>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center mt-10 text-gray-500">کوئی نعت نہیں ملی۔</p>
        )}
      </div>
    </div>
  );
}
