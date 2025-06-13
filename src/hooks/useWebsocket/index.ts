import { useEffect, useRef, useState } from "react";

export function useWebSocket() {
  const socketRef = useRef<WebSocket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const URL_WEBSOCKET = process.env.NEXT_PUBLIC_WEBSOCKET_URL;
    if (!URL_WEBSOCKET) return;

    const socket = new WebSocket(URL_WEBSOCKET);
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("🔌 WebSocket conectado!");
      setConnected(true);
    };

    socket.onmessage = (event) => {
      console.log("📩 Mensagem recebida:", event.data);
      setMessages((prev) => [...prev, event.data]);
    };

    socket.onerror = (error) => {
      console.error("❌ Erro no WebSocket:", error);
    };

    socket.onclose = () => {
      console.warn("🔌 Conexão WebSocket encerrada.");
      setConnected(false);
    };

    // Limpeza ao desmontar
    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = (msg: string) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(msg);
    } else {
      console.warn("WebSocket não está conectado.");
    }
  };

  return {
    connected,
    messages,
    sendMessage,
  };
}
