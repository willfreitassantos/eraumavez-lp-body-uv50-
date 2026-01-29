import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'exitPopupShown';
const COOKIE_DAYS = 1;
const WHATSAPP_URL = 'https://wa.me/5511965436004?text=Gostaria%20de%20garantir%20o%20desconto%20no%20Body%20UV50%2B';
const PRODUCT_URL = 'https://www.lojaeraumavez.com.br/body-bebe-protecao-uv50-cores-variadas.html';

export const ExitPopup: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if popup was already shown recently
        const lastShown = localStorage.getItem(STORAGE_KEY);
        if (lastShown) {
            const daysSince = (Date.now() - parseInt(lastShown)) / (1000 * 60 * 60 * 24);
            if (daysSince < COOKIE_DAYS) return;
        }

        let triggered = false;

        const showPopup = () => {
            if (triggered) return;
            triggered = true;
            setIsVisible(true);
            localStorage.setItem(STORAGE_KEY, Date.now().toString());
        };

        // Desktop: mouse leaves viewport
        const handleMouseOut = (e: MouseEvent) => {
            if (e.clientY <= 0 || e.clientX <= 0 || e.clientX >= window.innerWidth) {
                showPopup();
            }
        };

        // Mobile: scroll up quickly (back button intent)
        let lastScrollY = window.scrollY;
        let scrollVelocity = 0;

        const handleScroll = () => {
            const currentY = window.scrollY;
            scrollVelocity = lastScrollY - currentY;

            // Fast scroll up near top of page
            if (scrollVelocity > 50 && currentY < 200) {
                showPopup();
            }

            lastScrollY = currentY;
        };

        document.addEventListener('mouseout', handleMouseOut);
        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('mouseout', handleMouseOut);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn p-4">
            <div className="relative bg-white rounded-3xl shadow-2xl max-w-sm w-full mx-auto p-8 text-center animate-scaleUp border-4 border-primary/10">
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>

                <div className="size-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-accent !text-5xl">redeem</span>
                </div>

                <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-bold mb-4">
                    <span className="material-symbols-outlined !text-sm">timer</span>
                    Oferta Exclusiva
                </div>

                <h3 className="text-2xl font-display font-black text-gray-900 mb-2">
                    Espere! Não vá ainda...
                </h3>

                <p className="text-gray-500 mb-6 leading-relaxed">
                    Você vai perder a oportunidade de proteger seu bebê com <strong className="text-secondary">Frete Grátis</strong> nas compras acima de R$ 250?
                </p>

                <a
                    href={PRODUCT_URL}
                    className="block w-full bg-secondary text-white py-4 rounded-xl font-bold text-lg hover:bg-red-600 transition-all shadow-xl shadow-secondary/30 mb-3 no-underline"
                >
                    Garantir Minha Proteção
                </a>

                <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-50 text-green-700 border border-green-100 py-3 rounded-xl font-semibold hover:bg-green-100 transition-all no-underline flex items-center justify-center gap-2"
                >
                    <span className="material-symbols-outlined !text-lg">chat</span>
                    Falar com Especialista
                </a>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes scaleUp {
                    from { transform: scale(0.9) translateY(20px); }
                    to { transform: scale(1) translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
                .animate-scaleUp {
                    animation: scaleUp 0.3s ease-out;
                }
            `}</style>
        </div>
    );
};
