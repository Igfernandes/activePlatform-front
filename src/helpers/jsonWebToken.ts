import { jwtVerify, SignJWT } from "jose";

export function jsonWebToken() {
  const createJwt = async (data: Record<string, unknown>) => {
    const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET); // Chave secreta
    const jwt = await new SignJWT(data)
      .setProtectedHeader({ alg: "HS256", typ: "JWT" }) // Definindo o cabeçalho com o algoritmo (HS256) e tipo (JWT)
      .setIssuedAt()
      .setExpirationTime("48h") // O token expira em 1 hora
      .sign(secret);

    return jwt;
  };

  const verifyJwt = async <EntityShape extends Record<string, unknown>>(
    token: string
  ): Promise<EntityShape> => {
    const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET); // Chave secreta

    try {
      const { payload } = await jwtVerify(token, secret);
      return payload as EntityShape; // Dados decodificados do JWT
    } catch (error) {
      console.log(error);
      throw new Error("Token inválido");
    }
  };

  return {
    createJwt,
    verifyJwt,
  };
}
