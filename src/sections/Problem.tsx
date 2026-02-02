import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { Droplets, Scale, Search, PackageX } from 'lucide-react';

const problems = [
  {
    icon: Droplets,
    title: 'Messy Scooping',
    description: 'Powder everywhere. On your counter. On your hands.',
  },
  {
    icon: Scale,
    title: 'Inconsistent Portions',
    description: 'Never sure if you\'re getting the right amount.',
  },
  {
    icon: Search,
    title: 'Lost Scoops',
    description: 'Buried in powder. Sticky. Impossible to find.',
  },
  {
    icon: PackageX,
    title: 'Ugly Tubs',
    description: 'Clutter your space. Look terrible on display.',
  },
];

export function Problem() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const staggerStyles = useStaggeredAnimation(problems.length, 150);

  return (
    <section id="problem" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="space-y-16">
          <div
            className={`text-center space-y-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider">
              The Problem
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900">
              Protein shouldn&apos;t be a mess.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problems.map((problem, index) => (
              <div
                key={problem.title}
                className={`text-center space-y-4 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={staggerStyles[index]}
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                  <problem.icon className="w-6 h-6 text-neutral-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">{problem.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
