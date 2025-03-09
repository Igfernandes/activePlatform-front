import { publicRoutes } from "@configs/routes/Web/navigation";
import { NextRequest, NextResponse } from "next/server";
import { getUserAuth } from "../services/Users/GetAuth/SSR";
import { STATUS_SERVICE } from "@constants/services";
import { deleteCookie } from "cookies-next";

export async function authenticationsMiddleware(
  req: NextRequest,
  response: NextResponse
) {
  const token_navigation = req.cookies.get("token_navigation");

  if (typeof token_navigation == "undefined")
    return NextResponse.redirect(new URL(publicRoutes.login, req.url));

  const userAuth = req.cookies.get("userAuth");

  if (typeof userAuth != "undefined") return;

  try {
    const { data, status } = await getUserAuth(token_navigation.value);

    if (status === STATUS_SERVICE.NOT_FOUND) {
      deleteCookie("token_navigation");
      return NextResponse.redirect(new URL(publicRoutes.login, req.url));
    }

    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 2);
    
    response.cookies.set("userAuth", JSON.stringify(data), {
      httpOnly: process.env.NODE_ENV === "production", // Para segurança, se necessário
      secure: process.env.NODE_ENV === "production",
      expires: expirationDate,
      sameSite: "lax",
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    // Se falhar ao obter as informações do usuário, redireciona para login
    return NextResponse.redirect(new URL(publicRoutes.login, req.url));
  }
}
