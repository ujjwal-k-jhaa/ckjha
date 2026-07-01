import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Case-Studies", href: "/projects" }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    if (pathname === '/' && href.startsWith('/#')) {
      e.preventDefault();
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          scrolled ? "bg-neutral-950/70 backdrop-blur-md border-b border-white/10 shadow-lg" : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className={`mx-auto max-w-7xl px-6 flex items-center justify-between transition-all duration-500 ${scrolled ? "py-4" : "py-6"}`}>
          <div className="flex-1">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <div className={`w-8 h-8 flex items-center justify-center transition-all group-hover:scale-105 overflow-hidden`}>
                <img src="https://i.ibb.co/SDkfVt2h/Untitled-June-30-2026-at-11-24-03-1.png" alt="CK Jha" className="w-full h-full object-contain" />
              </div>
              <span className={`font-display font-medium tracking-tight transition-all duration-300 block text-lg text-white`}>
                CK Jha.
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-8">
            <div className={`flex items-center gap-1`}>
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm font-medium transition-all px-4 py-2 rounded-full hover:text-brand text-neutral-300 hover:bg-neutral-800/50`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex flex-1 justify-end items-center">
            <a 
              href="https://cal.com/ukjha/scopecall" 
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden text-sm font-medium transition-all rounded-full hover:scale-105 flex items-center justify-center hover:shadow-[0_0_15px_rgba(83,211,102,0.4)] ${
                scrolled 
                  ? "bg-brand text-neutral-950 px-5 py-2.5" 
                  : "bg-brand text-neutral-950 px-6 py-3"
              }`}
            >
              <div className="absolute inset-0 bg-[#183725] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">Start a project</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex-1 flex justify-end">
            <button 
              className={`p-2 rounded-full transition-colors text-white hover:bg-neutral-800`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-neutral-950 px-6 py-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <div className={`w-8 h-8 flex items-center justify-center overflow-hidden`}>
                  <img src="https://i.ibb.co/SDkfVt2h/Untitled-June-30-2026-at-11-24-03-1.png" alt="CK Jha" className="w-full h-full object-contain" />
                </div>
                <span className="text-xl font-display font-medium tracking-tight text-white">
                  CK Jha.
                </span>
              </Link>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-neutral-400 hover:text-brand"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex flex-col gap-6 text-3xl font-display font-medium">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-neutral-400 hover:text-brand transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
