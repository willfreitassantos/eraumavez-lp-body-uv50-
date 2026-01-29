
import React from 'react';
import { Testimonial, FAQItem, TechnicalSpec } from './types';

export const COLORS = [
  { name: 'Azul Real', hex: '#0E3C91' },
  { name: 'Vermelho Sol', hex: '#FF2829' },
  { name: 'Amarelo Alegria', hex: '#FFB902' },
  { name: 'Verde Natureza', hex: '#94C856' },
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

// Logo oficial RGB da marca Era Uma Vez
export const LOGO_URLS = {
  rgb: 'https://storage.googleapis.com/landinpage-era-uma-vez/era-uma-vez-logotipo-RGB.jpg',
  png: 'https://storage.googleapis.com/landinpage-era-uma-vez/era-uma-vez-logotipo-PNG.jpg',
};

export const Logo = () => (
  <img 
    src={LOGO_URLS.rgb} 
    alt="Era Uma Vez" 
    className="h-10 md:h-12 w-auto object-contain"
  />
);

export const IMAGES = {
  paymentVisa: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg',
  paymentMaster: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg',
  paymentPix: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_Pix_Brasil.png',
  // Using a known high-quality baby illustration placeholder that looks like the sitting baby in red
  babyHero: 'https://img.freepik.com/free-vector/hand-drawn-baby-illustration_23-2148967073.jpg?t=st=1740000000~exp=1740003600~hmac=62d64f0e6e9b9e6c4a8b7c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5'
};
