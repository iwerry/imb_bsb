# Identidade Visual e Design System - Instituto Mais Brasília

Este documento detalha as especificações de design utilizadas no desenvolvimento do site institucional, garantindo consistência visual e autoridade de marca.

## 🎨 Paleta de Cores

A paleta foi selecionada para equilibrar a solidez institucional com a modernidade de Brasília.

| Cor | Hexadecimal | Uso Principal | Significado |
| :--- | :--- | :--- | :--- |
| **Azul Marinho** | `#002B5C` | Textos, Botões, Navbar | Autoridade, Confiança, Base Institucional |
| **Azul Celeste** | `#0C91CC` | Acentos, Ícones, Hover | Inovação, Céu de Brasília, Clareza |
| **Branco Gelo** | `#E8E9EA` | Fundos Secundários | Organização, Limpeza, Transparência |
| **Branco Puro** | `#FFFFFF` | Fundos Principais, Cards | Pureza, Foco no Conteúdo |

## 🔤 Tipografia

A escolha tipográfica foca em legibilidade máxima e um ar contemporâneo.

- **Fonte Principal:** [Manrope](https://fonts.google.com/specimen/Manrope)
- **Pesos Utilizados:**
  - `300` (Light): Subtítulos e textos leves.
  - `400` (Regular): Corpo de texto.
  - `600` (Semi-bold): Navegação e botões.
  - `800` (Extra-bold): Títulos principais (H1, H2).

### Escala Tipográfica (Responsiva)
- **H1 (Hero):** 72px (Desktop) / 48px (Mobile)
- **H2 (Seções):** 48px (Desktop) / 36px (Mobile)
- **Corpo:** 18px (Desktop) / 16px (Mobile)

## 📐 Layout e Responsividade

O site foi construído utilizando a metodologia **Mobile-First** com o framework Tailwind CSS.

- **Grid System:** Utilização de `grid-cols-1` para mobile, `grid-cols-2` para tablets e `grid-cols-3/4` para desktops.
- **Espaçamento:** Escala de padding e margin consistente (ex: `py-24` para seções em desktop, `py-16` em mobile).
- **Componentes Adaptáveis:**
  - **Navbar:** Menu hambúrguer com overlay animado para dispositivos móveis.
  - **Cards:** Empilhamento automático em telas menores.
  - **Imagens:** Uso de `aspect-ratio` para manter a proporção em diferentes resoluções.

## ✨ Elementos Gráficos

- **Bordas:** Arredondamento generoso (`rounded-3xl` ou `rounded-[50px]`) para transmitir acolhimento e modernidade.
- **Animações:** Micro-interações suaves via `motion` (Framer Motion) para feedback de hover e entrada de seções.
- **Sombras:** Sombras suaves (`shadow-xl`) com baixa opacidade para criar profundidade sem poluição visual.
