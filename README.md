# Advogado 2.0 — Landing Page

Landing page institucional do Advogado 2.0. **Sem cadastro/login**: a página
tem apenas dois "chamados" (CTAs) — um para **clientes** e outro para
**advogados** — que abrem o WhatsApp da plataforma.

Stack: HTML + CSS + JavaScript puro (sem build, sem dependências). LCP rápido,
deploy em qualquer host estático (Vercel, Netlify, GitHub Pages, etc.).

## Estrutura

```
Advogado 2.0 - LandingPage/
├── index.html      # marcação e conteúdo
├── styles.css      # design system "Lex Elite" (espelha o app)
├── script.js       # nav sticky, menu mobile, reveal on scroll, CTAs
├── assets/         # logo, mascote e arte, copiados do app mobile
│   ├── logo-gold.png          # logo oficial (fundo transparente)
│   ├── logo-white.png / logo-blue.png
│   ├── mascot-lawyer.png      # mascote (herói + finale)
│   └── prayer-bible-cross.png # arte da seção Propósito
└── README.md
```

## ⚠️ Configuração antes de publicar

Abra `script.js` e edite o objeto `CONTATO` no topo:

```js
const CONTATO = {
  whatsapp: "5561993574056",   // WhatsApp da plataforma (advogados + contato geral)
  downloadUrl: "",             // ← cole aqui o link do APK; depois troque pela URL da Google Play
  ...
};
```

Fluxo dos CTAs (ninguém é enviado para e-mail):

- **Cliente** (`Baixar o app` / `Baixar o aplicativo`): abre `downloadUrl`.
  Enquanto estiver vazio, mostra um aviso "em breve". Quando o app entrar na
  loja, basta trocar `downloadUrl` pela URL do Google Play — nada mais muda.
- **Advogado** (`Quero ser parceiro`) e **WhatsApp flutuante**: abrem
  `https://wa.me/5561993574056` com mensagem pronta.

Os links **Política de Privacidade** e **Termos de Uso** exibem um aviso de
"em breve". Troque os `href="#"` com `data-legal="..."` pelos links reais quando
as páginas existirem.

## Rodar localmente

Qualquer servidor estático serve. Exemplos:

```bash
# Python
python -m http.server 4321

# Node
npx serve .
```

Depois acesse `http://localhost:4321`.

## Deploy na Vercel

1. Suba esta pasta como um projeto.
2. Framework preset: **Other** (site estático, sem build).
3. Output/root: a própria pasta (contém `index.html`).

## Conteúdo

O texto é baseado na referência `https://advogado20.vercel.app/` e na
documentação do produto (`ESPECIFICACAO_FUNCIONAL_APP.md`, `DESIGN.md`).
As seções seguem uma narrativa em "Artigos":

1. **Hero** — proposta + card de match interativo ("A 0,8 km de você").
2. **Artigo I — Benefícios** — Segurança, Conexão real, Liberdade.
3. **O rito — Como funciona** — 4 passos (área → localização → indicação → WhatsApp).
4. **Artigo II — Para Advogados** — Clube VIP (vitrine, vantagens, leads exclusivos).
5. **Artigo III — Propósito** — rede de intercessão / pedidos de oração.
6. **Chamado final** — as duas portas: *Sou Cliente* e *Sou Advogado*.

## Identidade visual

Replica o sistema **"Lex Elite"** do app mobile (tokens em
`../Advogado 2.0 - mobile/src/theme/tokens.ts`):

- Fundo navy `#071426`, dourado de marca `#D99A2D`, azul elétrico `#0266ff`,
  verde WhatsApp `#25D366`.
- Tipografia **Montserrat** (títulos) + **Inter** (corpo), como no app.
- Logo oficial, mascote e arte de oração reaproveitados do app.
- Ilustrações SVG originais (radar/mapa de match, ícones das áreas).
