import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="hakkimda" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hakkımda
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Psikoloji alanında uzmanlaşmış, çocuk, ergen ve yetişkinlerle çalışan deneyimli bir psikolog olarak size hizmet veriyorum.
            </p>
          </div>

          {/* CV Content */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Main CV Text */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-border shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-semibold text-foreground">Eğitim ve Geçmiş</h3>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Katip Çelebi Üniversitesi Psikoloji lisans mezunuyum ve aynı üniversitede Aile Danışmanlığı 
                      yüksek lisans eğitimime devam etmekteyim. Yüksek lisans sürecimde aile ilişkileri, bağlanma, 
                      ebeveynlik ve bireysel danışmanlık süreçleri üzerine akademik ve uygulamalı çalışmalar yapmaktayım.
                    </p>
                    <p>
                      Üniversite yıllarımda Dokuz Eylül Üniversitesi Psikiyatri Servisi'nde üç ay süreyle çalışarak 
                      klinik deneyim kazandım ve çeşitli danışmanlık merkezlerinde stajlar yaptım.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Award className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-semibold text-foreground">Mesleki Deneyim</h3>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      2022 yılından bu yana Şema Psikoloji'de çocuk, ergen ve yetişkinlerle çalışmaya devam etmekteyim. 
                      Son dört yıldır ağırlıklı olarak yetişkin danışanlarla çalışarak deneyimimi bu alanda derinleştirdim.
                    </p>
                    <p>
                      EMDR, bilişsel davranışçı terapi, oyun terapisi, kısa süreli çözüm odaklı terapi, şema terapi, 
                      çocuk ve ergenler için psikolojik sağlamlık eğitimi, bağlanma travmaları konularında eğitimler aldım.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Stats */}
              <Card className="border-border shadow-soft bg-gradient-light">
                <CardContent className="p-6 text-center">
                  <div className="space-y-4">
                    <div>
                      <div className="text-3xl font-bold text-primary">4+</div>
                      <div className="text-sm text-muted-foreground">Yıl Deneyim</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">100+</div>
                      <div className="text-sm text-muted-foreground">Başarılı Danışan</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">7+</div>
                      <div className="text-sm text-muted-foreground">Farklı Terapi Yaklaşımı</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Specializations */}
              <Card className="border-border shadow-soft">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center">
                    <Heart className="w-5 h-5 text-primary mr-2" />
                    Uzmanlık Alanlarım
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
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
            </div>
          </div>

          {/* Work Areas */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">Çalışma Alanlarım</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-border shadow-soft hover:shadow-medium transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">Çocukluk & Ergenlik Dönemi</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Oyun terapisi, gelişimsel değerlendirmeler, dikkat odaklı çalışmalar, kimlik gelişimi, 
                    arkadaş ilişkileri ve akademik süreçlerde destek sağlıyorum.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border shadow-soft hover:shadow-medium transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">Yetişkinlik Dönemi</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Yaşam doyumu artırma, duygusal dayanıklılık güçlendirme, travmatik yaşantılarla baş etme, 
                    kişilerarası sınırlar belirleme konularında çalışıyorum.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;