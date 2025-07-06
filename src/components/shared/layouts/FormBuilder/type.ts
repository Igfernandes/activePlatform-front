import { CSSProperties, JSX } from "react";

export type OptionData = {
  id: string;
  field: string;
  element: "INPUT" | "TEXT" | "GALLERY";
  icon: JSX.Element;
};

export type FieldShape = {
  id: string;
  element: string;
  label?: string;
  type?: string;
  name?: string;
  group?: string;
  style?: CSSProperties;
  placeholder?: string;
  defaultValue?: string;
  className?: string;
  width?: string;
  height?: string;
  margin?: string;
  labelColor?: string;
  labelWeight?: string;
  setValue?: SetValue;
  required?: string;
};

export type SetValue = (name: string, value: unknown) => void;
