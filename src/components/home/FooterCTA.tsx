'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { ArrowRight, Globe, TrendingUp, Layout, Compass } from 'lucide-react';

const FooterCTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3.6;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Core solid sphere
    const coreGeometry = new THREE.SphereGeometry(1, 64, 64);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x020617,
      transparent: true,
      opacity: 0.98
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    globeGroup.add(core);

    // Wireframe icosahedron
    const geometry = new THREE.IcosahedronGeometry(1.015, 8);
    const edges = new THREE.EdgesGeometry(geometry);
    const wireMaterial = new THREE.LineBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.25
    });
    const wire = new THREE.LineSegments(edges, wireMaterial);
    globeGroup.add(wire);

    // Glowing points at vertices
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x22d3ee,
      size: 0.018,
      transparent: true,
      opacity: 0.8
    });
    const points = new THREE.Points(geometry, pointsMaterial);
    globeGroup.add(points);

    // Atmosphere
    const atmGeometry = new THREE.SphereGeometry(1.15, 32, 32);
    const atmMaterial = new THREE.MeshBasicMaterial({
      color: 0x4f46e5,
      transparent: true,
      opacity: 0.04,
      side: THREE.BackSide
    });
    const atmosphere = new THREE.Mesh(atmGeometry, atmMaterial);
    scene.add(atmosphere);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.2;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      coreGeometry.dispose();
      atmGeometry.dispose();
    };
  }, []);

  return (
    <section className="antialiased overflow-hidden selection:bg-indigo-500/30 selection:text-indigo-200 lg:py-32 py-20 text-slate-300 relative bg-[#020617]">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_60%)] blur-[100px]" />
        <div className="absolute top-[40%] -right-[20%] w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.12),transparent_60%)] blur-[100px]" />
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundSize: '40px 40px',
          backgroundImage: 'linear-gradient(to right,rgba(255,255,255,0.03) 1px,transparent 1px), linear-gradient(to bottom,rgba(255,255,255,0.03) 1px,transparent 1px)',
          maskImage: 'radial-gradient(circle at center,black 40%,transparent 80%)'
        }} />
      </div>

      <div className="max-w-[1280px] w-full mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="flex flex-col items-start space-y-8 max-w-xl">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium shadow-[0_0_15px_rgba(99,102,241,0.15)] backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 relative">
              <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75 animate-ping"></span>
            </span>
            Accelerate your tech career
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-medium tracking-tight leading-[1.05] text-white">
            Unlock <br className="hidden sm:block" />
            your next <br className="hidden sm:block" />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-400 via-cyan-300 to-indigo-400">
              career move.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-light max-w-[440px]">
            Ready to transition into tech? Join the leading platform for technical education and build a future-proof career with industry experts.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-slate-950 font-medium text-sm flex items-center justify-center gap-2 hover:bg-slate-100 transition-all shadow-xl hover:-translate-y-0.5 active:scale-95 group">
              Get Started for Free
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white font-medium text-sm flex items-center justify-center hover:bg-white/10 transition-all hover:-translate-y-0.5 active:scale-95">
              View Bootcamps
            </button>
          </div>
        </div>

        {/* Globe Container */}
        <div className="relative w-full aspect-square max-w-[600px] mx-auto lg:h-[600px] flex items-center justify-center">
          <div ref={containerRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing z-10" />
          
          {/* Floating Labels */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-20">
            <div className="absolute top-[15%] left-[5%] bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-full px-4 py-2 text-xs font-medium text-slate-200 shadow-2xl flex items-center gap-2 animate-bounce">
               <Globe className="w-3 h-3 text-indigo-400" /> Global community
            </div>
            <div className="absolute top-[28%] right-[0%] bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-full px-4 py-2 text-xs font-medium text-slate-200 shadow-2xl flex items-center gap-2 animate-bounce" style={{ animationDelay: '0.5s' }}>
               <TrendingUp className="w-3 h-3 text-cyan-400" /> Job placement
            </div>
            <div className="absolute bottom-[22%] left-[2%] bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-full px-4 py-2 text-xs font-medium text-slate-200 shadow-2xl flex items-center gap-2 animate-bounce" style={{ animationDelay: '1s' }}>
               <Layout className="w-3 h-3 text-indigo-400" /> Skill mastery
            </div>
            <div className="absolute bottom-[12%] right-[8%] bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-full px-4 py-2 text-xs font-medium text-slate-200 shadow-2xl flex items-center gap-2 animate-bounce" style={{ animationDelay: '1.5s' }}>
               <Compass className="w-3 h-3 text-cyan-400" /> Expert mentors
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
