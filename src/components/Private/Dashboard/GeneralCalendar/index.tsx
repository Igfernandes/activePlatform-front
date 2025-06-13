import { Calendar } from "@components/shared/others/Calendar";
import i18n from "@configs/i18n";
import { useModalContext } from "@contexts/Modal";
import { ManagerEntitiesProps } from "../type";
import { useGeneralCalendar } from "./hooks/useGeneralCalendar";
import { ModalScheduled } from "./Modal";
import { helperRemoveDuplicatesInArrayOfObjects } from "@helpers/array";

export function GeneralCalendar({
  clients,
  charges,
  services,
}: ManagerEntitiesProps) {
  const { getClientsBirthday, getServices, getCharges } = useGeneralCalendar();
  const { handleToggleModal } = useModalContext();

  return (
    <>
      <div className="relative z-0 h-[75vh] p-4 bg-white rounded-xl shadow mt-4">
        <h2 className="text-2xl font-bold mb-4">{i18n("Words.calendar")}</h2>
        <Calendar
          events={helperRemoveDuplicatesInArrayOfObjects(
            [
              ...getClientsBirthday(clients ?? []),
              ...getServices(services ?? []),
              ...getCharges(charges ?? []),
            ],
            "resource"
          )}
          style={{ height: "60vh" }}
          views={["month"]}
          onSelectEvent={(event) => {
            handleToggleModal("SCHEDULED", event.resource);
          }}
        />
      </div>
      <ModalScheduled clients={clients} charges={charges} services={services} />
    </>
  );
}
