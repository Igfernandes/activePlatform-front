import { useEffect, useRef, useState } from "react";
import i18n from "@configs/i18n";
import { HookUsersProps, ModalUsersOperationType, TDataUser } from "../type";
import { SelectorShape } from "@components/shared/layouts/Seletor/type";
import { Selector } from "@components/shared/layouts/Seletor";
import { useModalContext } from "@contexts/Modal";
import { UserActions } from "../UserActions";
import { UsersShape } from "../../../../types/Users/Users";

export function useUsers({
  data: currentUsers,
  handleFilter,
  filter,
}: HookUsersProps<UsersShape>) {
  const [selectors, setSelectors] = useState<SelectorShape[]>([]);
  const [tDataUsers, setTDataUsers] = useState<Array<Record<string, unknown>>>(
    []
  );
  const { handleToggleModal } = useModalContext<ModalUsersOperationType>();

  const tHeadsUser = useRef<Array<string>>([
    "ID",
    i18n("words.name"),
    i18n("words.cpf_cnpj"),
    i18n("words.email"),
    i18n("words.phone"),
    i18n("words.category"),
    i18n("words.actions"),
  ]);

  const updateUserForTable = ({
    id,
    name,
    cpf,
    cnpj,
    email,
    phone,
    category,
  }: UsersShape): TDataUser => {
    const userId = id.toString();

    return {
      id: <Selector value={userId} label={userId} />,
      name,
      identify: cpf ?? cnpj,
      email,
      phone,
      category,
      actions: <UserActions handleToggleModal={handleToggleModal} id={id} />,
    };
  };

  /** Adding news keys of table and the lasted column to table data users */
  useEffect(() => {
    const usersFiltered = currentUsers.filter((tDataUser) =>
      handleFilter(tDataUser)
    );

    setSelectors([
      ...usersFiltered.map((user) => ({
        value: user.id.toString(),
        isChecked: false,
      })),
      {
        value: "all",
        isChecked: false,
      },
    ] as Array<SelectorShape>);

    const tDataUser = usersFiltered.map((userProps) =>
      updateUserForTable(userProps)
    );

    setTDataUsers(tDataUser);
  }, [currentUsers, filter]);

  return {
    tDataUsers,
    tHeadsUser,
    setSelectors,
    selectors,
  };
}
