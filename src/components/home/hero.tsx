'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowRight, Star, Coffee, Activity, Scissors, Check } from 'lucide-react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Aura Canvas Animation
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width: number, height: number, time = 0;

    const resize = () => {
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const animate = () => {
      time += 0.002;
      ctx.fillStyle = '#FAFAFA';
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'multiply';

      const numFolds = 15;
      for (let i = 0; i < numFolds; i++) {
        const normalizedX = i / numFolds;
        const xPos = (normalizedX * width) + Math.sin(time * 2 + i) * (width * 0.1);
        const foldWidth = (width / numFolds) * 4;
        const waveIntensity = (Math.sin(time * 2 + i * 0.5) + 1) * 0.5;

        const grad = ctx.createLinearGradient(0, 0, 0, height);
        grad.addColorStop(0, `rgba(250, 250, 250, 0)`);
        grad.addColorStop(0.5, `rgba(91, 88, 246, ${waveIntensity * 0.08})`);
        grad.addColorStop(1, `rgba(91, 88, 246, ${waveIntensity * 0.15})`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(xPos - foldWidth, 0);
        ctx.bezierCurveTo(xPos, height * 0.3, xPos - foldWidth, height * 0.7, xPos + foldWidth, height);
        ctx.lineTo(xPos + foldWidth * 2, height);
        ctx.bezierCurveTo(xPos + foldWidth, height * 0.7, xPos + foldWidth * 2, height * 0.3, xPos + foldWidth, 0);
        ctx.fill();
      }

      ctx.globalCompositeOperation = 'source-over';
      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener('resize', resize);
  }, []);

  useEffect(() => {
    // Chart.js Initialization
    const ctx = chartRef.current?.getContext('2d');
    if (!ctx) return;

    const gradient = ctx.createLinearGradient(0, 0, 0, 64);
    gradient.addColorStop(0, 'rgba(99, 102, 241, 0.2)');
    gradient.addColorStop(1, 'rgba(99, 102, 241, 0.0)');

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [{
          data: [4200, 5800, 5100, 8400, 7900, 10500, 12450],
          borderColor: '#6366f1',
          borderWidth: 2,
          tension: 0.4,
          pointRadius: 0,
          fill: true,
          backgroundColor: gradient
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
        scales: {
          x: { display: false },
          y: { display: false, min: 3000 }
        }
      }
    });

    return () => chart.destroy();
  }, []);

  return (
    <header className="lg:pt-32 lg:pb-20 overflow-hidden bg-[#FAFAFA] pt-24 pb-16 relative min-h-screen flex items-center">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 w-full h-full pointer-events-none opacity-60"
      />

      <div className="grid lg:grid-cols-2 max-w-7xl z-10 mx-auto px-6 relative gap-12 items-center w-full">
        {/* Left Content */}
        <div className="max-w-2xl">
          <h1 className="lg:text-8xl leading-[1.1] text-7xl font-light text-slate-900 tracking-tighter font-serif mb-8">
            Master the skills
            <br />
            that <span className="italic text-indigo-500">define the future</span>
          </h1>

          <p className="text-3xl text-slate-500 mb-10 leading-relaxed max-w-2xl font-thin tracking-tight">
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

            <button className="relative group outline-none cursor-pointer px-8 py-[18px] rounded-full bg-white border border-slate-200 text-slate-700 text-base font-normal tracking-widest uppercase hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow active:scale-95">
              Browse Courses
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-1 transition-all" />
            </button>
          </div>
        </div>

        {/* Right Dashboard Mockup */}
        <div className="hidden lg:block z-10 w-full h-[600px] relative">
          <div className="-translate-y-1/2 lg:left-16 w-[860px] h-[540px] absolute top-1/2 left-8">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-linear-to-trrom-[#5B58F6]/20 via-transparent to-violet-300/10 blur-3xl rounded-full z-0 pointer-events-none -translate-x-10 translate-y-10"></div>

            {/* Main Dashboard Window */}
            <div className="flex flex-col overflow-hidden z-10 transition-all duration-500 ease-out hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.14)] bg-linear-to-b from-white to-slate-50 w-[740px] h-[540px] border-slate-200/60 border rounded-4xl absolute top-0 right-0 backdrop-blur-md" style={{
              boxShadow: '0 30px 60px -15px rgba(15,23,42,0.10), 0 10px 24px -10px rgba(15,23,42,0.08), inset 0 2px 4px rgba(255,255,255,0.8), inset 0 -1px 2px rgba(0,0,0,0.04)'
            }}>
              {/* Browser Header */}
              <div className="h-12 bg-linear-to-b from-slate-50/90 to-slate-100/50 border-b border-slate-200/80 flex items-center px-4 shrink-0 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                <div className="flex gap-2 w-20 pl-2">
                  <div className="w-3 h-3 rounded-full bg-slate-200 shadow-inner"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-200 shadow-inner"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-200 shadow-inner"></div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-slate-100/80 border border-slate-200/80 rounded-xl py-1.5 px-4 flex items-center gap-2 shadow-inner w-[290px] justify-center text-xs text-slate-500">
                    learn.wizmar.com
                  </div>
                </div>
                <div className="w-20"></div>
              </div>

              {/* Main View */}
              <div className="flex-1 p-8">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-2 h-2 rounded-full bg-[#5B58F6] animate-pulse"></div>
                      <span className="text-xs uppercase tracking-[0.24em] text-slate-400 font-medium">Learning Summary</span>
                    </div>
                    <h2 className="text-3xl font-normal text-slate-900 tracking-tight">Active Students</h2>
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400 font-medium mb-2">Graduation Rate</p>
                    <p className="text-2xl font-normal tracking-tight text-slate-900">94.2%</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { label: 'Completed', val: '1,245' },
                    { label: 'Certificates', val: '842' },
                    { label: 'Courses', val: '48 Topics' }
                  ].map((m, i) => (
                    <div key={i} className="rounded-2xl border border-slate-200/60 bg-white p-4 shadow-sm">
                      <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">{m.label}</p>
                      <p className="text-lg text-slate-900">{m.val}</p>
                    </div>
                  ))}
                </div>

                {/* Table Mockup */}
                <div className="rounded-2xl border border-slate-200/60 bg-white overflow-hidden shadow-sm">
                  <div className="grid grid-cols-4 p-4 text-[10px] uppercase tracking-widest text-slate-400 border-b bg-slate-50">
                    <div>Student</div>
                    <div>Course</div>
                    <div className="text-right">Progress</div>
                    <div className="text-right">Status</div>
                  </div>
                  {[
                    { name: 'Alex Johnson', market: 'Next.js Mastery', rev: '85%', vol: 'Active', icon: Star, color: 'text-amber-500' },
                    { name: 'Sarah Chen', market: 'UI/UX Design', rev: '100%', vol: 'Certified', icon: Check, color: 'text-blue-500' },
                    { name: 'Mike Ross', market: 'AI Fundamentals', rev: '45%', vol: 'Active', icon: Activity, color: 'text-emerald-500' },
                    { name: 'Emma Wilson', market: 'Cyber Security', rev: '12%', vol: 'Enrolled', icon: Scissors, color: 'text-purple-500' }
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-4 p-4 items-center border-b last:border-0 hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center ${row.color}`}>
                          <row.icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium text-slate-900">{row.name}</span>
                      </div>
                      <div className="text-sm text-slate-500">{row.market}</div>
                      <div className="text-sm text-right text-slate-700">{row.rev}</div>
                      <div className="text-sm text-right text-slate-900 font-medium">{row.vol}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Receipt Card */}
            <div className="transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-2xl cursor-pointer group bg-neutral-50 w-[340px] z-20 border-slate-200/60 border rounded-4xl p-7 absolute top-14 left-0 shadow-xl">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h3 className="text-lg font-medium tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">Certificate Issued</h3>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-medium mt-0.5">Verification Complete</p>
                </div>
                <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100">
                  <Check className="w-3 h-3 stroke-3" />
                </div>
              </div>

              <div className="mb-2">
                <p className="text-3xl font-medium tracking-tight text-slate-900">Next.js Expert</p>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-md border border-emerald-100">
                    ID: 8921-X
                  </span>
                  <span className="text-xs text-slate-400">Verified by Wizmar</span>
                </div>
              </div>

              <div className="h-16 w-full mb-5">
                <canvas ref={chartRef} />
              </div>

              <div className="space-y-3 text-sm border-t pt-4">
                <div className="flex justify-between">
                  <span className="text-slate-500">Student ID</span>
                  <span className="font-medium text-slate-900">#ED-2024-89</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Achievement</span>
                  <span className="font-medium text-slate-900">Level 4 Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;