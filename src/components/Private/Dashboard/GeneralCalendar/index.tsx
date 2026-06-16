import { Calendar } from "@components/shared/others/Calendar";
import i18n from "@configs/i18n";
import { useModalContext } from "@contexts/Modal";
import { ManagerEntitiesProps } from "../type";
import { useGeneralCalendar } from "./hooks/useGeneralCalendar";
import { ModalScheduled } from "./Modal";
import { Skeleton } from "@components/utilities/Skeleton";

export function GeneralCalendar({
  charges,
  services,
}: ManagerEntitiesProps) {
  const { birthdate, schedules, chargesDates, servicesDates, datesDuplicatesRemove } = useGeneralCalendar({ services, charges });
  const { handleToggleModal } = useModalContext();

  return (
    <Skeleton
      settings={{
        type: "board",
        amount: 1,
      }}
      isLoading={!schedules || !services || !charges}
    >
      <div className="relative z-0 h-[75vh] p-4 bg-white rounded-xl shadow mt-4">
        <h2 className="text-2xl font-bold mb-4">{i18n("Words.calendar")}</h2>
        <Calendar
          events={datesDuplicatesRemove(
            [
              ...birthdate,
              ...servicesDates,
              ...chargesDates,
            ]
          )}
          style={{ height: "60vh" }}
          views={["month"]}
          onSelectEvent={(event) => {
            handleToggleModal("SCHEDULED", event.resource);
          }}
        />
      </div>
      <ModalScheduled schedules={schedules} charges={charges} services={services} />
    </Skeleton>
  );
}
