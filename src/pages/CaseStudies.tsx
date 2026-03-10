import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';

const FadeIn: React.FC<{ children: React.ReactNode, delay?: number, className?: string }> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function CaseStudies() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="font-bold text-xl tracking-tight">CK Jha<span className="text-blue-600">.</span></Link>
          <Link 
            to="/"
            className="text-slate-600 hover:text-slate-900 font-medium transition-colors flex items-center gap-2"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </nav>

      <section className="pt-40 pb-24 bg-slate-900 text-white relative z-10 overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.15)_0%,transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Client Case Studies
              </h1>
              <p className="text-xl text-slate-400">
                A deep dive into how we engineer high-converting digital flagships for ambitious brands.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {caseStudies.map((project, i) => (
              <FadeIn key={i} delay={0.2 + (i * 0.15)} className={i % 2 === 1 ? "md:mt-24" : ""}>
                <div className="flex flex-col gap-6 group">
                  <Link to={`/case-studies/${project.id}`} className="relative block rounded-2xl overflow-hidden bg-slate-800 border border-slate-700/50 aspect-[4/3] shadow-2xl shadow-black/50 group-hover:shadow-blue-500/20 group-hover:border-blue-500/50 transition-all duration-500">
                    {/* Subtle background pattern */}
                    <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] mix-blend-overlay"></div>
                    
                    <motion.img 
                      initial={{ scale: 1.1, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 + (i * 0.15), ease: "easeOut" }}
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out relative z-10"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center backdrop-blur-sm z-20">
                      <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center">
                        <div className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-600/30 text-lg">
                          Read Case Study <ArrowUpRight size={20} />
                        </div>
                      </div>
                    </div>
                  </Link>
                  
                  <div className="px-2">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider rounded-full border border-blue-500/20">
                        {project.type}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-slate-400 text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <Link to={`/case-studies/${project.id}`} className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                      View full case study <ArrowUpRight size={18} />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
