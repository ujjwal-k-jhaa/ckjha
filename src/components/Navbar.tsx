import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MoreHorizontal, X, ArrowUpRight, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsMenuOpen(false);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking a link
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    closeMenu();
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.querySelector(hash);
      if (element) {
        const yOffset = -120; // Offset for the fixed navbar
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        window.history.pushState(null, '', hash);
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 py-6 px-6 pointer-events-none flex justify-center">
        {/* Desktop & Mobile Pill */}
        <motion.div 
          layout
          className={`flex items-center rounded-full shadow-sm px-2 py-2 pointer-events-auto overflow-hidden transition-all duration-300 ${isScrolled ? 'bg-white/70 backdrop-blur-md border border-white/20' : 'bg-white border border-zinc-200'}`}
          initial={false}
        >
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <motion.div layout className="flex items-center gap-3 pl-2 shrink-0">
              <img
                src="https://i.ibb.co/RT6cdqQ8/Ck-Jha-image.png"
                alt="CK Jha"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className={`text-sm font-bold text-zinc-900 tracking-tight transition-all duration-300 ${isScrolled ? 'pr-4 border-r border-zinc-100' : 'pr-6 md:pr-4'}`}>
                CK Jha
              </span>
            </motion.div>
          </Link>

          {/* Desktop Links */}
          <AnimatePresence mode="popLayout">
            {(!isScrolled || isMenuOpen) && (
              <motion.nav 
                key="nav-links"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
                className="hidden md:flex items-center gap-6 text-sm font-bold text-zinc-800 px-6 shrink-0 whitespace-nowrap"
              >
                <Link to="/#work" className="hover:text-black transition-colors" onClick={(e) => handleAnchorClick(e, '#work')}>Work</Link>
                <Link to="/#services" className="hover:text-black transition-colors" onClick={(e) => handleAnchorClick(e, '#services')}>Services</Link>
                <Link to="/#pricing" className="hover:text-black transition-colors" onClick={(e) => handleAnchorClick(e, '#pricing')}>Pricing</Link>
                <Link to="/blog" className="hover:text-black transition-colors" onClick={closeMenu}>Blog</Link>
              </motion.nav>
            )}
          </AnimatePresence>

          <AnimatePresence mode="popLayout">
            {(!isScrolled || isMenuOpen) ? (
              <motion.div 
                key="contact-btn"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="hidden md:flex shrink-0 pr-1 ml-4 md:ml-0 items-center gap-2"
              >
                <a
                  href="https://cal.com/ck-jhaa/project-scope-call"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-5 py-2 text-sm font-bold hover:bg-zinc-50 transition-colors text-black shrink-0 whitespace-nowrap"
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </motion.div>
            ) : (
              <motion.button 
                key="more-btn"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsMenuOpen(true)}
                className="hidden md:flex items-center justify-center w-8 h-8 rounded-full hover:bg-zinc-100 transition-colors mr-1 shrink-0 group relative overflow-hidden"
              >
                <div className="flex gap-0.5 group-hover:gap-1 transition-all duration-300">
                  <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0 }} className="w-1 h-1 bg-zinc-600 rounded-full" />
                  <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} className="w-1 h-1 bg-zinc-600 rounded-full" />
                  <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }} className="w-1 h-1 bg-zinc-600 rounded-full" />
                </div>
              </motion.button>
            )}
          </AnimatePresence>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center pr-2 shrink-0">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1 rounded-full hover:bg-zinc-100 transition-colors text-zinc-900"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden pt-32 px-6 flex flex-col gap-8"
          >
            <nav className="flex flex-col gap-6 text-2xl font-medium tracking-tight text-zinc-900">
              <Link to="/#work" onClick={(e) => handleAnchorClick(e, '#work')}>Work</Link>
              <Link to="/#services" onClick={(e) => handleAnchorClick(e, '#services')}>Services</Link>
              <Link to="/#pricing" onClick={(e) => handleAnchorClick(e, '#pricing')}>Pricing</Link>
              <Link to="/blog" onClick={closeMenu}>Blog</Link>
            </nav>
            <div className="mt-8">
              <a
                href="https://cal.com/ck-jhaa/project-scope-call"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-black text-white px-8 py-4 font-bold text-lg"
                onClick={closeMenu}
              >
                Book a call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
