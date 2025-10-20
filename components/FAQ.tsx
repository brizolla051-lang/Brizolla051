
import React, { useState } from 'react';
import type { FaqItem } from '../types';
import AnimateOnScroll from './AnimateOnScroll';

const faqData: FaqItem[] = [
    {
        question: 'O que eu recebo após a compra?',
        answer: 'Você receberá acesso imediato e vitalício (ou pelo período do seu plano) à nossa plataforma de sinais, além de um link para nosso grupo de suporte exclusivo no Telegram.',
    },
    {
        question: 'Preciso ter experiência para usar?',
        answer: 'Não! O Cyber Bots foi projetado para ser intuitivo e fácil de usar, tanto para iniciantes quanto para traders experientes. Basta seguir os sinais indicados.',
    },
    {
        question: 'Como funciona o suporte?',
        answer: 'Nosso suporte é oferecido principalmente através de um grupo exclusivo no Telegram, onde nossa equipe está disponível para tirar dúvidas e ajudar com qualquer problema.',
    },
    {
        question: 'Os resultados são garantidos?',
        answer: 'Embora nossa ferramenta tenha uma alta taxa de assertividade, o mercado é volátil. Nenhum resultado pode ser 100% garantido. Recomendamos sempre o gerenciamento de risco.',
    },
];

const FaqAccordionItem: React.FC<{ item: FaqItem; isOpen: boolean; onClick: () => void; }> = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-700 py-4">
            <button
                className="w-full flex justify-between items-center text-left"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                <svg
                    className={`w-6 h-6 text-green-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] mt-4' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                  <p className="text-gray-300 pr-6">{item.answer}</p>
                </div>
            </div>
        </div>
    );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <AnimateOnScroll className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Perguntas Frequentes</h2>
        </AnimateOnScroll>
        <div className="mt-12">
            {faqData.map((item, index) => (
                <AnimateOnScroll key={index} delay={index * 100}>
                  <FaqAccordionItem 
                      item={item}
                      isOpen={openIndex === index}
                      onClick={() => handleToggle(index)}
                  />
                </AnimateOnScroll>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
