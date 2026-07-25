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
  downloadUrl: "https://expo.dev/accounts/advogado2.0/projects/meu-advogado-20/builds/9201bdf8-36c7-42d4-b1a0-e7dbb7a3335d",
  ...
};
```

Fluxo dos CTAs (ninguém é enviado para e-mail):

- **Cliente** (`Baixar o app` / `Baixar APK agora`): abre temporariamente o APK
  gerado no Expo/EAS. Quando o app entrar na loja, basta trocar `downloadUrl`
  pela URL do Google Play.
- **Advogado** (`Quero ser parceiro`) e **WhatsApp flutuante**: abrem
  `https://wa.me/5561993574056` com mensagem pronta.

Os links legais ja apontam para paginas estaticas dentro da landing:

- `privacidade.html`
- `termos.html`
- `exclusao-de-dados.html`

Ao publicar na Vercel, use as URLs canonicas no Play Console, por exemplo
`https://advogado20.com.br/privacidade.html` e
`https://advogado20.com.br/exclusao-de-dados.html`.

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

O texto foi originalmente baseado na referência `https://advogado20.vercel.app/` e na
documentação do produto (`ESPECIFICACAO_FUNCIONAL_APP.md`, `DESIGN.md`).
O domínio público canônico atual é `https://advogado20.com.br/`.
As seções seguem uma narrativa em "Artigos":

1. **Hero** — proposta + mascote com especialidades orbitais.
2. **Artigo I — Benefícios** — Segurança, Conexão real, Liberdade.
3. **O rito — Como funciona** — 4 passos (área → localização → indicação → WhatsApp).
4. **Artigo II — Para Advogados** — Clube de Beneficios (perfil profissional, contato externo e beneficios operacionais).
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
