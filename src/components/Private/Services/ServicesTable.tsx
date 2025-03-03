import i18n from "@configs/i18n";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { MOCK_SERVICES } from "../../../data/services";
import { ModalServicesOperationType, ServicesProps } from "./type";
import { useServices } from "./hooks/useServices";
import { Notice } from "@components/shared/others/Notice";
import { useModalContext } from "@contexts/Modal";

export function ServicesTable({ search, filterObjects }: ServicesProps) {
  const { tDataServices, tHeadsServices } = useServices({
    data: MOCK_SERVICES,
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
              max: 2,
            },
            filters: {
              tag: {
                key: "status",
              },
            },
          }}
          data={tDataServices}
          title={i18n("words.my_services")}
          excludes={["updated_at"]}
          tHeads={{
            data: tHeadsServices.current,
            widths: [60, 200, 120, 200, 100, 100, 48],
          }}
        />
      </div>
      <Notice
        headerTitle={i18n("words.attention")}
        title={i18n("services.modal.title_already_exclude")}
        text={i18n("services.modal.text_already_exclude")}
        onSubmit={() => ""}
        isShowModal={modal.type === "DELETE"}
        onModal={handleToggleModal}
      />
    </>
  );
}
