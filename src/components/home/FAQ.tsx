'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Do I get a certificate after completing a course?",
    answer: "Yes! Every course completion is backed by a verified Wizmar Certificate. Our certificates include a unique ID that can be shared on LinkedIn or verified by potential employers directly through our platform."
  },
  {
    question: "How long do I have access to the learning materials?",
    answer: "Once you enroll, you get lifetime access to all current and future course materials, including regular curriculum updates to reflect the latest industry trends and technologies."
  },
  {
    question: "Are the courses beginner-friendly?",
    answer: "We offer courses for all skill levels. Each learning path starts with the fundamentals to ensure you build a strong foundation before moving to advanced, production-ready engineering concepts."
  },
  {
    question: "Is there any job placement assistance available?",
    answer: "Absolutely. Our 'Mastery' level paths include dedicated career coaching, portfolio reviews, mock interviews, and exclusive introductions to our network of 500+ global hiring partners."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-[#e2e8f0] relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-violet-400/10 blur-[100px] rounded-full"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h4 className="text-[#5B58F6] font-medium mb-8 text-sm tracking-widest uppercase inline-flex items-center px-6 py-2.5 rounded-full bg-white border border-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
            <HelpCircle className="w-4 h-4 mr-3 text-[#5B58F6]" />
            Learning Support
          </h4>
          <h2 className="text-5xl font-light tracking-tight text-slate-800 font-serif leading-tight">
            Curious about <span className="italic text-[#5B58F6]">the experience?</span>
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`rounded-4xl border transition-all duration-500 overflow-hidden ${
                openIndex === i 
                ? 'bg-white border-transparent shadow-[0_20px_50px_-12px_rgba(15,23,42,0.08)]' 
                : 'bg-slate-50/50 border-slate-200/60 hover:bg-white hover:border-slate-300'
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-10 py-8 flex items-center justify-between text-left group transition-all"
              >
                <span className={`text-xl font-normal tracking-tight transition-all duration-300 ${openIndex === i ? 'text-slate-900 translate-x-2' : 'text-slate-600'}`}>
                  {faq.question}
                </span>
                <div className={`w-10 h-10 rounded-2xl border flex items-center justify-center transition-all duration-500 shadow-sm ${
                  openIndex === i 
                  ? 'bg-[#5B58F6] border-transparent rotate-180 shadow-indigo-500/20' 
                  : 'bg-white border-slate-200 group-hover:border-slate-300'
                }`}>
                  <ChevronDown className={`w-5 h-5 transition-colors ${openIndex === i ? 'text-white' : 'text-slate-400'}`} />
                </div>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out px-10 overflow-hidden ${
                  openIndex === i ? 'max-h-[300px] pb-10 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="border-t border-slate-50 pt-8 mt-2">
                  <p className="text-slate-500 font-thin leading-[1.8] text-lg max-w-3xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
            <p className="text-slate-400 text-sm tracking-wide">
                Still have questions? <a href="#" className="text-[#5B58F6] font-medium hover:underline hover:underline-offset-4 decoration-2">Contact our support team</a>
            </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
