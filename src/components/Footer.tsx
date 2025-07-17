import { Code2, Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-orange rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">WebCrafter</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Criamos sites modernos e profissionais que convertem visitantes em clientes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('#hero')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('#modelos')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
              >
                Modelos
              </button>
              <button
                onClick={() => scrollToSection('#servicos')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('#portfolio')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
              >
                Portfólio
              </button>
              <button
                onClick={() => scrollToSection('#contato')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
              >
                Contato
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">contato@webcrafter.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">São Paulo, SP</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 WebCrafter. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;