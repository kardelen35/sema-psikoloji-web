'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const WA_NUMBER = '905075572040'; // +90 507 557 20 40 (tutarlılık için)

const Contact = () => {
  return (
    <section
      id="iletisim"
      className="relative py-20 bg-gradient-to-b from-white via-emerald-50/35 to-white"
      aria-label="İletişim Bölümü"
    >
      {/* subtle grid + blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(80%_60%_at_50%_20%,#000_60%,transparent_100%)]"
      >
        <svg className="absolute inset-0 h-full w-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-contact" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-contact)" className="text-emerald-900/20" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-950">İletişime Geçin</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-emerald-900/75">
              Psikolojik destek almak için benimle iletişime geçebilirsiniz. Size yardımcı olmaktan mutluluk duyarım.
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left: Contact Information */}
            <motion.div variants={stagger} className="space-y-8">
              <motion.div variants={fadeUp}>
                <h3 className="mb-6 text-2xl font-bold text-emerald-950">İletişim Bilgileri</h3>
                <div className="space-y-6">
                  {/* WhatsApp */}
                  <motion.div variants={fadeUp} whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }}>
                    <Card
                      className="cursor-pointer border-emerald-200/60 bg-white/70 shadow-sm backdrop-blur transition-shadow hover:shadow-md"
                      onClick={() => window.open(`https://wa.me/${WA_NUMBER}`, '_blank', 'noopener,noreferrer')}
                      role="button"
                      aria-label="WhatsApp ile hızlı iletişim"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                            <MessageCircle className="h-6 w-6 text-emerald-700" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-emerald-950">WhatsApp İletişim</h4>
                            <p className="text-emerald-900/75">+90 507 557 20 40</p>
                            <p className="text-xs font-medium text-emerald-700">Hızlı iletişim için tıklayın</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Phone */}
                  <motion.div variants={fadeUp}>
                    <Card className="border-emerald-200/60 bg-white/70 shadow-sm backdrop-blur">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                            <Phone className="h-6 w-6 text-emerald-700" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-emerald-950">Telefon</h4>
                            <button
                              onClick={() => window.open(`tel:+${WA_NUMBER}`, '_self')}
                              className="text-left text-emerald-900/75 underline underline-offset-4 hover:text-emerald-800"
                              aria-label="Telefon ile ara"
                            >
                              +90 507 557 20 40
                            </button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Email */}
                  <motion.div variants={fadeUp}>
                    <Card className="border-emerald-200/60 bg-white/70 shadow-sm backdrop-blur">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                            <Mail className="h-6 w-6 text-emerald-700" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-emerald-950">E-posta</h4>
                            <button
                              onClick={() => window.open('mailto:info@semapsikoloji.com', '_self')}
                              className="text-left text-emerald-900/75 underline underline-offset-4 hover:text-emerald-800 break-all"
                              aria-label="E-posta gönder"
                            >
                              info@semapsikoloji.com
                            </button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Address */}
                  <motion.div variants={fadeUp}>
                    <Card className="border-emerald-200/60 bg-white/70 shadow-sm backdrop-blur">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                            <MapPin className="h-6 w-6 text-emerald-700" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-emerald-950">Adres</h4>
                            <p className="text-emerald-900/75">
                              Şema Psikoloji Merkezi
                              <br />
                              İzmir, Türkiye
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Google Maps */}
            <motion.div variants={fadeUp}>
              <Card className="border-emerald-200/60 bg-white/70 shadow-md backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-emerald-950">Konum</CardTitle>
                  <p className="text-emerald-900/75">
                    Ofis konumumuzu haritada görüntüleyebilirsiniz. Randevu için WhatsApp üzerinden iletişime geçin.
                  </p>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-96 w-full overflow-hidden rounded-b-[18px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.347214485628!2d26.9738842!3d38.80159679999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ba31eb908191cb%3A0x19e681f19f40b218!2s%C5%9Eema%20Psikoloji!5e0!3m2!1str!2str!4v1758279063307!5m2!1str!2str"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Şema Psikoloji Ofis Konumu"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Actions */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Button
                  onClick={() => window.open(`https://wa.me/${WA_NUMBER}`, '_blank', 'noopener,noreferrer')}
                  className="w-full bg-emerald-600 text-white shadow-medium hover:bg-emerald-700"
                  size="lg"
                  aria-label="WhatsApp ile iletişime geç"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp ile İletişim
                </Button>
                <Button
                  onClick={() => window.open(`tel:+${WA_NUMBER}`, '_self')}
                  variant="outline"
                  className="w-full border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white"
                  size="lg"
                  aria-label="Telefonla ara"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Telefon Ara
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
