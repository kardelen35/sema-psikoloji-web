import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {

  return (
    <section id="iletisim" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              İletişime Geçin
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Psikolojik destek almak için benimle iletişime geçebilirsiniz. Size yardımcı olmaktan mutluluk duyarım.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  İletişim Bilgileri
                </h3>
                <div className="space-y-6">
                  {/* WhatsApp */}
                  <Card className="border-border shadow-soft hover:shadow-medium transition-shadow cursor-pointer"
                        onClick={() => window.open('https://wa.me/905551234567', '_blank')}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                          <MessageCircle className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">WhatsApp İletişim</h4>
                          <p className="text-muted-foreground">+90 555 123 45 67</p>
                          <p className="text-sm text-green-600">Hızlı iletişim için tıklayın</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Phone */}
                  <Card className="border-border shadow-soft">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">Telefon</h4>
                          <p className="text-muted-foreground">+90 555 123 45 67</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Email */}
                  <Card className="border-border shadow-soft">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">E-posta</h4>
                          <p className="text-muted-foreground">info@semapsikoloji.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Address */}
                  <Card className="border-border shadow-soft">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">Adres</h4>
                          <p className="text-muted-foreground">Şema Psikoloji Merkezi<br />İzmir, Türkiye</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Office Hours */}
                  <Card className="border-border shadow-soft">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">Çalışma Saatleri</h4>
                          <p className="text-muted-foreground">
                            Pazartesi - Cuma: 09:00 - 18:00<br />
                            Cumartesi: 09:00 - 15:00<br />
                            Pazar: Kapalı
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div>
              <Card className="border-border shadow-medium">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Konum
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Ofis konumumuzu haritada görüntüleyebilirsiniz. Randevu almak için WhatsApp üzerinden iletişime geçin.
                  </p>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-96 w-full rounded-b-lg overflow-hidden">
                    <iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.347214485628!2d26.9738842!3d38.80159679999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ba31eb908191cb%3A0x19e681f19f40b218!2s%C5%9Eema%20Psikoloji!5e0!3m2!1str!2str!4v1758279063307!5m2!1str!2str"                      width="100%"
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
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <Button 
                  onClick={() => window.open('https://wa.me/905551234567', '_blank')}
                  className="w-full bg-green-600 hover:bg-green-700 text-white shadow-medium"
                  size="lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp ile İletişim
                </Button>
                <Button 
                  onClick={() => window.open('tel:+905551234567', '_blank')}
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  size="lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Telefon Ara
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;