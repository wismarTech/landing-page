'use client';

import React, { useState } from 'react';
import { Shield, Bolt, Globe, CheckCircle2, XCircle } from 'lucide-react';
import { IconifyIcon } from '@iconify/react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const tiers = [
    {
      name: 'Self-Paced',
      description: 'Foundational courses for self-learners',
      monthlyPrice: 29,
      yearlyPrice: 19,
      icon: Shield,
      features: [
        { text: 'Access to 50+ recorded courses', included: true },
        { text: 'Community slack access', included: true },
        { text: 'Digital certificates', included: true },
        { text: '1-on-1 mentor calls', included: false },
      ],
      buttonText: 'Start Learning',
      highlight: false
    },
    {
      name: 'Pro Member',
      description: 'Advanced engineering & career prep',
      monthlyPrice: 89,
      yearlyPrice: 59,
      icon: Bolt,
      features: [
        { text: 'All self-paced content', included: true },
        { text: 'Weekly live workshops', included: true },
        { text: 'Career coaching & resume review', included: true },
        { text: 'Project-based certification', included: true },
      ],
      buttonText: 'Go Pro',
      highlight: true
    },
    {
      name: 'Bootcamp',
      description: 'Zero to Job in 12 weeks',
      monthlyPrice: 199,
      yearlyPrice: 149,
      icon: Globe,
      features: [
        { text: 'Intensive 12-week curriculum', included: true },
        { text: 'Unlimited 1-on-1 mentorship', included: true },
        { text: 'Hiring partner introductions', included: true },
        { text: '100% money-back job guarantee', included: true },
      ],
      buttonText: 'Apply Now',
      highlight: false
    }
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-slate-50 py-24 px-6 relative overflow-hidden" style={{ backgroundImage: 'radial-gradient(#d8d4fe 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-16 relative z-10">
        <header className="flex flex-col gap-10 text-center items-center">
          <div className="space-y-6 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50/90 border border-violet-200/60 text-violet-700 text-xs font-medium tracking-wide shadow-sm backdrop-blur-md">
              Flexible Enrollment Plans
            </div>
            <h1 className="text-4xl lg:text-6xl font-medium tracking-tight leading-tight max-w-2xl text-slate-900">
              Choose your
              <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-500 to-purple-600"> learning path</span>
            </h1>
            <p className="text-base lg:text-lg text-slate-500 font-normal max-w-xl leading-relaxed">
              Invest in your future with structured programs designed for every 
              stage of your tech career. From beginner to job-ready engineer.
            </p>
          </div>

          {/* Pricing Toggle */}
          <div 
            onClick={() => setIsYearly(!isYearly)}
            className="group relative w-[260px] h-16 rounded-full p-1.5 flex items-center cursor-pointer transition-all duration-500 bg-slate-200 border border-slate-300 shadow-inner"
          >
            <div className="absolute inset-0 flex items-center justify-between px-7 pointer-events-none select-none text-[17px] font-medium">
              <span className={isYearly ? 'text-slate-500' : 'text-slate-900 transition-colors'}>Monthly</span>
              <span className={isYearly ? 'text-slate-900 transition-colors' : 'text-slate-500'}>Annually</span>
            </div>
            <div 
              className={`absolute top-[6px] h-[52px] w-[146px] rounded-full flex items-center justify-center gap-3 px-5 bg-white shadow-md border border-slate-100 transition-all duration-300 ${isYearly ? 'left-[108px]' : 'left-[6px]'}`}
            >
                <span className="text-[17px] font-medium text-slate-800">{isYearly ? 'Annually' : 'Monthly'}</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto w-full">
          {tiers.map((tier, i) => (
            <div 
              key={i} 
              className={`relative flex flex-col p-8 rounded-[24px] border transition-all duration-300 hover:-translate-y-2 group ${
                tier.highlight 
                ? 'bg-white shadow-xl ring-1 ring-violet-500/20 border-violet-100' 
                : 'bg-white/80 backdrop-blur-sm border-slate-200 shadow-sm hover:shadow-xl'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-linear-to-r from-violet-500 to-purple-500 text-white text-xs px-4 py-1.5 rounded-full font-medium tracking-wide shadow-md flex items-center gap-2">
                   Most Popular
                </div>
              )}

              <div className="mb-8">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors ${tier.highlight ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-50 text-slate-600 border border-slate-200'}`}>
                  <tier.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium tracking-tight text-slate-900 mb-2">{tier.name}</h3>
                <p className="text-sm text-slate-500 font-normal">{tier.description}</p>
              </div>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-medium tracking-tight text-slate-900 font-mono">
                  ${isYearly ? tier.yearlyPrice : tier.monthlyPrice}
                </span>
                <span className="text-sm text-slate-500 font-normal">/mo</span>
              </div>

              <ul className="flex flex-col gap-4 text-sm font-normal text-slate-600 flex-1 mb-8">
                {tier.features.map((feature, j) => (
                  <li key={j} className={`flex items-start gap-3 ${feature.included ? '' : 'text-slate-400'}`}>
                    {feature.included 
                      ? <CheckCircle2 className="text-violet-500 w-5 h-5 shrink-0" />
                      : <XCircle className="text-slate-300 w-5 h-5 shrink-0" />
                    }
                    {feature.text}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3.5 rounded-xl border transition-all duration-200 font-medium ${
                tier.highlight 
                ? 'bg-indigo-600 text-white border-transparent hover:shadow-lg hover:shadow-indigo-200' 
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
              }`}>
                {tier.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
