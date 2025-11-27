import { PermissionData } from "@type/Permissions/GroupsPermissions";

export type UsersShape = {
  id: number;
  name: string;
  avatar: string | null;
  status: "ACTIVE" | "INACTIVE";
  cpf: string;
  cnpj: string;
  category: string;
  birthdate: string;
  email: string;
  phone: string;
  groups: Array<GroupData>;
  permissions: Array<PermissionData>;
  created_at: string;
  updated_at: string;
};

type GroupData = {
  id: number;
  name: string;
};
