import { useState } from "react";
import { ModalState, ModalUsersOperationType } from "../../type";

export function useUsersModal() {
  const [usersModal, setUsersModal] = useState<ModalState>({
    type: undefined,
    user: 0,
  });

  const handleToggleUsersModal = (
    type?: ModalUsersOperationType,
    user?: number
  ) => {
    setUsersModal({
      type,
      user,
    });
  };

  return {
    handleToggleUsersModal,
    usersModal,
  };
}
