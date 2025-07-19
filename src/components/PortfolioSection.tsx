import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import templateLanding from '@/assets/SoftMig-template-reduzido.png';
import templatePortfolio from '@/assets/template-portfolio.jpg';
import templateInstitutional from '@/assets/template-institutional.jpg';

const PortfolioSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Mig Control',
      category: 'Sistemas e equipamentos de acesso',
      image: templateLanding,
      description: 'Página de vendas e apresentação de equipamentos e sistemas de controle de acesso e ponto eletrônico.',
      testimonial: 'Entrega rápida e eficiente. Atendeu a todas as minhas expectativas!!',
      client: 'Maria Silva, Proprietária'
    },
    {
      id: 2,
      title: 'Estúdio Criativo',
      category: 'Portfólio',
      image: templatePortfolio,
      description: 'Portfólio profissional para designer gráfico',
      testimonial: 'Site elegante que mostra meu trabalho de forma profissional.',
      client: 'João Santos, Designer'
    },
    {
      id: 3,
      title: 'Consultoria Empresarial',
      category: 'Site Institucional',
      image: templateInstitutional,
      description: 'Site corporativo com área de blog e sistema de agendamento',
      testimonial: 'Profissionalismo e qualidade excepcionais. Recomendo!',
      client: 'Ana Costa, Consultora'
    },
    {
      id: 4,
      title: 'Loja de Roupas',
      category: 'E-commerce',
      image: templateLanding,
      description: 'Loja virtual completa com sistema de pagamento',
      testimonial: 'Vendas online aumentaram 300% no primeiro mês!',
      client: 'Carlos Oliveira, Empresário'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="portfolio" className="  py-20 bg-gradient-to-b from-muted/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nosso Portfólio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja alguns projetos que já desenvolvemos e os resultados alcançados
          </p>
        </div>

        <div className=" transition-all duration-500 max-w-4xl mx-auto">
          <div className=" transition-all duration-500 relative">
            <Card className=" transition-all bg-gradient-card border-border/50 ">
              <CardContent className="transition-all duration-500 p-0">
                <div className="transition-all duration-500 grid grid-cols-1 md:grid-cols-2">
                  {/* Image */}
                  <div className="relative overflow-visible">
                    {projects.map((project, i) => (
                      <img 
                          key={project.id}
                           src={project.image}
                           alt={project.title}
                           className={`
                           absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out
                           ${i === currentSlide ? 'opacity-100 z-10': 'opacity-0 z-0'} 
                            `}
                            /> 
                    ))}
                    <div className="  absolute top-4 left-4 w-fullgit">
                      <span className=" absolute z-10 w-max bg-primary/90 text-white px-3 py-1 rounded-full text-sm  " >
                        {projects[currentSlide].category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        {projects[currentSlide].title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {projects[currentSlide].description}
                      </p>
                      
                      <div className="bg-muted/50 rounded-lg p-4 mb-6">
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-primary fill-current" />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground italic mb-2">
                          "{projects[currentSlide].testimonial}"
                        </p>
                        <p className="text-sm text-foreground font-medium">
                          {projects[currentSlide].client}
                        </p>
                      </div>
                    </div>

                    <Button 
                      variant="outline"
                      className="border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Projeto
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute z-20 left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm border-primary/30 hover:bg-primary/10"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute z-10 right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm border-primary/30 hover:bg-primary/10"
              onClick={nextSlide}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;