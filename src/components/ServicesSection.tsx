import { 
  Code, 
  Palette, 
  CreditCard, 
  Link, 
  Server, 
  Wrench,
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'Criação de Sites',
      description: 'Sites modernos, responsivos e otimizados para todos os dispositivos.',
      features: ['Design responsivo', 'Otimização SEO', 'Performance otimizada', 'Código limpo']
    },
    {
      icon: Palette,
      title: 'Identidade Visual',
      description: 'Logo, paleta de cores e tipografia que representam sua marca.',
      features: ['Logo profissional', 'Paleta de cores', 'Tipografia', 'Manual de marca']
    },
    {
      icon: CreditCard,
      title: 'Cartões Digitais',
      description: 'Cartão de visita digital interativo com suas informações.',
      features: ['QR Code', 'Contato direto', 'Redes sociais', 'Estatísticas']
    },
    {
      icon: Link,
      title: 'Bio Personalizada',
      description: 'Bio estilizada para organizar todos seus links, contatos e mídias sociais.',
      features: ['Links organizados', 'Estatísticas', 'Personalização', 'Fácil edição']
    },
    {
      icon: Server,
      title: 'Hospedagem',
      description: 'Hospedagem confiável com SSL gratuito e backups automáticos.',
      features: ['SSL gratuito', 'Backups diários', 'Suporte 24/7', 'Alta disponibilidade']
    },
    {
      icon: Wrench,
      title: 'Manutenção',
      description: 'Atualizações, correções e melhorias contínuas no seu site.',
      features: ['Atualizações', 'Correções', 'Melhorias', 'Suporte técnico']
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-muted/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para sua presença digital com qualidade profissional
          </p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className=" self-end bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:-translate-y-1"
            >
              <CardHeader className=" h-52 text-center">
                <div className="w-16 h-16 bg-gradient-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className=" h-full space-y-5 mb-5">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className=" h-15 flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="relative bottom-0 w-full border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                >
                  Saiba Mais
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;