import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const steps = [
  {
    number: '1',
    title: 'Fill',
    description: 'Pour your protein powder into the sleek, sealed container.',
  },
  {
    number: '2',
    title: 'Press',
    description: 'Position your shaker and press the button for one perfect serving.',
  },
  {
    number: '3',
    title: 'Shake',
    description: 'Add water and shake. Your protein is ready. No cleanup needed.',
  },
];

export function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const staggerStyles = useStaggeredAnimation(steps.length, 200);

  return (
    <section id="how-it-works" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="space-y-16">
          <div
            className={`text-center space-y-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider">
              How It Works
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900">
              Three steps. Zero mess.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`text-center space-y-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={staggerStyles[index]}
              >
                <div className="relative">
                  <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mx-auto shadow-sm">
                    <span className="text-4xl font-bold text-neutral-900">{step.number}</span>
                  </div>
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-px bg-neutral-200" />
                  )}
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-neutral-900">{step.title}</h3>
                  <p className="text-neutral-500 max-w-xs mx-auto leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Demo image */}
          <div
            className={`pt-8 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="aspect-[21/9] max-w-4xl mx-auto rounded-3xl overflow-hidden bg-neutral-100 shadow-xl">
              <img
                src="/images/scoopii-office.jpg"
                alt="Scoopii in Office Setting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
