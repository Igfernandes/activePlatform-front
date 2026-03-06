import { useClients } from "./hooks/useClients";
import { Notice } from "@components/shared/others/Notice";
import { Selector } from "@components/shared/layouts/Selector";
import { ModalFormCategories } from "./Modals/Categories";
import { useModalContext } from "@contexts/Modal";
import { ModalClientsOperationType, ClientsStructProps } from "../type";
import { ClientCreateModal } from "./Modals/Clients";
import SelectorProvider from "@components/shared/layouts/Selector/contexts";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { ClientCategoriesModal } from "./Modals/ClientCategories";
import { Shared } from "@components/shared/others/Shared";
import { PERMISSIONS } from "@constants/permissions";
import { useUserNavigationContext } from "@contexts/UserNavigation";
import { ImportModal } from "./Modals/Import";
import { useI18n } from "@contexts/I18n";

export function Clients({ search, filterObjects, status }: ClientsStructProps) {
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
    status,
  });
  const { t } = useI18n()
  const { handleToggleModal, modal } =
    useModalContext<ModalClientsOperationType>();
  const { hasPermission } = useUserNavigationContext();

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
                  handle: () => handleToggleModal("CHANGE_CATEGORY"),
                  text: t("Texts.category_alter"),
                  permissions: [PERMISSIONS.clients.update],
                },
                {
                  handle: () =>
                    handleToggleModal(
                      "DELETE",
                      getSelectedClientsName(selectors)
                    ),
                  text: t("Words.exclude"),
                  permissions: [PERMISSIONS.clients.delete],
                },
              ].filter((action) => hasPermission(action.permissions)),
              buttons: (
                <>
                  <Selector
                    value={"all"}
                    label={t(`Words.select_all`)}
                    textSize="text-[0px] md:text-base"
                  />
                  <Shared
                    entity="CLIENTS"
                    in_ids={selectors
                      .filter((selector) => !!selector.isChecked)
                      .map((selector) => +selector.value)}
                  />
                </>
              ),
              filters: {
                tag: {
                  key: "category",
                },
              },
            }}
            data={tDataClients}
            title={t("Words.clients")}
            excludes={["created_at", "updated_at"]}
            tHeads={{
              data: tHeadsClient,
              widths: [60, 250, 70, 200, 100, 48],
            }}
          />
        </SelectorProvider>
      </div>

      <div>
        <ModalFormCategories
          title={t("Words.category")}
          isShowModal={modal.type === "CATEGORY"}
          onModal={handleToggleModal}
          categories={categories}
        />
        <Notice
          headerTitle={t("Words.attention")}
          title={t("Screens.dashboard.clients.client.title_already_exclude")}
          text={t("Screens.dashboard.clients.client.text_already_exclude")}
          onSubmit={handleDeleteClient}
          isShowModal={modal.type === "DELETE"}
          onModal={handleToggleModal}
          isLoading={isLoadingClientDelete}
        />
        <ClientCategoriesModal
          isShowModal={modal.type === "CHANGE_CATEGORY"}
          onModal={handleToggleModal}
          title={t("Texts.category_alter")}
          categories={categories}
          selectors={selectors}
        />
        <ClientCreateModal
          isShowModal={modal.type === "CLIENT"}
          onModal={handleToggleModal}
          title={t("Words.new_client")}
          categories={categories ?? []}
        />
        <ImportModal
          isShowModal={modal.type === "IMPORT"}
          onModal={handleToggleModal}
        />
      </div>
    </>
  );
}
