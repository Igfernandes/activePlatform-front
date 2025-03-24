export type PermissionsShape = {
  id: number;
  name: string;
  type: PermissionsTypes;
  scope: string;
};
export type PermissionsTypes = "CREATE" | "UPDATE" | "DELETE" | "VIEW";
