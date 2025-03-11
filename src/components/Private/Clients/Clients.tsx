import { useClients } from "./hooks/useClients";
import { MOCK_USERS } from "../../../data/users/__mocks__";
import i18n from "@configs/i18n";
import { Notice } from "@components/shared/others/Notice";
import { Selector } from "@components/shared/layouts/Seletor";
import { ModalFormCategories } from "./Modals/Categories";
import { useModalContext } from "@contexts/Modal";
import { ModalClientsOperationType, ClientsStructProps } from "./type";
import { ClientSharedModal } from "./Modals/ClientShared";
import { ClientCreateModal } from "./Modals/Clients";
import SelectorProvider from "@components/shared/layouts/Seletor/contexts";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { ClientCategoriesModal } from "./Modals/ClientCategories";
import { useClientsData } from "./hooks/useClientsData";

export function Clients({ search, filterObjects }: ClientsStructProps) {
  const { tDataClients, tHeadsClient, selectors, setSelectors } = useClients({
    data: MOCK_USERS,
    filter: search,
    handleFilter: filterObjects,
  });
  const { categories } = useClientsData();
  const { handleToggleModal, modal } =
    useModalContext<ModalClientsOperationType>();

  return (
    <>
      <div>
        <SelectorProvider selectors={selectors} setSelectors={setSelectors}>
          <SmartTable
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
                <Selector
                  value={"all"}
                  label={i18n(`words.select_all`)}
                  textSize="text-[0px] md:text-lg"
                />
              ),
              filters: {
                tag: {
                  key: "category",
                },
              },
            }}
            data={tDataClients}
            title={i18n("words.clients")}
            excludes={["created_at", "updated_at"]}
            tHeads={{
              data: tHeadsClient.current,
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
          categories={categories}
        />
        <Notice
          headerTitle={i18n("words.attention")}
          title={i18n("clients.modal.user.title_already_exclude")}
          text={i18n("clients.modal.user.text_already_exclude")}
          onSubmit={() => ""}
          isShowModal={modal.type === "DELETE"}
          onModal={handleToggleModal}
        />
        <ClientSharedModal
          isShowModal={modal.type === "SHARED"}
          onModal={handleToggleModal}
          title={i18n("words.data_shared")}
        />
        <ClientCategoriesModal
          isShowModal={modal.type === "CHANGE_CATEGORY"}
          onModal={handleToggleModal}
          title={i18n("words.category_alter")}
        />
        <ClientCreateModal
          isShowModal={modal.type === "CLIENT"}
          onModal={handleToggleModal}
          title={i18n("words.new_user")}
          categories={categories ?? []}
        />
      </div>
    </>
  );
}
