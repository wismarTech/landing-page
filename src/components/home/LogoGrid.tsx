'use client';

import React from 'react';
import { Triangle, Hexagon, Box, Zap } from 'lucide-react';
import { IconifyIcon } from '@iconify/react';

const LogoBlock = ({ name, icon: Icon, extraIcon }: { name: string, icon?: any, extraIcon?: string }) => (
  <div className="logo-hover-block h-32 md:h-40 relative bg-white overflow-hidden cursor-pointer group border-slate-100 border">
    <div className="logo-stack absolute left-0 top-0 w-full h-[200%] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-[-50%]">
      {/* Top Half */}
      <div className="h-1/2 flex items-center justify-center p-6 bg-white group-hover:bg-slate-50 transition-colors duration-300">
        <div className="flex items-center justify-center gap-3 text-slate-400 group-hover:text-slate-900 transition-all duration-300 group-hover:scale-105">
          {Icon && <Icon className="w-7 h-7" />}
          <span className="text-[22px] md:text-[24px] font-medium tracking-tight">
            {name}
          </span>
        </div>
      </div>

      {/* Bottom Half (Action/Active State) */}
      <div className="h-1/2 flex items-center justify-center p-6 bg-slate-50">
        <div className="flex items-center justify-center gap-3 text-slate-900">
          {Icon && <Icon className="w-7 h-7" />}
          <span className="text-[22px] md:text-[24px] font-medium tracking-tight">
            {name}
          </span>
        </div>
      </div>
    </div>
  </div>
);

const LogoGrid = () => {
  return (
    <section className="overflow-hidden bg-[#FAFAFA] border-slate-100 border-b pt-16 pb-32 relative">
      <div className="z-10 text-center max-w-7xl mx-auto px-6 relative">
        <p className="text-sm text-slate-500 font-medium mb-12 tracking-widest uppercase">
          Our graduates are hired by industry leaders
        </p>

        <div className="relative w-full max-w-6xl mx-auto">
          <div className="bg-white border border-slate-200 rounded-[28px] overflow-hidden shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 bg-slate-100 gap-[px]">
              <LogoBlock name="Vertex" icon={Triangle} />
              <LogoBlock name="Nexus" icon={Hexagon} />
              <LogoBlock name="Quantum" icon={Box} />
              <LogoBlock name="Echo" icon={Zap} />
              {/* Add more as needed or map from a data array */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoGrid;
