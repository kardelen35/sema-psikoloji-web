import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Heart, Users, Baby, Gamepad2, MessageSquare } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "EMDR Terapisi",
      description: "Travmatik yaşantıların işlenmesi ve iyileştirilmesi için etkili bir yöntem. Geçmiş deneyimlerin bugünle olan bağını çözerek duygusal rahatlama sağlar.",
      features: ["Travma İşleme", "Kaygı Azaltma", "Duygusal Düzenleme"]
    },
    {
      icon: Heart,
      title: "Bilişsel Davranışçı Terapi",
      description: "Düşünce, duygu ve davranış arasındaki bağı anlayarak olumsuz kalıpları değiştirme odaklı yaklaşım.",
      features: ["Düşünce Kalıpları", "Davranış Değişimi", "Duygu Yönetimi"]
    },
    {
      icon: Users,
      title: "Aile Danışmanlığı",
      description: "Aile içi iletişimi güçlendirme, çatışma çözme ve sağlıklı aile dinamikleri oluşturma konularında destek.",
      features: ["İletişim Becerileri", "Çatışma Çözümü", "Ebeveynlik Desteği"]
    },
    {
      icon: Baby,
      title: "Çocuk Psikolojisi",
      description: "Çocukların duygusal, sosyal ve bilişsel gelişimlerini destekleyici çalışmalar ve gelişimsel değerlendirmeler.",
      features: ["Gelişim Değerlendirme", "Dikkat Testleri", "Sosyal Beceriler"]
    },
    {
      icon: Gamepad2,
      title: "Oyun Terapisi",
      description: "Çocukların doğal iletişim dili olan oyun yoluyla duygularını ifade etmelerini ve işlemelerini sağlama.",
      features: ["Duygu İfadesi", "Yaratıcılık", "Güvenli Bağlanma"]
    },
    {
      icon: MessageSquare,
      title: "Şema Terapisi",
      description: "Kişilik problemleri ve kronik sorunların temelindeki şemaları tanımlayarak değiştirmeye odaklanan yaklaşım.",
      features: ["Şema Analizi", "Kişilik Gelişimi", "Kronik Problemler"]
    }
  ];

  return (
    <section id="hizmetler" className="py-20 bg-therapy-light/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sunduğum Hizmetler
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Çocuk, ergen ve yetişkinler için geniş yelpazede psikolojik destek hizmetleri sunuyorum. 
              Her yaş grubuna uygun, kanıta dayalı terapi yöntemleri kullanarak size en iyi hizmeti vermeyi hedefliyorum.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="border-border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-background">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 shadow-soft">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-light rounded-3xl p-8 md:p-12 shadow-medium">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Psikolojik Desteğe İhtiyacınız Var mı?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Size en uygun terapi yaklaşımını belirlemek için önce bir görüşme yapalım. 
              Birlikte en doğru yöntemi bularak iyileşme yolculuğunuzu başlayalım.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => {
                  const element = document.getElementById('iletisim');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                size="lg"
                className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-medium"
              >
                Randevu Al
              </Button>
              <Button 
                onClick={() => window.open('https://wa.me/905551234567', '_blank')}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                WhatsApp İletişim
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;