import { Table } from "@components/shared/layouts/Table";
import { useUsers } from "./hooks/useUsers";
import { MOCK_USERS } from "../../../../data/users/__mocks__";
import { UsersStructProps } from "../type";
import i18n from "@configs/i18n";
import { ModalFormUsers } from "../Modals/Users";
import { Notice } from "@components/shared/others/Notice";

export function Users({ search, filterObjects }: UsersStructProps) {
  const { tDataUsers, tHeadsUser, handleToggleUsersModal, usersModal } =
    useUsers({
      data: MOCK_USERS,
      filter: search,
      handleFilter: filterObjects,
    });

  return (
    <>
      <div>
        <Table
          options={{
            pagination: {
              max: 5,
            },
          }}
          data={tDataUsers}
          title={i18n("words.users")}
          excludes={["cpf", "cnpj", "category","created_at", "updated_at"]}
          tHeads={{
            data: tHeadsUser.current,
            widths: [60, 166.5, 166.5, 166.5, 120, 166.5, 48],
          }}
        />
      </div>
      <div>
        <ModalFormUsers
          title={i18n("words.update_user")}
          isShowModal={usersModal.type === "DEFAULT"}
          onModal={handleToggleUsersModal}
        />
        <Notice
          headerTitle={i18n("words.attention")}
          title={i18n("manager_user.modal.user.title_already_exclude")}
          text={i18n("manager_user.modal.user.text_already_exclude")}
          onSubmit={() => ""}
          isShowModal={usersModal.type === "DELETE"}
          onModal={handleToggleUsersModal}
        />
      </div>
    </>
  );
}
