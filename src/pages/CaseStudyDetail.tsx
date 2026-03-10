import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';
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

export default function CaseStudyDetail() {
  const { id } = useParams();
  const project = caseStudies.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/" className="text-blue-400 hover:text-blue-300 flex items-center justify-center gap-2">
            <ArrowLeft size={20} /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const renderText = (text: string) => {
    return text.split('\\n\\n').map((paragraph, index) => {
      // Handle bold text within paragraphs
      const parts = paragraph.split(/(\\*\\*.*?\\*\\*)/g);
      const formattedParagraph = parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="font-bold text-slate-900">{part.replace(/\\*\\*/g, '')}</strong>;
        }
        return part;
      });

      return <p key={index} className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">{formattedParagraph}</p>;
    });
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/40 backdrop-blur-md border-b border-white/20 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center relative">
          <Link to="/" className="font-bold text-xl tracking-tight">CK Jha<span className="text-blue-600">.</span></Link>
          
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
            <Link 
              to="/case-studies" 
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
            >
              Case Studies
            </Link>
          </div>

          <Link 
            to="/case-studies"
            className="text-slate-600 hover:text-slate-900 font-medium transition-colors flex items-center gap-2"
          >
            <ArrowLeft size={16} /> All Case Studies
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 md:pt-52 md:pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-slate-900 leading-[1.1]">
                {project.title}
              </h1>
              <p className="text-2xl md:text-3xl text-slate-500 leading-relaxed font-light mb-16">
                {project.description}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-slate-200">
              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Client</h4>
                <p className="text-lg font-medium text-slate-900">{project.metadata.client}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Role</h4>
                <p className="text-lg font-medium text-slate-900">{project.metadata.role}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Timeline</h4>
                <p className="text-lg font-medium text-slate-900">{project.metadata.timeline}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Industry</h4>
                <p className="text-lg font-medium text-slate-900">{project.metadata.industry}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="py-12 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-200">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-32">
            {project.sections.map((section, index) => (
              <FadeIn key={index}>
                <div className="grid md:grid-cols-12 gap-12 md:gap-24">
                  <div className="md:col-span-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 sticky top-32">
                      {section.title}
                    </h2>
                  </div>
                  <div className="md:col-span-8">
                    <div className="prose prose-lg prose-slate max-w-none">
                      {renderText(section.content)}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Live Site CTA */}
      <section className="py-24 bg-white border-t border-slate-200 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">Experience the live project</h2>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-full font-bold hover:bg-slate-800 transition-colors shadow-xl shadow-slate-900/20 text-lg"
            >
              View Live Site <ExternalLink size={20} />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready for similar results?</h2>
            <p className="text-xl text-slate-400 mb-12">Let's discuss how we can engineer a high-converting digital flagship for your brand.</p>
            <Link 
              to="/"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-full font-bold hover:bg-blue-500 transition-colors shadow-2xl shadow-blue-600/30 text-lg"
            >
              Book a Strategy Call <ArrowUpRight size={20} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
