import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section className="pt-40 pb-32 px-6 relative z-10 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[6rem] font-display font-medium tracking-tighter mb-6"
          >
            All Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-neutral-400 text-xl max-w-2xl font-light"
          >
            A comprehensive collection of my digital work across various industries.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <Link to={`/projects/${project.id}`} className="block w-full overflow-hidden rounded-[2rem] relative aspect-[4/3] bg-neutral-900 border border-neutral-800/50">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/20 to-neutral-950" />
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 ${project.color} mix-blend-overlay`} />
                
                <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
                  <div className="relative z-20 max-w-full max-h-full flex flex-col rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-[1.03] group-hover:-translate-y-2 bg-[#0f0f0f] border border-neutral-800">
                    <div className="h-6 sm:h-8 bg-[#1a1a1a] border-b border-neutral-800 flex items-center px-3 sm:px-4 gap-1.5 sm:gap-2 shrink-0 w-full">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FF5F56]" />
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FFBD2E]" />
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="overflow-hidden relative min-h-0 flex items-center justify-center">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-auto h-auto max-w-full max-h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80 z-20" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                        <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-white">
                          {project.category}
                        </span>
                        <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-white">
                          {project.year}
                        </span>
                      </div>
                      <h3 className="text-3xl font-display font-medium tracking-tight text-white drop-shadow-lg">
                        {project.title}
                      </h3>
                    </div>
                    <div className="w-12 h-12 shrink-0 rounded-full bg-brand text-neutral-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100 shadow-[0_0_20px_rgba(83,211,102,0.4)]">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
