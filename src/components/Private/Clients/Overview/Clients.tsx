import { useClients } from "./hooks/useClients";
import i18n from "@configs/i18n";
import { Notice } from "@components/shared/others/Notice";
import { Selector } from "@components/shared/layouts/Seletor";
import { ModalFormCategories } from "./Modals/Categories";
import { useModalContext } from "@contexts/Modal";
import { ModalClientsOperationType, ClientsStructProps } from "../type";
import { ClientSharedModal } from "./Modals/ClientShared";
import { ClientCreateModal } from "./Modals/Clients";
import SelectorProvider from "@components/shared/layouts/Seletor/contexts";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { ClientCategoriesModal } from "./Modals/ClientCategories";
export function Clients({ search, filterObjects }: ClientsStructProps) {
  const {
    tDataClients,
    tHeadsClient,
    selectors,
    setSelectors,
    categories,
    handleDeleteClient,
    getSelectedClientsName,
    isLoadingClientDelete,
  } = useClients({
    filter: search,
    handleFilter: filterObjects,
  });
  const { handleToggleModal, modal } =
    useModalContext<ModalClientsOperationType>();

  return (
    <>
      <div>
        <SelectorProvider selectors={selectors} setSelectors={setSelectors}>
          <SmartTable
            options={{
              pagination: {
                max: 6,
              },
              actions: [
                {
                  handle: () => handleToggleModal("SHARED"),
                  text: i18n("Texts.data_shared"),
                },
                {
                  handle: () => handleToggleModal("CHANGE_CATEGORY"),
                  text: i18n("Texts.category_alter"),
                },
                {
                  handle: () =>
                    handleToggleModal(
                      "DELETE",
                      getSelectedClientsName(selectors)
                    ),
                  text: i18n("Words.exclude"),
                },
              ],
              buttons: (
                <Selector
                  value={"all"}
                  label={i18n(`Words.select_all`)}
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
            title={i18n("Words.clients")}
            excludes={["created_at", "updated_at"]}
            tHeads={{
              data: tHeadsClient.current,
              widths: [60, 250, 70, 200, 100, 48],
            }}
          />
        </SelectorProvider>
      </div>

      <div>
        <ModalFormCategories
          title={i18n("Words.category")}
          isShowModal={modal.type === "CATEGORY"}
          onModal={handleToggleModal}
          categories={categories}
        />
        <Notice
          headerTitle={i18n("Words.attention")}
          title={i18n("Screens.dashboard.clients.client.title_already_exclude")}
          text={i18n("Screens.dashboard.clients.client.text_already_exclude")}
          onSubmit={handleDeleteClient}
          isShowModal={modal.type === "DELETE"}
          onModal={handleToggleModal}
          isLoading={isLoadingClientDelete}
        />
        <ClientSharedModal
          isShowModal={modal.type === "SHARED"}
          onModal={handleToggleModal}
          title={i18n("Texts.data_shared")}
        />
        <ClientCategoriesModal
          isShowModal={modal.type === "CHANGE_CATEGORY"}
          onModal={handleToggleModal}
          title={i18n("Words.category_alter")}
          categories={categories}
          selectors={selectors}
        />
        <ClientCreateModal
          isShowModal={modal.type === "CLIENT"}
          onModal={handleToggleModal}
          title={i18n("Words.new_client")}
          categories={categories ?? []}
        />
      </div>
    </>
  );
}
