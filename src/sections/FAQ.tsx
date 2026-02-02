import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What powders does Scoopii work with?',
    answer:
      'Scoopii works with all standard protein powders, including whey, casein, plant-based, and collagen. It\'s designed to handle fine to medium grain textures with ease.',
  },
  {
    question: 'Is it easy to clean?',
    answer:
      'Yes. The dispensing mechanism detaches easily and is dishwasher safe. The container wipes clean with a damp cloth.',
  },
  {
    question: 'When does it ship?',
    answer:
      'We expect to ship the first production run in Q2 2025. Waitlist members will be notified first and get priority shipping.',
  },
  {
    question: 'Can I cancel my pre-order?',
    answer:
      'Absolutely. You can cancel anytime before shipping for a full refund. No questions asked.',
  },
  {
    question: 'What portion sizes does it dispense?',
    answer:
      'Scoopii dispenses a standard 30g serving, which is equivalent to one scoop of most protein powders. The portion is precisely measured every time.',
  },
  {
    question: 'How much powder can it hold?',
    answer:
      'The container holds approximately 1kg of protein powder, which is about a month\'s supply for most users.',
  },
];

export function FAQ() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="faq" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="space-y-16">
          <div
            className={`text-center space-y-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900">
              Questions? Answered.
            </h2>
          </div>

          <div
            className={`max-w-3xl mx-auto transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-2xl px-6 border-0 shadow-sm"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-neutral-900 hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-500 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
