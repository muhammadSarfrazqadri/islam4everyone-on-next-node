"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PanelLeftOpen, PanelLeftClose, Mail, Phone, MapPin, Send, MessageSquare, Globe, User, AtSign } from "lucide-react";

const sections = [
  { id: "form", title: "Send a Message", icon: Send },
  { id: "info", title: "Contact Information", icon: Mail },
  { id: "social", title: "Social Media", icon: Globe },
  { id: "faq", title: "FAQs", icon: MessageSquare },
];

export default function ContactPage() {
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
        <h2 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">Navigation</h2>
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
                <h2 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Navigation</h2>
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
              Contact Us
            </h1>
            <p className="text-gray-600 dark:text-gray-400">We'd love to hear from you</p>
          </motion.div>

          {/* Section 1: Form */}
          <motion.div 
            id="form" 
            ref={(el) => { sectionRefs.current['form'] = el; }} 
            className="scroll-mt-24 bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg">
                    <Send className="text-indigo-600 dark:text-indigo-400 w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Send a Message</h2>
            </div>
            
            <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input type="text" placeholder="Your Name" className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                        <div className="relative">
                            <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input type="email" placeholder="your@email.com" className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                    <input type="text" placeholder="How can we help?" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                    <textarea rows={5} placeholder="Write your message here..." className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none"></textarea>
                </div>
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors">
                    Send Message
                </button>
            </form>
          </motion.div>

          {/* Section 2: Info */}
          <motion.div 
            id="info" 
            ref={(el) => { sectionRefs.current['info'] = el; }} 
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Mail className="text-indigo-600" /> Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { icon: Mail, title: "Email", value: "contact@islam4everyone.com", color: "text-blue-500" },
                    { icon: Phone, title: "Phone", value: "+1 (555) 123-4567", color: "text-green-500" },
                    { icon: MapPin, title: "Location", value: "New York, USA", color: "text-red-500" },
                ].map((item, i) => (
                    <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm text-center">
                        <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center ${item.color}`}>
                            <item.icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.value}</p>
                    </div>
                ))}
            </div>
          </motion.div>

          {/* Section 3: Social */}
          <motion.div 
            id="social" 
            ref={(el) => { sectionRefs.current['social'] = el; }} 
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
             <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Globe className="text-indigo-600" /> Social Media
            </h2>
            <div className="flex flex-wrap gap-4">
                {['Facebook', 'Twitter', 'Instagram', 'YouTube', 'LinkedIn'].map((social) => (
                    <button key={social} className="px-6 py-3 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all font-medium shadow-sm">
                        {social}
                    </button>
                ))}
            </div>
          </motion.div>

          {/* Section 4: FAQ */}
          <motion.div 
            id="faq" 
            ref={(el) => { sectionRefs.current['faq'] = el; }} 
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <MessageSquare className="text-indigo-600" /> Frequently Asked Questions
            </h2>
            <div className="space-y-4">
                {[
                    { q: "How can I submit a Naat?", a: "You can submit your Naat by emailing us at submissions@islam4everyone.com with the audio/video file and details." },
                    { q: "Is this content free to use?", a: "Yes, all content on this platform is free for personal use and educational purposes." },
                    { q: "Do you have a mobile app?", a: "We are currently working on a mobile app. Stay tuned for updates!" },
                ].map((faq, i) => (
                    <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{faq.q}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                ))}
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
}
