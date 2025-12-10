"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import logo from "../public/images/isalm-for-everyone-logo.png";


export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white pt-12 pb-6 mt-0 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
            <Link href="/" className="text-white text-2xl font-bold tracking-wide">
                    <Image
                        className="mb-5"
                        src={logo}
                        width={220}
                        height={220}
                        alt="Islam4Everyone Logo"
                    />

                </Link>
          <p className="text-gray-200 leading-relaxed">
            Your trusted Islamic knowledge source — Naats, Books, Blogs, and more.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <FooterIcon href="#" icon={<Facebook size={22} />} />
            <FooterIcon href="#" icon={<Instagram size={22} />} />
            <FooterIcon href="#" icon={<Youtube size={22} />} />
          </div>
        </div>

        {/* Naats Menu */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Naats</h3>
          <FooterLink href="/naats/audio">Audio Naats</FooterLink>
          <FooterLink href="/naats/video">Video Naats</FooterLink>
          <FooterLink href="/naats/written">Written Naats</FooterLink>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <FooterLink href="/books">Books</FooterLink>
          <FooterLink href="/blogs">Blogs</FooterLink>
          <FooterLink href="/names">Names</FooterLink>
          <FooterLink href="/more">More</FooterLink>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>

          <FooterContact icon={<Mail size={18} />} text="contact@islam4everyone.com" />
          <FooterContact icon={<Phone size={18} />} text="+92319-8370838" />
          <FooterContact icon={<MapPin size={18} />} text="Karachi, Pakistan" />
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 mt-10 pt-4 text-center text-white/80 text-sm">
        © {new Date().getFullYear()} MyBrand — All Rights Reserved.
      </div>
    </footer>
  );
}

/* ----------------------- Reusable Components ----------------------- */

function FooterLink({ href, children }: any) {
  return (
    <Link
      href={href}
      className="block mb-2 hover:text-yellow-300 transition flex items-center gap-2 group"
    >
      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition" />
      {children}
    </Link>
  );
}

function FooterIcon({ href, icon }: any) {
  return (
    <Link
      href={href}
      className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition"
    >
      {icon}
    </Link>
  );
}

function FooterContact({ icon, text }: any) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <div className="text-yellow-300">{icon}</div>
      <span>{text}</span>
    </div>
  );
}
