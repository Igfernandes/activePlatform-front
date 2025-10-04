import i18n from "@configs/i18n";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { useEvents } from "./hooks/useEvents";
import { Notice } from "@components/shared/others/Notice";
import { useModalContext } from "@contexts/Modal";
import { EventsProps, ModalEventsOperationType } from "../type";

export function EventsTable({ search, filterObjects }: EventsProps) {
  const { tData, tHeads, handleDelete } = useEvents({
    filter: search,
    handleFilter: filterObjects,
  });
  const { handleToggleModal, modal } =
    useModalContext<ModalEventsOperationType>();

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
          data={tData}
          title={i18n("Words.my_events")}
          excludes={["updated_at"]}
          tHeads={{
            data: tHeads.current,
            widths: [60, 300, 70, 70, 100, 48],
          }}
        />
      </div>
      <Notice
        headerTitle={i18n("Words.attention")}
        title={i18n("Screens.events.modal.title_already_exclude")}
        text={i18n("Screens.events.modal.text_already_exclude")}
        onSubmit={handleDelete}
        isShowModal={modal.type === "DELETE"}
        onModal={handleToggleModal}
      />
    </>
  );
}
