'use client';

import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Heart, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const About = () => {
  return (
    <section
      id="hakkimda"
      className="relative bg-gradient-to-b from-white via-emerald-50/40 to-white py-20"
      aria-label="Hakkımda bölümü"
    >
      {/* subtle grid pattern + blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(80%_60%_at_50%_20%,#000_60%,transparent_100%)]"
      >
        <svg className="absolute inset-0 h-full w-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-about" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-about)" className="text-emerald-900/20" />
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
          className="mx-auto max-w-4xl"
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-emerald-950 md:text-4xl">Hakkımda</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-emerald-900/75">
              Psikoloji alanında uzmanlaşmış, çocuk, ergen ve yetişkinlerle çalışan deneyimli bir psikolog
              olarak size hizmet veriyorum.
            </p>
          </motion.div>

          {/* CV Content */}
          <div className="mb-12 grid gap-8 lg:grid-cols-3">
            {/* Main CV Text */}
            <div className="space-y-6 lg:col-span-2">
              <motion.div variants={fadeUp}>
                <Card className="border-emerald-200/60 bg-white/70 shadow-sm backdrop-blur">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center">
                      <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                        <GraduationCap className="h-6 w-6 text-emerald-700" />
                      </div>
                      <h3 className="text-xl font-semibold text-emerald-950">Eğitim ve Geçmiş</h3>
                    </div>
                    <div className="space-y-4 text-emerald-900/75">
                      <p>
                        Katip Çelebi Üniversitesi Psikoloji lisans mezunuyum ve aynı üniversitede Aile
                        Danışmanlığı yüksek lisans eğitimime devam etmekteyim. Yüksek lisans sürecimde aile
                        ilişkileri, bağlanma, ebeveynlik ve bireysel danışmanlık süreçleri üzerine akademik ve
                        uygulamalı çalışmalar yapmaktayım.
                      </p>
                      <p>
                        Üniversite yıllarımda Dokuz Eylül Üniversitesi Psikiyatri Servisi&apos;nde üç ay süreyle
                        çalışarak klinik deneyim kazandım ve çeşitli danışmanlık merkezlerinde stajlar yaptım.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="border-emerald-200/60 bg-white/70 shadow-sm backdrop-blur">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center">
                      <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                        <Award className="h-6 w-6 text-emerald-700" />
                      </div>
                      <h3 className="text-xl font-semibold text-emerald-950">Mesleki Deneyim</h3>
                    </div>
                    <div className="space-y-4 text-emerald-900/75">
                      <p>
                        2022 yılından bu yana Şema Psikoloji&apos;de çocuk, ergen ve yetişkinlerle çalışmaya
                        devam etmekteyim. Son dört yıldır ağırlıklı olarak yetişkin danışanlarla çalışarak
                        deneyimimi bu alanda derinleştirdim.
                      </p>
                      <p>
                        EMDR, bilişsel davranışçı terapi, oyun terapisi, kısa süreli çözüm odaklı terapi, şema
                        terapi, çocuk ve ergenler için psikolojik sağlamlık eğitimi, bağlanma travmaları
                        konularında eğitimler aldım.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Stats */}
              <motion.div variants={fadeUp}>
                <Card className="border-emerald-200/60 bg-gradient-to-br from-white/80 to-emerald-50/60 shadow-md backdrop-blur">
                  <CardContent className="p-6 text-center">
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { value: '6+', label: 'Yıl Deneyim' },
                        { value: '100+', label: 'Başarılı Danışan' },
                        { value: '7+', label: 'Farklı Yaklaşım' },
                      ].map((s) => (
                        <motion.div
                          key={s.label}
                          variants={fadeIn}
                          className="rounded-2xl border border-emerald-200/60 bg-white/70 px-3 py-4 shadow-sm"
                        >
                          <div className="text-2xl font-bold text-emerald-700">{s.value}</div>
                          <div className="mt-1 text-xs text-emerald-900/70">{s.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Specializations */}
              <motion.div variants={fadeUp}>
                <Card className="group border-emerald-200/60 bg-white/70 shadow-sm backdrop-blur transition hover:shadow-md">
                  <CardContent className="p-6">
                    <h4 className="mb-4 flex items-center font-semibold text-emerald-950">
                      <Heart className="mr-2 h-5 w-5 text-emerald-700" />
                      Uzmanlık Alanlarım
                    </h4>
                    <ul className="space-y-2 text-sm text-emerald-900/75">
                      <li>• EMDR Terapisi</li>
                      <li>• Bilişsel Davranışçı Terapi</li>
                      <li>• Şema Terapisi</li>
                      <li>• Oyun Terapisi</li>
                      <li>• Çözüm Odaklı Terapi</li>
                      <li>• Aile Danışmanlığı</li>
                      <li>• Psikodrama</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Work Areas */}
          <motion.div variants={fadeUp} className="space-y-8">
            <h3 className="mb-2 text-center text-2xl font-bold text-emerald-950">Çalışma Alanlarım</h3>
            <p className="mx-auto mb-8 max-w-3xl text-center text-emerald-900/70">
              Farklı gelişim dönemlerine uygun, kanıta dayalı ve kişiye özgü yaklaşımlar.
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                className="will-change-transform"
              >
                <Card className="border-emerald-200/60 bg-white/70 shadow-sm backdrop-blur hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center">
                      <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                        <Heart className="h-6 w-6 text-emerald-700" />
                      </div>
                      <h4 className="text-lg font-semibold text-emerald-950">Çocukluk &amp; Ergenlik Dönemi</h4>
                    </div>
                    <p className="text-sm text-emerald-900/75">
                      Oyun terapisi, gelişimsel değerlendirmeler, dikkat odaklı çalışmalar, kimlik gelişimi,
                      arkadaş ilişkileri ve akademik süreçlerde destek sağlıyorum.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                className="will-change-transform"
              >
                <Card className="border-emerald-200/60 bg-white/70 shadow-sm backdrop-blur hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center">
                      <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                        <Users className="h-6 w-6 text-emerald-700" />
                      </div>
                      <h4 className="text-lg font-semibold text-emerald-950">Yetişkinlik Dönemi</h4>
                    </div>
                    <p className="text-sm text-emerald-900/75">
                      Yaşam doyumu artırma, duygusal dayanıklılık güçlendirme, travmatik yaşantılarla baş etme,
                      kişilerarası sınırları belirleme konularında çalışıyorum.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
