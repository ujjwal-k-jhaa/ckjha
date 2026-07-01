import { motion } from "motion/react";

const services = [
  {
    title: "Website & Landing Page",
    description: "High-converting, performance-driven websites and landing pages tailored to engage your audience and drive measurable results.",
    features: ["Custom Design", "Responsive Layout", "SEO Optimization", "Conversion Focus"]
  },
  {
    title: "Ecommerce Website",
    description: "Scalable online stores with seamless shopping experiences, optimized for sales and designed to elevate your brand.",
    features: ["Shopify & Custom Solutions", "Payment Integration", "Inventory Management", "UX/UI Design"]
  },
  {
    title: "Mobile App",
    description: "Intuitive and powerful mobile applications for iOS and Android, built with modern frameworks for exceptional user experiences.",
    features: ["React Native", "UI/UX Design", "API Integration", "App Store Deployment"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 px-6 relative z-10 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter mb-6">
            Services
          </h2>
          <p className="text-neutral-400 max-w-2xl text-lg md:text-xl font-light leading-relaxed">
            From strategic foundation to final code, I handle the entire digital product lifecycle to ensure a cohesive and impactful result.
          </p>
        </div>

        <div className="flex flex-col">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col lg:flex-row gap-6 lg:gap-12 py-12 lg:py-16 border-t border-neutral-800 hover:border-brand transition-colors duration-300"
            >
              <div className="w-full lg:w-1/3 flex flex-col">
                <span className="text-neutral-600 font-mono text-sm mb-4 group-hover:text-brand transition-colors">0{index + 1}</span>
                <h3 className="text-3xl lg:text-4xl font-display font-medium tracking-tight group-hover:text-brand transition-colors pr-4">{service.title}</h3>
              </div>
              <div className="w-full lg:w-2/3 flex flex-col lg:pt-8">
                <p className="text-neutral-400 text-lg lg:text-xl font-light leading-relaxed mb-8 max-w-2xl">
                  {service.description}
                </p>
                <ul className="flex flex-wrap gap-3">
                  {service.features.map((feature, fIndex) => (
                     <li key={fIndex} className="px-4 py-2 rounded-full border border-neutral-800 text-sm text-neutral-300 group-hover:border-brand group-hover:text-brand transition-colors">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
