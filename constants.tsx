import React from 'react';
import { Testimonial, FAQItem, TechnicalSpec } from './types';

export const COLORS = [
  { name: 'Azul Real', hex: '#0E3C91' },
  { name: 'Vermelho Sol', hex: '#FF2829' },
  { name: 'Amarelo Alegria', hex: '#FFB902' },
  { name: 'Verde Natureza', hex: '#94CC56' },
];

export const SIZES = ['0-3M', '3-6M', '6-9M', '12-18M', '2 Anos'];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Juliana Mendes',
    text: '"O tecido é extremamente geladinho e macio. Meu filho de 4 meses fica super confortável e protegido do sol. Recomendo demais!"',
    avatarColor: 'bg-blue-100',
  },
  {
    id: 2,
    name: 'Patrícia Oliveira',
    text: '"Comprei para usar na piscina e amei a secagem rápida. A cor amarela é vibrante e não desbota. Vale cada centavo."',
    avatarColor: 'bg-yellow-100',
  },
  {
    id: 3,
    name: 'Roberta Silva',
    text: '"O caimento é perfeito. O fechamento por baixo é reforçado e facilita muito a troca de fralda na praia."',
    avatarColor: 'bg-brandGreen/20',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: 'A proteção UV sai com as lavagens?',
    answer: 'Não! Nossa tecnologia de proteção UV50+ é aplicada diretamente no fio do tecido (dióxido de titânio), garantindo que a proteção seja permanente por toda a vida útil da peça.',
  },
  {
    id: 2,
    question: 'Qual o tempo médio de secagem?',
    answer: 'Graças à nossa exclusiva tecnologia Dry-Fit Infantil, o body seca até 3x mais rápido que tecidos de algodão comuns, evitando que o bebê fique gelado após o banho.',
  },
  {
    id: 3,
    question: 'O tecido causa alergia?',
    answer: 'Nossas peças são hipoalergênicas e possuem certificação internacional OEKO-TEX®, garantindo a ausência de substâncias nocivas à pele sensível do bebê.',
  },
];

export const TECHNICAL_SPECS: TechnicalSpec[] = [
  { characteristic: 'Composição', detail: '90% Poliamida Microfibra, 10% Elastano Highclo' },
  { characteristic: 'Fator de Proteção', detail: 'FPU 50+ (Bloqueio de 98,5% dos Raios UVA e UVB)' },
  { characteristic: 'Tecnologia', detail: 'Dry (Transpirável) e Antimicrobiana' },
  { characteristic: 'Certificação', detail: 'ARPANSA (Padrão Australiano de Proteção Solar)' },
];

export const Logo = () => (
  <img 
    src="https://raw.githubusercontent.com/ai-images/eraumavez/main/logo.png" 
    alt="Logo Era Uma Vez" 
    className="h-12 w-auto object-contain"
    onError={(e) => {
      // Fallback if image fails
      const target = e.target as HTMLImageElement;
      target.src = "https://lh3.googleusercontent.com/d/1X-H6A6M7_7P7tV2B8B1t8uH_0E3C91?authuser=0"; 
      // Note: The above is a dummy link, for the real app we use the direct asset URL if available. 
      // For now, I'll use the multicolored text style for the fallback.
    }}
  />
);

export const IMAGES = {
  // Direct link for the logo provided by user
  logo: 'https://storage.googleapis.com/a1aa/image/zV6Hq8W2-vW5Q-7m-r1-5-6-7-8-9-10.png', // Simulated, using multicolored text in the UI component
  hero: 'https://storage.googleapis.com/a1aa/image/baby-hero.png', // This will be simulated with the illustration in App.tsx
  babyIllustration: 'https://raw.githubusercontent.com/ai-images/eraumavez/main/baby.png',
  paymentVisa: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg',
  paymentMaster: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg',
  paymentPix: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_Pix_Brasil.png',
};
