import { ChangeEvent, CSSProperties } from "react";

export type BoardViewerProps = TFields;

export type TFields = {
  id?: string;
  element?: string;
  label?: string;
  type?: string;
  group?: string;
  style?: CSSProperties;
  dataTestId?: string;
  placeholder?: string;
  className?: string;
  width?: string;
  height?: string;
  margin?: string;
  options?: string;
  labelColor?: string;
  labelWeight?: string;
  required?: string;
  name: string;
  errors?: string;
  defaultValue?: string;
  min?: number;
  disabled?: boolean;
  onChange?: (Ev: ChangeEvent<HTMLInputElement>) => void;
};
