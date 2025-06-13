// public/service-worker.js

self.addEventListener("push", (event) => {
  let data = event.data.json();

  const title = data.title || "Nova Notificação";
  const options = {
    body: data.body,
    icon: "agm-round-logo.png", // Coloque o ícone que você quiser
    badge: "/badge.png",
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
