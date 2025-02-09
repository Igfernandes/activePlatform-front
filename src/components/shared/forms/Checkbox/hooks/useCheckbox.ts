import { useState } from "react";
import { useFormContext } from "react-hook-form";

export function useCheckbox() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { setValue } = useFormContext();

  const handleChecked = () => {
    setIsChecked(!isChecked);
    setValue("rememberMe", !isChecked);
  };
  return {
    handleChecked,
    isChecked,
  };
}
