import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
              Stop Scooping.
              <br />
              Start Pouring.
            </h1>
            <p className="text-xl md:text-2xl text-neutral-500 max-w-2xl mx-auto leading-relaxed">
              The premium protein powder dispenser that eliminates mess, spills, and guesswork. 
              One press. Perfect portion. Every time.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="w-full sm:w-auto px-8 py-6 bg-neutral-900 text-white text-lg font-medium rounded-full hover:bg-neutral-800 transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('waitlist')}
            >
              Join the Pre-Order
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto px-8 py-6 bg-neutral-100 text-neutral-900 text-lg font-medium rounded-full hover:bg-neutral-200 transition-all duration-300"
              onClick={() => scrollToSection('how-it-works')}
            >
              <Play className="mr-2 w-5 h-5" />
              See How It Works
            </Button>
          </div>

          <div className="pt-12 md:pt-16">
            <div className="relative max-w-4xl mx-auto">
              <div className="aspect-[16/10] rounded-3xl overflow-hidden bg-neutral-100 shadow-2xl">
                <img
                  src="/images/scoopii-kitchen.jpg"
                  alt="Scoopii Protein Dispenser in Modern Kitchen"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-full px-6 py-3 shadow-lg border border-neutral-100">
                <p className="text-sm font-medium text-neutral-600">
                  <span className="text-neutral-900 font-semibold">Coming Q2 2025</span> — Join 2,000+ early adopters
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
