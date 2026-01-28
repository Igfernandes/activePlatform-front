import { Modal } from "@components/shared/layouts/Modal";
import i18n from "@configs/i18n";
import { useModalContext } from "@contexts/Modal";
import { ManagerEntitiesProps } from "../../type";
import { ServiceFeedback } from "./ServiceFeedback";
import { ChargeFeedback } from "./ChargeFeedback";
import { ScheduleShape } from "@type/Schedule";
import { SchedulesFeedback } from "./SchedulesFeedback";

type Props = Omit<ManagerEntitiesProps, "users" | "forms" | "clients"> & {
  schedules?: Array<ScheduleShape>;
};

export function ModalScheduled({
  charges,
  schedules,
  services,
}: Props) {
  const { handleToggleModal, modal } = useModalContext();

  return (
    <Modal
      title={i18n("Words.month_events")}
      isShowModal={modal.type === "SCHEDULED"}
      handleModal={handleToggleModal}
    >
      <div className="list">
        <ul className="h-[40vh] min-w-[30vw] overflow-auto bg-tertiary p-2 rounded-md">
          <SchedulesFeedback date={String(modal.id)} schedules={schedules} />
          <ServiceFeedback date={String(modal.id)} services={services} />
          <ChargeFeedback date={String(modal.id)} charges={charges} />
        </ul>
      </div>
    </Modal>
  );
}
