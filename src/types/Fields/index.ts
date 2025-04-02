import { HTMLInputTypeAttribute } from "react";

export type FieldsShape = {
  id: number;
  name: string;
  component: "INPUT" | "SELECT" | "TEXTAREA";
  type: HTMLInputTypeAttribute;
  scope: ScopeFields;
  is_file: boolean;
  is_sensitive: boolean;
  is_required: boolean;
  value: string;
  group_id: number;
  created_at: string;
  updated_at: string;
};

export type ScopeFields = "USER" | "CLIENT" | "COMPANY";
