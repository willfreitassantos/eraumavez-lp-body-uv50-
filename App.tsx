
import React, { useState } from 'react';
import { Logo, COLORS, SIZES, TESTIMONIALS, FAQ_ITEMS, TECHNICAL_SPECS, IMAGES } from './constants';

const App: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState('3-6M');
  const [selectedColor, setSelectedColor] = useState(COLORS[1].hex); // Default to Red

  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-white">
      {/* Promo Bar */}
      <div className="bg-secondary text-white py-2 px-4 text-center text-xs font-bold uppercase tracking-widest">
        Frete Grátis em compras acima de R$ 250,00 🚚
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 md:px-20 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo />
          <div className="flex gap-4 items-center">
            <div className="hidden md:flex flex-col text-right mr-4">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Atendimento:</span>
              <span className="text-sm font-bold text-primary">(11) 99999-9999</span>
            </div>
            <button className="flex items-center justify-center rounded-full size-11 bg-gray-50 text-gray-700 hover:bg-gray-100 transition-all border border-gray-100 relative">
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] font-bold rounded-full size-4 flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section exactly like the provided Screenshot */}
        <section className="relative overflow-hidden pt-8 pb-16 md:pt-20 md:pb-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">
                Nova Coleção Solar
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-display font-black leading-[1.1] text-gray-900">
                  Proteção máxima <br/>
                  para o seu bebê: <br/>
                  <span className="text-secondary">Body UV50+</span>
                </h1>
                <p className="text-lg text-gray-500 max-w-lg leading-relaxed font-medium">
                  O conforto que seu bebê merece com a proteção que você confia. Alta tecnologia em tecido com bloqueio solar permanente para dias inesquecíveis ao sol.
                </p>
              </div>

              {/* Gatilhos de Prova Social */}
              <div className="flex flex-col gap-4">
                 <button className="group relative w-full md:w-auto px-10 py-5 bg-secondary hover:bg-[#E02425] text-white rounded-2xl font-display font-bold text-xl transition-all shadow-xl shadow-secondary/30 active:scale-95 flex items-center justify-center gap-3">
                  Comprar Agora
                </button>
                <div className="flex items-center gap-2 text-brandGreen font-bold text-sm">
                  <span className="material-symbols-outlined !text-lg">check_circle</span>
                  Compra 100% Segura
                </div>
              </div>
            </div>

            {/* Ilustração do Bebê from screenshot */}
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative z-10 w-full max-w-lg aspect-square bg-[#F2F2F2] rounded-3xl shadow-lg flex items-center justify-center overflow-hidden p-8">
                <div className="relative z-20 animate-float w-4/5 h-auto">
                   <img 
                    src="https://img.freepik.com/free-vector/hand-drawn-baby-illustration_23-2148967073.jpg" 
                    alt="Bebê com Body UV50+" 
                    className="w-full h-auto drop-shadow-2xl rounded-xl"
                  />
                </div>
              </div>
              {/* Decorative Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[110%] bg-gradient-to-tr from-gray-50 to-transparent rounded-full -z-10"></div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <div className="size-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined !text-3xl">shield_with_heart</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Proteção Permanente</h3>
              <p className="text-gray-500 text-sm">O fator FPU 50+ é aplicado no fio, não saindo com as lavagens.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <div className="size-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined !text-3xl">air</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Respirabilidade</h3>
              <p className="text-gray-500 text-sm">Tecido leve que permite a troca térmica, evitando suor excessivo.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <div className="size-16 bg-brandGreen/10 text-brandGreen rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined !text-3xl">eco</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Hipoalergênico</h3>
              <p className="text-gray-500 text-sm">Certificado OEKO-TEX®, livre de substâncias tóxicas.</p>
            </div>
          </div>
        </section>

        {/* Configurator */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-display font-black text-primary">Escolha as opções:</h2>
              
              <div>
                <label className="text-sm font-bold text-gray-400 uppercase mb-4 block">Tamanho:</label>
                <div className="grid grid-cols-3 gap-2">
                  {SIZES.map(s => (
                    <button 
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`py-3 px-2 rounded-xl border-2 font-bold transition-all ${selectedSize === s ? 'border-primary bg-primary/5 text-primary' : 'border-gray-100 text-gray-400'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-bold text-gray-400 uppercase mb-4 block">Cor:</label>
                <div className="flex flex-wrap gap-3">
                  {COLORS.map(c => (
                    <button 
                      key={c.hex}
                      onClick={() => setSelectedColor(c.hex)}
                      className={`size-12 rounded-full ring-offset-2 transition-all ${selectedColor === c.hex ? 'ring-2 ring-primary scale-110 shadow-lg' : ''}`}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl space-y-6">
               <div className="flex justify-between items-center">
                  <h4 className="text-2xl font-bold">Resumo</h4>
                  <div className="text-right">
                    <span className="block text-gray-400 line-through text-sm">R$ 89,90</span>
                    <span className="text-3xl font-black text-secondary">R$ 59,90</span>
                  </div>
               </div>
               <button className="w-full py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-blue-900 transition-all shadow-xl shadow-primary/20">
                 Adicionar ao Carrinho
               </button>
               <div className="flex justify-center gap-4 opacity-50">
                  <img src={IMAGES.paymentPix} className="h-6" alt="Pix" />
                  <img src={IMAGES.paymentVisa} className="h-6" alt="Visa" />
                  <img src={IMAGES.paymentMaster} className="h-6" alt="Master" />
               </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-display font-black text-center mb-12">Dúvidas Frequentes</h2>
            {FAQ_ITEMS.map(item => (
              <details key={item.id} className="group bg-gray-50 rounded-2xl border border-transparent open:border-gray-100 transition-all">
                <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-gray-900 list-none">
                  {item.question}
                  <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed text-sm">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white py-12 px-4 text-center">
        <div className="max-w-7xl mx-auto space-y-6 opacity-80">
          <div className="flex justify-center grayscale brightness-200">
            <Logo />
          </div>
          <p className="text-xs font-medium">© 2024 ERA UMA VEZ. TODOS OS DIREITOS RESERVADOS.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
