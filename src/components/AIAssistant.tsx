import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Bot, Send, X, Minimize2, Maximize2, MessageCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useIsMobile } from '@/hooks/use-mobile';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const AIAssistant = () => {
  // Vérifier si le chatbot doit être actif (après le 23 décembre 2025)
  const activationDate = new Date('2025-12-23');
  const currentDate = new Date();
  const isActive = currentDate >= activationDate;

  // Ne pas afficher le chatbot si pas encore actif
  if (!isActive) {
    return null;
  }

  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Determine window size based on screen size
  const getWindowSize = () => {
    const width = window.innerWidth;
    
    // Mobile (<600px) - Centered at bottom, 85% width, 50% height max
    if (width < 600) {
      return isMinimized ? 
        'fixed bottom-4 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full' : 
        'fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[85%] h-[50vh] max-h-[400px] rounded-xl z-50';
    }
    // Tablet (600-1024px) - Bottom right, 350px width, 400px height max
    else if (width >= 600 && width < 1024) {
      return isMinimized ? 
        'fixed bottom-6 right-6 w-16 h-16 rounded-full' : 
        'fixed bottom-6 right-6 w-[350px] h-[400px] max-h-[450px] rounded-xl';
    }
    // Desktop (>1024px) - Bottom right, 320px width, 400px height
    else {
      return isMinimized ? 
        'fixed bottom-6 right-6 w-16 h-16 rounded-full' : 
        'fixed bottom-6 right-6 w-[320px] h-[400px] rounded-xl';
    }
  };
  
  const getMessagesHeight = () => {
    const width = window.innerWidth;
    
    // Mobile - 50vh minus header and input (smaller window)
    if (width < 600) {
      return 'h-[calc(50vh-140px)] max-h-[260px]';
    }
    // Tablet - 400px minus header and input
    else if (width >= 600 && width < 1024) {
      return 'h-[calc(400px-140px)]';
    }
    // Desktop - Fixed 400px minus header and input
    else {
      return 'h-[260px]';
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('ai-assistant', {
        body: {
          message: inputMessage,
          conversationHistory: messages.map(m => ({
            role: m.role,
            content: m.content
          }))
        }
      });

      if (error) throw error;

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error("Erreur de connexion. Veuillez réessayer.");
      
      const errorMessage: Message = {
        role: 'assistant',
        content: "Désolé, je rencontre un problème. Vous pouvez contacter Ulrich directement au +225 0710224023 ou via WhatsApp.",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };


  return (
    <>
      {/* Floating Button - Always Visible */}
      <div className="fixed bottom-4 right-6 z-40">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            className="rounded-full w-14 h-14 md:w-16 md:h-16 shadow-2xl bg-gradient-primary hover:scale-110 transition-all duration-300 animate-pulse"
          >
            <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
          </Button>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <>
          {/* Overlay for mobile - only for small mobile screens */}
          {window.innerWidth < 600 && !isMinimized && (
            <div className="fixed inset-0 bg-black/30 z-40" onClick={() => setIsOpen(false)} />
          )}
          
          <Card className={`${getWindowSize()} shadow-xl transition-all duration-300 glass-card border-primary/20 ${
            isMinimized ? 'overflow-hidden' : ''
          }`}>
            {/* Header */}
            <div className={`flex items-center justify-between p-3 md:p-4 border-b border-primary/20 bg-gradient-primary rounded-t-xl`}>
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 md:w-6 md:h-6 text-white" />
              <span className="font-semibold text-white text-sm md:text-base">Assistant IA</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              {window.innerWidth >= 600 && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white hover:bg-white/20 h-8 w-8 md:h-9 md:w-9"
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </Button>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 h-8 w-8 md:h-9 md:w-9"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <ScrollArea ref={scrollAreaRef} className={`flex-1 p-3 md:p-4 ${getMessagesHeight()}`}>
                <div className="space-y-3 md:space-y-4">
              {messages.length === 0 ? (
                <div className="text-center text-muted-foreground text-sm p-4">
                  <Bot className="w-12 h-12 mx-auto mb-4 text-primary/50" />
                  <p className="font-semibold">Assistant IA d'Ulrich Deschamp 🚀</p>
                  <p className="mt-2">Expert Digital & Créatif à Abidjan</p>
                  <div className="mt-3 space-y-1 text-xs">
                    <p>Je peux vous renseigner sur:</p>
                    <p>✓ Sites web & Applications</p>
                    <p>✓ Design & Branding</p>
                    <p>✓ Community Management</p>
                    <p>✓ Photo/Vidéo Pro</p>
                    <p>✓ Tarifs & Délais</p>
                  </div>
                  <p className="mt-3 text-primary font-medium">Posez votre question!</p>
                </div>
              ) : (
                messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] p-3 ${
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground rounded-2xl rounded-tr-sm'
                          : 'bg-muted rounded-2xl rounded-tl-sm'
                      } shadow-sm`}
                    >
                          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                          <span className="text-xs opacity-70 mt-1 block">
                            {message.timestamp.toLocaleTimeString('fr-FR', { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-muted p-3 rounded-2xl rounded-tl-sm shadow-sm">
                        <div className="flex gap-1">
                          <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                          <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                          <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>

              {/* Input */}
              <div className="p-3 md:p-4 border-t border-primary/20">
                <div className="flex gap-2">
                  <Input
                    ref={inputRef}
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Posez votre question..."
                    disabled={isLoading}
                    className="flex-1 min-h-[44px] text-sm"
                  />
                  <Button
                    onClick={sendMessage}
                    disabled={!inputMessage.trim() || isLoading}
                    size="icon"
                    className="bg-primary hover:bg-primary/90 h-[44px] w-[44px]"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
          </Card>
        </>
      )}
    </>
  );
};

export default AIAssistant;