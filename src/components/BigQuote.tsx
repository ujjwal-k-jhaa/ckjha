import { FadeIn } from './FadeIn';

export function BigQuote() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight mb-12">
            "Working with CK was an absolute game-changer. CK has a rare ability to take a vague idea and translate it into a <span className="underline decoration-zinc-300 underline-offset-4">stunning, intuitive experience</span> that feels both effortless and deeply impactful."
          </h2>
          <div className="flex items-center justify-center gap-4">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop" alt="Alexander Chen" className="w-12 h-12 rounded-full object-cover" />
            <div className="text-left">
              <div className="font-bold text-sm">Alexander Chen</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
