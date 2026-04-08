'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { serviceData } from '@/src/lib/data';

// Component for each scrollable content block on the left
const ServiceContentBlock = ({ 
  service, 
  index, 
  setActiveIndex 
}: { 
  service: any, 
  index: number, 
  setActiveIndex: (i: number) => void 
}) => {
  const ref = useRef(null);
  // Trigger when the block is roughly centered in the viewport
  const isInView = useInView(ref, { 
    margin: "-40% 0px -40% 0px"
  });

  useEffect(() => {
    if (isInView) {
      setActiveIndex(index);
    }
  }, [isInView, index, setActiveIndex]);

  return (
    <motion.div 
      id={`service-${index}`}
      ref={ref}
      initial={{ opacity: 0.3, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-[70vh] flex flex-col justify-center py-24 lg:py-48"
    >
      <div className="flex items-center gap-6 mb-10">
        <div className="w-16 h-16 rounded-[1.5rem] flex items-center justify-center bg-white border border-slate-200/50 shadow-sm">
          <Sparkles className="w-6 h-6 text-[#5B58F6]" />
        </div>
        <span className="font-light text-3xl text-slate-800 font-serif tracking-tight">
          {service.title}
        </span>
      </div>

      <h3 className="text-4xl lg:text-6xl font-light text-slate-900 tracking-tighter mb-8 font-serif leading-[1.1]">
        {service.desc}
      </h3>

      <p className="text-xl text-slate-500 font-thin mb-12 leading-relaxed max-w-xl tracking-tight">
        {service.summary}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10 text-sm font-medium mb-16 bg-white/40 backdrop-blur-sm border border-white/60 p-10 rounded-[3rem] shadow-sm">
        {service.points.map((point: any, i: number) => (
          <div key={i} className="flex items-center gap-4 group cursor-default">
            <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
            </div>
            <span className="text-slate-600 text-lg font-light transition-colors group-hover:text-[#5B58F6]">
                {point.title}
            </span>
          </div>
        ))}
      </div>

      <button className="bg-[#5B58F6] shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all w-fit px-10 py-5 text-white rounded-full inline-flex items-center gap-5 group">
        <span className="text-lg font-medium tracking-tight">Explore Roadmap</span>
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:translate-x-2 transition-transform duration-500">
          <ArrowRight className="w-5 h-5" />
        </div>
      </button>
    </motion.div>
  );
};

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#eef2f6] relative px-6 lg:px-24 overflow-hidden border-t border-slate-100">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Block */}
        <div className="pt-32 pb-12 text-center lg:text-left">
           <h4 className="text-[#5B58F6] font-medium mb-10 text-sm tracking-[0.2em] uppercase inline-flex items-center justify-center px-8 py-3 rounded-full bg-white border border-slate-200/50 shadow-sm">
            <div className="w-2 h-2 rounded-full mr-4 bg-[#5B58F6] shadow-[0_0_8px_rgba(91,88,246,0.6)] animate-pulse"></div>
            Learning Pathways
          </h4>
        </div>

        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          {/* Left Block: Scrollable Content Blocks */}
          <div className="relative">
            {serviceData.map((service, index) => (
              <ServiceContentBlock 
                key={index} 
                service={service} 
                index={index} 
                setActiveIndex={setActiveIndex} 
              />
            ))}
          </div>

          {/* Right Block: Sticky Titles */}
          <div className="hidden lg:flex sticky top-0 h-screen flex-col justify-center">
             <div className="space-y-12 pl-16 border-l border-slate-200/50 relative">
                
                {serviceData.map((service, index) => (
                    <motion.div 
                        key={index}
                        animate={{
                            opacity: activeIndex === index ? 1 : 0.1,
                            scale: activeIndex === index ? 1.05 : 0.95,
                            x: activeIndex === index ? 20 : 0
                        }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                        className="cursor-default flex items-center group"
                    >
                        <div className={`absolute left-[-2px] h-full w-1 rounded-full transition-all duration-700 ${activeIndex === index ? 'bg-[#5B58F6]' : 'bg-transparent'}`}></div>
                        
                        <span className={`text-5xl font-serif tracking-tighter block transition-all duration-700 ${activeIndex === index ? 'text-[#5B58F6] font-bold' : 'text-slate-400 font-light italic'}`}>
                            {service.title}
                        </span>
                    </motion.div>
                ))}

                {/* Vertical Decorative Element */}
                <div className="absolute top-0 right-[-10vw] w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full -z-10"></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
