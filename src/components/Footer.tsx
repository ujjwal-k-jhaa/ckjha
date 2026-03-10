import { ArrowUpRight, Globe } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      // The scroll will be handled by a useEffect in Home or we can just let the browser handle the hash
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 text-center text-sm relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 text-left mb-16">
          <div>
            <div className="font-bold text-2xl tracking-tight text-white mb-4">CK Jha<span className="text-blue-500">.</span></div>
            <p className="text-slate-400 max-w-xs leading-relaxed">
              Strategic web design for businesses that want to turn traffic into revenue.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-xs">Navigation</h4>
            <ul className="space-y-3">
              <li><button onClick={() => handleScrollToSection('framework')} className="hover:text-blue-400 transition-colors">Framework</button></li>
              <li><button onClick={() => handleScrollToSection('services')} className="hover:text-blue-400 transition-colors">Services</button></li>
              <li><button onClick={() => handleScrollToSection('strategy-call')} className="hover:text-blue-400 transition-colors">Strategy Call</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-xs">Contact</h4>
            <ul className="space-y-3">
              <li><a href="mailto:mail@ckjha.com" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ArrowUpRight size={14} /> mail@ckjha.com</a></li>
              <li className="flex items-center gap-2"><Globe size={14} /> Partnering with ambitious brands globally</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()}. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/ckjhaa/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Massive Footer Logo */}
      <div className="mt-12 w-full flex justify-center pointer-events-none select-none">
        <h1 className="text-[18vw] font-black leading-none tracking-tighter text-slate-800/50 whitespace-nowrap">
          CK JHA.
        </h1>
      </div>
    </footer>
  );
}
