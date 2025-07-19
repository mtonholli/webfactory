import { Eye, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import templateLanding from '@/assets/template-landing.jpg';
import templatePortfolio from '@/assets/template-portfolio.jpg';
import templateInstitutional from '@/assets/template-institutional.jpg';

const ModelsSection = () => {
  const models = [
    {
      id: 1,
      name: 'Landing Page',
      description: 'Páginas focadas em conversão com design impactante e call-to-actions estratégicos.',
      image: templateLanding,
      features: ['Alta conversão', 'Design responsivo', 'Otimização SEO']
    },
    {
      id: 2,
      name: 'Portfólio',
      description: 'Mostre seus trabalhos de forma elegante e profissional com galeria interativa.',
      image: templatePortfolio,
      features: ['Galeria interativa', 'Layout clean', 'Fácil navegação']
    },
    {
      id: 3,
      name: 'Site Institucional',
      description: 'Presença profissional completa com todas as informações da sua empresa.',
      image: templateInstitutional,
      features: ['Múltiplas páginas', 'Formulário contato', 'Área administrativa']
    },
    {
      id: 4,
      name: 'Cardápio Digital',
      description: 'Cardápio online interativo para restaurantes e estabelecimentos.',
      image: templateLanding,
      features: ['Categorias organizadas', 'Preços atualizáveis', 'Pedidos online']
    },
    {
      id: 5,
      name: 'Bio Personalizada',
      description: 'Link na bio estilizado tipo Linktree com sua identidade visual.',
      image: templatePortfolio,
      features: ['Links organizados', 'Estatísticas', 'Personalização total']
    },
    {
      id: 6,
      name: 'Loja Virtual',
      description: 'E-commerce completo com sistema de pagamento integrado.',
      image: templateInstitutional,
      features: ['Catálogo produtos', 'Pagamento seguro', 'Gestão pedidos']
    }
  ];

  return (
    <section id="modelos" className="py-20 bg-gradient-to-b from-background to-muted/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Modelos de Páginas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha entre nossos modelos profissionais ou crie algo totalmente personalizado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model) => (
            <Card 
              key={model.id} 
              className="group bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
             
              </div>
              
              <CardHeader>
                <CardTitle className="text-foreground group-hover:text-primary transition-colors duration-300">
                  {model.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {model.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-2 mb-4">
                  {model.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                >
                  Ver exemplo
                  <Eye className="w-4 h-4 mr-2" />
                  
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;