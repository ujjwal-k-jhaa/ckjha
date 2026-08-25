import { motion } from 'motion/react';
import { Star, Hexagon, Sun, ChevronRightSquare, Aperture } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-0 overflow-hidden px-6 bg-white font-sans text-zinc-950">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-8">
          {/* Left Content */}
          <div className="relative z-10 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-zinc-200 text-xs font-semibold text-zinc-700 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Available for August'25
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-[85px] font-medium tracking-tighter leading-[0.95] mb-6"
            >
              <span className="text-zinc-400">Design that</span>
              <br />
              <span className="text-black">delivers results.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg md:text-xl text-zinc-500 mb-10 font-medium leading-relaxed tracking-tight"
            >
              <span className="text-black font-semibold">Strategic design that drives growth, not just looks good.</span> I create everything your brand needs to attract customers and turn them into sales.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <a
                href="https://cal.com/ck-jhaa/project-scope-call"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-black text-white p-1.5 pr-6 rounded-full shadow-[0_16px_32px_-8px_rgba(0,0,0,0.5)] hover:scale-105 hover:shadow-[0_20px_40px_-8px_rgba(0,0,0,0.6)] transition-all duration-300"
              >
                <img
                  src="https://i.ibb.co/RT6cdqQ8/Ck-Jha-image.png"
                  alt="Profile"
                  className="w-9 h-9 rounded-full object-cover border border-zinc-800"
                />
                <span className="text-sm font-semibold">Book a call with me</span>
              </a>
            </motion.div>
          </div>

          {/* Right Content - Images */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 150, scale: 0.8, rotate: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotate: 12 }}
              transition={{ delay: 0.3, duration: 0.8, type: 'spring', bounce: 0.4 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] md:w-[320px] z-0 ml-16 md:ml-28 mt-4 md:mt-12 flex flex-col items-center"
            >
              <img src="https://iili.io/CtG4mQI.md.png" alt="The Archetype" className="w-full h-auto object-contain drop-shadow-2xl" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 150, scale: 0.8, rotate: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotate: -8 }}
              transition={{ delay: 0.4, duration: 0.8, type: 'spring', bounce: 0.4 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] md:w-[320px] z-10 -ml-16 md:-ml-28 -mt-8 md:-mt-12 flex flex-col items-center"
            >
              <img src="https://iili.io/CtG4yBt.md.png" alt="Apex" className="w-full h-auto object-contain drop-shadow-2xl" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 250, scale: 0.6, rotate: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotate: 2 }}
              transition={{ delay: 0.5, duration: 0.8, type: 'spring', bounce: 0.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[480px] z-20 flex flex-col items-center"
            >
              <img src="https://iili.io/CtG6H4n.md.png" alt="Aroma Solar" className="w-full h-auto object-contain drop-shadow-2xl" />
            </motion.div>
          </div>
        </div>
        
        {/* Bottom Strip: Social Proof */}
        <div className="mt-20 border-t border-b border-zinc-100 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Social Proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="Client 1" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" alt="Client 2" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="Client 3" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="Client 4" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-0.5 text-black mb-0.5">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <p className="text-xs font-semibold text-zinc-500">25+ Happy clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
