'use client';

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PanelLeftOpen, PanelLeftClose, Music, PlayCircle, Search } from "lucide-react";

// Sample Naats
const naats = [
  { id: 1, title: "Mustafa Jaane Rehmat", reciter: "Owais Raza Qadri", src: "/naats/1.mp3" },
  { id: 2, title: "Faslon Ko Takalluf", reciter: "Qari Waheed Zafar", src: "/naats/2.mp3" },
  { id: 3, title: "Illahi Teri Chokhat", reciter: "Junaid Jamshed", src: "/naats/3.mp3" },
  { id: 4, title: "Tu Kuja Man Kuja", reciter: "Nusrat Fateh Ali Khan", src: "/naats/1.mp3" },
  { id: 5, title: "Allah Hu Allah Hu", reciter: "Sami Yusuf", src: "/naats/2.mp3" },
  { id: 6, title: "Madina Se Bulawa", reciter: "Siddiq Ismail", src: "/naats/3.mp3" },
  { id: 7, title: "Tajdar-e-Haram", reciter: "Atif Aslam", src: "/naats/1.mp3" },
  { id: 8, title: "Hasbi Rabbi", reciter: "Sami Yusuf", src: "/naats/2.mp3" },
  { id: 9, title: "Mera Dil Badal De", reciter: "Junaid Jamshed", src: "/naats/3.mp3" },
  { id: 10, title: "Ya Nabi Salam Alayka", reciter: "Maher Zain", src: "/naats/1.mp3" },
  { id: 11, title: "Balaghal Ula Be Kamalihi", reciter: "Sabri Brothers", src: "/naats/2.mp3" },
  { id: 12, title: "Zahe Muqaddar", reciter: "Qari Waheed Zafar", src: "/naats/3.mp3" },
  { id: 13, title: "Main Tu Panjtan Ka Ghulam", reciter: "Owais Raza Qadri", src: "/naats/1.mp3" },
  { id: 14, title: "Bhar Do Jholi", reciter: "Adnan Sami", src: "/naats/2.mp3" },
  { id: 15, title: "Karam Mangta Hoon", reciter: "Alhaaj Khursheed Ahmed", src: "/naats/3.mp3" },
  { id: 16, title: "Noori Mukhra", reciter: "Shahbaz Qamar Fareedi", src: "/naats/1.mp3" },
  { id: 17, title: "Huzoor Jante Hain", reciter: "Farhan Ali Qadri", src: "/naats/2.mp3" },
  { id: 18, title: "Mere Maula", reciter: "Junaid Jamshed", src: "/naats/3.mp3" },
  { id: 19, title: "Lab Pe Aati Hai Dua", reciter: "Various Artists", src: "/naats/1.mp3" },
  { id: 20, title: "Qaseeda Burda Shareef", reciter: "Qari Waheed Zafar", src: "/naats/2.mp3" },
];

export default function AudioNaatPage() {
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const cardRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const filtered = naats.filter((n) =>
    n.title.toLowerCase().includes(search.toLowerCase())
  );

  const scrollToNaat = (naat: typeof naats[0]) => {
    cardRefs.current[naat.id]?.scrollIntoView({ behavior: "smooth", block: "center" });
    setSidebarOpen(false); // mobile close
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-black">
      {/* Sidebar - Desktop: Fixed, Mobile: Slide-over */}
      <aside className="hidden md:block w-72 h-screen sticky top-0 overflow-y-auto bg-white dark:bg-gray-900 border-r dark:border-gray-800 p-5 shadow-sm z-30">
        <h2 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">Naat List</h2>
        <div className="space-y-3">
          {filtered.map((n) => (
            <div
              key={n.id}
              onClick={() => scrollToNaat(n)}
              className="p-3 rounded-lg cursor-pointer bg-gray-50 hover:bg-indigo-50 dark:bg-gray-800 dark:hover:bg-gray-700 transition flex items-center gap-3 border border-transparent hover:border-indigo-200 dark:hover:border-gray-600"
            >
              <Music className="text-indigo-500 w-5 h-5 flex-shrink-0" />
              <div className="overflow-hidden">
                <p className="font-semibold text-sm truncate">{n.title}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{n.reciter}</p>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Mobile Sidebar Drawer */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black z-40 md:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-72 bg-white dark:bg-gray-900 z-50 p-5 overflow-y-auto shadow-2xl md:hidden border-r dark:border-gray-800"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Naat List</h2>
                <button onClick={() => setSidebarOpen(false)}>
                  <PanelLeftClose className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </button>
              </div>
              <div className="space-y-3">
                {filtered.map((n) => (
                  <div
                    key={n.id}
                    onClick={() => scrollToNaat(n)}
                    className="p-3 rounded-lg cursor-pointer bg-gray-100 dark:bg-gray-800 flex items-center gap-3"
                  >
                    <Music className="text-indigo-500 w-5 h-5" />
                    <div>
                      <p className="font-semibold text-sm">{n.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{n.reciter}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Toggle Button */}
      <div className="fixed left-4 bottom-6 z-40 md:hidden">
        <button
          onClick={() => setSidebarOpen(true)}
          className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
        >
          <PanelLeftOpen className="w-6 h-6" />
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-1 w-full px-4 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          {/* Page Heading */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Audio Naats
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Listen to beautiful recitations</p>
          </motion.div>

          {/* Search */}
          <div className="flex justify-center mb-10">
            <div className="relative w-full max-w-lg">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search Naats..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all shadow-sm"
              />
            </div>
          </div>

          {/* Audio Cards */}
          <div className="space-y-6">
            {filtered.map((naat, index) => (
              <motion.div
                key={naat.id}
                ref={(el) => { cardRefs.current[naat.id] = el; }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full">
                      <PlayCircle className="text-indigo-600 dark:text-indigo-400 w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-900 dark:text-white">{naat.title}</h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{naat.reciter}</p>
                    </div>
                  </div>
                </div>
                
                <audio controls className="w-full h-10 rounded-lg focus:outline-none">
                  <source src={naat.src} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 dark:text-gray-400 text-lg">No naats found matching your search.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
