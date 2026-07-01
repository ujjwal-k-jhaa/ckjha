import { motion } from "motion/react";

export function Booking() {
  return (
    <section id="booking" className="py-32 px-6 relative z-10 border-t border-neutral-900">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col mb-16 text-center items-center">
          <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter mb-6 text-white">
            Book a Discovery Call
          </h2>
          <p className="text-neutral-400 max-w-2xl text-lg md:text-xl font-light leading-relaxed">
            Let's discuss your project, goals, and how we can work together to build something exceptional.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-neutral-900/30 rounded-[2rem] border border-neutral-800 overflow-hidden shadow-2xl relative"
          style={{ height: "750px" }}
        >
          {/* Add a subtle loading skeleton behind the iframe */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-8 h-8 border-4 border-neutral-800 border-t-brand rounded-full animate-spin" />
          </div>
          
          <iframe
            src="https://cal.com/ukjha/scopecall?embed=true&theme=dark"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 'none' }}
            title="Book a discovery call"
            className="relative z-10"
          />
        </motion.div>
      </div>
    </section>
  );
}
