import i18n from "@configs/i18n";
import useGetSchedules from "@services/Schedule/Get/useGet";
import { ChargeShape } from "@type/Charges";
import { ScheduleShape } from "@type/Schedule";
import { ServicesShape } from "@type/Services";
import moment from "moment";
import { useMemo } from "react";

type Props = {
  services?: ServicesShape[];
  charges?: ChargeShape[];
};

export function useGeneralCalendar({ services, charges = [] }: Props) {
  const { data: schedules } = useGetSchedules();

  const birthdate = useMemo(() => {
    return (schedules ?? []).map((schedule: ScheduleShape) => {
      const birthdate = moment(schedule.date);

      return {
        title: i18n("Words.birthday") + " 🎂",
        start: birthdate.toDate(),
        end: birthdate.toDate(),
        allDay: true,
        resource: schedule.date ?? "",
      };
    });
  }, [schedules]);

  const servicesDates = useMemo(
    () =>
      (services ?? [])
        .filter((service) => service.realized_at)
        .map((service) => {
          const serviceDate = moment(service.realized_at);

          return {
            title: i18n("Words.inscriptions") + " 📋",
            start: serviceDate.toDate(),
            end: serviceDate.toDate(),
            allDay: true,
            resource: service.realized_at ?? "",
          };
        }),
    [services],
  );

  const chargesDates = useMemo(
    () =>
      charges
        .filter((charge) => charge.expired_days)
        .map((charge) => {
          const chargeDate = moment(charge.created_at).add(
            charge.expired_days,
            "days",
          );

          return {
            title: i18n("Words.charge") + " 🎉",
            start: chargeDate.toDate(),
            end: chargeDate.toDate(),
            allDay: true,
            resource: String(charge.expired_days) ?? "",
          };
        }),
    [charges],
  );

  return {
    birthdate,
    servicesDates,
    chargesDates,
    schedules,
  };
}
