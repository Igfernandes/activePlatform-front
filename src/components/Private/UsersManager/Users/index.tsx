import { useUsers } from "./hooks/useUsers";
import { UsersStructProps } from "../type";
import i18n from "@configs/i18n";
import { ModalFormUsers } from "../Modals/Users";
import { Notice } from "@components/shared/others/Notice";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import useDeleteUsers from "../../../../services/Users/Delete/useDelete";
import usePatchStatusUsers from "../../../../services/Users/Patch/Status/usePatchStatus";

export function Users({ search, filterObjects, groups }: UsersStructProps) {
  const { tDataUsers, tHeadsUser, handleToggleModal, modal } = useUsers({
    filter: search,
    handleFilter: filterObjects,
  });
  const { mutateAsync: deleteUser } = useDeleteUsers();
  const { mutateAsync: patchStatusUsers } = usePatchStatusUsers();

  return (
    <>
      <div>
        <SmartTable
          options={{
            pagination: {
              max: 5,
            },
          }}
          data={tDataUsers}
          title={i18n("words.users")}
          excludes={["cpf", "cnpj", "category", "created_at", "updated_at"]}
          tHeads={{
            data: tHeadsUser.current,
            widths: [60, 166.5, 166.5, 166.5, 120, 166.5, 48],
          }}
        />
      </div>
      <div>
        <ModalFormUsers
          groups={groups}
          title={i18n("words.update_user")}
          isShowModal={modal.type === "DEFAULT_USER"}
          onModal={handleToggleModal}
        />
        <Notice
          headerTitle={i18n("words.attention")}
          title={i18n("manager_user.modal.user.title_already_desative")}
          text={i18n("manager_user.modal.user.text_already_desative")}
          onSubmit={() => {
            patchStatusUsers({
              id: modal.id as number,
            });
            handleToggleModal(false);
          }}
          isShowModal={modal.type === "DESATIVE_USER"}
          onModal={handleToggleModal}
        />
        <Notice
          headerTitle={i18n("words.attention")}
          title={i18n("manager_user.modal.user.title_already_active")}
          text={i18n("manager_user.modal.user.text_already_active")}
          onSubmit={() => {
            patchStatusUsers({
              id: modal.id as number,
            });
            handleToggleModal(false);
          }}
          isShowModal={modal.type === "ACTIVE_USER"}
          onModal={handleToggleModal}
        />
        <Notice
          headerTitle={i18n("words.attention")}
          title={i18n("manager_user.modal.user.title_already_exclude")}
          text={i18n("manager_user.modal.user.text_already_exclude")}
          onSubmit={() => {
            deleteUser({
              id: modal.id as number,
            });
            handleToggleModal(false);
          }}
          isShowModal={modal.type === "DELETE_USER"}
          onModal={handleToggleModal}
        />
      </div>
    </>
  );
}
