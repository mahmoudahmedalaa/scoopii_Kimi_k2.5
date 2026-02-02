import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { Check } from 'lucide-react';

const features = [
  {
    title: 'Clean Dispensing',
    description: 'No spills. No powder on your counter. No sticky fingers.',
  },
  {
    title: 'Precise Portions',
    description: 'Every serving is exactly the same. No guesswork.',
  },
  {
    title: 'One-Button Operation',
    description: 'Press and pour. It really is that simple.',
  },
  {
    title: 'Elegant Design',
    description: 'Looks beautiful on any counter. Designed to be displayed.',
  },
];

export function Solution() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const staggerStyles = useStaggeredAnimation(features.length, 100);

  return (
    <section id="solution" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="space-y-16">
          <div
            className={`text-center space-y-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider">
              The Solution
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900">
              Meet Scoopii.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div
              className={`aspect-[3/4] bg-neutral-100 rounded-3xl overflow-hidden shadow-xl transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <img
                src="/images/scoopii-product.jpg"
                alt="Scoopii Product Close-up"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex items-start gap-5 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={staggerStyles[index]}
                >
                  <div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-1">{feature.title}</h3>
                    <p className="text-neutral-500 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
