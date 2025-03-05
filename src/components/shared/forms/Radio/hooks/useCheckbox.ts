import { useState } from "react";

type Props = {
  onChecked?: (prop: boolean) => void;
};

export function useCheckbox({ onChecked }: Props = {}) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChecked = () => {
    setIsChecked(!isChecked);
    if (onChecked) onChecked(!isChecked);
  };

  return {
    handleChecked,
    isChecked,
  };
}
