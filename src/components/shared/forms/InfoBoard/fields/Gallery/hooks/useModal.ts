import { useState } from "react";

export function useModal() {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const handleModal = (isShow: boolean) => {
    setIsShowModal(isShow);
  };

  return {
    isShowModal,
    handleModal,
  };
}
