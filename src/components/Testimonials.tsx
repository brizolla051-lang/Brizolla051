
import React from 'react';
import type { Testimonial } from '../types';
import AnimateOnScroll from './AnimateOnScroll';

const testimonials: Testimonial[] = [
    {
        quote: "Eu estava cético no início, mas o Cyber Bots mudou completamente meu jogo. A precisão é surreal. Consegui recuperar meu investimento em 3 dias!",
        author: 'João P.',
        role: 'Investidor Amador',
    },
    {
        quote: "A melhor ferramenta de sinais que já usei. Simples, direta e incrivelmente eficaz. O suporte no Telegram também é super rápido e atencioso.",
        author: 'Maria S.',
        role: 'Trader Autônoma',
    },
     {
        quote: "Finalmente uma ferramenta que entrega o que promete. As atualizações são constantes e o bot fica cada vez melhor. Recomendo 100%!",
        author: 'Carlos F.',
        role: 'Entusiasta de Tecnologia',
    },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 backdrop-blur-sm h-full">
        <p className="text-gray-300 italic">"{testimonial.quote}"</p>
        <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="font-bold text-white">{testimonial.author}</p>
            <p className="text-sm text-green-400">{testimonial.role}</p>
        </div>
    </div>
);


const Testimonials: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="container mx-auto">
        <AnimateOnScroll className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">O que nossos usuários dizem</h2>
            <p className="mt-4 text-gray-400">
                A confiança da nossa comunidade é o nosso maior ativo.
            </p>
        </AnimateOnScroll>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                <AnimateOnScroll key={index} delay={index * 150}>
                    <TestimonialCard testimonial={testimonial} />
                </AnimateOnScroll>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
    