'use client';

import React from 'react';
import Navbar from '@/src/ui/reuseable/navbar';
import Hero from './hero';
import LogoGrid from './LogoGrid';
import Services from './Services';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import FooterCTA from './FooterCTA';
import Footer from '@/src/ui/reuseable/footer';

const HomeIndex = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">
        <Hero />
        <LogoGrid />
        <Services />
        <Testimonials />
        <FAQ />
        {/* <Pricing /> */}
        <FooterCTA />
      </main>
      <Footer />
    </div>
  );
};

export default HomeIndex;