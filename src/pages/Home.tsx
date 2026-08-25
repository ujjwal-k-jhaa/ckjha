import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Work } from '../components/Work';
import { BigQuote } from '../components/BigQuote';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { Pricing } from '../components/Pricing';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { Blog } from '../components/Blog';
import { Footer } from '../components/Footer';

export function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout ensures the DOM has rendered before we scroll
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const yOffset = -120; // Offset for fixed navbar
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-zinc-950 font-sans selection:bg-zinc-900/20">
      <Navbar />
      <main className="divide-y divide-zinc-200/50">
        <Hero />
        <Work />
        <BigQuote />
        <Services />
        <About />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
