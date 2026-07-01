import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";
import { Contact } from "../components/Contact";

export function CaseStudy() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center relative z-10 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-display font-medium mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-brand hover:underline flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-10 min-h-screen bg-neutral-950">
      <article className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-brand transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-display font-medium tracking-tighter mb-8 text-white"
          >
            {project.title}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4 md:gap-12 mb-16 pb-12 border-b border-neutral-800"
          >
            <div>
              <span className="block text-xs text-neutral-500 uppercase tracking-widest mb-2 font-medium">Client</span>
              <span className="text-white text-lg font-light">{project.client}</span>
            </div>
            <div>
              <span className="block text-xs text-neutral-500 uppercase tracking-widest mb-2 font-medium">Category</span>
              <span className="text-white text-lg font-light">{project.category}</span>
            </div>
            <div>
              <span className="block text-xs text-neutral-500 uppercase tracking-widest mb-2 font-medium">Year</span>
              <span className="text-white text-lg font-light">{project.year}</span>
            </div>
            <div>
              <span className="block text-xs text-neutral-500 uppercase tracking-widest mb-2 font-medium">Live Website</span>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand hover:text-white transition-colors flex items-center gap-2 text-lg font-light"
              >
                Visit Site <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[2rem] overflow-hidden mb-20 border border-neutral-800/50 bg-neutral-900 relative p-6 md:p-16 flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/20 to-neutral-950" />
            <div className="relative z-10 max-w-full flex flex-col rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#0f0f0f] border border-neutral-800">
              <div className="h-8 sm:h-10 bg-[#1a1a1a] border-b border-neutral-800 flex items-center px-4 sm:px-6 gap-2 shrink-0 w-full">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <div className="overflow-hidden relative min-h-0 flex items-center justify-center bg-[#0f0f0f]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-auto h-auto max-w-full max-h-[70vh] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-20">
              <div className="md:col-span-2 space-y-12">
                <div>
                  <h2 className="text-3xl font-display font-medium mb-6 text-white tracking-tight">Overview</h2>
                  <p className="text-xl text-neutral-400 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {project.challenge && (
                  <div>
                    <h2 className="text-3xl font-display font-medium mb-6 text-white tracking-tight">The Challenge</h2>
                    <p className="text-xl text-neutral-400 font-light leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                )}

                {project.solution && (
                  <div>
                    <h2 className="text-3xl font-display font-medium mb-6 text-white tracking-tight">The Solution</h2>
                    <p className="text-xl text-neutral-400 font-light leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-12 md:pl-8 md:border-l border-neutral-800">
                <div>
                  <h3 className="text-xl font-display font-medium mb-6 text-white tracking-tight">Services Provided</h3>
                  <ul className="flex flex-col gap-3">
                    {project.services.map((service, index) => (
                      <li key={index} className="text-neutral-400 font-light">
                        — {service}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.technologies && (
                  <div>
                    <h3 className="text-xl font-display font-medium mb-6 text-white tracking-tight">Technologies</h3>
                    <ul className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <li key={index} className="px-3 py-1.5 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm font-medium">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.results && (
                  <div>
                    <h3 className="text-xl font-display font-medium mb-6 text-white tracking-tight">Key Results</h3>
                    <ul className="flex flex-col gap-4">
                      {project.results.map((result, index) => (
                        <li key={index} className="flex gap-4 items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
                          <span className="text-neutral-300 font-light leading-relaxed">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-center border-t border-neutral-800 pt-20">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-brand text-neutral-950 font-display font-medium text-2xl md:text-3xl rounded-[2rem] overflow-hidden transition-transform hover:scale-105 hover:shadow-[0_0_40px_rgba(83,211,102,0.3)]"
              >
                <div className="absolute inset-0 bg-[#183725] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
                <span className="relative z-10 flex items-center gap-4 group-hover:text-white transition-colors duration-500">
                  Visit Live Website
                  <ExternalLink className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </article>

      <div className="mt-20">
        <Contact />
      </div>
    </div>
  );
}
