"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 20) {
        setIsScrolled(false);
        return;
      }

      const heroElement = document.getElementById("hero");
      if (heroElement) {
        const rect = heroElement.getBoundingClientRect();
        if (rect.bottom <= 80) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      } else {
        if (window.scrollY > 500) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ease-in-out py-4 ${
        isScrolled
          ? "bg-[#1C0D05]/95 backdrop-blur-md shadow-lg border-b border-amber-900/30"
          : "bg-white/15 backdrop-blur-md border-b border-white/20 shadow-sm"
      }`}
    >
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

        {/* NAVIGASI UTAMA DESKTOP */}
        <nav className="hidden md:flex items-center gap-10 text-base lg:text-lg font-semibold tracking-wide text-amber-50">
          <a href="#hero" className="transition-colors hover:text-amber-300 drop-shadow-md">
            Home
          </a>
          <a href="#menu" className="transition-colors hover:text-amber-300 drop-shadow-md">
            Menu
          </a>
          <a href="#lokasi" className="transition-colors hover:text-amber-300 drop-shadow-md">
            Lokasi
          </a>
        </nav>

        {/* TOMBOL PESAN SEKARANG NAVBAR DESKTOP */}
        <div className="hidden md:flex items-center">
          <a
            href="https://wa.me/6285850125627?text=Halo%20Mas%20Yudi,%20saya%20mau%20pesan%20Sate%20Ayam%20Ponorogo"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#FFF8E7] px-6 py-2.5 text-sm font-semibold text-[#3D1E0B] shadow-md transition-all duration-200 hover:bg-[#F5E6C8] hover:shadow-lg active:scale-95"
          >
            Pesan Sekarang
          </a>
        </div>

        {/* HAMBURGER MOBILE */}
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

      {/* DROPDOWN MOBILE */}
      {isMenuOpen && (
        <div className="md:hidden mt-3 bg-[#1C0D05]/95 backdrop-blur-md border-t border-amber-900/40 px-6 pt-4 pb-6 shadow-xl">
          <ul className="flex flex-col gap-3 font-medium text-amber-50 text-base">
            <li>
              <a href="#hero" onClick={() => setIsMenuOpen(false)} className="block py-2 px-3 rounded-lg hover:bg-white/10">
                Home
              </a>
            </li>
            <li>
              <a href="#menu" onClick={() => setIsMenuOpen(false)} className="block py-2 px-3 rounded-lg hover:bg-white/10">
                Menu
              </a>
            </li>
            <li>
              <a href="#lokasi" onClick={() => setIsMenuOpen(false)} className="block py-2 px-3 rounded-lg hover:bg-white/10">
                Lokasi
              </a>
            </li>
            <li className="pt-2">
              <a
                href="https://wa.me/6285850125627?text=Halo%20Mas%20Yudi,%20saya%20mau%20pesan%20Sate%20Ayam%20Ponorogo"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="block text-center rounded-full bg-[#FFF8E7] py-3 text-sm font-semibold text-[#3D1E0B] shadow-md hover:bg-[#F5E6C8]"
              >
                Pesan Sekarang
              </a>
            </li>
          </ul>
        </div>
      )}
    </header> 
  );
}