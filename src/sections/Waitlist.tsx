import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, Users, Sparkles, Shield } from 'lucide-react';

// Google Sheets Web App URL - Replace this with your deployed script URL
const GOOGLE_SHEETS_URL = '';

export function Waitlist() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate inputs
    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' });
      setIsSubmitting(false);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      setIsSubmitting(false);
      return;
    }

    try {
      // If Google Sheets URL is configured, submit to it
      if (GOOGLE_SHEETS_URL) {
        const response = await fetch(GOOGLE_SHEETS_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.trim().toLowerCase(),
            timestamp: new Date().toISOString(),
            source: window.location.hostname,
          }),
        });
        
        if (!response.ok) throw new Error('Submission failed');
      }
      
      // Simulate network delay for better UX (remove when using real backend)
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setStatus({ 
        type: 'success', 
        message: "You've been added to the waitlist! We'll be in touch soon." 
      });
      
      // Clear form
      setFirstName('');
      setLastName('');
      setEmail('');
      
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="max-w-2xl mx-auto">
          <div
            className={`text-center space-y-4 mb-10 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider">
              Pre-Order
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900">
              Be the first to get Scoopii.
            </h2>
            <p className="text-xl text-neutral-500">
              Join the waitlist for early access to our first production run.
            </p>
          </div>

          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-neutral-600">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="px-6 py-4 h-14 bg-neutral-100 border-0 rounded-full text-neutral-900 placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-neutral-600">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="px-6 py-4 h-14 bg-neutral-100 border-0 rounded-full text-neutral-900 placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-neutral-600">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-6 py-4 h-14 bg-neutral-100 border-0 rounded-full text-neutral-900 placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-900"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full py-6 h-14 bg-neutral-900 text-white text-lg font-medium rounded-full hover:bg-neutral-800 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Joining...'
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </form>

            {status.type && (
              <div
                className={`p-4 rounded-2xl text-center transition-all duration-300 ${
                  status.type === 'success'
                    ? 'bg-green-50 text-green-700'
                    : 'bg-red-50 text-red-700'
                }`}
              >
                {status.message}
              </div>
            )}

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-500 pt-4">
              <span className="inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Early access
              </span>
              <span className="inline-flex items-center gap-2">
                <Users className="w-4 h-4" />
                First production run
              </span>
              <span className="inline-flex items-center gap-2">
                <Shield className="w-4 h-4" />
                No spam, ever
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
