import i18n from "@configs/i18n";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { ModalServicesOperationType, ServicesProps } from "../type";
import { useServices } from "./hooks/useServices";
import { Notice } from "@components/shared/others/Notice";
import { useModalContext } from "@contexts/Modal";

export function ServicesTable({ search, filterObjects }: ServicesProps) {
  const { tDataServices, tHeadsServices, handleDeleteService } = useServices({
    filter: search,
    handleFilter: filterObjects,
  });
  const { handleToggleModal, modal } =
    useModalContext<ModalServicesOperationType>();

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
          data={tDataServices}
          title={i18n("Words.my_services")}
          excludes={["updated_at"]}
          tHeads={{
            data: tHeadsServices.current,
            widths: [60, 300, 70, 70, 100, 48],
          }}
        />
      </div>
      <Notice
        headerTitle={i18n("Words.attention")}
        title={i18n("Screens.services.modal.title_already_exclude")}
        text={i18n("Screens.services.modal.text_already_exclude")}
        onSubmit={handleDeleteService}
        isShowModal={modal.type === "DELETE"}
        onModal={handleToggleModal}
      />
    </>
  );
}
