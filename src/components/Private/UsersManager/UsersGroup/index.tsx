import { ModalFormUsersGroup } from "../Modals/UsersGroup";
import i18n from "@configs/i18n";
import { useUsersGroup } from "./hooks/useUsersGroup";
import { MOCK_USERS_GROUP } from "../../../../data/users/__mocks__/usersGroups";
import { Notice } from "@components/shared/others/Notice";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";

type Props = {
  filterObjects: <ObjectShape extends Record<string, unknown>>(
    object: ObjectShape
  ) => boolean;
  search: string;
};

export function UsersGroup({ search, filterObjects }: Props) {
  const {
    tDataUsersGroup,
    tHeadUsersGroup,
    handleToggleUsersGroupModal,
    usersGroupModal,
  } = useUsersGroup({
    data: MOCK_USERS_GROUP,
    filter: search,
    handleFilter: filterObjects,
  });

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
          isShowModal={usersGroupModal.type === "DEFAULT"}
          onModal={handleToggleUsersGroupModal}
        />
        <Notice
          headerTitle={i18n("words.attention")}
          title={i18n("manager_user.modal.group.title_already_desative")}
          text={i18n("manager_user.modal.group.text_already_desative")}
          onSubmit={() => ""}
          isShowModal={usersGroupModal.type === "DESATIVE"}
          onModal={handleToggleUsersGroupModal}
        />
        <Notice
          headerTitle={i18n("words.attention")}
          title={i18n("manager_user.modal.group.title_already_exclude")}
          text={i18n("manager_user.modal.group.text_already_exclude")}
          onSubmit={() => ""}
          isShowModal={usersGroupModal.type === "DELETE"}
          onModal={handleToggleUsersGroupModal}
        />
      </div>
    </>
  );
}
