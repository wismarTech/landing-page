'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { serviceData } from '@/src/lib/data';

const ServiceContentBlock = ({
  service,
  index,
  sectionRef
}: {
  service: any,
  index: number,
  sectionRef: (el: HTMLDivElement | null) => void
}) => {
  return (
    <motion.div
      id={`service-${index}`}
      ref={sectionRef}
      initial={{ opacity: 0.3, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center py-16 lg:py-32"
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

// The stacked word on the right. Each word sits absolutely on top of the
// last one and crossfades + slides in when it becomes active — this is the
// "stack scroll" look: only one word is ever fully visible at a time.
const StackWord = ({
  title,
  isActive,
  direction
}: {
  title: string;
  isActive: boolean;
  direction: 'up' | 'down';
}) => {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.span
          key={title}
          initial={{ opacity: 0, y: direction === 'down' ? 48 : -48 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: direction === 'down' ? -48 : 48 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center font-serif font-light text-5xl xl:text-7xl text-slate-900 tracking-tighter leading-[1.05]"
        >
          {title}
        </motion.span>
      )}
    </AnimatePresence>
  );
};

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const directionRef = useRef<'up' | 'down'>('down');
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setSectionRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    sectionRefs.current[index] = el;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let minDist = Infinity;
      let newIndex = activeIndexRef.current;

      sectionRefs.current.forEach((ref) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const dist = Math.abs(rect.top);
        if (dist < minDist) {
          minDist = dist;
          newIndex = Number(ref.id.replace('service-', ''));
        }
      });

      if (newIndex !== activeIndexRef.current) {
        directionRef.current = newIndex > activeIndexRef.current ? 'down' : 'up';
        activeIndexRef.current = newIndex;
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="courses" className="bg-[#eef2f6] relative px-6 lg:px-24 border-t border-slate-100">
      {/*
        IMPORTANT: overflow-hidden must NOT live on this <section>, because
        this section is the containing block for the sticky right column
        below. An ancestor with overflow:hidden clips position:sticky
        elements, which is why the right side was disappearing as you
        scrolled the left column. The decorative grid is wrapped in its own
        absolutely-positioned, clipped layer instead, so the section itself
        stays overflow-visible.
      */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
      </div>

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
                sectionRef={setSectionRef(index)}
              />
            ))}
          </div>

          {/* Right Block: Sticky stacked title.
              - Fixed height (h-screen) so it never grows/shrinks and pushes layout.
              - top-0 + self-start so it sticks to the viewport as the left
                column scrolls past it.
              - Each word is absolutely positioned inside a relatively
                positioned box so words stack on top of one another instead
                of pushing the layout around when they swap. */}
          <div className="hidden lg:block sticky top-0 self-start h-screen">
            <div className="h-full flex flex-col justify-center pl-16 border-l border-slate-200/50 relative">

              {/* eyebrow: current step index, not decorative — tells the
                  reader where they are in the sequence */}
              <span className="text-sm font-medium tracking-[0.2em] uppercase text-slate-400 mb-6">
                {String(activeIndex + 1).padStart(2, '0')} / {String(serviceData.length).padStart(2, '0')}
              </span>

              {/* the actual stacked word block — fixed height container,
                  words crossfade inside it */}
              <div className="relative h-[9rem] xl:h-[11rem] w-full overflow-hidden">
                {serviceData.map((service, index) => (
                  <StackWord
                    key={index}
                    title={service.title}
                    isActive={activeIndex === index}
                    direction={directionRef.current}
                  />
                ))}
              </div>

              <p className="text-base text-slate-500 font-thin leading-relaxed tracking-tight max-w-md mt-4">
                {serviceData[activeIndex].summary}
              </p>

              <div className="absolute top-0 right-[-10vw] w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;