'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Emmanuel Joshua",
    role: "Frontend Engineer",
    image: "https://i.pravatar.cc/150?u=emmanuel-joshua",
    content: "Wizmar completely changed my career trajectory. The project-based approach let me build a portfolio that stood out in a competitive market — I went from tutorials to shipping real interfaces.",
    course: "Frontend Engineering",
    rating: 5
  },
  {
    name: "Mr Victor",
    role: "Backend Engineer",
    image: "https://i.pravatar.cc/150?u=mr-victor",
    content: "The mentorship at Wizmar is second to none. I finally understood how to design APIs and databases that actually hold up under real traffic, not just pass a tutorial checklist.",
    course: "Backend Engineering",
    rating: 5
  },
  {
    name: "Caleb Joshua",
    role: "Frontend Engineer",
    image: "https://i.pravatar.cc/150?u=caleb-joshua",
    content: "Complex concepts were broken down into digestible, actionable steps. I landed my dream job just three months after completing the course.",
    course: "Frontend Engineering",
    rating: 5
  },
];

const Testimonials = () => {
  return (
    <section id="testimonial" className="py-24 px-6 bg-[#FAFAFA] overflow-hidden relative">
      {/* Background Decorative Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none z-0">
         <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
               <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1"/>
               </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
         </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h4 className="text-[#5B58F6] font-medium mb-8 text-sm tracking-widest uppercase inline-flex items-center px-6 py-2.5 rounded-full bg-white border border-slate-100 shadow-sm">
            <div className="w-2 h-2 rounded-full mr-3 bg-[#5B58F6] shadow-[0_0_6px_rgba(91,88,246,0.35)]"></div>
            Success Stories
          </h4>
          <h2 className="text-5xl font-light tracking-tight text-slate-800 font-serif leading-tight">
            Hear from our <span className="italic text-[#5B58F6]">global graduates</span>
          </h2>
          <p className="mt-6 text-slate-500 font-thin text-xl max-w-2xl mx-auto">
            Join thousands of professionals who have accelerated their careers through our industry-leading curriculum.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 relative flex flex-col justify-between"
            >
              {/* Card Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-indigo-500/0 group-hover:bg-indigo-500/2 transition-colors duration-500 pointer-events-none"></div>

              <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-25 transition-opacity group-hover:scale-110 duration-500">
                <Quote className="w-16 h-16 text-[#5B58F6]" />
              </div>

              <div>
                <div className="flex gap-1.5 mb-8">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xl text-slate-700 font-thin leading-[1.6] mb-12 italic relative z-10">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center gap-5 border-t border-slate-50 pt-8 relative z-10">
                <div className="w-16 h-16 rounded-3xl overflow-hidden border-2 border-white shadow-md ring-1 ring-slate-100/50 bg-[#5B58F6] flex items-center justify-center group-hover:rotate-3 transition-transform duration-500">
                  <span className="text-white text-lg font-semibold">{t.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div>
                  <h5 className="text-lg font-medium text-slate-900 leading-none mb-1.5">{t.name}</h5>
                  <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-semibold">{t.role}</p>
                </div>
              </div>

              {/* Course Badge */}
              <div className="mt-8 flex justify-end relative z-10">
                <span className="text-[11px] font-medium text-[#5B58F6] bg-[#5B58F6]/5 px-4 py-1.5 rounded-xl border border-[#5B58F6]/10 group-hover:bg-[#5B58F6] group-hover:text-white transition-colors duration-300">
                  {t.course}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
