import { HTMLInputTypeAttribute } from "react";

export type UserFieldsShape = {
  id: number;
  name: string;
  component: "INPUT";
  type: HTMLInputTypeAttribute;
  group: string;
  created_at: string;
  updated_at: string;
};

export type UserFieldsGroupShape = {
  name: string;
  items: number;
};
