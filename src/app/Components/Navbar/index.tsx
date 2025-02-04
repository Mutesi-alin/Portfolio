'use client';

import React, { useState, useEffect } from 'react';
import { Poppins } from 'next/font/google';
import Link from 'next/link';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  display: 'swap',
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { href: '/#home', label: 'Home' },
    { href: '/#skills', label: 'Skills' },
    { href: '/#projects', label: 'Projects' },
    { href: '/#contacts', label: 'Contacts' },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className={`${poppins.className} fixed w-full z-50  px-6 py-4 lg:px-16 lg:py-6 shadow-md bg-white`}>
        <div className="flex justify-between items-center">
          {/* Logo or Brand Name */}
          <h1 className="text-[#F4EDE3] text-2xl font-semibold tracking-wide"></h1>

          
          <button
            className="sm:hidden text-3xl text-[#F4EDE3] focus:outline-none z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>

          
          <ul className="hidden sm:flex font-bold text-lg space-x-8 text-[#0A3141]">
            {navItems.map((item) => (
              <li key={item.href} className="relative group">
                <Link href={item.href} className="hover:text-[#B47652] transition-colors duration-300">
                  {item.label}
                  <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-[#B47652] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

    
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#F4EDE3] z-40 flex flex-col items-center justify-center sm:hidden">
          <ul className="font-semibold text-2xl space-y-8 text-[#0E2B28]">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className="block hover:text-[#B47652] transition-colors duration-300 text-3xl" 
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
