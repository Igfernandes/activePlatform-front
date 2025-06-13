import { HandleSubscribeProps } from "../type";

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  return btoa(String.fromCharCode(...new Uint8Array(buffer)));
}

export async function handleSubscribe({
  setSubscription,
}: HandleSubscribeProps) {
  if ("serviceWorker" in navigator && "PushManager" in window) {
    try {
      const registration = await navigator.serviceWorker.register(
        "/service-worker.js"
      );
      
      const pushSubscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: process.env.NEXT_PUBLIC_NOTIFICATION_PUBLIC_KEY, // Substitua pela chave pública VAPID
      });

      const p256dh = pushSubscription.getKey("p256dh");
      const auth = pushSubscription.getKey("auth");

      setSubscription({
        endpoint: pushSubscription.endpoint,
        keys: {
          p256dh: p256dh ? arrayBufferToBase64(p256dh) : "",
          auth: auth ? arrayBufferToBase64(auth) : "",
        },
      });

      // Enviar para o back-end
      if (pushSubscription) {
      }
    } catch (error) {
      console.error(
        "Erro ao tentar se inscrever nas notificações push:",
        error
      );
    }
  }
}
