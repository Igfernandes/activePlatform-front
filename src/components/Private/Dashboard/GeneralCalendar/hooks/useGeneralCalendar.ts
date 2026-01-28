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
  const { data: rows } = useGetSchedules();

  const birthdate = useMemo(() => {
    return (rows ?? []).map((schedule: ScheduleShape) => {
      const birthdate = moment(schedule.date);
      const thisYear = moment().year();
      const date = birthdate.year(thisYear);

      return {
        title: i18n("Words.see_list") + " 🎉🎂",
        start: date.toDate(),
        end: date.toDate(),
        allDay: true,
        resource: schedule.date ?? "",
      };
    });
  }, [rows]);

  const servicesDates = useMemo(
    () =>
      (services ?? [])
        .filter((service) => service.realized_at)
        .map((service) => {
          const serviceDate = moment(service.realized_at);
          const thisYear = moment().year();
          const date = serviceDate.year(thisYear);

          return {
            title: i18n("Words.inscriptions") + "🎉",
            start: date.toDate(),
            end: date.toDate(),
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
          const thisYear = moment().year();
          const date = chargeDate.year(thisYear);

          return {
            title: i18n("Words.charge") + "🎉",
            start: date.toDate(),
            end: date.toDate(),
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
  };
}
