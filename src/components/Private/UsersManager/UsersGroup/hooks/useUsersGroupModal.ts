import { useState } from "react";
import { ModalUsersGroupOperationType, UsersGroupModaLState } from "../../type";

export function useUsersGroupModal() {
  const [usersGroupModal, setUsersGroupModal] = useState<UsersGroupModaLState>({
    type: false,
    user: 0,
  });

  const handleToggleUsersGroupModal = (
    type?: ModalUsersGroupOperationType,
    user?: number
  ) => {
    setUsersGroupModal({
      type,
      user,
    });
  };

  return {
    handleToggleUsersGroupModal,
    usersGroupModal,
  };
}
