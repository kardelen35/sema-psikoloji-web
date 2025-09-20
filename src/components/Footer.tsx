'use client';

import { Heart, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import React from 'react';

const WA_NUMBER = '905075572040'; // +90 507 557 20 40
const PHONE_DISPLAY = '+90 507 557 20 40';

const Footer = () => {
  const year = new Date().getFullYear();
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <footer className="relative bg-gradient-to-b from-emerald-700 to-emerald-800 text-white">
      {/* subtle pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
      >
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-footer" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-footer)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/logo-sema-psikoloji.jpg"
                alt="Şema Psikoloji"
                className="h-12 w-auto rounded-lg bg-white p-1"
                loading="lazy"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Çocuk, ergen ve yetişkinler için profesyonel psikolojik danışmanlık hizmetleri.
              Yaşam kalitenizi artırmak için buradayım.
            </p>
            <div className="flex items-center text-sm text-white/75">
              <Heart className="mr-2 h-4 w-4" />
              Ruh sağlığınız için güvenilir partner
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Hızlı Bağlantılar">
            <h4 className="mb-4 font-semibold">Hızlı Bağlantılar</h4>
            <ul className="space-y-2 text-sm">
              {[
                { id: 'anasayfa', label: 'Ana Sayfa' },
                { id: 'hakkimda', label: 'Hakkımda' },
                { id: 'hizmetler', label: 'Hizmetlerim' },
                { id: 'iletisim', label: 'İletişim' },
              ].map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className="text-white/80 hover:text-white transition-colors underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-white/40 rounded"
                    aria-label={`${l.label} bölümüne git`}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-semibold">İletişim</h4>
            <address className="not-italic space-y-3 text-sm">
              <div className="flex items-center">
                <Phone className="mr-3 h-4 w-4 text-white/70" />
                <button
                  onClick={() => window.open(`tel:+${WA_NUMBER}`, '_self')}
                  className="text-left text-white/85 hover:text-white underline underline-offset-4"
                  aria-label="Telefonla ara"
                >
                  {PHONE_DISPLAY}
                </button>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 h-4 w-4 text-white/70" />
                <button
                  onClick={() => window.open('mailto:info@semapsikoloji.com', '_self')}
                  className="text-left text-white/85 hover:text-white underline underline-offset-4 break-all"
                  aria-label="E-posta gönder"
                >
                  info@semapsikoloji.com
                </button>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-3 mt-0.5 h-4 w-4 text-white/70" />
                <span className="text-white/85">
                  Şema Psikoloji Merkezi
                  <br />
                  İzmir, Türkiye
                </span>
              </div>
            </address>

            {/* WhatsApp Button */}
            <button
              onClick={() => window.open(`https://wa.me/${WA_NUMBER}`, '_blank')}
              className="mt-4 inline-flex items-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-md transition-colors hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-white/40"
              aria-label="WhatsApp ile iletişime geç"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp İletişim
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-white/20 pt-8 text-center">
          <div className="flex flex-col items-center justify-between space-y-2 text-sm text-white/75 sm:flex-row sm:space-y-0">
            <p>© {year} Şema Psikoloji. Tüm hakları saklıdır.</p>
            <p>Psikolojik sağlık danışmanlığı hizmetleri</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
