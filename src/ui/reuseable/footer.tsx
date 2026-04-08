'use client';

import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-slate-200 border-t pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-6">
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

            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              Wizmar is a premium EdTech platform dedicated to teaching the next 
              generation of tech talent with industry-standard courses and 
              world-class mentorship.
            </p>

            {/* Newsletter */}
            <form className="flex gap-2 max-w-sm mt-2">
              <input
                type="email"
                placeholder="Get course updates"
                className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#5B58F6] focus:border-[#5B58F6] transition-all"
                required
              />
              <button
                type="submit"
                className="bg-[#5B58F6] hover:bg-[#4a47e6] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Join
              </button>
            </form>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-sm font-medium text-slate-900 mb-4">Programs</h3>
            <ul className="space-y-3">
              {['Web Development', 'Data Science', 'AI Fundamentals', 'Cyber Security'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-sm font-medium text-slate-900 mb-4">Platform</h3>
            <ul className="space-y-3">
              {['Courses', 'Mentorship', 'Business', 'Success Stories'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-medium text-slate-900 mb-4">Connect</h3>
            
            <ul className="space-y-4 mb-6">
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-[#5B58F6] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <Link href="tel:+2347064543627" className="hover:text-slate-900 transition-colors">+234 706 4543 627</Link>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-[#5B58F6] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <Link href="mailto:wisemanreal3@gmail.com" className="hover:text-slate-900 transition-colors">wisemanreal3@gmail.com</Link>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-500">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-[#5B58F6] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="leading-relaxed">Beverley Plaza, 352 Sars Junction, Rumuagholu Port Harcourt.</span>
              </li>
            </ul>

            <div className="flex gap-4">
              {[FaTwitter, FaInstagram, FaLinkedin, FaGithub].map((Icon, i) => (
                <Link key={i} href="#" className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-900 border border-slate-200 hover:border-slate-300 transition-all">
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Wizmar EdTech. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-slate-400 hover:text-slate-600">Privacy Policy</Link>
            <Link href="#" className="text-xs text-slate-400 hover:text-slate-600">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
