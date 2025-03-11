import { publicRoutes } from "@configs/routes/Web/navigation";
import { STATUS_SERVICE } from "@constants/services";
import { handleLogout } from "@helpers/handlers";
import { isValidJSON } from "@helpers/json";
import { AxiosError } from "axios";

export function hasErrorAuthentication(error: AxiosError) {
  if (
    !error.response?.status ||
    error.response?.status === STATUS_SERVICE.NOT_FOUND
  ) {
    handleLogout();
    return (window.location.href = publicRoutes.login);
  }

  return Promise.reject(
    typeof error === "string" && isValidJSON(error) ? JSON.parse(error) : error
  );
}
