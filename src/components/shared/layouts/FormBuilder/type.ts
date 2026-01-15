import { ChangeEvent, CSSProperties, JSX } from "react";
import { TabProps } from "./parts/Modal/tabs/type";
import { FieldError } from "react-hook-form";

export type OptionData = {
  id: string;
  field: string;
  element: "INPUT" | "TEXT" | "GALLERY";
  editTabs?: Array<{
    name: string;
    component: (props: TabProps) => JSX.Element;
  }>;
  icon: JSX.Element;
};

export type FieldShape = {
  id: string;
  element: string;
  label?: string;
  type?: string;
  name: string;
  group?: string;
  style?: CSSProperties;
  dataTestId?: string;
  placeholder?: string;
  defaultValue?: string;
  className?: string;
  width?: string;
  height?: string;
  margin?: string;
  errors?: FieldError;
  options?: string;
  labelColor?: string;
  labelWeight?: string;
  required?: boolean ;
};

export type SetValue = (name: string, value: unknown) => void;

export type SettingsFieldProps = {
  field?: FieldShape;
  oChangeField: (ev: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  tabActive: string;
};
