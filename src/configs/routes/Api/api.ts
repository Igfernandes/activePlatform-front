import { authenticationRoutes } from "./authentications";
import { clientsRoutes } from "./clients";
import { invitesRoutes } from "./invites";
import { permissionsRoutes } from "./permissions";
import { recoverRoutes } from "./recover";
import { usersRoutes } from "./users";

export const API_ROUTES = {
  ...authenticationRoutes,
  ...recoverRoutes,
  ...usersRoutes,
  ...clientsRoutes,
  ...invitesRoutes,
  ...permissionsRoutes,
};
