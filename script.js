/* =====================================================================
   Advogado 2.0 — Landing Page · interações
   ===================================================================== */

/* ---------------------------------------------------------------------
   CONFIG DE CONTATO  ·  ⚠️ EDITE AQUI
   - Cliente: baixa o app (hoje um APK; depois vira o link da Google Play).
   - Advogado: fala no WhatsApp da plataforma.
   Ninguém é enviado para e-mail.
   --------------------------------------------------------------------- */
const CONTATO = {
  // WhatsApp da plataforma (formato internacional, só dígitos): 61 99357-4056
  whatsapp: "5561993574056",

  // Link de download do app.
  // AGORA: cole aqui a URL do APK.
  // DEPOIS: troque por "https://play.google.com/store/apps/details?id=..."
  downloadUrl: "",

  msg: {
    advogado:
      "Olá! Sou advogado(a) e quero me candidatar ao Clube VIP da Advogado 2.0. Minha OAB é: ",
    geral:
      "Olá! Vim pela página do Advogado 2.0 e gostaria de mais informações.",
  },
};

function abrirWhatsapp(tipo) {
  const num = CONTATO.whatsapp.replace(/\D/g, "");
  const texto = encodeURIComponent(CONTATO.msg[tipo] || CONTATO.msg.geral);
  window.open(`https://wa.me/${num}?text=${texto}`, "_blank", "noopener");
}

function baixarApp() {
  if (CONTATO.downloadUrl) {
    window.open(CONTATO.downloadUrl, "_blank", "noopener");
  } else {
    alert(
      "O download do aplicativo estará disponível em instantes.\n" +
        "Em breve também na Google Play."
    );
  }
}

/* Wiring dos CTAs */
document.querySelectorAll("[data-action='download']").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    baixarApp();
  });
});

document.querySelectorAll("[data-contact]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    abrirWhatsapp(el.getAttribute("data-contact"));
  });
});

/* Links legais (placeholder até existirem as páginas reais) */
document.querySelectorAll("[data-legal]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const doc =
      el.getAttribute("data-legal") === "termos"
        ? "Termos de Uso"
        : "Política de Privacidade";
    alert(`${doc}\n\nEste documento será publicado em breve.`);
  });
});

/* ---------------------------------------------------------------------
   Nav: sticky + progresso + menu mobile
   --------------------------------------------------------------------- */
const nav = document.getElementById("nav");
const burger = document.getElementById("navBurger");
const mobile = document.getElementById("navMobile");

const onScroll = () => {
  nav.classList.toggle("is-stuck", window.scrollY > 24);
  const h = document.documentElement;
  const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  const bar = document.getElementById("scrollProgress");
  if (bar) bar.style.width = `${scrolled}%`;
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

burger.addEventListener("click", () => {
  const open = burger.getAttribute("aria-expanded") === "true";
  burger.setAttribute("aria-expanded", String(!open));
  burger.setAttribute("aria-label", open ? "Abrir menu" : "Fechar menu");
  mobile.hidden = open;
});

mobile.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Abrir menu");
    mobile.hidden = true;
  });
});

/* ---------------------------------------------------------------------
   Reveal on scroll
   --------------------------------------------------------------------- */
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealEls = document.querySelectorAll(".reveal");

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealEls.forEach((el) => el.classList.add("is-visible"));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const delay = Math.min(i * 70, 210);
          setTimeout(() => entry.target.classList.add("is-visible"), delay);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
}
