import { useState } from "react";

export function useOptions() {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const handleToggleOptions = (isShow: boolean) => setShowOptions(isShow);

  return {
    handleToggleOptions,
    showOptions,
  };
}
