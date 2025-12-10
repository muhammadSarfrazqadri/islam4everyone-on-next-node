"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PanelLeftOpen, PanelLeftClose, Info, Star, Clock, User, Users, Heart, CheckCircle2, BookOpen, Video, Calculator } from "lucide-react";

const sections = [
  { id: "about", title: "About Us", icon: Info },
  { id: "features", title: "Key Features", icon: Star },
  { id: "upcoming", title: "Upcoming Additions", icon: Clock },
  { id: "creator", title: "About the Creator", icon: User },
  { id: "team", title: "Our Team", icon: Users },
  { id: "join", title: "Join Us", icon: Heart },
];

export default function AboutPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
    setSidebarOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-black">
      {/* Sidebar - Desktop: Fixed, Mobile: Slide-over */}
      <aside className="hidden md:block w-72 h-screen sticky top-0 overflow-y-auto bg-white dark:bg-gray-900 border-r dark:border-gray-800 p-5 shadow-sm z-30">
        <h2 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">About</h2>
        <div className="space-y-3">
          {sections.map((s) => (
            <div
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              className="p-3 rounded-lg cursor-pointer bg-gray-50 hover:bg-indigo-50 dark:bg-gray-800 dark:hover:bg-gray-700 transition flex items-center gap-3 border border-transparent hover:border-indigo-200 dark:hover:border-gray-600"
            >
              <s.icon className="text-indigo-500 w-5 h-5 shrink-0" />
              <p className="font-semibold text-sm">{s.title}</p>
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
                <h2 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">About</h2>
                <button onClick={() => setSidebarOpen(false)}>
                  <PanelLeftClose className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </button>
              </div>
              <div className="space-y-3">
                {sections.map((s) => (
                  <div
                    key={s.id}
                    onClick={() => scrollToSection(s.id)}
                    className="p-3 rounded-lg cursor-pointer bg-gray-100 dark:bg-gray-800 flex items-center gap-3"
                  >
                    <s.icon className="text-indigo-500 w-5 h-5" />
                    <p className="font-semibold text-sm">{s.title}</p>
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
        <div className="max-w-3xl mx-auto space-y-16">
          {/* Page Heading */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              About Us
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Your Trusted Source for Authentic Islamic Knowledge</p>
          </motion.div>

          {/* Section 1: About Us */}
          <motion.div 
            id="about" 
            ref={(el) => { sectionRefs.current['about'] = el; }} 
            className="scroll-mt-24 bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg">
                    <Info className="text-indigo-600 dark:text-indigo-400 w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome to Islam4everyone.com</h2>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                    At Islam4everyone.com, we offer a carefully researched collection of beautiful Islamic names for boys and girls. Each name is verified according to the Qur’an and Sunnah to ensure authenticity.
                </p>
                <p>
                    Our mission is to provide Muslims around the globe with reliable Islamic knowledge and tools that strengthen their connection to Islam.
                </p>
            </div>
          </motion.div>

          {/* Section 2: Key Features */}
          <motion.div 
            id="features" 
            ref={(el) => { sectionRefs.current['features'] = el; }} 
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Star className="text-indigo-600" /> Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                    "Thousands of Islamic names for boys and girls",
                    "Authentic meanings based on Qur’an and Hadith",
                    "English and Urdu translations for every name",
                    "User-friendly and responsive interface",
                    "Quick and accurate search options"
                ].map((feature, i) => (
                    <div key={i} className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm flex items-start gap-3">
                        <CheckCircle2 className="text-green-500 w-5 h-5 shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                ))}
            </div>
          </motion.div>

          {/* Section 3: Upcoming Additions */}
          <motion.div 
            id="upcoming" 
            ref={(el) => { sectionRefs.current['upcoming'] = el; }} 
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
             <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Clock className="text-indigo-600" /> Upcoming Additions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                    { title: "Age Calculator", icon: Calculator },
                    { title: "Islamic Books (PDF)", icon: BookOpen },
                    { title: "Audio & Video Naats", icon: Video },
                    { title: "Prophets & Sahaba", icon: User },
                    { title: "Quotes & Duas", icon: Heart },
                ].map((item, i) => (
                    <div key={i} className="bg-indigo-50 dark:bg-gray-800/50 p-4 rounded-xl border border-indigo-100 dark:border-gray-700 flex flex-col items-center text-center gap-2">
                        <item.icon className="text-indigo-500 w-6 h-6" />
                        <span className="font-medium text-gray-800 dark:text-gray-200">{item.title}</span>
                    </div>
                ))}
            </div>
          </motion.div>

          {/* Section 4: Creator */}
          <motion.div 
            id="creator" 
            ref={(el) => { sectionRefs.current['creator'] = el; }} 
            className="scroll-mt-24 bg-linear-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 text-white shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
                <User className="w-8 h-8 text-indigo-200" />
                <h2 className="text-2xl font-bold">About the Creator</h2>
            </div>
            <p className="text-indigo-100 mb-6 leading-relaxed">
                This website is created and managed by an experienced Online Quran Tutor who teaches with Tajweed in both English and Urdu. The creator combines Islamic education with professional web development expertise.
            </p>
            <blockquote className="border-l-4 border-indigo-300 pl-4 italic text-lg text-white">
                “My intention is to make this website a hub for trusted Islamic guidance, knowledge, and tools that benefit Muslims worldwide.”
            </blockquote>
          </motion.div>

          {/* Section: Our Team */}
          <motion.div 
            id="team" 
            ref={(el) => { sectionRefs.current['team'] = el; }} 
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Users className="text-indigo-600" /> Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm text-center">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                            <User className="w-10 h-10 text-gray-400" />
                        </div>
                        <h3 className="font-bold text-gray-900 dark:text-white">Team Member {i}</h3>
                        <p className="text-indigo-600 dark:text-indigo-400 text-sm mb-2">Position</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">Dedicated to serving the community.</p>
                    </div>
                ))}
            </div>
          </motion.div>

          {/* Section 5: Join Us */}
          <motion.div 
            id="join" 
            ref={(el) => { sectionRefs.current['join'] = el; }} 
            className="scroll-mt-24 text-center bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-pink-100 dark:bg-pink-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-pink-500 w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Join Us on This Journey</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Names are more than just words — they are prayers and hopes. May Allah bless every parent who chooses a name that brings beauty and barakah.
            </p>
            <p className="font-medium text-indigo-600 dark:text-indigo-400">
                Thank you for visiting Islam4everyone.com. More features coming soon, In Sha Allah!
            </p>
          </motion.div>

        </div>
      </main>
    </div>
  );
}