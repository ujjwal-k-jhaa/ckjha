import { FadeIn } from './FadeIn';

export function Testimonials() {
  const testimonials = [
    {
      quote: "The new UI design cut our customer support tickets in half. It's been a game-changer for us.",
      author: "Martina Martinez",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
    },
    {
      quote: "Working with CK felt like having a seasoned partner who truly understood our vision and brought it to life in ways we hadn't even imagined.",
      author: "Thomas Weber",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop"
    },
    {
      quote: "Our website conversion rate improved significantly thanks to CK's incredible expertise and attention to detail.",
      author: "Ben Harper",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=100&auto=format&fit=crop"
    },
    {
      quote: "CK's design approach brought clarity to our complex data visualizations. Our users are absolutely thrilled!",
      author: "Michael Wong",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
    },
    {
      quote: "The rebranding exceeded all of our expectations. It has given us a massive competitive edge in our industry.",
      author: "Natalie Rivera",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
    },
    {
      quote: "The redesign completely transformed our brand image. We've seen a 30% increase in engagement since launch.",
      author: "Emma Kraft",
      avatar: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=100&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 md:py-32 px-6 bg-[#f7f7f7]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tighter leading-tight">
              <span className="text-zinc-400">Hear from what my</span><br/>
              clients have to say.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" src={testimonials[0].avatar} alt="" />
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" src={testimonials[1].avatar} alt="" />
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" src={testimonials[2].avatar} alt="" />
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" src={testimonials[3].avatar} alt="" />
              </div>
              <div>
                <div className="text-xs font-bold tracking-widest text-black flex gap-0.5">★★★★★</div>
                <div className="text-xs font-bold text-zinc-500 mt-0.5">25+ Happy clients</div>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white p-8 rounded-3xl border border-zinc-200 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="mb-8">
                  <span className="text-4xl font-serif text-black leading-none inline-block mb-4">"</span>
                  <p className="text-zinc-800 font-medium leading-relaxed text-sm">{t.quote}</p>
                </div>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} className="w-10 h-10 rounded-full object-cover" alt={t.author} />
                  <div>
                    <div className="font-bold text-sm">{t.author}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
