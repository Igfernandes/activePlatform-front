import React from "react";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { ClientShape } from "@type/Clients";
import i18n from "@configs/i18n";
import { Calendar } from "../Calendar";
import { helperRemoveDuplicatesInArrayOfObjects } from "@helpers/array";
import { ModalBirthday } from "./Modal";
import { useModalContext } from "@contexts/Modal";

interface BirthdayCalendarProps {
  clients: ClientShape[];
}

export const BirthdayCalendar: React.FC<BirthdayCalendarProps> = ({
  clients,
}) => {
  const clientsBirthdays = helperRemoveDuplicatesInArrayOfObjects(
    clients,
    "birthday"
  );
  const { handleToggleModal } = useModalContext();

  return (
    <>
      <div className="relative z-0 h-[75vh] p-4 bg-white rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">{i18n("Words.birthdays")}</h2>
        <Calendar
          events={clientsBirthdays
            .filter((client) => client.birthdate)
            .map((client) => {
              const birth = moment(client.birthdate);
              const thisYear = moment().year();
              const date = birth.year(thisYear);

              return {
                title: i18n("Words.see_list") + " 🎉",
                start: date.toDate(),
                end: date.toDate(),
                allDay: true,
                resource: String(client.id),
              };
            })}
          style={{ height: "60vh" }}
          views={["month"]}
          onSelectEvent={(event) => {
            handleToggleModal("BIRTHDAY_CLIENTS", event.resource);
          }}
        />
      </div>
      <ModalBirthday clients={clients} />
    </>
  );
};
