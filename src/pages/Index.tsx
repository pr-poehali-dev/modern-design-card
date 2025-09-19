import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      icon: 'Shield',
      title: 'Системы видеонаблюдения',
      description: 'Профессиональные решения для круглосуточного мониторинга и защиты объектов',
      features: ['IP-камеры высокого разрешения', 'Облачное хранение', 'Мобильное приложение']
    },
    {
      icon: 'Lock',
      title: 'Контроль доступа',
      description: 'Современные системы управления доступом с биометрией и RFID-картами',
      features: ['Биометрическая идентификация', 'Многоуровневый доступ', 'Журнал событий']
    },
    {
      icon: 'AlertTriangle',
      title: 'Охранная сигнализация',
      description: 'Интегрированные решения для защиты от проникновения и аварийных ситуаций',
      features: ['Датчики движения', 'Пожарная сигнализация', 'SMS-уведомления']
    },
    {
      icon: 'Wifi',
      title: 'Сетевая безопасность',
      description: 'Защита корпоративных сетей и данных от внешних и внутренних угроз',
      features: ['Межсетевые экраны', 'VPN-решения', 'Мониторинг трафика']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-20 px-4">
        <div className="absolute inset-0 bg-[url('/img/0ea84599-51d3-42c6-ae26-e241cd72cba6.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-inter font-bold text-foreground">
                Безопасность
                <span className="text-primary block">нового уровня</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-sans max-w-3xl mx-auto leading-relaxed">
                Разрабатываем и внедряем комплексные системы безопасности для защиты вашего бизнеса
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 font-medium">
                <Icon name="Phone" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 font-medium">
                <Icon name="Play" size={20} className="mr-2" />
                Посмотреть демо
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-bold text-foreground">
              Наши услуги
            </h2>
            <p className="text-xl text-muted-foreground font-sans max-w-2xl mx-auto">
              Полный спектр решений для обеспечения безопасности вашего объекта
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/60 backdrop-blur-sm">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-inter font-semibold mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-muted-foreground font-sans leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-foreground font-sans">
                        <Icon name="CheckCircle" size={20} className="text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Проектов реализовано' },
              { number: '15', label: 'Лет на рынке' },
              { number: '24/7', label: 'Техническая поддержка' },
              { number: '99.9%', label: 'Надежность систем' }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-inter font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-sans font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-foreground text-background">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-inter font-bold">
              Готовы обеспечить безопасность?
            </h2>
            <p className="text-xl text-background/80 font-sans max-w-2xl mx-auto">
              Свяжитесь с нами для бесплатной консультации и составления индивидуального решения
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto">
                <Icon name="Phone" size={24} className="text-white" />
              </div>
              <div className="font-inter font-semibold text-lg">Телефон</div>
              <div className="text-background/80 font-sans">+7 (495) 123-45-67</div>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto">
                <Icon name="Mail" size={24} className="text-white" />
              </div>
              <div className="font-inter font-semibold text-lg">Email</div>
              <div className="text-background/80 font-sans">info@security-pro.ru</div>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto">
                <Icon name="MapPin" size={24} className="text-white" />
              </div>
              <div className="font-inter font-semibold text-lg">Адрес</div>
              <div className="text-background/80 font-sans">Москва, ул. Тверская, 15</div>
            </div>
          </div>

          <Button size="lg" variant="secondary" className="text-lg px-8 py-6 font-medium mt-8">
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Написать нам
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;