"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Home, Info, Phone, BookOpen, MicIcon, BookOpenTextIcon, HelpCircle } from "lucide-react";
import Image from "next/image";
import logo from "../public/images/islam-for-everyone-png-logo.png";
import ThemeToggle from "./ThemeToggle";
import { HoverLink, DropdownLink, MobileLink, MobileSubLink } from "./NavHelpers";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState<string | boolean>(false);
    const [dropdown1, setDropdown1] = useState(false);
    const [language, setLanguage] = useState("EN");

    // Helper to close menu when a link is clicked
    const closeMenu = () => setOpen(false);

    return (
        <nav className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg sticky top-0 z-50 dark:from-gray-600 dark:via-gray-500 dark:to-gray-700">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-white text-2xl font-bold tracking-wide" onClick={closeMenu}>
                    <Image src={logo} width={230} height={230} alt="Islam4Everyone Logo" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-white font-medium dark:text-gray-200 text-lg">
                    <HoverLink href="/" icon={<Home size={20} />}>Home</HoverLink>
                    <HoverLink href="/names" icon={<Info size={20} />}>Names</HoverLink>

                    {/* Naats Dropdown */}
                    <div
                        className="relative cursor-pointer"
                        onMouseEnter={() => setDropdown("naats")}
                        onMouseLeave={() => setDropdown(false)}
                    >
                        <div className="flex items-center gap-1 hover:text-yellow-300 transition ">
                            🎤 Naats <ChevronDown size={20} />
                        </div>

                        {dropdown === "naats" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute left-[-50%] mt-0 bg-white text-gray-700 rounded-xl shadow-xl overflow-hidden min-w-[250px] dark:bg-gray-800 dark:text-gray-200"
                            >
                                <DropdownLink href="/naats/audio">Audio Naats</DropdownLink>
                                <DropdownLink href="/naats/video">Video Naats</DropdownLink>
                                <DropdownLink href="/naats/written">Written Naats</DropdownLink>
                            </motion.div>
                        )}
                    </div>

                    <HoverLink href="/books" icon={<BookOpen size={20} />}>Books</HoverLink>
                    <HoverLink href="/blogs" icon={<Info size={20} />}>Blogs</HoverLink>

                    {/* More Dropdown */}
                    <div
                        className="relative cursor-pointer"
                        onMouseEnter={() => setDropdown("more")}
                        onMouseLeave={() => setDropdown(false)}
                    >
                        <div className="flex items-center gap-1 hover:text-yellow-400 transition">
                            More <ChevronDown size={20} />
                        </div>

                        {dropdown === "more" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute left-[-50%] mt-0 bg-white text-gray-700 rounded-xl shadow-xl overflow-hidden min-w-[250px] dark:bg-gray-800 dark:text-gray-200"
                            >
                                <DropdownLink href="/about">About</DropdownLink>
                                <DropdownLink href="/privacy-policy">Privacy Policy</DropdownLink>
                                <DropdownLink href="/terms">Terms & Conditions</DropdownLink>
                                <DropdownLink href="/contact">Contact</DropdownLink>
                                <DropdownLink href="/more">FAQ</DropdownLink>
                            </motion.div>
                        )}
                    </div>

                    {/* Right side: Language & Theme Toggle */}
                    <div className="flex items-center gap-4">
                        <select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className="bg-white text-black dark:bg-gray-700 dark:text-white rounded px-2 py-1 outline-none text-sm"
                        >
                            <option value="EN">EN</option>
                            <option value="UR">UR</option>
                        </select>

                        <ThemeToggle />

                        {/* Login */}
                        <Link href="/login" className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition font-semibold shadow">
                            Login
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button className="text-white md:hidden z-50 relative" onClick={() => setOpen(!open)}>
                    {open ? <X size={34} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed inset-0 bg-white dark:bg-gray-900 z-40 flex flex-col pt-24 px-6 overflow-y-auto h-screen md:hidden"
                    >
                        <div className="flex flex-col space-y-6 text-lg font-medium text-gray-800 dark:text-gray-200 pb-10">
                            
                            {/* Wrap links in a div that handles closing */}
                            <div onClick={closeMenu}>
                                <MobileLink href="/" icon={<Home size={20} />}>Home</MobileLink>
                            </div>
                            <div onClick={closeMenu}>
                                <MobileLink href="/names" icon={<BookOpen size={20} />}>Names</MobileLink>
                            </div>

                            {/* Naats Mobile */}
                            <div>
                                <div
                                    className="flex items-center justify-between cursor-pointer py-2 border-b border-gray-100 dark:border-gray-700"
                                    onClick={() => setDropdown(dropdown === "naats" ? false : "naats")}
                                >
                                    <div className="flex items-center gap-2">
                                        <Info size={20} /> <span>Naats</span>
                                    </div>
                                    <ChevronDown className={`${dropdown === "naats" && "rotate-180"} transition`} />
                                </div>

                                {dropdown === "naats" && (
                                    <div className="ml-6 mt-2 space-y-3 border-l-2 border-indigo-500 pl-4" onClick={closeMenu}>
                                        <MobileSubLink href="/naats/audio">Audio Naats</MobileSubLink>
                                        <MobileSubLink href="/naats/video">Video Naats</MobileSubLink>
                                        <MobileSubLink href="/naats/written">Written Naats</MobileSubLink>
                                    </div>
                                )}
                            </div>

                            <div onClick={closeMenu}>
                                <MobileLink href="/books" icon={<BookOpenTextIcon size={20} />}>Books</MobileLink>
                            </div>
                            <div onClick={closeMenu}>
                                <MobileLink href="/blogs" icon={<MicIcon size={20} />}>Blogs</MobileLink>
                            </div>

                            {/* About Dropdown Mobile */}
                            <div>
                                <div
                                    className="flex items-center justify-between cursor-pointer py-2 border-b border-gray-100 dark:border-gray-700"
                                    onClick={() => setDropdown1(!dropdown1)}
                                >
                                    <div className="flex items-center gap-2">
                                        <Info size={20} /> <span>About</span>
                                    </div>
                                    <ChevronDown className={`${dropdown1 && "rotate-180"} transition`} />
                                </div>

                                {dropdown1 && (
                                    <div className="ml-6 mt-2 space-y-3 border-l-2 border-indigo-500 pl-4" onClick={closeMenu}>
                                        <MobileSubLink href="/about/company">Company</MobileSubLink>
                                        <MobileSubLink href="/about/team">Team</MobileSubLink>
                                        <MobileSubLink href="/about/mission">Mission</MobileSubLink>
                                    </div>
                                )}
                            </div>

                            <div onClick={closeMenu} className="space-y-6">
                                <MobileLink href="/privacy-policy" icon={<BookOpen size={20} />}>Privacy Policy</MobileLink>
                                <MobileLink href="/terms" icon={<Info size={20} />}>Terms & Conditions</MobileLink>
                                <MobileLink href="/contact" icon={<Phone size={20} />}>Contact</MobileLink>
                                <MobileLink href="/faq" icon={<HelpCircle size={20} />}>FAQ</MobileLink>
                            </div>

                            {/* Mobile: Language & Theme */}
                            <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                                <select
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}
                                    className="bg-gray-100 text-black dark:bg-gray-800 dark:text-white rounded px-3 py-2 outline-none text-sm border border-gray-300 dark:border-gray-600"
                                >
                                    <option value="EN">English</option>
                                    <option value="UR">Urdu</option>
                                </select>
                                <ThemeToggle />
                            </div>
                            
                            <div onClick={closeMenu}>
                                <Link href="/login" className="block w-full text-center py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold shadow mt-4">
                                    Login
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
