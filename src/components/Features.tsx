
import React from 'react';
import { ZapIcon } from './icons/ZapIcon';
import { ShieldIcon } from './icons/ShieldIcon';
import { ClockIcon } from './icons/ClockIcon';
import { UsersIcon } from './icons/UsersIcon';
import AnimateOnScroll from './AnimateOnScroll';

const featuresData = [
    {
        icon: <ShieldIcon className="w-6 h-6 text-green-400" />,
        title: "Alta Precisão",
        description: "Aproveite o poder preditivo de nossa IA com uma taxa de sucesso comprovada. Tome decisões confiantes com base em dados confiáveis."
    },
    {
        icon: <ZapIcon className="w-6 h-6 text-green-400" />,
        title: "Sinais em Tempo Real",
        description: "Receba notificações instantâneas para novos sinais. Nunca perca uma oportunidade com nosso sistema de entrega de baixa latência."
    },
    {
        icon: <ClockIcon className="w-6 h-6 text-green-400" />,
        title: "Monitoramento 24/7",
        description: "O mercado nunca dorme, e nosso bot também não. Nosso sistema busca continuamente por pontos de entrada lucrativos, dia e noite."
    },
    {
        icon: <UsersIcon className="w-6 h-6 text-green-400" />,
        title: "Comunidade Exclusiva",
        description: "Junte-se ao nosso grupo no Telegram. Troque experiências, tire dúvidas e receba insights da nossa equipe e de outros membros."
    }
];

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => {
    return (
        <div className="bg-gray-800/50 p-6 rounded-lg border border-green-500/20 backdrop-blur-sm h-full">
            <div className="flex items-center gap-4">
                <div className="bg-green-500/10 p-3 rounded-full">{icon}</div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
            <p className="mt-4 text-gray-300">{children}</p>
        </div>
    );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <AnimateOnScroll className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Por que escolher o Cyber Bots?</h2>
            <p className="mt-4 text-gray-400">
                Nossa plataforma é construída com tecnologia de ponta para lhe dar uma vantagem significativa no mercado.
            </p>
        </AnimateOnScroll>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuresData.map((feature, index) => (
                <AnimateOnScroll key={index} delay={index * 150}>
                    <FeatureCard icon={feature.icon} title={feature.title}>
                        {feature.description}
                    </FeatureCard>
                </AnimateOnScroll>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
    