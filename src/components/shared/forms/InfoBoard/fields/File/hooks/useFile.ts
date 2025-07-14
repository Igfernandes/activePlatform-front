import { useState } from "react";

export function useFile() {
  const [currentValue, setCurrentValue] = useState<File>();
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  return {
    setCurrentValue,
    currentValue,
    isShowModal,
    setIsShowModal,
  };
}
