import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Check, X } from 'lucide-react';

const comparisons = [
  { feature: 'Mess', scooping: 'Messy', scoopii: 'Clean' },
  { feature: 'Portion', scooping: 'Inconsistent', scoopii: 'Precise' },
  { feature: 'Design', scooping: 'Ugly tubs', scoopii: 'Elegant' },
  { feature: 'Cleanup', scooping: 'Always', scoopii: 'Never' },
];

export function Comparison() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="comparison" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="space-y-16">
          <div
            className={`text-center space-y-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider">
              Comparison
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900">
              The difference is clear.
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div
              className={`bg-white rounded-3xl overflow-hidden shadow-sm transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Header */}
              <div className="grid grid-cols-3 text-center">
                <div className="p-6 bg-neutral-100">
                  <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider">
                    Feature
                  </p>
                </div>
                <div className="p-6 bg-neutral-100">
                  <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider">
                    Scooping
                  </p>
                </div>
                <div className="p-6 bg-neutral-900">
                  <p className="text-sm font-medium text-white uppercase tracking-wider">Scoopii</p>
                </div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-neutral-100">
                {comparisons.map((item, index) => (
                  <div
                    key={item.feature}
                    className="grid grid-cols-3 text-center items-center"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-6 text-neutral-600 font-medium">{item.feature}</div>
                    <div className="p-6 text-neutral-500">
                      <span className="inline-flex items-center gap-2">
                        <X className="w-4 h-4 text-neutral-400" />
                        {item.scooping}
                      </span>
                    </div>
                    <div className="p-6 bg-neutral-50">
                      <span className="inline-flex items-center gap-2 text-neutral-900 font-semibold">
                        <Check className="w-5 h-5 text-neutral-900" />
                        {item.scoopii}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
