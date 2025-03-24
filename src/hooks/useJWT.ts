import jwt from "jsonwebtoken";

export function useJWT() {
  const getJWTDate = (token: string) => {
    try {
      return jwt.verify(token, process.env.JWT_SECRET ?? "");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      console.error("Invalid token");
    }
  };

  return {
    getJWTDate,
  };
}
