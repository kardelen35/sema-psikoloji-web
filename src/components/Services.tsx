'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Heart, Users, Baby, Gamepad2, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'EMDR Terapisi',
      description:
        'Travmatik yaşantıların işlenmesi ve iyileştirilmesi için etkili bir yöntem. Geçmiş deneyimlerin bugünle olan bağını çözerek duygusal rahatlama sağlar.',
      features: ['Travma İşleme', 'Kaygı Azaltma', 'Duygusal Düzenleme'],
    },
    {
      icon: Heart,
      title: 'Bilişsel Davranışçı Terapi',
      description:
        'Düşünce, duygu ve davranış arasındaki bağı anlayarak olumsuz kalıpları değiştirme odaklı yaklaşım.',
      features: ['Düşünce Kalıpları', 'Davranış Değişimi', 'Duygu Yönetimi'],
    },
    {
      icon: Users,
      title: 'Aile Danışmanlığı',
      description:
        'Aile içi iletişimi güçlendirme, çatışma çözme ve sağlıklı aile dinamikleri oluşturma konularında destek.',
      features: ['İletişim Becerileri', 'Çatışma Çözümü', 'Ebeveynlik Desteği'],
    },
    {
      icon: Baby,
      title: 'Çocuk Psikolojisi',
      description:
        'Çocukların duygusal, sosyal ve bilişsel gelişimlerini destekleyici çalışmalar ve gelişimsel değerlendirmeler.',
      features: ['Gelişim Değerlendirme', 'Dikkat Testleri', 'Sosyal Beceriler'],
    },
    {
      icon: Gamepad2,
      title: 'Oyun Terapisi',
      description:
        'Çocukların doğal iletişim dili olan oyun yoluyla duygularını ifade etmelerini ve işlemelerini sağlama.',
      features: ['Duygu İfadesi', 'Yaratıcılık', 'Güvenli Bağlanma'],
    },
    {
      icon: MessageSquare,
      title: 'Şema Terapisi',
      description:
        'Kişilik problemleri ve kronik sorunların temelindeki şemaları tanımlayarak değiştirmeye odaklanan yaklaşım.',
      features: ['Şema Analizi', 'Kişilik Gelişimi', 'Kronik Problemler'],
    },
  ];

  const scrollToContact = () => {
    const el = document.getElementById('iletisim');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="hizmetler"
      className="relative py-20 bg-gradient-to-b from-white via-emerald-50/35 to-white"
      aria-label="Sunduğum Hizmetler"
    >
      {/* arka plan grid + blur bloblar */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(80%_60%_at_50%_20%,#000_60%,transparent_100%)]"
      >
        <svg className="absolute inset-0 h-full w-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-svcs" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-svcs)" className="text-emerald-900/20" />
        </svg>
      </div>
      <div aria-hidden className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-emerald-300/30 blur-3xl" />
      <div aria-hidden className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-6xl"
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-950">Sunduğum Hizmetler</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-emerald-900/75">
              Çocuk, ergen ve yetişkinler için geniş yelpazede psikolojik destek hizmetleri sunuyorum. Her yaş
              grubuna uygun, kanıta dayalı terapi yöntemleri kullanarak size en iyi hizmeti vermeyi hedefliyorum.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  className="will-change-transform"
                >
                  <Card className="border-emerald-200/60 bg-white/70 shadow-sm backdrop-blur transition-shadow hover:shadow-md">
                    <CardHeader className="pb-4">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-400 shadow-md">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-emerald-950">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm leading-relaxed text-emerald-900/75">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((f) => (
                          <span
                            key={f}
                            className="rounded-full border border-emerald-200/70 bg-white/70 px-3 py-1 text-xs text-emerald-900/80 shadow-sm"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            variants={fadeUp}
            className="rounded-3xl bg-gradient-to-br from-white/85 to-emerald-50/70 p-8 shadow-md backdrop-blur md:p-12 text-center border border-emerald-200/60"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-emerald-950 mb-4">
              Psikolojik Desteğe İhtiyacınız Var mı?
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-emerald-900/75">
              Size en uygun terapi yaklaşımını belirlemek için önce bir görüşme yapalım. Birlikte en doğru
              yöntemi bularak iyileşme yolculuğunuza başlayalım.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-emerald-600 text-white hover:bg-emerald-700 shadow-medium"
                aria-label="İletişim bölümüne git ve randevu al"
              >
                Randevu Al
              </Button>
              <Button
                onClick={() => window.open('https://wa.me/905551234567', '_blank', 'noopener,noreferrer')}
                variant="outline"
                size="lg"
                className="border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white"
                aria-label="WhatsApp üzerinden iletişime geç"
              >
                WhatsApp İletişim
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
