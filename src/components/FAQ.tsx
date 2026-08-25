import { useState } from 'react';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FadeIn } from './FadeIn';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    { 
      q: "How long does a typical project take to complete?", 
      a: "Project timelines vary based on complexity. A simple project might take 2-3 weeks, while more comprehensive designs can take 1-2 months. I will provide a specific estimate after our initial consultation." 
    },
    { 
      q: "Can you work with my existing brand and designs?",
      a: "Absolutely. I can seamlessly integrate with your existing brand guidelines or help you evolve them into something new. We'll start with a thorough audit of your current assets to ensure consistency and alignment."
    },
    { 
      q: "What makes your design process unique?",
      a: "I focus on deliberate, purpose-driven design. It's not just about making things look pretty; it's about solving real business problems with strategic thinking, high-end aesthetics, and intuitive user experiences."
    },
    { 
      q: "Do you offer ongoing support after the project is completed?",
      a: "Yes, I offer monthly retainer packages for clients who need continuous design support, minor updates, and strategic consultation to keep their digital products performing at their best."
    },
    { 
      q: "How do you handle confidentiality and intellectual property rights?",
      a: "I take confidentiality very seriously. We can sign an NDA before discussing any project details. Upon final payment, full intellectual property rights for all approved designs are transferred directly to you."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tighter mb-12 md:mb-20 leading-tight">
            Your questions<br/>answered.
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden">
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-50 transition-colors"
                  >
                    <div className="flex gap-4 md:gap-6 items-center">
                      <span className="text-zinc-400 font-medium text-sm">0{idx + 1}</span>
                      <span className="font-bold text-base md:text-lg">{faq.q}</span>
                    </div>
                    <motion.div
                      animate={{ rotate: openIndex === idx ? 45 : 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <Plus className="w-5 h-5 shrink-0" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 pl-[3.25rem] text-zinc-600 font-medium leading-relaxed text-sm">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <div className="lg:col-span-5">
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-zinc-200 shadow-sm sticky top-32">
                <img src="https://i.ibb.co/RT6cdqQ8/Ck-Jha-image.png" alt="Profile" className="w-16 h-16 rounded-full object-cover mb-6" />
                <h3 className="text-xl md:text-2xl text-zinc-500 font-medium mb-2">Still not sure?</h3>
                <h4 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">Book a free discovery call.</h4>
                <p className="text-zinc-500 font-medium mb-10 text-sm leading-relaxed">
                  Learn more about how I work and how I can help you and your business take the next step.
                </p>
                <div className="flex items-center gap-4">
                  <a 
                    href="https://cal.com/ck-jhaa/project-scope-call"
                    target="_blank" rel="noopener noreferrer"
                    className="bg-black text-white px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors w-full md:w-auto"
                  >
                    Schedule Now
                  </a>
                  <span className="hidden md:inline-block text-zinc-400 font-semibold">Cal.com</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
