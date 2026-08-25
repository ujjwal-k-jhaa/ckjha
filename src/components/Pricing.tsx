import { Check, MessageCircle, PenTool, Rocket } from 'lucide-react';
import { FadeIn } from './FadeIn';

export function Pricing() {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-between items-start mb-12 md:mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tighter leading-tight">
              <span className="text-zinc-400">Simple pricing.</span><br/>
              Standout designs.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="max-w-sm text-zinc-600 font-medium md:pt-4">
              <p className="text-black font-bold mb-1">Clear costs, no hidden fees.</p>
              <p>Select from individual project rates tailored to your specific service needs.</p>
            </div>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          <FadeIn delay={0.1}>
             <div className="font-bold flex items-center gap-2 mb-2"><MessageCircle className="w-5 h-5" /> Consult</div>
             <p className="text-zinc-500 text-sm font-medium">Book a free discovery call to discuss your project requirements and goals.</p>
          </FadeIn>
          <FadeIn delay={0.2}>
             <div className="font-bold flex items-center gap-2 mb-2"><PenTool className="w-5 h-5" /> Collaborate</div>
             <p className="text-zinc-500 text-sm font-medium">We work together to define the scope, timeline, and exact deliverables.</p>
          </FadeIn>
          <FadeIn delay={0.3}>
             <div className="font-bold flex items-center gap-2 mb-2"><Rocket className="w-5 h-5" /> Receive</div>
             <p className="text-zinc-500 text-sm font-medium">Receive high-quality, pixel-perfect designs and code on schedule.</p>
          </FadeIn>
        </div>

        {/* Pricing Container */}
        <FadeIn delay={0.2}>
          <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] border border-zinc-200 p-2 overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
              {/* Left Card - Brand & UX */}
              <div className="lg:col-span-5 bg-black rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="relative z-10">
                  <div className="bg-white/10 text-xs font-semibold px-3 py-1.5 rounded-full inline-block mb-10 md:mb-12">Flexible timelines</div>
                  <h3 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight mb-8">
                    <span className="text-zinc-400">Strategic design services</span><br/>
                    for brands who move fast.
                  </h3>
                </div>
                
                <div className="relative z-10 bg-white rounded-3xl p-6 text-black mt-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 border border-zinc-200 rounded-full text-xs font-bold mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Slots available
                  </div>
                  <h4 className="text-2xl font-medium tracking-tight mb-2">Brand & UX</h4>
                  <p className="text-zinc-500 text-sm font-medium mb-4">Skip the agency markup and work directly with me on Brand Design and UX/UI Consultation.</p>
                  <div className="text-xl font-medium">From $1,500</div>
                </div>
                
                {/* Abstract shape */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800/50 rounded-bl-[100px] z-0 rotate-12 translate-x-10 -translate-y-10 blur-xl"></div>
              </div>
              
              {/* Right Card - App Development */}
              <div className="lg:col-span-7 p-8 md:p-14 bg-white rounded-[1.5rem] md:rounded-[2rem] flex flex-col justify-center border border-zinc-100">
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">App Development</h3>
                <p className="text-zinc-500 font-medium mb-8 max-w-md">Comprehensive design and development for <span className="text-black font-bold">Web Apps and Mobile Apps.</span> Ideal for complex, interactive products.</p>
                
                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-4xl md:text-7xl font-medium tracking-tighter">From $5k</span>
                  <span className="text-zinc-500 font-medium">/ project</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10 text-sm font-semibold">
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-black shrink-0" /> Custom UI/UX Design</div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-black shrink-0" /> Frontend Development</div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-black shrink-0" /> Responsive & Accessible</div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-black shrink-0" /> API Integration</div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-black shrink-0" /> Multiple Revisions</div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-black shrink-0" /> React / Next.js / Native</div>
                </div>
                
                <div className="flex items-center gap-4">
                  <a 
                    href="https://cal.com/ck-jhaa/project-scope-call"
                    target="_blank" rel="noopener noreferrer"
                    className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-800 transition-colors w-full text-center md:w-auto"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            
            {/* Bottom Strip - Ecommerce & Landing Pages */}
            <div className="mt-2 bg-black rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center text-white gap-8">
              <div className="max-w-md">
                <h3 className="text-2xl font-medium tracking-tight mb-2">Ecommerce & Web</h3>
                <p className="text-zinc-400 font-medium text-sm">High-converting Landing Pages and complete Ecommerce Development tailored to your target audience.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm font-semibold w-full md:w-auto shrink-0">
                 <div className="flex items-center gap-2"><Check className="w-4 h-4 text-white shrink-0" /> Shopify or Custom Stack</div>
                 <div className="flex items-center gap-2"><Check className="w-4 h-4 text-white shrink-0" /> Conversion Optimized</div>
                 <div className="flex items-center gap-2"><Check className="w-4 h-4 text-white shrink-0" /> SEO Best Practices</div>
                 <div className="flex items-center gap-2"><Check className="w-4 h-4 text-white shrink-0" /> Fast Turnaround</div>
              </div>
              <div className="flex flex-col md:items-end gap-3 shrink-0 w-full md:w-auto mt-2 md:mt-0">
                <div className="text-2xl font-medium tracking-tight text-center md:text-right">From $2,500</div>
                <a 
                  href="https://cal.com/ck-jhaa/project-scope-call"
                  target="_blank" rel="noopener noreferrer"
                  className="w-full md:w-auto bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-zinc-200 transition-colors whitespace-nowrap inline-flex items-center justify-center"
                >
                  Get quote
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
