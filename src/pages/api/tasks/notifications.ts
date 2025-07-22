import { STATUS_SERVICE } from "@constants/http";
import { NextApiRequest, NextApiResponse } from "next";
import WebSocket from "ws";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { METHOD_NOT_ALLOWED, BAD_REQUEST, OK, INTERNAL_ERROR, BAD_AUTH } =
    STATUS_SERVICE;

  if (req.method !== "POST") {
    return res
      .status(METHOD_NOT_ALLOWED)
      .json({ message: "Método não permitido" });
  }

  try {
    const data = req.body;

    if (!data || Object.keys(data).length === 0) {
      return res
        .status(BAD_REQUEST)
        .json({ message: "Dados inválidos ou ausentes" });
    }
    const URL_WEBSOCKET = process.env.NEXT_PUBLIC_WEBSOCKET_URL;

    if (!URL_WEBSOCKET)
      return res.status(BAD_AUTH).json({ message: "websocket_not_found" });

    const socket = new WebSocket(`${URL_WEBSOCKET}`);

    socket.on("open", () => {
      socket.send(JSON.stringify(data));

      console.log("envio", URL_WEBSOCKET);
      socket.close();
      return res.status(OK).json({ status: "sent" });
    });

    socket.on("error", (err) => {
      console.error("WebSocket error:", err);
      return res
        .status(INTERNAL_ERROR)
        .json({ status: "error", error: String(err) });
    });
  } catch (err) {
    console.error("Erro na notificação:", err);
    return res.status(INTERNAL_ERROR).json({ message: "Erro interno" });
  }
}