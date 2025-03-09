import { NextResponse } from "next/server";
import { serialize } from "cookie";

export function destroyCookie(cookieKey: string) {
  const res = NextResponse.next();
  // Excluindo o cookie
  res.headers.set(
    "Set-Cookie",
    serialize(cookieKey, "", {
      maxAge: -1, // Expira o cookie imediatamente
      httpOnly: true, // Para segurança, se necessário
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    })
  );
}

export function parseCookieServe(cookie: string) {
  try {
    return JSON.parse(JSON.parse(cookie));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return null;
  }
}
