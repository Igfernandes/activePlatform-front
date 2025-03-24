import { publicRoutes } from "@configs/routes/Web/navigation";
import { NextRequest, NextResponse } from "next/server";
import { getUserAuth } from "../services/Users/GetAuth/SSR";
import { STATUS_SERVICE } from "@constants/services";
import { deleteCookie } from "cookies-next";
import { jsonWebToken } from "@helpers/JsonWebToken";

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

    const { createJwt } = jsonWebToken();
    const jwt = await createJwt(JSON.parse(data));

    response.cookies.set("userAuth", jwt, {
      httpOnly: process.env.NODE_ENV === "production", // Para segurança, se necessário
      secure: process.env.NODE_ENV === "production",
      expires: expirationDate,
      sameSite: "lax",
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    console.log(error);
    // Se falhar ao obter as informações do usuário, redireciona para login
    return NextResponse.redirect(new URL(publicRoutes.login, req.url));
  }
}
