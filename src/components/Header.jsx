"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1C0D05]/90 backdrop-blur-md shadow-lg py-3.5 border-b border-amber-900/30"
          : "bg-transparent py-5"
      }`}
    >
      {/* Container utama dengan max-w-6xl agar presisi di tengah */}
      <div className="mx-auto max-w-6xl px-6 md:px-10 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center group transition-transform duration-200 hover:scale-105">
          <Image
            src="/logo.png"
            alt="Sate Ayam Ponorogo Mas Yudi"
            width={160}
            height={50}
            className="object-contain h-10 sm:h-12 w-auto drop-shadow-md"
            priority
          />
        </Link>

        {/* NAVIGASI UTAMA */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-amber-50">
          <Link 
            href="/" 
            className="transition-colors duration-200 hover:text-amber-300 drop-shadow-md"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="transition-colors duration-200 hover:text-amber-300 drop-shadow-md"
          >
            About
          </Link>
          <Link 
            href="/menu" 
            className="transition-colors duration-200 hover:text-amber-300 drop-shadow-md"
          >
            Menu
          </Link>
          <Link 
            href="/contact" 
            className="transition-colors duration-200 hover:text-amber-300 drop-shadow-md"
          >
            Contact
          </Link>
        </nav>

        {/* TOMBOL PESAN SEKARANG */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="rounded-full bg-[#FFF8E7] px-6 py-2.5 text-sm font-semibold text-[#3D1E0B] shadow-md transition-all duration-200 hover:bg-[#F5E6C8] hover:shadow-lg active:scale-95"
          >
            Pesan Sekarang
          </Link>
        </div>

        {/* TOMBOL HAMBURGER MOBILE */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          aria-label="Toggle Menu"
          className="inline-flex items-center justify-center p-2 rounded-lg text-amber-100 hover:bg-white/10 focus:outline-none md:hidden"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* DROPDOWN MENU MOBILE */}
      {isMenuOpen && (
        <div className="md:hidden mt-3 bg-[#1C0D05]/95 backdrop-blur-md border-t border-amber-900/40 px-6 pt-4 pb-6 shadow-xl">
          <ul className="flex flex-col gap-3 font-medium text-amber-50 text-base">
            <li>
              <Link 
                href="/" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 px-3 rounded-lg hover:bg-white/10"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 px-3 rounded-lg hover:bg-white/10"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/menu" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 px-3 rounded-lg hover:bg-white/10"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 px-3 rounded-lg hover:bg-white/10"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="block mt-2 text-center rounded-full bg-[#FFF8E7] py-2.5 text-[#3D1E0B] font-semibold shadow-md hover:bg-[#F5E6C8]"
              >
                Pesan Sekarang
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}