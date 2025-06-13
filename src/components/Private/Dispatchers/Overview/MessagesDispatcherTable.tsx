import i18n from "@configs/i18n";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import {
  ModalMessagesDispatcherOperationType,
  MessagesDispatcherProps,
} from "./type";
import { Notice } from "@components/shared/others/Notice";
import { useModalContext } from "@contexts/Modal";
import { useMessagesDispatcher } from "./hooks/useMessagesDispatcher";

export function MessagesDispatcherTable({
  search,
  filterObjects,
}: MessagesDispatcherProps) {
  const {
    tDatMessagesDispatcher,
    tHeadsServices,
    handleDeleteMessageDispatcher,
    isLoadingDeleteDispatcher,
  } = useMessagesDispatcher({
    filter: search,
    handleFilter: filterObjects,
  });
  const { handleToggleModal, modal } =
    useModalContext<ModalMessagesDispatcherOperationType>();

  return (
    <>
      <div>
        <SmartTable
          options={{
            pagination: {
              max: 10,
            },
            filters: {
              tag: {
                key: "status",
              },
            },
          }}
          data={tDatMessagesDispatcher}
          title={i18n("Words.my_shipments")}
          excludes={["updated_at"]}
          tHeads={{
            data: tHeadsServices.current,
            widths: [60, 250, 90, 70, 100, 48],
          }}
        />
      </div>
      <Notice
        headerTitle={i18n("Words.attention")}
        title={i18n("Screens.dashboard.dispatchers.title_already_exclude")}
        text={i18n("Screens.dashboard.dispatchers.text_already_exclude")}
        onSubmit={handleDeleteMessageDispatcher}
        isShowModal={modal.type === "DELETE"}
        isLoading={isLoadingDeleteDispatcher}
        onModal={handleToggleModal}
      />
    </>
  );
}
