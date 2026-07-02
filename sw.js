/* =====================================================================
   Service Worker "suicida" (self-destroying)
   ---------------------------------------------------------------------
   A landing NÃO é um PWA. Este arquivo existe apenas para remover o
   service worker do app antigo que ficou registrado nos dispositivos que
   visitaram a versão anterior de advogado20.vercel.app.

   O navegador rebusca /sw.js automaticamente a cada visita. Ao encontrar
   este worker, ele o instala, apaga todos os caches, se desregistra e
   recarrega a página — entregando a landing nova. Depois disso o SW some.
   ===================================================================== */

self.addEventListener("install", () => {
  // assume o controle imediatamente, sem esperar
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      // 1) apaga todos os caches deixados pelo app antigo
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));

      // 2) remove este próprio service worker
      await self.registration.unregister();

      // 3) recarrega todas as abas abertas para pegar o conteúdo novo
      const clients = await self.clients.matchAll({ type: "window" });
      clients.forEach((client) => client.navigate(client.url));
    })()
  );
});

/* Enquanto este SW estiver ativo, não intercepta nada: deixa tudo ir para
   a rede, garantindo que nada do cache antigo seja servido. */
self.addEventListener("fetch", () => {});
