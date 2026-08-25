import { ArrowRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

export function About() {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tighter mb-12 md:mb-20 leading-tight">
            <span className="text-zinc-400">Designing experiences</span><br/>
            that solve real problems.
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <FadeIn delay={0.1}>
              <div className="relative rounded-3xl overflow-hidden mb-6 bg-zinc-200">
                <img src="https://i.ibb.co/RT6cdqQ8/Ck-Jha-image.png" alt="CK Jha" className="w-full aspect-[4/5] object-cover" />
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-full p-2 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2 px-2">
                     <span className="font-bold text-sm">X</span>
                     <span className="text-xs">1,214</span>
                  </div>
                  <div className="flex gap-2 pr-2">
                     <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-[10px]">in</div>
                     <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-[10px]">dr</div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-medium mb-1">CK Jha</h3>
              <p className="text-zinc-500 font-medium mb-10">Full-stack Designer</p>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div>
                <h4 className="font-semibold mb-4 text-sm">My work history</h4>
                <div className="bg-white rounded-2xl p-5 border border-zinc-200 flex justify-between items-center mb-4">
                  <div>
                    <div className="font-bold">UPWORK</div>
                    <div className="text-zinc-500 text-sm">Full-stack Designer</div>
                  </div>
                  <div className="text-zinc-400 text-sm font-medium">2020-2026</div>
                </div>
                <button className="w-full py-4 bg-transparent border border-zinc-200 rounded-full font-semibold text-sm hover:bg-zinc-50 flex items-center justify-center gap-2 transition-colors">
                  Show all <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </FadeIn>
          </div>
          
          <div className="md:col-span-7 space-y-8 text-lg md:text-xl text-zinc-600 font-medium leading-relaxed">
            <FadeIn delay={0.1}>
              <p>
                <span className="text-black font-bold">I love turning ideas into something real through design.</span> What started as a hobby turned into a career when I discovered how design can make things both look great and work better.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p>
                <span className="text-black font-bold">I focus on creating user interfaces that serve a real purpose</span> - making sure they're not just pretty, but actually solve problems. Whether I'm working on a mobile app or a website, my goal is to make something that feels natural and easy to use.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p>
                <span className="text-black font-bold">I'm a bit of a perfectionist when it comes to the small stuff,</span> but I think that's what makes good design great. This attention to detail helps me build strong relationships with clients, as they know I'll put the same care into their project that they would.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="pt-8 flex justify-center md:justify-start">
                <div className="font-signature font-normal text-6xl md:text-7xl opacity-80 -rotate-6 ml-4">ck jha</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
