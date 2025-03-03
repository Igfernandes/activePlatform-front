import { HTMLInputTypeAttribute } from "react";

export type FieldsShape = {
  id: number;
  name: string;
  component: "INPUT";
  value: null | string;
  type: HTMLInputTypeAttribute;
  fieldScope: "USER" | "COMPANY";
  isFile: boolean;
  group: string;
  created_at: string;
  updated_at: string;
};

export type FieldGroupsShape = {
  id: number;
  name: string;
  items: number;
  position: number;
};
