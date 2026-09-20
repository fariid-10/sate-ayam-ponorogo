"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#2A1508] via-[#351B0B] to-[#6b3614] shadow-lg transition-all">
      <nav className="flex w-full items-center justify-between pl-4 sm:pl-6 pr-6 sm:pr-8 md:pr-10 py-3.5 lg:py-4">
        
        {/* LOGO */}
        <div className="flex items-center">
          <Link href="/" className="group flex items-center transition-transform hover:scale-105">
            <Image 
              src="/logo.png" 
              alt="Sate Ayam Ponorogo Mas Yudi"
              width={180}
              height={60}
              className="object-contain drop-shadow-sm w-auto h-10 md:h-12 lg:h-14 xl:h-16"
              priority
            /> 
          </Link>
        </div>

        {/* MENU NAVIGASI */}
        <ul className="hidden md:flex items-center gap-2 lg:gap-4 text-base lg:text-lg font-medium tracking-wide text-amber-50">
          <li>
            <Link 
              href="/" 
              className="rounded-full px-5 py-2.5 transition-all duration-200 hover:bg-white/10 hover:text-amber-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className="rounded-full px-5 py-2.5 transition-all duration-200 hover:bg-white/10 hover:text-amber-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/menu" 
              className="rounded-full px-5 py-2.5 transition-all duration-200 hover:bg-white/10 hover:text-amber-200"
            >
              Menu
            </Link>
          </li>
          <li>
            {/* TOMBOL CONTACT WARNA CREAM */}
            <Link 
              href="/contact" 
              className="ml-2 rounded-full border border-amber-200/60 bg-[#FFF8E7] px-6 py-2.5 text-[#3D1E0B] font-semibold shadow-md transition-all duration-200 hover:bg-[#F5E6C8] hover:shadow-lg active:scale-95"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* TOMBOL HAMBURGER MOBILE */}
        <button
          onClick={toggleMenu}
          type="button"
          aria-label="Toggle Navigation"
          className="inline-flex items-center justify-center p-2 rounded-lg text-amber-100 hover:bg-white/10 focus:outline-none md:hidden"
        >
          {isMenuOpen ? (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </nav>

      {/* DROPDOWN MENU MOBILE */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#2A1508] border-t border-amber-900/40 px-6 pt-3 pb-6 shadow-xl">
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
                className="block mt-2 text-center rounded-lg bg-[#FFF8E7] py-2.5 text-[#3D1E0B] font-semibold shadow-md hover:bg-[#F5E6C8]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;