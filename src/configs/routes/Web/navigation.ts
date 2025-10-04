export const publicRoutes = {
  login: "/login",
  forgotPassword: "/forgot-password",
  successful: "/successful",
  forms: "/forms"
};

export const privateRoutes = {
  dashboard: "/dashboard",
  clients: "/dashboard/clients",
  dispatcher: "/dashboard/dispatcher",
  forms: "/dashboard/forms",
  schedule: "/dashboard/schedule",
  services: "/dashboard/services",
  events: "/dashboard/events",
  finance: "/dashboard/finance",
  financesCreate: "/dashboard/finance/create",
  financePayments: "/dashboard/finance/{id}/payment/{payment_id}",
  usersManager: "/dashboard/users",
  userGroups: "/dashboard/users/group",
  apisManager: "/dashboard/apis",
  settings: "/dashboard/settings",
  logout: "/dashboard/logout",
};
