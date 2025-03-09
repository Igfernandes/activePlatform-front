import { publicRoutes } from "@configs/routes/Web/navigation";
import { handleLogout } from "@helpers/handlers";

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Logout() {
  const router = useRouter();
  handleLogout();

  useEffect(() => {
    router.push(publicRoutes.login);
  }, []);

  return <></>;
}
