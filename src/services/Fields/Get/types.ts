export type GetFieldsRequest = {
  id?: number;
  name?: string;
  name_contains?: string;
  component?: "INPUT" | "SELECT" | "TEXTAREA" | "TEXT" | "LINK";
  type?: string;
  is_sensitive?: boolean;
  is_required?: boolean;
  group_id?: number;
};
