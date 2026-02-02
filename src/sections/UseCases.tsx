import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { Home, Dumbbell, Briefcase, Palette } from 'lucide-react';

const useCases = [
  {
    title: 'Home Kitchen',
    image: '/images/scoopii-kitchen.jpg',
    icon: Home,
  },
  {
    title: 'Gym',
    image: '/images/scoopii-gym.jpg',
    icon: Dumbbell,
  },
  {
    title: 'Office',
    image: '/images/scoopii-office.jpg',
    icon: Briefcase,
  },
  {
    title: 'Studio',
    image: '/images/scoopii-studio.jpg',
    icon: Palette,
  },
];

export function UseCases() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const staggerStyles = useStaggeredAnimation(useCases.length, 100);

  return (
    <section id="use-cases" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="space-y-16">
          <div
            className={`text-center space-y-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider">
              Use Cases
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900">
              Made for your space.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={useCase.title}
                className={`group relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={staggerStyles[index]}
              >
                <img
                  src={useCase.image}
                  alt={`Scoopii in ${useCase.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <useCase.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>
                    <p className="text-white font-semibold text-lg">{useCase.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
