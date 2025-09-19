import { Button } from '@/components/ui/button';
import { Heart, Brain, Users } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('iletisim');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="anasayfa" className="min-h-screen bg-gradient-light flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Ruh Sağlığınız İçin
                <span className="text-primary block">Profesyonel Destek</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Çocuk, ergen ve yetişkinler için psikolojik danışmanlık hizmetleri. 
                EMDR, bilişsel davranışçı terapi, şema terapi ile yaşam kalitenizi artırın.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 text-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">Bireysel Terapi</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">EMDR & Şema Terapi</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">Aile Danışmanlığı</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-medium"
              >
                Randevu Al
              </Button>
              <Button 
                onClick={() => window.open('https://wa.me/905075572040', '_blank')}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                WhatsApp İletişim
              </Button>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative bg-gradient-primary rounded-3xl shadow-medium overflow-hidden">
              <div className="aspect-square lg:aspect-[4/5] bg-therapy-light/20 flex items-center justify-center">
                <img 
                  src="https://api.doktorsitesi.com/media/cache/profil_500_webp/uploads/profile_self_image/ed3ed221eed2d28bcb3e34336f7dd9eb.webp" 
                  alt="Şema Psikoloji - Profesyonel Psikolojik Destek" 
                  className="w-3/4 h-auto opacity-90"
                />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 bg-background rounded-2xl shadow-soft p-4 border border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">6+</div>
                  <div className="text-xs text-muted-foreground">Yıl Deneyim</div>
                </div>
              </div>
              
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;