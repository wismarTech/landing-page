'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Courses', href: '#courses' },
    { name: 'Bootcamps', href: '#bootcamps' },
    { name: 'Mentorship', href: '#mentorship' },
    { name: 'Business', href: '#business' },
  ];

  return (
    <nav
      id="site-nav"
      className={`fixed w-full z-50 border-b border-slate-200/60 top-0 right-0 left-0 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-2xl shadow-sm h-16' : 'bg-white/80 backdrop-blur-2xl h-20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
        <div className="relative flex h-full items-center justify-between">
          {/* Logo */}
          <div className="flex items-center shrink-0 z-20">
            <Link href="/" className="flex items-center group transition-transform duration-300 active:scale-95 gap-2">
              <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200 rotate-12 group-hover:rotate-0 transition-transform">
                <span className="text-white font-bold text-xl">
                  <img src='/image/wizmar_logo.PNG' alt=''
                  className='w-10 h-10'  />
                </span>
               
              </div>

                  <h1 className="text-2xl font-bold bg-clip-text bg-linear-to-r tracking-tighter
                   from-slate-900 to-slate-700 text-black">WismarTech</h1>
      
            </Link>
          </div>

          {/* Center Desktop Menu */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center z-10">
            <div className="flex items-center p-1 border border-slate-200/80 bg-white/80 backdrop-blur-md rounded-full shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-5 py-2 text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/50 rounded-full transition-all duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex gap-3 sm:gap-5 items-center ml-auto z-20">
            <Link
              href="/login"
              className="hidden lg:block text-sm font-medium text-slate-600 hover:text-[#5B58F6] transition-colors px-2"
            >
              Sign In
            </Link>

            <Link
              href="/register"
              className="group inline-flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#5B58F6] hover:shadow-[0_8px_20px_-6px_rgba(91,88,246,0.4)] hover:-translate-y-0.5 sm:px-6 text-sm font-medium text-white bg-slate-900 h-11 rounded-full pr-5 pl-5"
            >
              <span className="hidden sm:inline">Join for Free</span>
              <span className="sm:hidden">Join</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Mobile Burger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              aria-label="Toggle menu"
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors active:scale-95"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
            isOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pb-5 pt-2">
            <div className="rounded-3xl border border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-[0_12px_30px_-12px_rgba(15,23,42,0.08)] p-3 flex flex-col gap-1">
              {[...navLinks, { name: 'Sign In', href: '/login' }].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-2xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
