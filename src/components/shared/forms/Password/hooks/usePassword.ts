import { useState } from "react";

export function usePassword() {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const handleToggleTypeInput = () => {
    setIsShowPassword(!isShowPassword);
  };

  return {
    isShowPassword,
    handleToggleTypeInput,
  };
}
