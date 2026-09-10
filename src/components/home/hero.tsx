'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <header className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80)'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-32 w-full">
        <div className="max-w-2xl">
          <h1 className="lg:text-8xl leading-[1.1] text-7xl font-light text-white tracking-tighter font-serif mb-8">
            Master the skills
            <br />
            that <span className="italic text-indigo-400">define the future</span>
          </h1>

          <p className="text-3xl text-white/80 mb-10 leading-relaxed max-w-2xl font-thin tracking-tight">
            Level up your career with industry-standard courses. From coding to design, 
            learn from world-class experts and join 50,000+ graduates.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 sm:items-center items-start">
            <button className="group outline-none cursor-pointer transition-transform duration-200 active:scale-95 bg-transparent border-0 p-0 relative">
              <div className="absolute inset-0 -m-3 rounded-full bg-indigo-500/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out z-0"></div>
              <div className="absolute inset-0 -m-6 rounded-full bg-indigo-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-0"></div>
              <div className="absolute inset-0 -m-10 rounded-full bg-indigo-700/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-0"></div>

              <div className="relative z-10 flex items-center justify-center p-2 rounded-full transition-all duration-300 group-hover:shadow-purple-500/20" style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.1) 100%)',
                boxShadow: 'inset 0 4px 6px rgba(255, 255, 255, 0.95), inset 0 -5px 8px rgba(0, 0, 0, 0.08), 0 12px 24px -6px rgba(0, 0, 0, 0.15), 0 4px 8px -4px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(12px)'
              }}>
                <div className="flex overflow-hidden transition-all duration-300 rounded-full pt-3.5 pr-12 pb-3.5 pl-12 relative items-center justify-center" style={{
                  background: 'linear-gradient(180deg,#6366f1 0%,#4f46e5 100%)',
                  boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.45), inset 0 -3px 6px rgba(0,0,0,0.35), 0 6px 14px rgba(79,70,229,0.35)'
                }}>
                  <div className="absolute top-0 left-[15%] right-[15%] h-[40%] bg-linear-to-b from-white/30 to-transparent rounded-full blur-[1px]"></div>
                  <span className="text-white text-base font-normal tracking-widest uppercase drop-shadow-md relative z-20 pointer-events-none">
                    Start Learning
                  </span>
                </div>
              </div>
            </button>

            {/*<button className="relative group outline-none cursor-pointer px-8 py-[18px] rounded-full bg-white border border-white/30 text-white text-base font-normal tracking-widest uppercase hover:bg-white/90 hover:text-slate-900 transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow active:scale-95">
              Browse Courses
              <ArrowRight className="w-5 h-5 text-white/70 group-hover:text-slate-900 group-hover:translate-x-1 transition-all" />
            </button>*/}
          </div>
        </div>
      </div>

      {/* WhatsApp Icon */}
      <a 
        href="https://chat.whatsapp.com/EJl2WPdOUum74h4ROL0MRW?s=sw&p=a&mlu=4&ilr=4"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="white" 
          className="w-7 h-7"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </header>
  );
};

export default Hero;