import { motion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const tools = [
  { name: "HTML5", slug: "html5" },
  { name: "CSS3", slug: "css3", url: "https://i.ibb.co/93Gcp4P8/css-3.png" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Bootstrap", slug: "bootstrap" },
  { name: "React JS", slug: "react" },
  { name: "Next JS", slug: "nextdotjs", color: "white" },
  { name: "Angular", slug: "angular", url: "https://i.ibb.co/6JfX063j/programing.png" },
  { name: "Figma", slug: "figma" },
  { name: "Framer", slug: "framer", color: "white" },
  { name: "Webflow", slug: "webflow" },
  { name: "WordPress", slug: "wordpress" },
  { name: "Wix", slug: "wix" }
];

export function Hero() {
  const { pathname } = useLocation();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
    <section className="relative min-h-[95vh] flex flex-col justify-center pt-32 pb-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-neutral-800/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-neutral-900/30 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm text-sm font-medium text-neutral-300"
          >
            <div className="w-2 h-2 rounded-full bg-brand animate-pulse shadow-[0_0_8px_rgba(83,211,102,0.6)]" />
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-[4.5rem] font-display font-medium tracking-tighter leading-[1.1] mb-8"
          >
            I help businesses win more customers with high-converting websites.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-12 font-light leading-relaxed"
          >
            I help businesses grow online with websites that are built for performance, optimized for conversions, and designed to drive measurable results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <a
              href="https://cal.com/ukjha/scopecall"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden flex items-center justify-center gap-2 bg-brand text-neutral-950 px-8 py-4 rounded-full font-semibold transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto hover:shadow-[0_0_20px_rgba(83,211,102,0.4)]"
            >
              <div className="absolute inset-0 bg-[#183725] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
              <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors duration-500">
                <Phone className="w-4 h-4" />
                Book a Call
              </span>
            </a>
            <Link
              to="/#work"
              onClick={(e) => handleLinkClick(e, "/#work")}
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 transition-colors w-full sm:w-auto"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-neutral-400" />
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Footer of Hero - Tech Stack Marquee */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 mt-16 lg:mt-24 overflow-hidden pointer-events-none"
      >
        <p className="text-left text-sm font-medium text-neutral-500 mb-8 uppercase tracking-widest">
          Powered By Latest Tech and tools
        </p>
        
        {/* Marquee Container */}
        <div className="w-full md:w-3/4 relative overflow-hidden">
          <div className="flex w-max animate-marquee gap-12 sm:gap-16 py-2">
            {/* Repeat the list to make infinite scroll smooth */}
            {[...tools, ...tools, ...tools, ...tools].map((tool, idx) => (
              <div 
                key={idx} 
                className="flex-none opacity-50 hover:opacity-100 transition-opacity duration-300"
              >
                <img 
                  src={tool.url || (tool.color ? `https://cdn.simpleicons.org/${tool.slug}/${tool.color}` : `https://cdn.simpleicons.org/${tool.slug}`)} 
                  alt={tool.name} 
                  title={tool.name}
                  className="w-10 h-10 sm:w-14 sm:h-14 object-contain"
                />
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for smooth fade on edges */}
          <div className="absolute top-0 left-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
}
