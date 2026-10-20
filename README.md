# 🏛️ Advocacia Gagliardi — Website Institucional Premium

Um website institucional *one-page* de alto padrão ("Dark Luxury Aesthetic") desenvolvido para a **Advocacia Gagliardi** (Dra. Cinthia Gagliardi). O projeto foi concebido para transmitir autoridade, elegância e confiabilidade jurídica, otimizando a conversão de potenciais clientes por meio da integração direta com o WhatsApp.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## 🌟 Recursos e Diferenciais

- **Design System Luxury:** Paleta fundamentada em *Onyx Black* (`#08080A`) e detalhes em *Champagne Gold* (`#D4AF37`) com tipografia *Cinzel* e *Plus Jakarta Sans*.
- **Integração Inteligente com WhatsApp:** Gerenciador central de links (`src/utils/whatsapp.js`) que injeta mensagens pré-formatadas e contextualizadas dependendo da seção ou do serviço selecionado.
- **Layout 100% Responsivo:** Design adaptável otimizado para dispositivos móveis, tablets e desktops.
- **Segurança e Proteção contra Bots:** Arquitetura estática sem banco de dados exposto, acompanhada de cabeçalhos de segurança HTTP configurados no `vercel.json` (proteção contra XSS, Clickjacking e MIME Sniffing).
- **Desempenho Otimizado:** Build enxuto e carregamento ultrarrápido com suporte a CDN global na Vercel.

---

## 🛠️ Tecnologias Utilizadas

- **Core:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Iconografia:** [Lucide React](https://lucide.dev/)
- **Deploy & Hosting:** [Vercel](https://vercel.com/)

---

## 📂 Estrutura de Pastas

```text
cinthia-advocacia/
├── public/
│   ├── cinthia.jpg          # Imagem profissional da Dra. Cinthia
│   └── icons.svg
├── src/
│   ├── assets/
│   │   └── logo.png         # Emblema / Logotipo oficial em alta resolução
│   ├── components/
│   │   ├── Navbar.jsx       # Cabeçalho com menu responsivo e logo em destaque
│   │   ├── Hero.jsx         # Seção principal de apresentação (Capa)
│   │   ├── About.jsx        # Seção "O Escritório" com selo de autoridade
│   │   ├── Services.jsx     # Seção de áreas de atuação com CTAs individuais
│   │   ├── Differentials.jsx# Diferenciais competitivos e valores
│   │   ├── Contact.jsx      # Formulário de contato direto e informações de atendimento
│   │   └── Footer.jsx       # Rodapé institucional
│   ├── utils/
│   │   └── whatsapp.js      # Utilitário centralizador de mensagens do WhatsApp
│   ├── App.jsx              # Componente principal da aplicação
│   ├── index.css            # Configurações globais e gradientes do Tailwind CSS
│   └── main.jsx             # Ponto de entrada React
├── vercel.json              # Configurações de segurança e cabeçalhos HTTP
├── tailwind.config.js       # Customização do design system no Tailwind
├── vite.config.js           # Configurações de compilação do Vite
└── package.json             # Dependências e scripts do projeto