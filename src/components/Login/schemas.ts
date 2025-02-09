import { z } from "zod";

export const loginFormSchema = z.object({
  login: z.string().email("Digite um e-mail válido"),
  password: z.string({ required_error: "Senha é obrigatória" }),
  rememberMe: z.boolean().nullable(),
});
