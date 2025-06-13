const expirationDate = new Date();
expirationDate.setDate(expirationDate.getDate() + 2);

export const AUTH_RULES = {
  cookies: {
    httpOnly: process.env.NODE_ENV === "production", // Para segurança, se necessário
    secure: process.env.NODE_ENV === "production",
    expires: expirationDate,
    sameSite: "lax" as boolean | "lax" | "strict" | "none" | undefined,
  },
};
