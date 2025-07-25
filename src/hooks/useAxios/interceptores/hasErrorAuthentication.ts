// import { publicRoutes } from "@configs/routes/Web/navigation";
import { publicRoutes } from "@configs/routes/Web/navigation";
import { STATUS_SERVICE } from "@constants/http";
import { handleLogout } from "@helpers/handlers";
import { isValidJSON } from "@helpers/json";
import { AxiosError } from "axios";

export function hasErrorAuthentication(error: AxiosError) {
  const response = Promise.reject(
    typeof error === "string" && isValidJSON(error) ? JSON.parse(error) : error
  );
  if (process.env.NEXT_PUBLIC_ENVIRONMENT == "DEV") return response;
  const { BAD_AUTH } = STATUS_SERVICE;
  const isStatusValid =
    error.response?.status && [BAD_AUTH].includes(error.response?.status);

  if (isStatusValid) {
    handleLogout();
    return (window.location.href = publicRoutes.login);
  }

  return response;
}
