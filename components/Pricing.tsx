import React from 'react';
import type { Plan } from '../types';
import { CheckIcon } from './icons/CheckIcon';

const plans: Plan[] = [
    {
        name: 'Acesso Mensal',
        price: 'R$ 37,90',
        period: '/mês',
        features: [
            'Acesso Ilimitado 24/7',
            'Sinais em Tempo Real',
            'Suporte via Telegram',
            'Atualizações Contínuas',
            'Cancele quando quiser',
        ],
        popular: true,
    },
];

const PricingCard: React.FC<{ plan: Plan; onPurchaseClick: () => void; }> = ({ plan, onPurchaseClick }) => {
    const isPopular = plan.popular;

    return (
        <div className={`rounded-xl border p-6 lg:p-8 relative transition-all duration-300 ${isPopular ? 'border-green-500 bg-gray-800 scale-105 shadow-2xl shadow-green-500/20' : 'border-gray-700 bg-gray-900/50'}`}>
            <h3 className="text-xl font-bold text-white">{plan.name}</h3>
            <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl lg:text-5xl font-extrabold text-green-400">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
            </div>
            <p className="mt-2 text-sm text-gray-400">Acesso completo à plataforma.</p>
            <button
                onClick={onPurchaseClick}
                className={`block text-center w-full mt-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 ${isPopular ? 'bg-green-500 text-gray-900 hover:bg-green-400' : 'bg-green-500/80 text-white hover:bg-green-500'}`}
            >
                Assinar Agora
            </button>
            <ul className="mt-8 space-y-4 text-sm text-gray-300">
                {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Pricing: React.FC<{ onPurchaseClick: () => void; }> = ({ onPurchaseClick }) => {
  return (
    <section id="pricing" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Acesso Imediato por um Preço Fixo</h2>
            <p className="mt-4 text-gray-400">
                Tenha acesso completo à nossa plataforma de sinais por um valor mensal acessível. Sem taxas escondidas, cancele quando quiser.
            </p>
        </div>
        <div className="mt-16 max-w-md mx-auto">
            {plans.map((plan) => (
                <PricingCard key={plan.name} plan={plan} onPurchaseClick={onPurchaseClick} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;