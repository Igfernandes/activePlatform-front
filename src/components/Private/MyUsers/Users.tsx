import { Table } from "@components/shared/layouts/Table";
import { useUsers } from "./hooks/useUsers";
import { MOCK_USERS } from "../../../data/users/__mocks__";
import i18n from "@configs/i18n";
import { Notice } from "@components/shared/others/Notice";
import { Selector } from "@components/shared/layouts/Seletor";
import { ModalFormCategories } from "./Modals/Categories";
import { useModalContext } from "@contexts/Modal";
import { ModalUsersOperationType, UsersStructProps } from "./type";
import { UserSharedModal } from "./Modals/UserShared";
import { UserCategoriesModal } from "./Modals/UserCategories";
import { UserCreateModal } from "./Modals/Users";
import SelectorProvider from "@components/shared/layouts/Seletor/contexts";

export function Users({ search, filterObjects }: UsersStructProps) {
  const { tDataUsers, tHeadsUser, selectors, setSelectors } = useUsers({
    data: MOCK_USERS,
    filter: search,
    handleFilter: filterObjects,
  });
  const { handleToggleModal, modal } =
    useModalContext<ModalUsersOperationType>();

  return (
    <>
      <div>
        <SelectorProvider selectors={selectors} setSelectors={setSelectors}>
          <Table
            options={{
              pagination: {
                max: 4,
              },
              actions: [
                {
                  handle: () => handleToggleModal("SHARED"),
                  text: i18n("words.data_shared"),
                },
                {
                  handle: () => handleToggleModal("CHANGE_CATEGORY"),
                  text: i18n("words.category_alter"),
                },
                {
                  handle: () => handleToggleModal("DELETE"),
                  text: i18n("words.exclude"),
                },
              ],
              buttons: (
                <Selector value={"all"} label={i18n(`words.select_all`)} textSize="text-[0px] md:text-lg" />
              ),
              filters: {
                tag: {
                  key: "category",
                },
              },
            }}
            data={tDataUsers}
            title={i18n("words.users")}
            excludes={["created_at", "updated_at"]}
            tHeads={{
              data: tHeadsUser.current,
              widths: [60, 166.5, 120, 166.5, 166.5, 166.5, 48],
            }}
          />
        </SelectorProvider>
      </div>

      <div>
        <ModalFormCategories
          title={i18n("words.category")}
          isShowModal={modal.type === "CATEGORY"}
          onModal={handleToggleModal}
        />
        <Notice
          headerTitle={i18n("words.attention")}
          title={i18n("my_users.modal.user.title_already_exclude")}
          text={i18n("my_users.modal.user.text_already_exclude")}
          onSubmit={() => ""}
          isShowModal={modal.type === "DELETE"}
          onModal={handleToggleModal}
        />
        <UserSharedModal
          isShowModal={modal.type === "SHARED"}
          onModal={handleToggleModal}
          title={i18n("words.data_shared")}
        />
        <UserCategoriesModal
          isShowModal={modal.type === "CHANGE_CATEGORY"}
          onModal={handleToggleModal}
          title={i18n("words.category_alter")}
        />
        <UserCreateModal
          isShowModal={modal.type === "USER"}
          onModal={handleToggleModal}
          title={i18n("words.new_user")}
        />
      </div>
    </>
  );
}
