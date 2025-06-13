import { publicRoutes } from "@configs/routes/Web/navigation";
import { NextRequest, NextResponse } from "next/server";
import { getUserAuth } from "../services/Users/GetAuth/SSR";
import { STATUS_SERVICE } from "@constants/http";
import { jsonWebToken } from "@helpers/JsonWebToken";
import { AUTH_RULES } from "@configs/auth";

export async function authenticationsMiddleware(
  req: NextRequest,
  response: NextResponse
) {
  const token_navigation = req.cookies.get("token_navigation");
  if (typeof token_navigation == "undefined")
    return NextResponse.redirect(new URL(publicRoutes.login, req.url));

  const userAuth = req.cookies.get("userAuth");

  if (typeof userAuth != "undefined") return null;

  try {
    const { data, status } = await getUserAuth(token_navigation.value);

    if (status === STATUS_SERVICE.NOT_FOUND) {
      response.cookies.set("token_navigation", "", {
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
        expires: new Date(0), // Expira imediatamente
        sameSite: "lax",
      });
      return NextResponse.redirect(new URL(publicRoutes.login, req.url));
    }

    const { createJwt } = jsonWebToken();
    const jwt = await createJwt(JSON.parse(data));

    response.cookies.set("userAuth", jwt, AUTH_RULES.cookies);

    return null;
  } catch (error) {
    console.log(error);
    // Se falhar ao obter as informações do usuário, redireciona para login
    return NextResponse.redirect(new URL(publicRoutes.login, req.url));
  }
}
