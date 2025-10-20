
import React, { useState, useEffect } from 'react';
import { XIcon } from './icons/XIcon';
import { CreditCardIcon } from './icons/CreditCardIcon';
import { PixIcon } from './icons/PixIcon';
import { CheckIcon } from './icons/CheckIcon';

type PaymentStatus = 'idle' | 'processing' | 'success' | 'error';

const PaymentModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const [paymentMethod, setPaymentMethod] = useState<'creditCard' | 'pix'>('creditCard');
    const [status, setStatus] = useState<PaymentStatus>('idle');
    const [copied, setCopied] = useState(false);

    const pixCode = '00020126580014br.gov.bcb.pix0136123e4567-e89b-12d3-a456-4266141740005204000053039865802BR5913NOME DO VENDEDOR6008BRASILIA62070503***6304E2A4';

    useEffect(() => {
        if (isOpen) {
            setStatus('idle');
            setPaymentMethod('creditCard');
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('processing');
        setTimeout(() => {
            setStatus('success');
        }, 2000);
    };
    
    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(pixCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    const SuccessView = () => {
        const appUrl = 'https://cyberbots.app/app-plus-new/?id=33';

        useEffect(() => {
            const timer = setTimeout(() => {
                window.location.href = appUrl;
            }, 3000); // Redirect after 3 seconds

            return () => clearTimeout(timer);
        }, []);

        const handleRedirect = () => {
            window.location.href = appUrl;
        };

        return (
            <div className="text-center py-10">
                <div className="w-20 h-20 bg-green-500/20 rounded-full mx-auto flex items-center justify-center">
                    <CheckIcon className="w-12 h-12 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mt-6">Pagamento Aprovado!</h3>
                <p className="text-gray-400 mt-2">Seu acesso foi liberado! Você será redirecionado em breve.</p>
                <button
                    onClick={handleRedirect}
                    className="mt-8 bg-green-500 text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-green-400 transition-colors"
                >
                    Acessar o App Agora
                </button>
            </div>
        );
    };

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 border border-green-500/30 rounded-xl w-full max-w-lg shadow-2xl shadow-green-500/10 transform transition-all opacity-100 scale-100">
                <div className="p-6 relative">
                    <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white">
                        <XIcon className="w-6 h-6" />
                    </button>

                    {status === 'success' ? <SuccessView /> : (
                        <>
                            <h2 className="text-2xl font-bold text-white">Finalizar Pagamento</h2>
                            <p className="text-gray-400 mt-1">Plano Mensal - R$ 37,90</p>

                            <div className="mt-6 border-b border-gray-700">
                                <nav className="flex -mb-px space-x-6">
                                    <button onClick={() => setPaymentMethod('creditCard')} className={`py-3 px-1 border-b-2 font-semibold flex items-center gap-2 ${paymentMethod === 'creditCard' ? 'border-green-500 text-green-400' : 'border-transparent text-gray-400 hover:text-white'}`}>
                                        <CreditCardIcon className="w-5 h-5" /> Cartão de Crédito
                                    </button>
                                    <button onClick={() => setPaymentMethod('pix')} className={`py-3 px-1 border-b-2 font-semibold flex items-center gap-2 ${paymentMethod === 'pix' ? 'border-green-500 text-green-400' : 'border-transparent text-gray-400 hover:text-white'}`}>
                                        <PixIcon className="w-5 h-5" /> Pix
                                    </button>
                                </nav>
                            </div>

                            <div className="mt-6">
                                {paymentMethod === 'creditCard' && (
                                    <form onSubmit={handlePayment}>
                                        <div className="space-y-4">
                                            <div>
                                                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-300 mb-1">Número do Cartão</label>
                                                <input type="text" id="cardNumber" required placeholder="0000 0000 0000 0000" className="w-full bg-gray-900 border border-gray-600 rounded-md px-3 py-2 focus:ring-green-500 focus:border-green-500" />
                                            </div>
                                            <div>
                                                <label htmlFor="cardName" className="block text-sm font-medium text-gray-300 mb-1">Nome no Cartão</label>
                                                <input type="text" id="cardName" required placeholder="Seu nome completo" className="w-full bg-gray-900 border border-gray-600 rounded-md px-3 py-2 focus:ring-green-500 focus:border-green-500" />
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="w-1/2">
                                                    <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-300 mb-1">Validade</label>
                                                    <input type="text" id="expiryDate" required placeholder="MM/AA" className="w-full bg-gray-900 border border-gray-600 rounded-md px-3 py-2 focus:ring-green-500 focus:border-green-500" />
                                                </div>
                                                <div className="w-1/2">
                                                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-300 mb-1">CVV</label>
                                                    <input type="text" id="cvv" required placeholder="123" className="w-full bg-gray-900 border border-gray-600 rounded-md px-3 py-2 focus:ring-green-500 focus:border-green-500" />
                                                </div>
                                            </div>
                                        </div>
                                        <button 
                                            type="submit" 
                                            disabled={status === 'processing'}
                                            className="w-full mt-8 bg-green-500 text-gray-900 font-bold py-3 rounded-lg hover:bg-green-400 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center justify-center"
                                        >
                                            {status === 'processing' ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Processando...
                                                </>
                                            ) : 'Pagar R$ 37,90'}
                                        </button>
                                    </form>
                                )}
                                {paymentMethod === 'pix' && (
                                    <div className="text-center">
                                        <p className="text-gray-300">Escaneie o QR Code com o app do seu banco:</p>
                                        <div className="mt-4 p-4 bg-white rounded-lg inline-block">
                                            <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=00020126580014br.gov.bcb.pix0136123e4567-e89b-12d3-a456-4266141740005204000053039865802BR5913CYBERBOTS6008BRASILIA62070503***6304E2A4" alt="PIX QR Code" className="w-48 h-48 mx-auto" />
                                        </div>
                                        <p className="mt-4 text-gray-400 text-sm">Ou use o Pix Copia e Cola:</p>
                                        <div className="mt-2 flex">
                                            <input type="text" readOnly value={pixCode} className="w-full bg-gray-900 border border-gray-600 rounded-l-md px-3 py-2 text-xs text-gray-400" />
                                            <button onClick={handleCopyToClipboard} className="bg-green-500 text-gray-900 font-semibold px-4 rounded-r-md hover:bg-green-400 text-sm">
                                                {copied ? 'Copiado!' : 'Copiar'}
                                            </button>
                                        </div>
                                        <p className="mt-6 text-yellow-400/80 text-sm">O acesso será liberado assim que o pagamento for confirmado.</p>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;
    