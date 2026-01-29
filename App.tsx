
import React, { useState, useEffect } from 'react';
import { Logo, COLORS, SIZES, TESTIMONIALS, FAQ_ITEMS, TECHNICAL_SPECS, IMAGES, PRODUCT_IMAGES } from './constants';

// URL do produto no Magento
const PRODUCT_URL = 'https://www.lojaeraumavez.com.br/body-bebe-protecao-uv50-cores-variadas.html';

const App: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState('3-6M');
  const [selectedColor, setSelectedColor] = useState(COLORS[1].hex); // Default to Red
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % PRODUCT_IMAGES.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + PRODUCT_IMAGES.length) % PRODUCT_IMAGES.length);
  };

  // Auto-play do carrossel (troca a cada 4 segundos)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % PRODUCT_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
                  Proteção máxima <br />
                  para o seu bebê: <br />
                  <span className="text-secondary">Body UV50+</span>
                </h1>
                <p className="text-lg text-gray-500 max-w-lg leading-relaxed font-medium">
                  O conforto que seu bebê merece com a proteção que você confia. Alta tecnologia em tecido com bloqueio solar permanente para dias inesquecíveis ao sol.
                </p>
              </div>

              {/* Prova Social + CTA */}
              <div className="flex flex-col gap-4">
                {/* Prova social rápida */}
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex -space-x-2">
                    <div className="size-8 rounded-full bg-blue-100 border-2 border-white"></div>
                    <div className="size-8 rounded-full bg-yellow-100 border-2 border-white"></div>
                    <div className="size-8 rounded-full bg-green-100 border-2 border-white"></div>
                  </div>
                  <span className="text-gray-600"><strong className="text-gray-900">500+ mamães</strong> já protegem seus bebês</span>
                </div>
                <a
                  href={PRODUCT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full md:w-auto px-10 py-5 bg-secondary hover:bg-[#E02425] text-white rounded-2xl font-display font-bold text-xl transition-all shadow-xl shadow-secondary/30 active:scale-95 flex items-center justify-center gap-3 no-underline"
                >
                  Quero Proteger Meu Bebê
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-brandGreen font-bold">
                    <span className="material-symbols-outlined !text-lg">verified</span>
                    Compra Segura
                  </div>
                  <div className="flex items-center gap-1 text-primary font-bold">
                    <span className="material-symbols-outlined !text-lg">local_shipping</span>
                    Frete Grátis
                  </div>
                </div>
              </div>
            </div>

            {/* Carrossel de Imagens do Produto */}
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative z-10 w-full max-w-lg aspect-square bg-[#F2F2F2] rounded-3xl shadow-lg flex items-center justify-center overflow-hidden">
                {/* Imagem Principal */}
                <img
                  src={PRODUCT_IMAGES[currentImageIndex]}
                  alt={`Body UV50+ - Foto ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />

                {/* Setas de Navegação */}
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 size-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Imagem anterior"
                >
                  <span className="material-symbols-outlined text-gray-700">chevron_left</span>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 size-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Próxima imagem"
                >
                  <span className="material-symbols-outlined text-gray-700">chevron_right</span>
                </button>

                {/* Indicadores (Dots) */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {PRODUCT_IMAGES.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`size-2.5 rounded-full transition-all ${index === currentImageIndex
                        ? 'bg-secondary w-6'
                        : 'bg-white/70 hover:bg-white'
                        }`}
                      aria-label={`Ir para imagem ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              {/* Decorative Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[110%] bg-gradient-to-tr from-gray-50 to-transparent rounded-full -z-10"></div>
            </div>
          </div>
        </section>

        {/* Problem Section - Identificação com a Dor */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">O Problema</span>
            <h2 className="text-3xl md:text-4xl font-display font-black mb-6 text-gray-900">
              Passar protetor solar a cada 2 horas <br className="hidden md:block" />
              <span className="text-secondary">é exaustivo</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
              Você conhece a cena: seu bebê quer brincar na piscina, mas você fica perseguindo ele com o protetor solar.
              Ele chora, você se frustra, e no fim do dia ainda fica preocupada se a proteção foi suficiente.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex gap-4 p-4 bg-gray-50 rounded-2xl">
                <span className="material-symbols-outlined text-secondary !text-3xl">sentiment_dissatisfied</span>
                <div>
                  <h4 className="font-bold mb-1">Reaplicação constante</h4>
                  <p className="text-sm text-gray-500">Protetor precisa ser reaplicado a cada 2h ou após contato com água</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-gray-50 rounded-2xl">
                <span className="material-symbols-outlined text-secondary !text-3xl">warning</span>
                <div>
                  <h4 className="font-bold mb-1">Pele sensível</h4>
                  <p className="text-sm text-gray-500">Muitos protetores causam alergias e irritações em bebês</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-gray-50 rounded-2xl">
                <span className="material-symbols-outlined text-secondary !text-3xl">schedule</span>
                <div>
                  <h4 className="font-bold mb-1">Tempo perdido</h4>
                  <p className="text-sm text-gray-500">Você perde momentos preciosos preocupada com a proteção</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Transition */}
        <section className="py-8 bg-primary text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-xl font-display font-bold">
              E se existisse uma solução que <span className="text-accent">protege o dia inteiro</span>, sem reaplicar?
            </p>
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

        {/* Por que UV50+? - Seção Educacional */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Entenda a Proteção</span>
              <h2 className="text-3xl md:text-4xl font-display font-black mb-4">Por que UV50+ é essencial?</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">A pele do bebê é até 5x mais fina que a do adulto, tornando-a extremamente vulnerável aos raios UV</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-primary to-blue-700 text-white p-6 rounded-3xl">
                <div className="text-5xl font-black mb-2">98%</div>
                <div className="font-bold mb-2">Bloqueio UV</div>
                <p className="text-sm opacity-80">UV50+ bloqueia 98% dos raios UVA e UVB nocivos</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                <div className="size-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-secondary !text-2xl">child_care</span>
                </div>
                <div className="font-bold mb-2">Pele Sensível</div>
                <p className="text-sm text-gray-500">Bebês têm melanina limitada, oferecendo pouca proteção natural</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                <div className="size-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-accent !text-2xl">water_drop</span>
                </div>
                <div className="font-bold mb-2">Resistente à Água</div>
                <p className="text-sm text-gray-500">Proteção mantida mesmo após contato com água ou suor</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                <div className="size-12 bg-brandGreen/10 rounded-full flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-brandGreen !text-2xl">autorenew</span>
                </div>
                <div className="font-bold mb-2">Proteção Permanente</div>
                <p className="text-sm text-gray-500">Não sai nas lavagens - proteção para toda a vida útil</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparativo Visual */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Compare</span>
              <h2 className="text-3xl md:text-4xl font-display font-black">Protetor Solar vs. Body UV50+</h2>
            </div>

            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-3 bg-gray-100 font-bold text-center">
                <div className="p-4">Aspecto</div>
                <div className="p-4 bg-gray-200">Protetor Solar</div>
                <div className="p-4 bg-primary text-white">Body UV50+</div>
              </div>
              {[
                { aspect: 'Reaplicação', solar: 'A cada 2 horas', uv: 'Nunca necessária', icon: 'schedule' },
                { aspect: 'Na água', solar: 'Perde eficácia', uv: 'Mantém 100%', icon: 'pool' },
                { aspect: 'Pele sensível', solar: 'Pode irritar', uv: 'Hipoalergênico', icon: 'spa' },
                { aspect: 'Aplicação', solar: 'Difícil em bebês', uv: 'Veste e pronto', icon: 'touch_app' },
                { aspect: 'Custo mensal', solar: '~R$ 50/mês', uv: 'R$ 0 (uso contínuo)', icon: 'payments' },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 border-b border-gray-100 text-center items-center">
                  <div className="p-4 flex items-center gap-2 justify-center font-medium">
                    <span className="material-symbols-outlined text-gray-400 !text-lg">{row.icon}</span>
                    {row.aspect}
                  </div>
                  <div className="p-4 text-gray-500">{row.solar}</div>
                  <div className="p-4 bg-primary/5 font-bold text-primary">{row.uv}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tecnologia do Tecido */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Tecnologia</span>
                <h2 className="text-3xl md:text-4xl font-display font-black mb-6">Tecido de Alta Performance</h2>
                <p className="text-gray-500 mb-8">Desenvolvido com tecnologia Dry-Fit para máximo conforto e proteção do seu bebê em qualquer situação.</p>

                <div className="space-y-4">
                  {[
                    { icon: 'bolt', title: 'Secagem Ultra-Rápida', desc: 'Tecido que seca em minutos após contato com água' },
                    { icon: 'thermostat', title: 'Controle Térmico', desc: 'Mantém o bebê fresco mesmo em dias quentes' },
                    { icon: 'verified', title: 'Costuras Reforçadas', desc: 'Maior durabilidade para acompanhar o crescimento' },
                    { icon: 'wash', title: 'Fácil Lavagem', desc: 'Pode lavar na máquina sem perder a proteção UV' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="size-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-primary !text-xl">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-bold">{item.title}</h4>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-8">
                <h3 className="font-bold text-xl mb-6 text-center">Composição do Tecido</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Poliamida</span>
                      <span className="text-primary font-bold">80%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Elastano</span>
                      <span className="text-secondary font-bold">20%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-secondary rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-6 text-center">Tecido premium com toque suave e flexibilidade para o conforto do bebê</p>
              </div>
            </div>
          </div>
        </section>

        {/* Certificações */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-display font-black text-center mb-8">Certificações e Segurança</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white/10 p-6 rounded-2xl">
                <span className="material-symbols-outlined !text-4xl mb-3">verified</span>
                <div className="font-bold">FPU 50+</div>
                <p className="text-xs opacity-80 mt-1">Fator de Proteção Ultravioleta</p>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl">
                <span className="material-symbols-outlined !text-4xl mb-3">eco</span>
                <div className="font-bold">OEKO-TEX®</div>
                <p className="text-xs opacity-80 mt-1">Livre de substâncias nocivas</p>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl">
                <span className="material-symbols-outlined !text-4xl mb-3">dermatology</span>
                <div className="font-bold">Dermatológico</div>
                <p className="text-xs opacity-80 mt-1">Testado e aprovado</p>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl">
                <span className="material-symbols-outlined !text-4xl mb-3">water_drop</span>
                <div className="font-bold">Anti-Cloro</div>
                <p className="text-xs opacity-80 mt-1">Resistente à piscina</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Prova Social */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-display font-black text-center mb-4">O Que as Mamães Dizem</h2>
            <p className="text-gray-500 text-center mb-12 max-w-lg mx-auto">Mais de 500 famílias já protegem seus bebês com nosso Body UV50+</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map(t => (
                <div key={t.id} className="bg-gray-50 p-6 rounded-3xl border border-gray-100 hover:shadow-lg transition-all">
                  <div className="flex gap-1 text-accent mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined !text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{t.text}</p>
                  <div className="flex items-center gap-3">
                    <div className={`size-10 rounded-full ${t.avatarColor} flex items-center justify-center`}>
                      <span className="material-symbols-outlined text-gray-400">person</span>
                    </div>
                    <span className="font-bold text-gray-900">{t.name}</span>
                  </div>
                </div>
              ))}
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
              <a
                href={PRODUCT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 bg-secondary text-white rounded-2xl font-bold text-lg hover:bg-[#E02425] transition-all shadow-xl shadow-secondary/30 flex items-center justify-center gap-2 no-underline"
              >
                <span className="material-symbols-outlined">shopping_cart</span>
                Garantir Meu Body UV50+
              </a>
              <div className="flex justify-center gap-4 opacity-50">
                <img src={IMAGES.paymentPix} className="h-6" alt="Pix" />
                <img src={IMAGES.paymentVisa} className="h-6" alt="Visa" />
                <img src={IMAGES.paymentMaster} className="h-6" alt="Master" />
              </div>
            </div>
          </div>
        </section>

        {/* Dicas de Uso */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-brandGreen/10 text-brandGreen px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Dicas</span>
              <h2 className="text-3xl md:text-4xl font-display font-black">Quando usar o Body UV50+?</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: 'beach_access', title: 'Praia', desc: 'Proteção total na areia e no mar', bg: 'bg-blue-50', color: 'text-blue-600' },
                { icon: 'pool', title: 'Piscina', desc: 'Resistente ao cloro e água', bg: 'bg-cyan-50', color: 'text-cyan-600' },
                { icon: 'park', title: 'Parque', desc: 'Passeios ao ar livre protegidos', bg: 'bg-green-50', color: 'text-green-600' },
                { icon: 'wb_sunny', title: 'Dia a Dia', desc: 'Use em qualquer atividade', bg: 'bg-yellow-50', color: 'text-yellow-600' },
              ].map((item, i) => (
                <div key={i} className={`${item.bg} p-6 rounded-3xl text-center`}>
                  <div className={`size-16 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-lg`}>
                    <span className={`material-symbols-outlined ${item.color} !text-3xl`}>{item.icon}</span>
                  </div>
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white rounded-3xl p-8 border border-gray-100">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-accent">tips_and_updates</span>
                Dica Importante
              </h3>
              <p className="text-gray-600">
                O Body UV50+ protege apenas as áreas cobertas pelo tecido. Para proteção completa, aplique protetor solar no
                <strong> rosto, orelhas, mãos e pés</strong> do bebê. Evite exposição direta ao sol entre 10h e 16h,
                quando os raios UV são mais intensos.
              </p>
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

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-black mb-4">
              Proteja seu bebê <span className="text-accent">hoje mesmo</span>
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Mais de 500 mamães já escolheram o Body UV50+ para seus bebês.
              Junte-se a elas e aproveite dias ensolarados sem preocupação!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={PRODUCT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-secondary hover:bg-[#E02425] text-white rounded-2xl font-display font-bold text-xl transition-all shadow-xl shadow-black/30 flex items-center gap-3 no-underline"
              >
                Quero Proteger Meu Bebê
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
            <div className="flex justify-center gap-6 mt-6 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined !text-lg">verified</span>
                7 dias de garantia
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined !text-lg">local_shipping</span>
                Frete grátis Brasil
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined !text-lg">credit_card</span>
                12x sem juros
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white py-12 px-4 text-center">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex justify-center">
            {/* Logo Oficial RGB com fundo branco - NUNCA substituir por texto */}
            <div className="bg-white rounded-xl px-6 py-3">
              <img
                src="https://storage.googleapis.com/landinpage-era-uma-vez/era-uma-vez-logotipo-RGB.jpg"
                alt="Era Uma Vez"
                className="h-10 w-auto object-contain"
              />
            </div>
          </div>
          <p className="text-xs font-medium opacity-80">© 2026 ERA UMA VEZ. TODOS OS DIREITOS RESERVADOS.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
