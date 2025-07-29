import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export function useInput() {
  const isUpLabel = ({
    placeholder,
    value,
    defaultValue,
  }: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >) => {
    if (placeholder) return true;

    if (value || defaultValue) return true;
  };

  return {
    isUpLabel,
  };
}
