export type UsersGroupShape = {
  id: number;
  name: string;
  status: "ACTIVE" | "INACTIVE";
  description: string | null;
  total: number;
  permissions: Array<PermissionsData>;
  created_at: string;
  updated_at: string;
};

export type PermissionsData = {
  id: number;
  name: string;
};
