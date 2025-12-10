"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PanelLeftOpen, PanelLeftClose, BookOpen, Search, Calendar, User } from "lucide-react";
import Link from "next/link";

// Sample Blogs
const blogs = [
  {
    id: 1,
    title: "The Importance of Prayer in Islam",
    author: "Dr. Ahmed",
    date: "Oct 12, 2023",
    excerpt: "Salah is the second pillar of Islam and a daily obligation for all Muslims. It serves as a direct connection between the believer and Allah...",
    slug: "importance-of-prayer"
  },
  {
    id: 2,
    title: "Understanding Ramadan",
    author: "Sarah Khan",
    date: "Mar 10, 2024",
    excerpt: "Ramadan is not just about fasting; it is a month of spiritual reflection, self-improvement, and heightened devotion and worship...",
    slug: "understanding-ramadan"
  },
  {
    id: 3,
    title: "The Life of Prophet Muhammad (PBUH)",
    author: "Mufti Menk",
    date: "Jan 15, 2024",
    excerpt: "A brief overview of the life and character of the final messenger of Allah, whose life serves as the perfect example for all of humanity...",
    slug: "life-of-prophet"
  },
  {
    id: 4,
    title: "Rights of Parents in Islam",
    author: "Ustadh Nouman",
    date: "Dec 05, 2023",
    excerpt: "Islam places a high emphasis on treating parents with kindness and respect. The Quran mentions kindness to parents immediately after worshipping Allah...",
    slug: "rights-of-parents"
  },
  {
    id: 5,
    title: "Charity (Zakat) and its Benefits",
    author: "Imam Zaid",
    date: "Nov 20, 2023",
    excerpt: "Zakat purifies wealth and helps those in need, creating a balanced society where the wealthy support the poor and needy...",
    slug: "charity-zakat"
  },
];

export default function BlogsPage() {
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const cardRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const filtered = blogs.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  const scrollToBlog = (blog: typeof blogs[0]) => {
    cardRefs.current[blog.id]?.scrollIntoView({ behavior: "smooth", block: "center" });
    setSidebarOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-black">
      {/* Sidebar - Desktop: Fixed, Mobile: Slide-over */}
      <aside className="hidden md:block w-72 h-screen sticky top-0 overflow-y-auto bg-white dark:bg-gray-900 border-r dark:border-gray-800 p-5 shadow-sm z-30">
        <h2 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">Recent Blogs</h2>
        <div className="space-y-3">
          {filtered.map((b) => (
            <div
              key={b.id}
              onClick={() => scrollToBlog(b)}
              className="p-3 rounded-lg cursor-pointer bg-gray-50 hover:bg-indigo-50 dark:bg-gray-800 dark:hover:bg-gray-700 transition flex items-center gap-3 border border-transparent hover:border-indigo-200 dark:hover:border-gray-600"
            >
              <BookOpen className="text-indigo-500 w-5 h-5 shrink-0" />
              <div className="overflow-hidden">
                <p className="font-semibold text-sm truncate">{b.title}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{b.date}</p>
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
                <h2 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Recent Blogs</h2>
                <button onClick={() => setSidebarOpen(false)}>
                  <PanelLeftClose className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </button>
              </div>
              <div className="space-y-3">
                {filtered.map((b) => (
                  <div
                    key={b.id}
                    onClick={() => scrollToBlog(b)}
                    className="p-3 rounded-lg cursor-pointer bg-gray-100 dark:bg-gray-800 flex items-center gap-3"
                  >
                    <BookOpen className="text-indigo-500 w-5 h-5" />
                    <div>
                      <p className="font-semibold text-sm">{b.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{b.date}</p>
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
              Islamic Blogs
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Read insightful articles and reflections</p>
          </motion.div>

          {/* Search */}
          <div className="flex justify-center mb-10">
            <div className="relative w-full max-w-lg">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search Blogs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all shadow-sm"
              />
            </div>
          </div>

          {/* Blog Cards */}
          <div className="space-y-8">
            {filtered.map((blog, index) => (
              <motion.div
                key={blog.id}
                ref={(el) => { cardRefs.current[blog.id] = el; }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full hidden sm:block">
                    <BookOpen className="text-indigo-600 dark:text-indigo-400 w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{blog.title}</h2>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{blog.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{blog.date}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {blog.excerpt}
                    </p>

                    <Link 
                      href={`/blogs/${blog.slug}`}
                      className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                    >
                      Read Full Article &rarr;
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 dark:text-gray-400 text-lg">No blogs found matching your search.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
