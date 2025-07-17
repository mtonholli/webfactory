import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999"; // Substitua pelo número real
    const message = "Olá! Gostaria de saber mais sobre os serviços de criação de websites.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        size="icon"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </Button>
      
      {isHovered && (
        <div className="absolute bottom-full right-0 mb-2 animate-fade-in">
          <div className="bg-background border border-border rounded-lg px-4 py-2 shadow-lg whitespace-nowrap">
            <p className="text-sm text-foreground">Fale conosco no WhatsApp</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;