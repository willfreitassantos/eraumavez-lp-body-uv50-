import React, { useState } from 'react';
import { Logo, COLORS, SIZES, TESTIMONIALS, FAQ_ITEMS, TECHNICAL_SPECS, IMAGES } from './constants';

const App: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState('3-6M');
  const [selectedColor, setSelectedColor] = useState(COLORS[1].hex); // Default to Red as in illustration

  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 px-4 md:px-20 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
             <img src="https://raw.githubusercontent.com/ai-images/eraumavez/main/logo.png" className="h-10 md:h-14" alt="Era Uma Vez" 
                  onError={(e) => (e.currentTarget.src = "https://lh3.googleusercontent.com/pw/AP1GczPrU8V_tT2B9R6H8o0vQ-q7M_7Z_Q_Z_Q=w800")}/>
          </div>
          <div className="flex gap-4 items-center">
            <div className="hidden md:flex flex-col text-right mr-4">
              <span className="text-xs font-bold text-gray-400">Televendas:</span>
              <span className="text-sm font-bold text-primary">(11) 98765-4321</span>
            </div>
            <button className="flex items-center justify-center rounded-full size-11 bg-gray-50 text-gray-700 hover:bg-gray-100 transition-all border border-gray-100">
              <span className="material-symbols-outlined">shopping_cart</span>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* New Hero Section based on Screenshot */}
        <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 bg-[#F9FAFB]">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
                Nova Coleção Solar
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-display font-black leading-tight text-gray-900">
                  Proteção máxima para o seu bebê: <br/>
                  <span className="text-secondary">Body UV50+</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                  O conforto que seu bebê merece com a proteção que você confia. Alta tecnologia em tecido com bloqueio solar permanente para dias inesquecíveis ao sol.
                </p>
              </div>

              {/* Gatilhos de Prova Social */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="size-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="flex text-accent">
                      {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined !text-sm">star</span>)}
                    </div>
                    <p className="text-gray-500 font-medium">Mais de <span className="text-gray-900 font-bold">10.000 mamães</span> satisfeitas</p>
                  </div>
                </div>
              </div>

              {/* Botão e Segurança */}
              <div className="space-y-6">
                <button className="group relative w-full md:w-auto px-12 py-6 bg-secondary hover:bg-[#E02425] text-white rounded-2xl font-display font-bold text-2xl transition-all shadow-xl shadow-secondary/30 active:scale-95 flex items-center justify-center gap-3">
                  Comprar Agora
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-1.5 text-brandGreen font-bold text-sm">
                    <span className="material-symbols-outlined !text-lg">verified</span>
                    Compra 100% Segura
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400 font-bold text-sm">
                    <span className="material-symbols-outlined !text-lg">local_shipping</span>
                    Frete Grátis Sul/SP
                  </div>
                </div>
              </div>
            </div>

            {/* Ilustração do Bebê (Refleating the provided screenshot) */}
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative z-10 w-full max-w-lg aspect-square bg-white rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden border-8 border-white p-4">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50"></div>
                {/* Simulated Baby Illustration from screenshot */}
                <div className="relative z-20 animate-float">
                  <img 
                    src="https://raw.githubusercontent.com/ai-images/eraumavez/main/baby_hero_red.png" 
                    alt="Bebê com Body UV50+" 
                    className="w-full h-auto drop-shadow-2xl"
                    onError={(e) => (e.currentTarget.src = "https://i.ibb.co/6803xX8/baby-hero.png")}
                  />
                </div>
                {/* Badges Flutuantes */}
                <div className="absolute top-8 right-8 z-30 bg-primary text-white p-4 rounded-2xl shadow-lg flex flex-col items-center rotate-12">
                   <span className="text-xs font-bold uppercase">Tecnologia</span>
                   <span className="text-xl font-black font-display tracking-tight">UV50+</span>
                </div>
                <div className="absolute bottom-8 left-8 z-30 bg-accent text-white p-3 rounded-2xl shadow-lg flex items-center gap-2 -rotate-6">
                   <span className="material-symbols-outlined !text-xl">air</span>
                   <span className="text-sm font-bold">Ultra Respirável</span>
                </div>
              </div>
              {/* Background Decoration */}
              <div className="absolute -top-10 -right-10 size-48 bg-accent/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 size-64 bg-primary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </section>

        {/* Rapid Selectors Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-black text-primary">Personalize do seu jeito</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Escolha o tamanho ideal e a cor que mais combina com seu pequeno aventureiro.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Opções de Tamanho */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span className="size-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">1</span>
                    Selecione o Tamanho
                  </h3>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                    {SIZES.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-4 px-2 rounded-2xl border-2 transition-all font-bold text-center ${
                          selectedSize === size
                            ? 'border-primary bg-primary/5 text-primary'
                            : 'border-gray-100 bg-white text-gray-400 hover:border-gray-200'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span className="size-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">2</span>
                    Selecione a Cor
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {COLORS.map((color) => (
                      <button
                        key={color.hex}
                        onClick={() => setSelectedColor(color.hex)}
                        className={`size-14 rounded-2xl ring-offset-4 transition-all flex items-center justify-center shadow-inner ${
                          selectedColor === color.hex ? 'ring-4 ring-primary scale-110 shadow-lg' : 'hover:scale-105'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      >
                        {selectedColor === color.hex && <span className="material-symbols-outlined text-white">check</span>}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Resumo da Compra Card */}
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <div className="flex justify-between items-start mb-8">
                  <div className="space-y-2">
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Produto Premium</span>
                    <h4 className="text-2xl font-display font-bold">Body Manga Longa UV50+</h4>
                    <p className="text-gray-500 text-sm">Cor Selecionada: {COLORS.find(c => c.hex === selectedColor)?.name}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-400 line-through text-sm">R$ 99,90</div>
                    <div className="text-3xl font-black text-secondary">R$ 69,90</div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                   <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
                      <span className="material-symbols-outlined text-brandGreen">check_circle</span>
                      Proteção permanente (não sai na lavagem)
                   </div>
                   <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
                      <span className="material-symbols-outlined text-brandGreen">check_circle</span>
                      Secagem ultra rápida (Tecnologia Dry)
                   </div>
                   <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
                      <span className="material-symbols-outlined text-brandGreen">check_circle</span>
                      Botões de pressão antioxidantes
                   </div>
                </div>

                <button className="w-full py-5 bg-primary text-white rounded-2xl font-display font-bold text-xl hover:bg-blue-900 transition-all shadow-lg shadow-primary/20 active:scale-95">
                  Adicionar ao Carrinho
                </button>
                
                <div className="mt-6 flex flex-col items-center gap-4">
                  <p className="text-xs font-bold text-gray-400 uppercase">Pagamento Seguro com PIX, Cartão ou Boleto</p>
                  <div className="flex gap-4 opacity-70 grayscale hover:grayscale-0 transition-all">
                    <img src={IMAGES.paymentPix} alt="Pix" className="h-6" />
                    <img src={IMAGES.paymentVisa} alt="Visa" className="h-6" />
                    <img src={IMAGES.paymentMaster} alt="Mastercard" className="h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section with Brand Green and Playful Vibe */}
        <section className="py-24 bg-[#E8F3D6]/30">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-display font-black text-center mb-16">
              Por que escolher a <span className="text-brandGreen">Era Uma Vez?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <BenefitCard 
                icon="shield_with_heart" 
                title="Cuidado Extremo" 
                color="bg-brandGreen/20 text-brandGreen"
                description="Tecido dermatologicamente testado. Ideal para as peles mais sensíveis e atópicas." 
              />
              <BenefitCard 
                icon="eco" 
                title="Sustentabilidade" 
                color="bg-accent/20 text-accent"
                description="Processos que respeitam o meio ambiente e o futuro do seu bebê." 
              />
              <BenefitCard 
                icon="auto_awesome" 
                title="Durabilidade" 
                color="bg-primary/20 text-primary"
                description="Cores que não desbotam e tecido que não deforma com o uso intenso." 
              />
            </div>
          </div>
        </section>

        {/* FAQ with more visual details */}
        <section className="py-24 max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
             <span className="material-symbols-outlined !text-5xl text-accent mb-4">quiz</span>
             <h2 className="text-4xl font-display font-black">Ficou com alguma dúvida?</h2>
          </div>
          <div className="space-y-6">
            {FAQ_ITEMS.map((item) => (
              <details key={item.id} className="group bg-white rounded-3xl border-2 border-gray-100 hover:border-primary/20 transition-all overflow-hidden shadow-sm">
                <summary className="flex justify-between items-center p-8 cursor-pointer font-bold text-xl text-gray-900 list-none">
                  {item.question}
                  <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 bg-gray-50 p-2 rounded-full">expand_more</span>
                </summary>
                <div className="px-8 pb-8 text-gray-600 text-lg leading-relaxed border-t border-gray-50 pt-6 animate-fadeIn">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Brand Promise Section */}
        <section className="py-24 bg-primary text-white">
           <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                 <h2 className="text-4xl md:text-5xl font-display font-black">Nossa Garantia "Era Uma Vez"</h2>
                 <p className="text-xl text-blue-100 leading-relaxed">
                   Se você não ficar 100% satisfeito com a qualidade ou o ajuste do nosso Body UV50+, você tem 30 dias para devolver e receber cada centavo de volta. Sem perguntas, sem burocracia.
                 </p>
                 <div className="flex gap-4 items-center pt-4">
                    <img src="https://raw.githubusercontent.com/ai-images/eraumavez/main/selo-garantia.png" alt="Selo de Garantia" className="h-24 w-auto" onError={(e) => e.currentTarget.style.display='none'}/>
                    <div>
                       <p className="text-2xl font-black font-display text-accent">30 DIAS</p>
                       <p className="text-sm font-bold uppercase tracking-widest">Garantia Incondicional</p>
                    </div>
                 </div>
              </div>
              <div className="bg-white/10 p-10 rounded-3xl backdrop-blur-md border border-white/20">
                 <h3 className="text-2xl font-bold mb-6">Especificações de Elite:</h3>
                 <ul className="space-y-4">
                    {TECHNICAL_SPECS.map(spec => (
                      <li key={spec.characteristic} className="flex justify-between items-center border-b border-white/10 pb-4">
                        <span className="font-bold text-blue-200">{spec.characteristic}</span>
                        <span className="text-right text-sm">{spec.detail}</span>
                      </li>
                    ))}
                 </ul>
              </div>
           </div>
        </section>

        {/* Final CTA with high urgency */}
        <section className="py-24 text-center px-4">
           <div className="max-w-4xl mx-auto space-y-10">
              <div className="inline-block p-4 bg-secondary/10 text-secondary font-black rounded-2xl animate-pulse">
                ESTOQUE LIMITADO: ÚLTIMAS UNIDADES NO PREÇO PROMOCIONAL
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-black leading-tight">
                Seu bebê seguro e <br/> você <span className="text-brandGreen italic">tranquila.</span>
              </h2>
              <p className="text-2xl text-gray-500 font-medium">Deixe seu pequeno explorar o mundo com a melhor proteção solar do Brasil.</p>
              
              <div className="flex flex-col items-center gap-4">
                <button className="px-16 py-8 bg-secondary text-white rounded-3xl font-display font-black text-3xl hover:scale-105 transition-all shadow-2xl shadow-secondary/40 active:scale-95">
                  GARANTIR MEU BODY UV50+
                </button>
                <div className="flex items-center gap-2 text-gray-400 font-bold">
                  <span className="material-symbols-outlined text-brandGreen">verified_user</span>
                  Pagamento Protegido SSL de 256 bits
                </div>
              </div>
           </div>
        </section>
      </main>

      {/* Simplified Footer with Brand Identity */}
      <footer className="bg-gray-50 py-20 px-4 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <img src="https://raw.githubusercontent.com/ai-images/eraumavez/main/logo.png" className="h-12" alt="Era Uma Vez" 
                 onError={(e) => (e.currentTarget.src = "https://lh3.googleusercontent.com/pw/AP1GczPrU8V_tT2B9R6H8o0vQ-q7M_7Z_Q_Z_Q=w800")}/>
            <p className="text-gray-500 max-w-sm">
              Criamos soluções tecnológicas para que a infância seja vivida intensamente, com segurança e muito conforto.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'youtube'].map(social => (
                <button key={social} className="size-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined !text-xl">{social === 'instagram' ? 'camera' : social === 'youtube' ? 'smart_display' : 'group'}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-6">
             <h4 className="font-black text-gray-900 uppercase text-sm tracking-widest">Institucional</h4>
             <ul className="space-y-3 text-gray-500 font-medium">
                <li className="hover:text-primary cursor-pointer transition-colors">Sobre Nós</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Fale Conosco</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Termos de Uso</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Privacidade</li>
             </ul>
          </div>
          <div className="space-y-6">
             <h4 className="font-black text-gray-900 uppercase text-sm tracking-widest">Suporte</h4>
             <ul className="space-y-3 text-gray-500 font-medium">
                <li className="hover:text-primary cursor-pointer transition-colors">Minha Conta</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Trocas e Devoluções</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Rastrear Pedido</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Perguntas Frequentes</li>
             </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
           <p>© 2024 ERA UMA VEZ MODA INFANTIL. CNPJ: 00.000.000/0001-00</p>
           <p>Desenvolvido com carinho para as mamães do Brasil</p>
        </div>
      </footer>
    </div>
  );
};

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, color }) => (
  <div className="bg-white p-10 rounded-3xl shadow-sm border-2 border-transparent hover:border-gray-50 hover:shadow-xl transition-all group">
    <div className={`size-16 ${color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
      <span className="material-symbols-outlined !text-4xl">{icon}</span>
    </div>
    <h3 className="font-display font-black text-2xl mb-4 text-gray-900">{title}</h3>
    <p className="text-gray-500 leading-relaxed font-medium">{description}</p>
  </div>
);

export default App;
