import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission - would integrate with backend
    alert('Mesajınız alındı! En kısa sürede size dönüş yapacağım.');
  };

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

            {/* Contact Form */}
            <div>
              <Card className="border-border shadow-medium">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Mesaj Gönder
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Aşağıdaki formu doldurarak bana ulaşabilirsiniz. Size en kısa sürede geri dönüş yapacağım.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Adınız Soyadınız
                        </label>
                        <Input 
                          id="name"
                          type="text" 
                          required 
                          className="border-input focus:border-primary"
                          placeholder="Adınızı yazın"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Telefon
                        </label>
                        <Input 
                          id="phone"
                          type="tel" 
                          required 
                          className="border-input focus:border-primary"
                          placeholder="Telefon numaranız"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        E-posta
                      </label>
                      <Input 
                        id="email"
                        type="email" 
                        required 
                        className="border-input focus:border-primary"
                        placeholder="E-posta adresiniz"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Konu
                      </label>
                      <Input 
                        id="subject"
                        type="text" 
                        required 
                        className="border-input focus:border-primary"
                        placeholder="Mesaj konusu"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Mesajınız
                      </label>
                      <Textarea 
                        id="message"
                        required 
                        rows={4}
                        className="border-input focus:border-primary"
                        placeholder="Mesajınızı buraya yazın..."
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-dark text-primary-foreground shadow-medium"
                      size="lg"
                    >
                      Mesaj Gönder
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;