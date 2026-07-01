import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export function Work() {
  const displayProjects = projects.slice(0, 4);

  return (
    <section id="work" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter mb-4">
            Selected Work
          </h2>
          <p className="text-neutral-400 text-lg max-w-md font-light">
            A curated selection of digital experiences designed to elevate brands and drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {displayProjects.map((project, index) => {
            let colSpan = "md:col-span-6";
            let heightClass = "h-[400px] md:h-[600px]";
            
            if (index === 0) {
              colSpan = "md:col-span-12";
              heightClass = "h-[400px] md:h-[700px]";
            } else if (index === 1) {
              colSpan = "md:col-span-7";
            } else if (index === 2) {
              colSpan = "md:col-span-5";
            } else if (index === 3) {
              colSpan = "md:col-span-12";
              heightClass = "h-[400px] md:h-[700px]";
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative ${colSpan}`}
              >
                <Link to={`/projects/${project.id}`} className={`block w-full overflow-hidden rounded-[2rem] relative bg-neutral-900 border border-neutral-800/50 ${heightClass}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/20 to-neutral-950" />
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 ${project.color} mix-blend-overlay`} />
                  
                  <div className="absolute inset-0 flex items-center justify-center p-8 md:p-16">
                    <div className="relative z-20 max-w-full max-h-full flex flex-col rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-[1.02] group-hover:-translate-y-2 bg-[#0f0f0f] border border-neutral-800">
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
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                      <div>
                        <div className="flex flex-wrap gap-2 mb-4 md:mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                          <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-white">
                            {project.category}
                          </span>
                          <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-white">
                            {project.year}
                          </span>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-white drop-shadow-lg">
                          {project.title}
                        </h3>
                      </div>
                      <div className="w-14 h-14 shrink-0 rounded-full bg-brand text-neutral-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100 shadow-[0_0_20px_rgba(83,211,102,0.4)]">
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 flex justify-center">
          <Link 
            to="/projects" 
            className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand text-neutral-950 font-medium rounded-full transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(83,211,102,0.4)]"
          >
            <div className="absolute inset-0 bg-[#183725] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
            <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-white transition-colors duration-500">
              View all case studies <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
