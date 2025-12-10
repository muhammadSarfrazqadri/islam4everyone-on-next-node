"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Search, BookOpen, Music, Video, GraduationCap, ArrowRight, Star, Heart, Clock, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import { Carousel } from "@/components/ui/carousel";
import { CarouselPlugin } from "@/components/Carousal";

const heroSlides = [
  {
    title: " Islamic Knowledge",
    subtitle: "Discover authentic Islamic names, listen to soul-soothing Naats, read insightful blogs, and connect with expert Quran tutors.",
    bg: "bg-linear-to-br from-indigo-900 via-purple-900 to-black"
  },
  {
    title: " Spiritual Growth",
    subtitle: "Enhance your journey with daily verses, prayer times, and community support.",
    bg: "bg-linear-to-br from-blue-900 via-cyan-900 to-black"
  },
  {
    title: " Quranic Learning",
    subtitle: "Connect with expert tutors to learn Quran with Tajweed from the comfort of your home.",
    bg: "bg-linear-to-br from-emerald-900 via-green-900 to-black"
  }
];

const Typewriter = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayText("");
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [text]);

  return <>{displayText}</>;
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${heroSlides[currentSlide].bg}`}>
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={`absolute inset-0 ${heroSlides[currentSlide].bg} -z-10`}
          />
        </AnimatePresence>

        {/* Overlay Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 -z-10"></div>

        <div className="max-w-4xl mx-auto text-white text-center px-4 space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-4 rounded-full text-white bg-white/10 backdrop-blur-md border border-white/20 text-indigo-200 text-sm font-medium mb-6">
              Welcome to Islam4Everyone
            </span>
            <h1 className="text-5xl md:text-7xl text-white font-bold leading-tight mb-4 min-h-40 md:min-h-auto">
              Your Source for <br />
              <span
                className="text-transparent bg-clip-text bg-linear-to-r from-indigo-100 to-purple-100 inline-block min-h-[55px] md:min-h-[80px]"
              >
                <Typewriter text={heroSlides[currentSlide].title} />
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {heroSlides[currentSlide].subtitle}
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="max-w-xl mx-auto relative bg-linear-to-r from-indigo-500/30 via-purple-500/30 to-indigo-500/30 rounded-2xl p-1"
          >
            <div className="relative flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
              <Search className="ml-4 text-indigo-200 w-5 h-5" />
              <input
                type="text"
                placeholder="Search Names, Naats, Blogs..."
                className="w-full p-4 bg-transparent outline-none text-white placeholder-indigo-200/70"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="mr-2 px-6 py-2 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl font-medium transition-all shadow-lg shadow-indigo-500/20">
                Search
              </button>
            </div>
          </motion.div>

          {/* Slider Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? "w-8 bg-indigo-400" : "bg-white/30 hover:bg-white/50"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-linear-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Islamic Names", desc: "Explore meanings & origins", icon: Star, color: "from-blue-500 to-cyan-400", href: "/names" },
              { title: "Audio Naats", desc: "Listen to soul-touching recitations", icon: Music, color: "from-purple-500 to-pink-500", href: "/naats/audio" },
              { title: "Written Naats", desc: "Read beautiful written Naats", icon: BookOpen, color: "from-yellow-500 to-red-500", href: "/naats/written" },
              { title: "Video Naats", desc: "Watch beautiful visual recitations", icon: Video, color: "from-rose-500 to-orange-500", href: "/naats/video" },
              { title: "Islamic Blogs", desc: "Read insightful articles & guides", icon: BookOpen, color: "from-emerald-500 to-teal-400", href: "/blogs" },
            ].map((feature, i) => (
              <Link key={i} href={feature.href} className="shadow-2xl shadow-blue-950 rounded-3xl block h-full">
                <motion.div
                  whileHover={{ y: -8 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative h-full bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-900/20 transition-all duration-300 group overflow-hidden"
                >
                  {/* Decorative Background Blob */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${feature.color} opacity-10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150`} />

                  <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${feature.color} flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {feature.desc}
                  </p>

                  <div className="flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Explore <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Inspiration */}
      <section className="py-16 px-4 w-[90%] m-[auto] my-14 rounded-2xl bg-white drop-shadow-2xl dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-indigo-600 dark:text-indigo-400 font-medium tracking-wider uppercase text-sm">Verse of the Day</span>
          <blockquote className="mt-6 text-2xl md:text-3xl font-serif text-gray-800 dark:text-gray-200 leading-relaxed">
            "Indeed, Allah is with those who fear Him and those who are doers of good."
          </blockquote>
          <cite className="mt-4 block text-gray-500 dark:text-gray-400 font-medium not-italic">
            — Surah An-Nahl [16:128]
          </cite>
        </div>
      </section>

      {/* Latest Content Preview */}
      <section className="py-20 px-4 bg-linear-to-br from-slate-400 via-red to-indigo-300 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Latest Updates</h2>
              <p className="text-gray-600 dark:text-gray-400">Fresh content added recently</p>
            </div>
            <Link href="/blogs" className="hidden md:flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Card */}
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-lg shadow-indigo-100/50 dark:shadow-none hover:shadow-xl hover:shadow-indigo-200/50 dark:hover:shadow-indigo-900/20 transition-all duration-300 group">
              <div className="h-48 bg-indigo-50 dark:bg-gray-800 flex items-center justify-center group-hover:bg-indigo-100 dark:group-hover:bg-gray-700 transition-colors">
                <BookOpen className="w-12 h-12 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 mb-2 block">Blog</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">The Importance of Prayer</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2">Salah is the second pillar of Islam and a daily obligation...</p>
                <Link href="/blogs/importance-of-prayer" className="text-sm font-bold text-gray-900 dark:text-white hover:text-indigo-600 flex items-center gap-1 transition-colors">
                  Read More <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Naat Card */}
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-lg shadow-purple-100/50 dark:shadow-none hover:shadow-xl hover:shadow-purple-200/50 dark:hover:shadow-purple-900/20 transition-all duration-300 group">
              <div className="h-48 bg-purple-50 dark:bg-gray-800 flex items-center justify-center group-hover:bg-purple-100 dark:group-hover:bg-gray-700 transition-colors">
                <Music className="w-12 h-12 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold tracking-wider uppercase text-purple-600 dark:text-purple-400 mb-2 block">Audio Naat</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Mustafa Jaane Rehmat</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2">Recited by Owais Raza Qadri. A beautiful rendition...</p>
                <Link href="/naats/audio" className="text-sm font-bold text-gray-900 dark:text-white hover:text-purple-600 flex items-center gap-1 transition-colors">
                  Listen Now <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Name Card */}
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-lg shadow-blue-100/50 dark:shadow-none hover:shadow-xl hover:shadow-blue-200/50 dark:hover:shadow-blue-900/20 transition-all duration-300 group">
              <div className="h-48 bg-blue-50 dark:bg-gray-800 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-gray-700 transition-colors">
                <Star className="w-12 h-12 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2 block">Name of the Day</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Muhammad (محمد)</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2">The Praiseworthy. Name of the final Prophet of Islam.</p>
                <Link href="/names" className="text-sm font-bold text-gray-900 dark:text-white hover:text-blue-600 flex items-center gap-1 transition-colors">
                  View Details <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Times & Calendar */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Prayer Times */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Clock className="text-indigo-600 dark:text-indigo-400 w-6 h-6" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Prayer Times</h3>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">New York, USA</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {[
                { name: 'Fajr', time: '05:23 AM' },
                { name: 'Dhuhr', time: '12:15 PM' },
                { name: 'Asr', time: '03:45 PM' },
                { name: 'Maghrib', time: '06:10 PM' },
                { name: 'Isha', time: '07:30 PM' },
              ].map((prayer) => (
                <div key={prayer.name} className="text-center p-3 rounded-xl bg-gray-50 dark:bg-gray-800">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{prayer.name}</p>
                  <p className="font-bold text-indigo-600 dark:text-indigo-400">{prayer.time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Islamic Calendar */}
          <div className="bg-linear-to-br from-indigo-600 to-purple-700 p-8 rounded-2xl text-white shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="text-indigo-200 w-6 h-6" />
              <h3 className="text-2xl font-bold">Upcoming Events</h3>
            </div>
            <div className="space-y-4">
              {[
                { event: 'Ramadan Starts', date: 'March 10, 2024', days: 'in 95 days' },
                { event: 'Eid ul-Fitr', date: 'April 10, 2024', days: 'in 125 days' },
                { event: 'Hajj Begins', date: 'June 14, 2024', days: 'in 190 days' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="font-bold text-lg">{item.event}</p>
                    <p className="text-indigo-200 text-sm">{item.date}</p>
                  </div>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium">{item.days}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Online Tutor Section */}
      <section className="py-16 px-4 bg-indigo-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-purple-900/50 to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-800 text-indigo-200 text-sm font-medium">
              <GraduationCap className="w-4 h-4" />
              <span>Expert Guidance</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Learn Quran with Tajweed</h2>
            <p className="text-indigo-100 text-lg leading-relaxed">
              Connect with experienced tutors for personalized Quran lessons. Whether you are a beginner or looking to perfect your recitation, our qualified teachers are here to guide you.
            </p>
            <ul className="space-y-3">
              {['One-on-one sessions', 'Flexible timings', 'Male & Female tutors available', 'Multilingual support'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-indigo-100">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</div>
                  {item}
                </li>
              ))}
            </ul>
            <button className="mt-8 px-8 py-3 bg-white text-indigo-900 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
              Book a Free Trial
            </button>
          </div>
          <div className="flex-1 relative">
            {/* Placeholder for an image or illustration */}
            <CarouselPlugin />
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-20 px-4 bg-gray-900 dark:bg-black text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <Heart className="w-12 h-12 text-red-500 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-bold">Join Our Community</h2>
          <p className="text-gray-400 text-lg">
            Subscribe to our newsletter to receive daily Hadith, new Naat updates, and Islamic articles directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mt-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-bold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
