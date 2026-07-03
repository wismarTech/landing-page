'use client';

import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="bg-[#eef2f6] relative px-6 lg:px-24 overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <h4 className="text-[#5B58F6] font-medium mb-8 text-sm tracking-widest uppercase inline-flex items-center px-6 py-2.5 rounded-full bg-white border border-slate-100 shadow-sm mx-auto">
            <div className="w-2 h-2 rounded-full mr-3 bg-[#5B58F6] shadow-[0_0_6px_rgba(91,88,246,0.35)]"></div>
            Get in Touch
          </h4>
          <h2 className="text-5xl font-light tracking-tight text-slate-800 font-serif leading-tight">
            Let&apos;s <span className="italic text-[#5B58F6]">build something</span> together
          </h2>
          <p className="mt-6 text-slate-500 font-thin text-xl max-w-2xl mx-auto">
            Have a question, idea, or project in mind? We&apos;d love to hear from you. Reach out and our team will get back to you shortly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { icon: Mail, label: 'Email Us', value: 'wisemanreal3@gmail.com', href: 'mailto:wisemanreal3@gmail.com' },
            { icon: MessageSquare, label: 'Live Chat', value: 'Mon–Fri, 9am–6pm', href: '#' },
            { icon: Send, label: 'Phpne Number', value: '+234 706 4543 627', href: '#' },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="flex items-center gap-4 p-6 rounded-4xl bg-white border border-slate-100 shadow-sm hover:shadow-xl 
              hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#5B58F6]/5 flex items-center justify-center shrink-0 group-hover:bg-[#5B58F6] transition-colors duration-300">
                <item.icon className="w-5 h-5 text-[#5B58F6] group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">{item.label}</p>
                <p className="text-sm text-slate-700 font-medium mt-0.5">{item.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
