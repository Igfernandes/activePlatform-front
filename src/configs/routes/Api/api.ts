import { authenticationRoutes } from "./authentications";
import { financesRoutes } from "./finances";
import { clientsRoutes } from "./clients";
import { fieldsRoutes } from "./fields";
import { formsRoutes } from "./forms";
import { integrationsRoutes } from "./integrations";
import { invitesRoutes } from "./invites";
import { permissionsRoutes } from "./permissions";
import { recoverRoutes } from "./recover";
import { servicesRoutes } from "./services";
import { usersRoutes } from "./users";
import { notificationsRoutes } from "./notifications";
import { messagesDispatcherRoutes } from "./MessagesDispatcher";
import { scheduleRoutes } from "./schedule";
import { filesRoutes } from "./files";

export const API_ROUTES = {
  ...authenticationRoutes,
  ...recoverRoutes,
  ...usersRoutes,
  ...clientsRoutes,
  ...invitesRoutes,
  ...permissionsRoutes,
  ...servicesRoutes,
  ...formsRoutes,
  ...fieldsRoutes,
  ...integrationsRoutes,
  ...financesRoutes,
  ...notificationsRoutes,
  ...scheduleRoutes,
  ...messagesDispatcherRoutes,
  ...filesRoutes,
  exports: "/exports",
};
