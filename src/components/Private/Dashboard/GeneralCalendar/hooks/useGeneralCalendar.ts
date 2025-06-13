import i18n from "@configs/i18n";
import { ChargeShape } from "@type/Charges";
import { ClientShape } from "@type/Clients";
import { ServicesShape } from "@type/Services";
import moment from "moment";

export function useGeneralCalendar() {
  const getClientsBirthday = (clients: Array<ClientShape>) => {
    return clients
      .filter((client) => client.birthdate)
      .map((client) => {
        const birth = moment(client.birthdate);
        const thisYear = moment().year();
        const date = birth.year(thisYear);

        return {
          title: i18n("Words.see_list") + " 🎉🎂",
          start: date.toDate(),
          end: date.toDate(),
          allDay: true,
          resource: client.birthdate ?? "",
        };
      });
  };

  const getServices = (services: Array<ServicesShape>) => {
    return services
      .filter((service) => service.realized_at)
      .map((service) => {
        const serviceDate = moment(service.realized_at);
        const thisYear = moment().year();
        const date = serviceDate.year(thisYear);

        return {
          title: i18n("Words.event") + "🎉",
          start: date.toDate(),
          end: date.toDate(),
          allDay: true,
          resource: service.realized_at ?? "",
        };
      });
  };

  const getCharges = (charges: Array<ChargeShape>) => {
    return charges
      .filter((charge) => charge.expired_days)
      .map((charge) => {
        const chargeDate = moment(charge.created_at).add(
          charge.expired_days,
          "days"
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
      });
  };

  return {
    getClientsBirthday,
    getServices,
    getCharges,
  };
}
