import { publicRoutes } from "@configs/routes/Web/navigation";
import { STATUS_SERVICE } from "@constants/http";
import { handleLogout } from "@helpers/handlers";
import { AxiosError } from "axios";

export function hasErrorAuthentication(error: AxiosError) {
  const { BAD_AUTH } = STATUS_SERVICE;

  const isNotAuth =
    error.response?.status && [BAD_AUTH].includes(error.response.status);

  if (isNotAuth) {
    handleLogout();
    window.location.href = publicRoutes.login; // redireciona, sem retornar nada
    return Promise.reject(error); // mantém a Promise rejeitada
  }

  return Promise.reject(error); // erro normal, não altera
}