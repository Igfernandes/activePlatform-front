import { useState } from "react";
import { ModalState } from "@components/shared/layouts/Modal/type";

export function useUsersManager() {
  const defaultValues = { isShow: false, key: 0 };
  const [usersModal, setUsersModal] = useState<ModalState>(defaultValues);
  const [usersGroupModal, setUsersGroupModal] =
    useState<ModalState>(defaultValues);

  const handleToggleUsersModal = (isShow: boolean, key?: number) => {
    setUsersModal({
      isShow,
      key,
    });
  };
  const handleToggleUsersGroupModal = (isShow: boolean, key?: number) => {
    setUsersGroupModal({
      isShow,
      key,
    });
  };

  return {
    handleToggleUsersModal,
    usersModal,
    usersGroupModal,
    handleToggleUsersGroupModal,
  };
}
