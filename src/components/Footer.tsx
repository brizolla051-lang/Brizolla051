
import React from 'react';
import { InstagramIcon } from './icons/InstagramIcon';
import { TikTokIcon } from './icons/TikTokIcon';

const Footer: React.FC = () => {
    return (
        <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
            <div className="container mx-auto text-center text-gray-400">
                <div className="mb-6">
                    <p className="font-semibold mb-3">Siga-nos</p>
                    <div className="flex justify-center gap-6">
                        <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-green-400 transition-colors">
                            <InstagramIcon className="w-6 h-6" />
                        </a>
                        <a href="https://tiktok.com/@your-profile" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-green-400 transition-colors">
                            <TikTokIcon className="w-6 h-6" />
                        </a>
                    </div>
                </div>
                <p>&copy; {new Date().getFullYear()} Cyber Bots. Todos os direitos reservados.</p>
                <div className="mt-4 flex justify-center gap-6 text-sm">
                    <a href="#" className="hover:text-green-400 transition-colors">Termos de Serviço</a>
                    <a href="#" className="hover:text-green-400 transition-colors">Política de Privacidade</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
    