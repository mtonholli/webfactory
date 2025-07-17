import { Check, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PricingSection = () => {
  const plans = [
    {
      name: 'Essencial',
      price: 'R$ 497',
      description: 'Ideal para pequenos negócios que querem marcar presença online',
      features: [
        'Site de 1 página (Landing Page)',
        'Design responsivo',
        'Formulário de contato',
        'Otimização SEO básica',
        'Hospedagem por 1 ano',
        'Suporte por 30 dias'
      ],
      popular: false,
      cta: 'Começar Agora'
    },
    {
      name: 'Profissional',
      price: 'R$ 997',
      description: 'Para empresas que querem uma presença digital completa',
      features: [
        'Site de até 5 páginas',
        'Design personalizado',
        'Formulário de contato avançado',
        'Otimização SEO completa',
        'Hospedagem por 1 ano',
        'Certificado SSL',
        'Integração redes sociais',
        'Suporte por 90 dias'
      ],
      popular: true,
      cta: 'Mais Vendido'
    },
    {
      name: 'Premium',
      price: 'R$ 1.497',
      description: 'Solução completa para empresas que querem se destacar',
      features: [
        'Site ilimitado de páginas',
        'Design 100% personalizado',
        'E-commerce básico',
        'Otimização SEO avançada',
        'Hospedagem por 1 ano',
        'Certificado SSL',
        'Integração completa',
        'Blog/Notícias',
        'Painel administrativo',
        'Suporte por 6 meses'
      ],
      popular: false,
      cta: 'Solicitar Orçamento'
    }
  ];

  return (
    <section id="pacotes" className="py-20 bg-gradient-to-b from-background to-muted/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pacotes de Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para seu negócio. Todos incluem hospedagem e suporte
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:-translate-y-1 ${
                plan.popular ? 'border-primary shadow-orange scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-orange text-white px-4 py-1">
                    <Star className="w-4 h-4 mr-1" />
                    Mais Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">único</span>
                </div>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-orange hover:shadow-orange' 
                      : 'bg-secondary hover:bg-secondary/80'
                  } transition-all duration-300`}
                  size="lg"
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Precisa de algo personalizado?
          </p>
          <Button 
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
          >
            Solicitar Orçamento Personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;