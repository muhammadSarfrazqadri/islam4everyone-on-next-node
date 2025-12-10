import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import Header from "@/components/Header";
// import logo from "../../../public/favicon.ico";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Islam4Everyone",
  description: "Your trusted Islamic knowledge source — Naats, Books, Blogs, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}




      // <section className="relative h-[600px] flex items-center justify-center overflow-hidden text-white">
      //   <AnimatePresence mode="wait">
      //     <motion.div
      //       key={currentSlide}
      //       initial={{ opacity: 0 }}
      //       animate={{ opacity: 1 }}
      //       exit={{ opacity: 0 }}
      //       transition={{ duration: 1 }}
      //       className={`absolute inset-0 ${heroSlides[currentSlide].bg} -z-10`}
      //     />
      //   </AnimatePresence>
        
      //   {/* Overlay Pattern */}
      //   <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 -z-10"></div>

      //   <div className="max-w-4xl mx-auto text-center px-4 space-y-8 z-10">
      //     <motion.div
      //       initial={{ opacity: 0, y: 30 }}
      //       animate={{ opacity: 1, y: 0 }}
      //       transition={{ duration: 0.8 }}
      //     >
      //       <span className="inline-block py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-indigo-200 text-sm font-medium mb-6">
      //         Welcome to Islam4Everyone
      //       </span>
      //       <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 min-h-40 md:min-h-auto">
      //         Your Source for <br />
      //         <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-300 to-purple-300">
      //           <Typewriter text={heroSlides[currentSlide].title} />
      //         </span>
      //       </h1>
      //       <p className="text-xl text-gray-300 max-w-2xl mx-auto">
      //         {heroSlides[currentSlide].subtitle}
      //       </p>
      //     </motion.div>

      //     {/* Search Bar */}
      //     <motion.div 
      //       initial={{ opacity: 0, scale: 0.9 }}
      //       animate={{ opacity: 1, scale: 1 }}
      //       transition={{ delay: 0.4, duration: 0.5 }}
      //       className="max-w-xl mx-auto relative"
      //     >
      //       <div className="relative flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
      //         <Search className="ml-4 text-gray-300 w-5 h-5" />
      //         <input 
      //           type="text" 
      //           placeholder="Search Names, Naats, Blogs..." 
      //           className="w-full p-4 bg-transparent outline-none text-white placeholder-gray-400"
      //           value={searchQuery}
      //           onChange={(e) => setSearchQuery(e.target.value)}
      //         />
      //         <button className="mr-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-colors">
      //           Search
      //         </button>
      //       </div>
      //     </motion.div>

      //     {/* Slider Dots */}
      //     <div className="flex justify-center gap-2 mt-8">
      //       {heroSlides.map((_, index) => (
      //         <button
      //           key={index}
      //           onClick={() => setCurrentSlide(index)}
      //           className={`w-2 h-2 rounded-full transition-all ${
      //             currentSlide === index ? "w-8 bg-indigo-400" : "bg-white/30 hover:bg-white/50"
      //           }`}
      //         />
      //       ))}
      //     </div>
      //   </div>
      // </section>