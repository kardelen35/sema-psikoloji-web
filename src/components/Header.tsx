'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const WA_NUMBER = '905075572040'; // +90 507 557 20 40

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={[
        'sticky top-0 z-50 border-b',
        'backdrop-blur supports-[backdrop-filter]:bg-white/65',
        scrolled ? 'bg-white/75 border-emerald-200/60 shadow-sm' : 'bg-white/55 border-transparent',
      ].join(' ')}
      aria-label="Site üst menü"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo + mini tagline */}
          <div className="flex items-center gap-3">
            <img
              src="/logo-sema-psikoloji.jpg"
              alt="Şema Psikoloji Logo"
              className="h-10 w-auto rounded-md bg-white p-1 shadow-sm"
              loading="lazy"
            />
           
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {[
              { id: 'anasayfa', label: 'Ana Sayfa' },
              { id: 'hakkimda', label: 'Hakkımda' },
              { id: 'hizmetler', label: 'Hizmetler' },
              { id: 'iletisim', label: 'İletişim' },
            ].map((l) => (
              <button
                key={l.id}
                onClick={() => scrollToSection(l.id)}
                className="rounded-full px-4 py-2 text-sm font-medium text-emerald-900/90 hover:text-emerald-900 border border-transparent hover:border-emerald-200/70 bg-white/50 hover:bg-white/70 transition"
                aria-label={`${l.label} bölümüne git`}
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              onClick={() => window.open(`tel:+${WA_NUMBER}`, '_self')}
              variant="outline"
              className="border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white"
              aria-label="Telefonla ara"
            >
              <Phone className="mr-2 h-4 w-4" />
              Ara
            </Button>
            <Button
              onClick={() => window.open(`https://wa.me/${WA_NUMBER}`, '_blank', 'noopener,noreferrer')}
              className="bg-emerald-600 text-white hover:bg-emerald-700"
              aria-label="WhatsApp ile yaz"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="inline-flex md:hidden items-center justify-center rounded-lg p-2 text-emerald-900/80 hover:bg-emerald-100/60 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            aria-label={isMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            className="md:hidden animate-in slide-in-from-top-2 fade-in duration-200"
            aria-label="Mobil menü"
          >
            <div className="mt-2 rounded-2xl border border-emerald-200/60 bg-white/85 shadow-md backdrop-blur">
              <div className="flex flex-col divide-y divide-emerald-200/60">
                {[
                  { id: 'anasayfa', label: 'Ana Sayfa' },
                  { id: 'hakkimda', label: 'Hakkımda' },
                  { id: 'hizmetler', label: 'Hizmetler' },
                  { id: 'iletisim', label: 'İletişim' },
                ].map((l) => (
                  <button
                    key={l.id}
                    onClick={() => scrollToSection(l.id)}
                    className="px-4 py-3 text-left text-emerald-900/90 hover:bg-emerald-50 active:bg-emerald-100"
                  >
                    {l.label}
                  </button>
                ))}
                <div className="flex gap-3 p-4">
                  <Button
                    onClick={() => window.open(`https://wa.me/${WA_NUMBER}`, '_blank', 'noopener,noreferrer')}
                    className="flex-1 bg-emerald-600 text-white hover:bg-emerald-700"
                    aria-label="WhatsApp ile yaz"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                  <Button
                    onClick={() => window.open(`tel:+${WA_NUMBER}`, '_self')}
                    variant="outline"
                    className="flex-1 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white"
                    aria-label="Telefonla ara"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Ara
                  </Button>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>

      {/* alt kısımda ince gradient çizgi: sıcak ve samimi dokunuş */}
      <div aria-hidden className="h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
    </header>
  );
};

export default Header;
