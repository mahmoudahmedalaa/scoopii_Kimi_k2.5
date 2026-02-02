import { Instagram, Twitter, Youtube, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold text-neutral-900">Scoopii</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-neutral-400 hover:text-neutral-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-neutral-400 hover:text-neutral-600 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-neutral-400 hover:text-neutral-600 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@scoopii.com"
              className="text-neutral-400 hover:text-neutral-600 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-neutral-400">
            © {currentYear} Scoopii. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
