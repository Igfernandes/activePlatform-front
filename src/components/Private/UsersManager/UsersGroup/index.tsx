import { ModalFormUsersGroup } from "../Modals/UsersGroup";
import i18n from "@configs/i18n";
import { useUsersGroup } from "./hooks/useUsersGroup";
import { Notice } from "@components/shared/others/Notice";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { UsersGroupShape } from "../../../../types/Users/UsersGroup";
import { useModalContext } from "@contexts/Modal";
import { ModalUserOperationType } from "../type";
import useDeleteGroup from "../../../../services/Users/Groups/Delete/useDeleteGroup";
import useDPatchGroup from "../../../../services/Users/Groups/Patch/usePatchGroup";

type Props = {
  filterObjects: <ObjectShape extends Record<string, unknown>>(
    object: ObjectShape
  ) => boolean;
  search: string;
  groups: UsersGroupShape[];
};

export function UsersGroup({ search, filterObjects, groups }: Props) {
  const { tDataUsersGroup, tHeadUsersGroup } = useUsersGroup({
    data: groups,
    filter: search,
    handleFilter: filterObjects,
  });
  const { mutateAsync: deleteUsersGroup } = useDeleteGroup();
  const { handleToggleModal, modal } =
    useModalContext<ModalUserOperationType>();
  const { mutateAsync: patchUsersGroup } = useDPatchGroup();

  return (
    <>
      <div className="mb-6">
        <SmartTable
          options={{
            pagination: {
              max: 5,
            },
            sort: {
              type: "ASC",
              reference: "name",
            },
          }}
          data={tDataUsersGroup}
          excludes={["updated_at"]}
          title={i18n("words.users_group")}
          tHeads={{
            data: tHeadUsersGroup.current,
            widths: [60, 291, 120, 100, 291, 48],
          }}
        />
      </div>
      <div>
        <ModalFormUsersGroup
          isShowModal={modal.type === "DEFAULT_GROUP"}
          onModal={handleToggleModal}
          groups={groups}
        />
        <Notice
          headerTitle={i18n("words.attention")}
          title={i18n("manager_user.modal.group.title_already_desative")}
          text={i18n("manager_user.modal.group.text_already_desative")}
          onSubmit={() =>
            patchUsersGroup({
              id: modal.id as number,
            }).then(() => handleToggleModal(false))
          }
          isShowModal={modal.type === "DESATIVE_GROUP"}
          onModal={handleToggleModal}
        />
        <Notice
          headerTitle={i18n("words.attention")}
          title={i18n("manager_user.modal.group.title_already_active")}
          text={i18n("manager_user.modal.group.text_already_active")}
          onSubmit={() =>
            patchUsersGroup({
              id: modal.id as number,
            }).then(() => handleToggleModal(false))
          }
          isShowModal={modal.type === "ACTIVE_GROUP"}
          onModal={handleToggleModal}
        />
        <Notice
          headerTitle={i18n("words.attention")}
          title={i18n("manager_user.modal.group.title_already_exclude")}
          text={i18n("manager_user.modal.group.text_already_exclude")}
          onSubmit={() =>
            deleteUsersGroup({
              id: modal.id as number,
            }).then(() => handleToggleModal(false))
          }
          isShowModal={modal.type === "DELETE_GROUP"}
          onModal={handleToggleModal}
        />
      </div>
    </>
  );
}
