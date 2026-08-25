import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Dribbble, Linkedin, Figma } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { FadeIn } from './FadeIn';

export function Footer() {
  const words = ['create', 'build', 'design'];
  const [index, setIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.querySelector(hash);
      if (element) {
        const yOffset = -120;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        window.history.pushState(null, '', hash);
      }
    }
  };

  return (
    <footer className="bg-black text-white pt-20 md:pt-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl lg:text-[80px] font-medium tracking-tighter leading-tight mb-16 md:mb-24">
            <span className="text-white inline-flex overflow-hidden">
              <span className="mr-3 md:mr-5">Lets</span>
              <span className="inline-grid h-[1.2em]">
                <AnimatePresence>
                  <motion.span
                    key={index}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="col-start-1 row-start-1"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span><br/>
            <span className="text-zinc-500">incredible work together.</span>
          </h2>
        </FadeIn>
        
        <div className="flex flex-col mb-20 md:mb-32">
          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pb-12 border-b border-zinc-800">
            <FadeIn delay={0.1}>
              <div className="mb-2 md:mb-3 text-zinc-500 font-medium text-sm">Email</div>
              <a href="mailto:mail@ckjha.com" className="text-white hover:text-zinc-300 transition-colors block text-lg font-bold tracking-tight">mail@ckjha.com</a>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="mb-2 md:mb-3 text-zinc-500 font-medium text-sm">Call Me</div>
              <a href="https://cal.com/ck-jhaa/project-scope-call" target="_blank" rel="noopener noreferrer" className="text-white hover:text-zinc-300 transition-colors block text-lg font-bold tracking-tight">Book Now</a>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mb-3 text-zinc-500 font-medium text-sm">Social</div>
              <div className="flex flex-wrap gap-3 items-center">
                <a href="#" className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                  <span className="font-bold text-sm leading-none">1,214</span>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-colors shrink-0">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-colors shrink-0">
                  <Dribbble className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-colors shrink-0">
                  <Figma className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/ck-jhain/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-colors shrink-0">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          </div>
          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-12">
            <FadeIn delay={0.4}>
              <div className="mb-4 text-zinc-500 font-medium text-sm">Menu</div>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4 max-w-[200px]">
                <Link to="/#work" className="text-white hover:text-zinc-300 transition-colors font-bold text-sm" onClick={(e) => handleAnchorClick(e, '#work')}>Work</Link>
                <Link to="/#services" className="text-white hover:text-zinc-300 transition-colors font-bold text-sm" onClick={(e) => handleAnchorClick(e, '#services')}>Services</Link>
                <Link to="/#pricing" className="text-white hover:text-zinc-300 transition-colors font-bold text-sm" onClick={(e) => handleAnchorClick(e, '#pricing')}>Pricing</Link>
                <Link to="/blog" className="text-white hover:text-zinc-300 transition-colors font-bold text-sm">Blog</Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className="mb-4 text-zinc-500 font-medium text-sm">Legal</div>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-white hover:text-zinc-300 transition-colors font-bold text-sm">Terms of service</a>
                <a href="#" className="text-white hover:text-zinc-300 transition-colors font-bold text-sm">Privacy Policy</a>
              </div>
            </FadeIn>
            <FadeIn delay={0.6} className="flex md:items-end justify-start md:justify-end">
              <div className="text-zinc-400 text-sm font-semibold">© 2026 CK Jha</div>
            </FadeIn>
          </div>
        </div>
      </div>
      
      {/* Massive bottom text */}
      <div className="w-full overflow-hidden flex justify-center translate-y-[18%] md:translate-y-[22%] pointer-events-none relative z-0">
         <h1 className="text-[24vw] leading-none font-semibold tracking-tighter text-white whitespace-nowrap">
           CK JHA
         </h1>
      </div>
    </footer>
  );
}
