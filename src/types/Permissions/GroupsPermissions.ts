import { DateShape } from "../datas";

export type GroupsPermissionsShape = {
  id: number;
  name: string;
  status: "ACTIVE" | "INACTIVE";
  permissions: Array<PermissionData>;
  created_at: DateShape;
};
export type PermissionData = {
  id: number;
  name: string;
};
