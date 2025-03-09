import { deleteCookie } from "cookies-next";

export function handleLogout() {
  deleteCookie("userAuth");
  deleteCookie("token_navigation");
  deleteCookie("remember_referenceToken");
}
