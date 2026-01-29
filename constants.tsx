
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
  {
    id: 4,
    question: 'Posso usar o body na praia, piscina e dia a dia?',
    answer: 'Sim! O Body UV50+ é versátil e pode ser usado em qualquer situação: praia, piscina, parque, passeios ao ar livre e até no dia a dia. A proteção funciona tanto na água quanto fora dela.',
  },
  {
    id: 5,
    question: 'Preciso usar protetor solar junto com o body?',
    answer: 'O body protege as áreas cobertas. Recomendamos aplicar protetor solar apenas nas áreas expostas (rosto, mãos e pés) para proteção completa.',
  },
  {
    id: 6,
    question: 'Como lavar e cuidar da peça?',
    answer: 'Lave na máquina em ciclo delicado com água fria. Evite alvejantes e amaciantes. Seque à sombra. Não passe ferro. Seguindo essas instruções, a peça mantém a proteção UV por toda sua vida útil.',
  },
  {
    id: 7,
    question: 'Qual tamanho devo escolher?',
    answer: 'Recomendamos escolher pelo peso e medidas do bebê: 0-3M (até 6kg), 3-6M (6-8kg), 6-9M (8-10kg), 12-18M (10-12kg), 2 Anos (12-14kg). Em caso de dúvida, escolha um tamanho maior para maior durabilidade.',
  },
  {
    id: 8,
    question: 'Por que UV50+ é melhor que protetor solar?',
    answer: 'O protetor solar precisa ser reaplicado a cada 2 horas, pode irritar a pele sensível do bebê e perde eficácia na água. A roupa UV50+ oferece proteção contínua, é hipoalergênica e funciona 100% mesmo molhada.',
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
  paymentPix: 'https://storage.googleapis.com/landinpage-era-uma-vez/pix-logo.png',
};

// Imagens do produto para o carrossel
export const PRODUCT_IMAGES = [
  'https://storage.googleapis.com/landinpage-era-uma-vez/crianca-body-50uv.jpg',
  'https://storage.googleapis.com/landinpage-era-uma-vez/crianca2-body-50uv.jpg',
  'https://storage.googleapis.com/landinpage-era-uma-vez/crianca3-body-50uv.jpg',
  'https://storage.googleapis.com/landinpage-era-uma-vez/crianca4-body-50uv.jpg',
  'https://storage.googleapis.com/landinpage-era-uma-vez/crianca5-body-50uv.jpg',
  'https://storage.googleapis.com/landinpage-era-uma-vez/crianca6-body-50uv.jpg',
];
