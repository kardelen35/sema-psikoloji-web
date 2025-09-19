'use client';

import { Button } from '@/components/ui/button';
import { Heart, Brain, Users, MessageCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.08 } },
};

const Hero = () => {
  const scrollToContact = () => {
    const el = document.getElementById('iletisim');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="anasayfa"
      className="relative min-h-[88vh] flex items-center bg-gradient-to-b from-emerald-50 via-white to-emerald-50/40"
      aria-label="Şema Psikoloji Ana Kahraman Bölümü"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(80%_60%_at_50%_30%,#000_60%,transparent_100%)]"
      >
        <svg className="absolute inset-0 h-full w-full opacity-[0.12]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-emerald-900/20" />
        </svg>
      </div>

      <div aria-hidden className="absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl bg-emerald-300/30" />
      <div aria-hidden className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full blur-3xl bg-emerald-200/40" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <motion.div variants={fadeUp} className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-3 py-1 text-xs text-emerald-800 shadow-sm backdrop-blur">
              <CheckCircle2 className="h-4 w-4" />
              Bireysel &amp; Kanıta Dayalı Yaklaşım
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl font-extrabold leading-tight text-emerald-950 md:text-5xl lg:text-6xl"
            >
              Ruh Sağlığınız İçin{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                Profesyonel Destek
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl text-lg leading-relaxed text-emerald-900/75 md:text-xl"
            >
              Çocuk, ergen ve yetişkinler için psikolojik danışmanlık. EMDR, bilişsel
              davranışçı terapi ve şema terapi ile yaşam kalitenizi artırın.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { Icon: Heart, label: 'Bireysel Terapi' },
                { Icon: Brain, label: 'EMDR & Şema Terapi' },
                { Icon: Users, label: 'Aile Danışmanlığı' },
              ].map(({ Icon, label }) => (
                <div
                  key={label}
                  className="group flex items-center gap-3 rounded-2xl border border-emerald-200/60 bg-white/70 p-3 shadow-sm backdrop-blur transition hover:shadow-md"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 group-hover:bg-emerald-200 transition">
                    <Icon className="h-5 w-5 text-emerald-700" />
                  </div>
                  <span className="text-sm font-medium text-emerald-900">{label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="shadow-medium bg-emerald-600 text-white hover:bg-emerald-700"
                aria-label="Randevu almak için iletişim bölümüne git"
              >
                Randevu Al
              </Button>

              <Button
                onClick={() => window.open('https://wa.me/905075572040', '_blank', 'noopener,noreferrer')}
                variant="outline"
                size="lg"
                className="border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white"
                aria-label="WhatsApp üzerinden iletişime geç"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp İletişim
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-4">
              <div className="rounded-full border border-emerald-200 bg-white/70 px-4 py-2 text-xs font-medium text-emerald-800 shadow-sm backdrop-blur">
                Gizlilik &amp; Mahremiyet Esaslı
              </div>
              <div className="rounded-full border border-emerald-200 bg-white/70 px-4 py-2 text-xs font-medium text-emerald-800 shadow-sm backdrop-blur">
                Bilimsel, Etik, Şefkatli Yaklaşım
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[28px] border border-emerald-200/70 bg-white/60 shadow-xl backdrop-blur">
              <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[28px]">
                <div className="absolute -inset-[2px] rounded-[30px] bg-gradient-to-br from-emerald-500/30 via-emerald-300/20 to-emerald-600/30 blur-sm" />
              </div>

              <div className="relative aspect-[4/5] flex items-center justify-center bg-emerald-50">
                <img
                  src="https://api.doktorsitesi.com/media/cache/profil_500_webp/uploads/profile_self_image/ed3ed221eed2d28bcb3e34336f7dd9eb.webp"
                  alt="Şema Psikoloji - Profesyonel Psikolojik Destek"
                  className="h-auto w-3/4 rounded-2xl object-cover opacity-95"
                  loading="lazy"
                />
              </div>

              <div className="absolute -top-5 -right-5">
                <div className="rounded-2xl border border-emerald-200 bg-white/80 px-5 py-4 text-center shadow-md backdrop-blur">
                  <div className="text-2xl font-bold text-emerald-700">6+</div>
                  <div className="text-[11px] tracking-wide text-emerald-900/70">Yıl Deneyim</div>
                </div>
              </div>

              {/* <div className="absolute bottom-5 left-5">
                <div className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-white/85 px-4 py-3 shadow-md backdrop-blur">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100">
                    <Brain className="h-5 w-5 text-emerald-700" />
                  </div>
                  <div>
                    <p className="text-xs leading-tight text-emerald-900/70">Yaklaşım</p>
                    <p className="text-sm font-semibold text-emerald-900">EMDR &amp; BDT &amp; Şema</p>
                  </div>
                </div>
              </div> */}
            </div>

            <div aria-hidden className="mx-auto mt-6 h-4 w-4/5 rounded-full bg-emerald-900/10 blur-md" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
