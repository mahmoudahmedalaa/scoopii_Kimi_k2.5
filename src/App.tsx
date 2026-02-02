import { Hero } from '@/sections/Hero';
import { Problem } from '@/sections/Problem';
import { Solution } from '@/sections/Solution';
import { HowItWorks } from '@/sections/HowItWorks';
import { UseCases } from '@/sections/UseCases';
import { Comparison } from '@/sections/Comparison';
import { Waitlist } from '@/sections/Waitlist';
import { FAQ } from '@/sections/FAQ';
import { Footer } from '@/sections/Footer';
import './App.css';

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <UseCases />
      <Comparison />
      <Waitlist />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;
