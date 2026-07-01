import { motion } from "motion/react";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    title: "1. Discovery & Strategy",
    description: "We dive deep into your brand, goals, and target audience to lay a solid foundation for the project.",
    icon: Search,
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20"
  },
  {
    title: "2. Design & Prototyping",
    description: "Translating strategy into wireframes and high-fidelity designs, ensuring an intuitive user experience.",
    icon: PenTool,
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
  },
  {
    title: "3. Development & Testing",
    description: "Building the product using modern technologies, with rigorous testing across devices.",
    icon: Code,
    color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
  },
  {
    title: "4. Final Delivery & Launch",
    description: "Deploying the final product to your domain, optimizing for speed, and providing ongoing support.",
    icon: Rocket,
    color: "bg-brand/10 text-brand border-brand/20"
  }
];

export function Process() {
  return (
    <section id="process" className="py-32 px-6 relative z-10 border-t border-neutral-900">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col mb-24 text-center items-center">
          <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter mb-6">
            The Process
          </h2>
          <p className="text-neutral-400 max-w-2xl text-lg md:text-xl font-light leading-relaxed">
            A streamlined approach from initial concept to successful launch, ensuring transparency and quality at every step.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-4 bottom-4 w-[2px] bg-neutral-800 -translate-x-1/2 rounded-full" />

          <div className="flex flex-col gap-12 md:gap-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Icon Marker */}
                  <div className="absolute left-[28px] md:left-1/2 w-14 h-14 bg-neutral-950 border-4 border-neutral-950 rounded-full flex items-center justify-center -translate-x-1/2 z-10 shadow-xl">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${step.color} shadow-[0_0_15px_inherit]`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? "md:pr-20 text-left md:text-right" : "md:pl-20 text-left"}`}>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 p-8 rounded-[2rem] hover:border-neutral-700 transition-colors"
                    >
                      <h3 className="text-2xl font-display font-medium mb-4 tracking-tight">{step.title}</h3>
                      <p className="text-neutral-400 font-light leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
