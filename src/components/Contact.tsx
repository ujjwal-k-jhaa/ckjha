import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-40 px-6 border-t border-neutral-900 relative z-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[500px] bg-neutral-800/30 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-display font-medium tracking-tighter leading-[1.05] mb-8">
            Got a project in <span className="text-neutral-500 italic font-light">mind?</span>
          </h2>
          <p className="text-xl md:text-2xl text-neutral-400 font-light mb-16 max-w-2xl mx-auto">
            Let's collaborate to build something extraordinary. I'm currently taking on new projects for 2026.
          </p>
          
          <a
            href="https://cal.com/ukjha/scopecall"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden inline-flex items-center gap-3 bg-brand text-neutral-950 px-10 py-5 rounded-full font-semibold text-lg transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(83,211,102,0.4)]"
          >
            <div className="absolute inset-0 bg-[#183725] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
            <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-white transition-colors duration-500">
              Start the conversation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}


