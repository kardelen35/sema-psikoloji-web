import { Heart, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo-sema-psikoloji.jpg" 
                alt="Şema Psikoloji" 
                className="h-12 w-auto bg-white rounded-lg p-1"
              />
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Çocuk, ergen ve yetişkinler için profesyonel psikolojik danışmanlık hizmetleri. 
              Yaşam kalitenizi artırmak için buradayım.
            </p>
            <div className="flex items-center text-sm text-primary-foreground/60">
              <Heart className="w-4 h-4 mr-2" />
              Ruh sağlığınız için güvenilir partner
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => document.getElementById('anasayfa')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Ana Sayfa
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('hakkimda')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Hakkımda
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('hizmetler')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Hizmetlerim
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  İletişim
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">İletişim</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">+90 555 123 45 67</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">info@semapsikoloji.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-primary-foreground/60 mt-0.5" />
                <span className="text-primary-foreground/80">
                  Şema Psikoloji Merkezi<br />
                  İzmir, Türkiye
                </span>
              </div>
            </div>

            {/* WhatsApp Button */}
            <button
              onClick={() => window.open('https://wa.me/905551234567', '_blank')}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp İletişim
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Şema Psikoloji. Tüm hakları saklıdır.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Psikolojik sağlık danışmanlığı hizmetleri
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;