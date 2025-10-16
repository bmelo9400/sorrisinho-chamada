'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Heart, Shield, Clock, Star, Phone, MessageCircle, Zap, Users, Eye, Timer } from 'lucide-react';
import { WHATSAPP_SUPPORT_URL } from '@/lib/constants';

// Planos atualizados com novos valores e links
const PLANS = [
  {
    id: 'plan-5min',
    name: '5 Minutos',
    description: 'Experiência rápida e intensa',
    price_cents: 6000,
    minutes_label: '5 minutos',
    paymentUrl: 'https://pay.kirvano.com/70f6cbd3-674f-45d1-b16b-93db6d6ce7fb'
  },
  {
    id: 'plan-10min',
    name: '10 Minutos',
    description: 'O tempo perfeito para se divertir',
    price_cents: 10000,
    minutes_label: '10 minutos',
    paymentUrl: 'https://pay.kirvano.com/d351dbf1-4cfe-4321-a33f-773d46a40a58'
  },
  {
    id: 'plan-15min',
    name: '15 Minutos',
    description: 'Experiência VIP completa',
    price_cents: 15000,
    minutes_label: '15 minutos',
    paymentUrl: 'https://pay.kirvano.com/59d5772d-5b06-4ece-acc5-418989f58591'
  }
];

const formatPrice = (cents: number) => {
  return `R$ ${(cents / 100).toFixed(0)}`;
};

export default function HomePage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePurchase = async (plan: typeof PLANS[0]) => {
    setIsLoading(true);
    setSelectedPlan(plan.id);
    
    try {
      // Redirect direto para o link de pagamento
      window.open(plan.paymentUrl, '_blank');
    } catch (error) {
      console.error('Erro ao processar pagamento:', error);
    } finally {
      setIsLoading(false);
      setSelectedPlan(null);
    }
  };

  const scrollToPlans = () => {
    const plansSection = document.getElementById('plans-section');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ctaTexts = [
    "Últimas vagas ao vivo!",
    "Entrar agora antes que alguém pegue seu lugar!",
    "Disponibilidade limitada!"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-sm border-b border-pink-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
                Sorrisinho Call
              </h1>
            </div>
            <Button variant="outline" size="sm" className="border-pink-500/50 text-pink-400 hover:bg-pink-500/10" asChild>
              <a href={WHATSAPP_SUPPORT_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-2" />
                Suporte VIP
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Foto da Sorrisinho AO VIVO */}
      <section className="py-12 md:py-20 px-4 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-transparent to-red-500/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          {/* Profile Image com indicador AO VIVO */}
          <div className="relative mb-8">
            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-br from-pink-400 via-red-500 to-orange-500 p-2 shadow-2xl shadow-pink-500/50">
              <div className="w-full h-full rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/ee33471d-98ea-4a6e-b0f7-c01826b9454e.jpg" 
                  alt="Sorrisinho" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            
            {/* Indicador AO VIVO */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                  <span>AO VIVO</span>
                </div>
              </div>
            </div>
            
            {/* Status Online - Removido contador de pessoas */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                Online agora
              </Badge>
            </div>
          </div>

          {/* Título Principal */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-7xl font-black text-white mb-4 leading-tight">
              <span className="bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
                Sorrisinho
              </span>
              <br />
              <span className="text-white">Call Privada</span>
            </h2>
            <p className="text-xl md:text-3xl text-pink-300 font-semibold mb-4">
              🔥 A experiência mais quente da internet
            </p>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Momentos íntimos e exclusivos que você nunca vai esquecer. 
              <span className="text-pink-400 font-semibold"> Acesso imediato após o pagamento.</span>
            </p>
          </div>

          {/* Urgência e Escassez */}
          <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 mb-12 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <Timer className="h-6 w-6 text-red-400 animate-pulse" />
              <span className="text-red-400 font-bold text-lg">ATENÇÃO: VAGAS LIMITADAS</span>
            </div>
            <p className="text-white text-sm md:text-base">
              Apenas <span className="text-red-400 font-bold">3 vagas disponíveis</span> para hoje. 
              Não perca sua chance de ter um momento exclusivo!
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <div className="flex items-center space-x-2 text-gray-300">
              <Shield className="h-5 w-5 text-green-400" />
              <span className="text-sm font-medium">100% Seguro</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Zap className="h-5 w-5 text-yellow-400" />
              <span className="text-sm font-medium">Acesso Instantâneo</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Eye className="h-5 w-5 text-pink-400" />
              <span className="text-sm font-medium">Experiência Exclusiva</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Users className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-medium">+1.247 Clientes Satisfeitos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section - Redesenhada */}
      <section id="plans-section" className="py-16 md:py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                Escolha Sua Experiência
              </span>
            </h3>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Momentos únicos que valem cada centavo
            </p>
            <div className="inline-flex items-center space-x-2 bg-red-500/20 border border-red-500/30 rounded-full px-4 py-2">
              <Timer className="h-4 w-4 text-red-400 animate-pulse" />
              <span className="text-red-400 text-sm font-bold">OFERTA POR TEMPO LIMITADO</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {PLANS.map((plan, index) => (
              <Card 
                key={plan.id} 
                className={`relative transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25 bg-gradient-to-b from-gray-900/90 to-black/90 backdrop-blur-sm border-2 ${
                  index === 1 
                    ? 'border-pink-500 shadow-2xl shadow-pink-500/30 scale-105' 
                    : 'border-gray-700/50 hover:border-pink-500/50'
                }`}
              >
                {index === 1 && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      🔥 MAIS ESCOLHIDO
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6 pt-8">
                  <CardTitle className="text-2xl md:text-3xl font-black text-white mb-2">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-base md:text-lg font-medium">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="text-center px-6 pb-8">
                  <div className="mb-8">
                    <div className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text mb-2">
                      {formatPrice(plan.price_cents)}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {plan.minutes_label} de pura diversão
                    </div>
                  </div>

                  {/* Benefícios por plano */}
                  <div className="mb-8 space-y-2 text-left">
                    <div className="flex items-center space-x-2 text-gray-300 text-sm">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span>Acesso imediato após pagamento</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300 text-sm">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span>Qualidade HD garantida</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300 text-sm">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span>100% privado e seguro</span>
                    </div>
                    {index >= 1 && (
                      <div className="flex items-center space-x-2 text-pink-400 text-sm font-medium">
                        <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                        <span>Conteúdo exclusivo</span>
                      </div>
                    )}
                    {index === 2 && (
                      <div className="flex items-center space-x-2 text-red-400 text-sm font-medium">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <span>Experiência VIP completa</span>
                      </div>
                    )}
                  </div>

                  <Button 
                    className={`w-full py-4 text-base md:text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl ${
                      index === 1 
                        ? 'bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 hover:from-pink-600 hover:via-red-600 hover:to-orange-600 shadow-pink-500/50' 
                        : 'bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700'
                    }`}
                    onClick={() => handlePurchase(plan)}
                    disabled={isLoading}
                  >
                    {isLoading && selectedPlan === plan.id ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processando...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <span>{ctaTexts[index]}</span>
                      </div>
                    )}
                  </Button>
                  
                  <p className="text-xs text-gray-500 mt-3">
                    Pagamento 100% seguro via Kirvano
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500/10 to-red-500/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              O que nossos clientes dizem
            </h3>
            <p className="text-gray-300 text-lg">
              Mais de 1.247 experiências incríveis realizadas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos M.",
                text: "Experiência incrível! Valeu cada centavo. A Sorrisinho é simplesmente perfeita.",
                rating: 5
              },
              {
                name: "Roberto S.",
                text: "Nunca pensei que seria tão real. Recomendo demais, já comprei várias vezes!",
                rating: 5
              },
              {
                name: "André L.",
                text: "Atendimento VIP, qualidade HD e muita diversão. Voltarei sempre!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-black/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-pink-400 font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
              Por que escolher o 
              <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent"> Sorrisinho Call</span>?
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "100% Seguro",
                description: "Pagamentos protegidos e dados criptografados",
                color: "text-green-400"
              },
              {
                icon: Zap,
                title: "Acesso Instantâneo",
                description: "Entre na sala privada imediatamente após o pagamento",
                color: "text-yellow-400"
              },
              {
                icon: Star,
                title: "Qualidade Premium",
                description: "Vídeo HD e áudio cristalino para a melhor experiência",
                color: "text-pink-400"
              },
              {
                icon: MessageCircle,
                title: "Suporte VIP",
                description: "Atendimento exclusivo 24/7 via WhatsApp",
                color: "text-blue-400"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-600/20 to-red-600/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl md:text-5xl font-black text-white mb-6">
            Não perca sua vaga!
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Apenas <span className="text-red-400 font-bold">3 vagas restantes</span> para hoje. 
            Garante a sua agora antes que seja tarde demais.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 hover:from-pink-600 hover:via-red-600 hover:to-orange-600 text-white font-bold py-4 px-8 text-lg shadow-2xl shadow-pink-500/50"
              onClick={scrollToPlans}
            >
              <Timer className="h-5 w-5 mr-2" />
              Escolher Meu Plano Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <h4 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                Sorrisinho Call
              </h4>
            </div>
            
            <Separator className="bg-gray-800 mb-6" />
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-6">
              <a href="#" className="hover:text-pink-400 transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Política de Privacidade</a>
              <a href={WHATSAPP_SUPPORT_URL} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
                Suporte VIP
              </a>
            </div>
            
            <p className="text-xs text-gray-600">
              © 2024 Sorrisinho Call. Todos os direitos reservados. Conteúdo para maiores de 18 anos.
            </p>
            <p className="text-xs text-gray-600 mt-2">
              Pagamentos processados com segurança via Kirvano. Seus dados estão protegidos.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}