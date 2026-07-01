import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-950 pt-16 pb-8 px-6 border-t border-neutral-900 relative z-10 font-switzer">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-24">
          <div className="flex gap-12 md:gap-24">
            <div>
              <h4 className="text-white font-medium mb-6">Navigation</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/#work" className="text-neutral-400 hover:text-brand transition-colors">Work</Link>
              </li>
              <li>
                <Link to="/#services" className="text-neutral-400 hover:text-brand transition-colors">Services</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6">Social</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1 text-neutral-400 hover:text-brand transition-colors">
                  Twitter <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1 text-neutral-400 hover:text-brand transition-colors">
                  LinkedIn <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
            </ul>
          </div>
          </div>
          
          <div className="md:text-right flex flex-col md:items-end">
            <h3 className="text-3xl font-medium text-white mb-3 tracking-tight">Ready to start?</h3>
            <p className="text-neutral-400 mb-8 max-w-sm font-light">Let's discuss your project and see how we can build something great together.</p>
            <a href="https://cal.com/ukjha/scopecall" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden inline-flex items-center gap-2 text-neutral-950 bg-brand transition-all px-6 py-3 rounded-full font-medium hover:scale-105 hover:shadow-[0_0_20px_rgba(83,211,102,0.4)]">
              <div className="absolute inset-0 bg-[#183725] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
              <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors duration-500">
                Book a call <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>
          </div>
        </div>
        
        <div className="w-full flex items-center justify-center py-4 md:py-8 overflow-hidden pointer-events-none select-none">
          <span className="text-[18vw] leading-none font-display font-bold tracking-tighter text-neutral-800/40">
            CK Jha.
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-neutral-900 text-sm text-neutral-500 gap-4">
          <p>&copy; {currentYear} CK Jha. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
