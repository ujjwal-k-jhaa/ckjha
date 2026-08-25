import { Framer, Palette, MonitorSmartphone, LayoutTemplate, Smartphone, ShoppingCart, MonitorDot } from 'lucide-react';
import { motion } from 'motion/react';
import { FadeIn } from './FadeIn';

export function Services() {
  const services = [
    "Framer Development",
    "Brand Design",
    "Web Apps",
    "Landing Pages",
    "Mobile Apps",
    "Ecommerce Development",
    "UX / UI Consultation"
  ];
  
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <FadeIn>
              <h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-16 leading-tight">
                <span className="text-zinc-400">Services that</span><br/>
                supercharge your business.
              </h2>
            </FadeIn>
            
            <div>
              <FadeIn delay={0.1}>
                <p className="font-semibold text-sm mb-4">My tech stack</p>
              </FadeIn>
              <div className="flex flex-wrap gap-4">
                {[
                  { label: "Figma", iconUrl: "https://iili.io/CtVB8mJ.md.png" },
                  { label: "Framer", iconUrl: "https://iili.io/CtVBvea.png" },
                  { label: "Webflow", iconUrl: "https://iili.io/CtVBjqB.png" },
                  { label: "WordPress", iconUrl: "https://iili.io/CtVBk5g.md.png" },
                  { label: "Adobe InDesign", iconUrl: "https://iili.io/CtVBNg1.md.png" },
                  { label: "Adobe Illustrator", iconUrl: "https://iili.io/CtVBedF.md.png" },
                  { label: "Adobe Photoshop", iconUrl: "https://iili.io/CtVBw0P.md.png" }
                ].map((tech, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                    className="relative group"
                  >
                    <div className="w-12 h-12 bg-white rounded-xl border border-zinc-200 shadow-sm flex items-center justify-center transition-all duration-300 cursor-pointer group-hover:scale-110 group-hover:shadow-md group-hover:border-zinc-300">
                      <img src={tech.iconUrl} alt={tech.label} className="w-6 h-6 object-contain" />
                    </div>
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-xs font-bold px-2.5 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg translate-y-1 group-hover:translate-y-0 z-10">
                      {tech.label}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-zinc-800"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col gap-6 pt-4">
            {services.map((service, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white shrink-0 shadow-md hover:scale-110 transition-transform cursor-pointer">
                    {index % 7 === 0 && <Framer className="w-5 h-5" />}
                    {index % 7 === 1 && <Palette className="w-5 h-5" />}
                    {index % 7 === 2 && <MonitorDot className="w-5 h-5" />}
                    {index % 7 === 3 && <LayoutTemplate className="w-5 h-5" />}
                    {index % 7 === 4 && <Smartphone className="w-5 h-5" />}
                    {index % 7 === 5 && <ShoppingCart className="w-5 h-5" />}
                    {index % 7 === 6 && <MonitorSmartphone className="w-5 h-5" />}
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight">{service}</h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
