
import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Coluna de Texto */}
        <div className="text-center lg:text-left">
            <AnimateOnScroll>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                    Deixe Nosso <span className="text-green-400">Robô de IA</span> Operar por Você.
                </h1>
                <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg sm:text-xl text-gray-300">
                    Acesse a tecnologia que transforma dados de mercado em lucros consistentes. Automação, precisão e resultados 24/7.
                </p>
                <div className="mt-10">
                    <a
                        href="#pricing"
                        className="bg-green-500 text-gray-900 font-bold py-4 px-10 rounded-lg text-lg hover:bg-green-400 transition-colors duration-300 transform hover:scale-105 inline-block"
                    >
                        Quero Acesso Imediato
                    </a>
                    <p className="mt-4 text-sm text-gray-500">Garantia de 7 dias ou seu dinheiro de volta.</p>
                </div>
            </AnimateOnScroll>
        </div>

        {/* Coluna da Imagem */}
        <div className="relative flex justify-center items-center">
            <AnimateOnScroll delay={200} className="relative z-10">
                <img 
                    src="https://storage.googleapis.com/aistudio-hosting/generative-ai/assets/trading-robot-hero.png" 
                    alt="AI Trading Robot" 
                    className="w-full max-w-md lg:max-w-none mx-auto rounded-lg transform lg:scale-110"
                />
            </AnimateOnScroll>
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl opacity-60 z-0"></div>
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl opacity-60 z-0"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
    