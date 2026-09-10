'use client';

import React from 'react';

const logos = [
  { name: 'Flutterwave', src: '/image/logos/flutterwave.svg' },
  { name: 'Paystack', src: '/image/logos/paystack.png' },
  { name: 'Andela', src: '/image/logos/andela.svg' },
  { name: 'Interswitch', src: '/image/logos/interswitch.svg' },
  { name: 'MTN', src: '/image/logos/mtn.svg' },
  { name: 'Jumia', src: '/image/logos/jumia.png' },
  { name: 'Opay', src: '/image/logos/opay.svg' },
  { name: 'Kuda', src: '/image/logos/kuda.png' },
];

const LogoBlock = ({ name, src }: { name: string, src: string }) => (
  <div className="logo-hover-block h-36 md:h-44 relative bg-white overflow-hidden cursor-pointer group border-slate-100 border">
    <div className="logo-stack absolute left-0 top-0 w-full h-[200%] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-[-50%]">
      {/* Top Half */}
      <div className="h-1/2 flex items-center justify-center p-6 bg-white group-hover:bg-slate-50 transition-colors duration-300">
        <img
          src={src}
          alt={name}
          className="max-h-12 max-w-[160px] object-contain opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
        />
      </div>

      {/* Bottom Half (Action/Active State) */}
      <div className="h-1/2 flex items-center justify-center p-6 bg-slate-50">
        <img
          src={src}
          alt={name}
          className="max-h-12 max-w-[160px] object-contain opacity-100 grayscale-0 scale-105"
        />
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
              {logos.map((logo) => (
                <LogoBlock key={logo.name} name={logo.name} src={logo.src} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoGrid;
