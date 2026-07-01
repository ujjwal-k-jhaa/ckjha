import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Every project is unique, but most standard websites take about 3 to 4 weeks from our kickoff call to launch. If you need something more complex, like a custom web app or an e-commerce platform, it might take a bit longer. I'll always give you a clear timeline before we start!"
  },
  {
    question: "What does your pricing look like?",
    answer: "My pricing is project-based, meaning I'll give you a flat rate after we discuss your specific needs. This way, there are no surprise hourly fees popping up later. Most of my custom web design and development projects start around $3,000, but I'm always happy to chat and see what makes sense for your budget."
  },
  {
    question: "Do you offer ongoing support after the site goes live?",
    answer: "Absolutely! I don't just launch your site and disappear. I offer ongoing maintenance and support packages to keep things running smoothly, update content, and make sure your website stays secure and up-to-date."
  },
  {
    question: "What platforms and technologies do you use?",
    answer: "I specialize in building fast, scalable websites using modern tool like Framer, and Wordpress, and tech like React, Next.js, Tailwind CSS, and TypeScript. For e-commerce, I love working with Shopify. I always choose the right tool for the job to make sure your site is blindingly fast and easy for you to manage."
  },
  {
    question: "Will I be able to update the website myself?",
    answer: "Yes, definitely! I build my websites with user-friendly content management systems (like Sanity or WordPress) so you can easily swap out text, add images, or publish blog posts without needing to write a single line of code. I'll even record a quick tutorial video for you showing exactly how to do it."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 px-6 relative z-10 border-t border-neutral-900">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col mb-16 text-center items-center">
          <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter mb-6 text-white">
            Common Questions
          </h2>
          <p className="text-neutral-400 max-w-2xl text-lg md:text-xl font-light leading-relaxed">
            Here are a few things people usually ask before we start working together. If you have any other questions, just ask on our call!
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`border border-neutral-800 rounded-[2rem] overflow-hidden transition-colors ${
                  isOpen ? "bg-neutral-900/50" : "bg-transparent hover:bg-neutral-900/30"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <span className={`text-lg md:text-xl font-medium tracking-tight pr-8 transition-colors ${isOpen ? "text-brand" : "text-white"}`}>
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-brand text-neutral-950 rotate-180 shadow-[0_0_15px_rgba(83,211,102,0.4)]" : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2">
                        <p className="text-neutral-400 leading-relaxed font-light text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
