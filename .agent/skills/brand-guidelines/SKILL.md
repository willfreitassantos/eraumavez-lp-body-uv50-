---
name: brand-guidelines
description: Manual de identidade visual da marca Era Uma Vez. Cores oficiais, regras de logo, tipografia, aplicações permitidas.
allowed-tools: Read, Glob, Grep
---

# Brand Guidelines - Era Uma Vez

> Manual de identidade visual oficial.

---

## 1. Paleta de Cores Oficial

### Cores Primárias

| Cor | PANTONE | CMYK | RGB | HEX |
|-----|---------|------|-----|-----|
| **Azul** | 294 C | C100 M90 Y13 K3 | rgb(14, 60, 145) | `#0E3C91` |
| **Vermelho** | 1788 C | C0 M95 Y85 K0 | rgb(255, 40, 41) | `#FF2829` |
| **Amarelo** | 1235 C | C0 M31 Y100 K0 | rgb(255, 185, 2) | `#FFB902` |
| **Verde** | 367 C | C42 M0 Y84 K0 | rgb(148, 200, 86) | `#94C856` |

### Uso de Cores

| Contexto | Cor Recomendada |
|----------|-----------------|
| Fundos principais | Branco ou Azul |
| CTAs / Botões | Vermelho |
| Destaques / Alertas | Amarelo |
| Sucesso / Confirmação | Verde |
| Textos principais | Azul ou Preto |

### ⚠️ Regra RGB

> Cores RGB destinam-se APENAS para aplicações web e mídias digitais.

---

## 2. Logotipo

### 02.01 Versão Completa

- Versão principal com letras coloridas
- **NÃO** alterar alinhamentos ou estrutura
- Preferência: aplicar sobre fundo branco

### 📁 Assets do Logotipo (URLs Oficiais)

| Versão | URL | Uso |
|--------|-----|-----|
| **CMYK** | [era-uma-vez-logotipo-CMYK.jpg](https://storage.googleapis.com/landinpage-era-uma-vez/era-uma-vez-logotipo-CMYK.jpg) | Impressão |
| **RGB** | [era-uma-vez-logotipo-RGB.jpg](https://storage.googleapis.com/landinpage-era-uma-vez/era-uma-vez-logotipo-RGB.jpg) | Digital/Web |
| **PNG** | [era-uma-vez-logotipo-PNG.jpg](https://storage.googleapis.com/landinpage-era-uma-vez/era-uma-vez-logotipo-PNG.jpg) | Web com transparência |

```javascript
// Constantes para uso no código
const LOGO_URLS = {
  cmyk: 'https://storage.googleapis.com/landinpage-era-uma-vez/era-uma-vez-logotipo-CMYK.jpg',
  rgb: 'https://storage.googleapis.com/landinpage-era-uma-vez/era-uma-vez-logotipo-RGB.jpg',
  png: 'https://storage.googleapis.com/landinpage-era-uma-vez/era-uma-vez-logotipo-PNG.jpg',
};
```

### 02.03 Versão Negativa

- Logo TODO em branco
- Usar sobre fundos nas cores da marca:
  - Fundo Azul → Logo branco ✅
  - Fundo Vermelho → Logo branco ✅
  - Fundo Amarelo → Logo branco ✅
  - Fundo Verde → Logo branco ✅

### 02.04 Sobre Fundos Coloridos

| Tipo de Fundo | Versão do Logo |
|---------------|----------------|
| Branco | Colorido |
| Cores claras | Colorido |
| Cores da marca | Negativo (branco) |
| Preto | Negativo (branco) |

### 02.05 Monocromia

| Versão | Uso |
|--------|-----|
| **Preto** | Padrão para monocromia |
| **Branco** | Sobre fundos escuros |

> Aplicações monocromáticas devem ser feitas apenas em últimos casos.

### 02.06 Limites do Logotipo (Área de Proteção)

- Área mínima de proteção onde **NENHUM** elemento pode ser aplicado
- Medida: **altura da letra "a"** (do "Era") aplicada aos pontos extremos
- Recomenda-se usar área de proteção MAIOR que a mínima sempre que possível

```
┌─────────────────────────┐
│    ← área de proteção → │
│  ┌─────────────────┐    │
│  │   EraUmaVez     │    │
│  └─────────────────┘    │
│    ← altura do "a" →    │
└─────────────────────────┘
```

### 02.07 Redução Máxima

| Contexto | Tamanho Mínimo |
|----------|----------------|
| **Impresso** | 35mm de largura |
| **Digital** | ~100px de largura |

> Abaixo desse tamanho, a legibilidade é comprometida.

### 02.08 Uso Incorreto (⛔ PROIBIDO)

| ❌ Proibido | Descrição |
|------------|-----------|
| Cores alteradas | Não aplicar cores fora do manual |
| Proporções distorcidas | Nunca esticar ou comprimir |
| Elementos adicionais | Não acrescentar nada ao logo |
| Parte de frase | Nunca usar logo como texto de frase |
| Rotacionado | Nunca alterar orientação horizontal |
| Áreas apertadas | Nunca usar sem área de proteção |

---

## 3. Família Tipográfica

### Fonte Principal: **SOOPAFRESH**

- **Uso**: Destaques, títulos, palavras em destaque
- **Contexto**: Mídias impressas e digitais
- **Característica**: Display, bold, impactante

```css
/* Web alternative */
font-family: 'Fredoka One', 'Comic Neue', cursive;
```

### Fonte Secundária: **Myriad Pro**

- **Uso**: Textos longos, explicativos, corpo de texto
- **Contexto**: Mídias impressas e digitais
- **Característica**: Sans-serif, legível, funcional

```css
/* Web alternative */
font-family: 'Myriad Pro', 'Source Sans Pro', 'Open Sans', sans-serif;
```

### Hierarquia Tipográfica

| Nível | Fonte | Uso |
|-------|-------|-----|
| H1 | Soopafresh | Títulos principais |
| H2-H3 | Soopafresh | Subtítulos |
| Body | Myriad Pro | Parágrafos, listas |
| Caption | Myriad Pro | Legendas, notas |

---

## 4. CSS Variables

```css
:root {
  /* === CORES OFICIAIS ERA UMA VEZ === */
  
  /* Primárias */
  --era-blue: #0E3C91;
  --era-red: #FF2829;
  --era-yellow: #FFB902;
  --era-green: #94C856;
  
  /* Neutros */
  --era-white: #FFFFFF;
  --era-black: #000000;
  
  /* Aliases para uso comum */
  --color-primary: var(--era-blue);
  --color-cta: var(--era-red);
  --color-accent: var(--era-yellow);
  --color-success: var(--era-green);
  
  /* Tipografia */
  --font-display: 'Fredoka One', 'Comic Neue', cursive;
  --font-body: 'Source Sans Pro', 'Open Sans', sans-serif;
}
```

---

## 5. Tailwind Config

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        era: {
          blue: '#0E3C91',
          red: '#FF2829',
          yellow: '#FFB902',
          green: '#94C856',
        }
      },
      fontFamily: {
        display: ['Fredoka One', 'Comic Neue', 'cursive'],
        body: ['Source Sans Pro', 'Open Sans', 'sans-serif'],
      }
    }
  }
}
```

### Uso no código:

```html
<h1 class="font-display text-era-blue">Era Uma Vez</h1>
<p class="font-body text-gray-800">Texto do corpo</p>
<button class="bg-era-red text-white">CTA</button>
```

---

## 6. Checklist de Validação

### Cores
- [ ] Usando APENAS cores oficiais?
- [ ] HEX exato conforme manual?
- [ ] Contraste adequado texto/fundo?

### Logo
- [ ] Versão correta para o fundo?
- [ ] Proporções preservadas?
- [ ] Área de proteção respeitada (altura do "a")?
- [ ] Tamanho mínimo respeitado (35mm / 100px)?
- [ ] Sem efeitos adicionados?
- [ ] Não está rotacionado ou distorcido?

### Tipografia
- [ ] Títulos em Soopafresh/Fredoka One?
- [ ] Textos em Myriad Pro/Source Sans Pro?
- [ ] Hierarquia correta?

---

> **Lembre-se:** A consistência visual constrói confiança. Cada detalhe importa.
