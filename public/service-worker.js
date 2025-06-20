self.addEventListener("push", (event) => {
  if (!event.data) return;
  
  const data = event.data.json();

  const title = data.title || "Nova Notificação";
  const options = {
    body: data.body || "Você tem uma nova mensagem.",
    icon: "/imgs/agm-round-logo.png", // substitua pelo seu ícone
    badge: "/badge.png",
    data: {
      url: data.url || "/", // Adicione a URL para abrir quando clicado
    },
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("install", () => {
  self.skipWaiting(); // força ativação imediata
});

self.addEventListener("activate", () => {
  clients.claim(); // força controle de todas as abas abertas
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  const urlToOpen = event.notification.data?.url || "/";

  event.waitUntil(
    clients
      .matchAll({ type: "window", includeUncontrolled: true })
      .then((clientList) => {
        for (const client of clientList) {
          if (client.url === urlToOpen && "focus" in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      })
  );
});
