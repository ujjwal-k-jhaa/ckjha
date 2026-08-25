import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { FadeIn } from './FadeIn';

export function Work() {
  const projects = [
    {
      name: "Aroma Solar",
      link: "https://armoa-solar.vercel.app/",
      about: "Solar Company Website",
      image: "https://iili.io/CtG6H4n.md.png",
      bgClass: "bg-gradient-to-br from-blue-50 to-indigo-100/50"
    },
    {
      name: "Varian Social",
      link: "https://varian-social.vercel.app/",
      about: "Solar Company Website",
      image: "https://iili.io/CtG63vf.md.png",
      bgClass: "bg-gradient-to-br from-rose-50 to-orange-100/50"
    },
    {
      name: "Roy Construct",
      link: "https://roy-construct.vercel.app/",
      about: "Construction Company Website",
      image: "https://iili.io/CtG69EX.md.png",
      bgClass: "bg-gradient-to-br from-amber-50 to-yellow-100/50"
    },
    {
      name: "Apex",
      link: "https://apex-roofing-tawny.vercel.app/",
      about: "Roofing Company Website",
      image: "https://iili.io/CtG4yBt.md.png",
      bgClass: "bg-gradient-to-br from-zinc-100 to-zinc-200"
    },
    {
      name: "The Archetype",
      link: "https://the-archetype.vercel.app/",
      about: "Architectural Company Website",
      image: "https://iili.io/CtG4mQI.md.png",
      bgClass: "bg-gradient-to-br from-emerald-50 to-teal-100/50"
    }
  ];

  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-16">Latest Projects</h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-8 md:gap-y-16 mb-24 mt-8">
          {projects.map((project, index) => (
             <motion.a 
               key={index}
               initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
               whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6, delay: index * 0.1 }}
               href={project.link}
               target="_blank"
               rel="noopener noreferrer"
               className={`group cursor-pointer flex flex-col items-center ${index === 0 ? 'md:col-span-2 max-w-5xl mx-auto w-full' : 'w-full'}`}
             >
               <div className={`w-full pt-8 pb-4 px-6 md:pt-14 md:pb-8 md:px-12 lg:px-16 rounded-3xl ${project.bgClass} flex flex-col items-center justify-center transition-all duration-500 group-hover:shadow-xl relative`}>
                 {/* Mockup embedded in image */}
                 <div className="w-[95%] md:w-[90%] flex flex-col relative transition-all duration-500 group-hover:-translate-y-2 z-10">
                    <div className="w-full relative overflow-hidden rounded-xl">
                       <img src={project.image} className="w-full h-auto object-contain object-center transition-transform duration-700 group-hover:scale-[1.03]" alt={project.name} />
                       {/* Premium overlay on hover */}
                       <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 backdrop-blur-[1px] transition-all duration-300 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100">
                           <div className="bg-white/95 backdrop-blur-md text-black px-8 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl border border-white/40 hover:bg-white hover:scale-105">
                             Live Preview <ArrowUpRight className="w-4 h-4" />
                           </div>
                       </div>
                    </div>
                 </div>
               </div>
               
               {/* Details below mockup */}
               <div className="mt-8 text-center px-4 w-full">
                 <h3 className="font-medium text-2xl mb-2 group-hover:text-zinc-600 transition-colors">{project.name}</h3>
                 <p className="text-zinc-500 font-medium">{project.about}</p>
               </div>
             </motion.a>
          ))}
        </div>
        
        <FadeIn delay={0.2}>
          <div className="text-center">
            <a href="#" className="inline-flex items-center gap-2 font-bold hover:text-zinc-600 transition-colors text-sm">
              View all my projects <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
