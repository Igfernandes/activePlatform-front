export type GetFieldsGroupsRequest = {
  id?: number;
  fieldId?: string;
  name?: string;
  name_contains?: string;
  scope?: "USER" | "CLIENT" | "COMPANY";
};
