import { UseFormReturn } from "react-hook-form";
import { EventsPayload } from "../Schemas";
import { EventShape } from "@type/Events";

type Props = {
  formMethods: UseFormReturn<EventsPayload>;
};

export function useStateFields({ formMethods }: Props) {
  const { setValue, resetField } = formMethods;

  const handleCleanForm = () => {
    resetField("description");
    resetField("name");
    setValue("disabledLimitVacancies", "Não");
    setValue("disabledLimitVacancies", "Não");
    resetField("stock");
    resetField("banner");
  };

  const handleUpdateForm = (event: EventShape) => {
    setValue("name", event.name);
    setValue("description", event.description ?? "");
    setValue("alerts", event.alerts ?? "");
    setValue("status", event.status);
    setValue("address", event.address);
    setValue(
      "confirmation_expired_time",
      String(event.confirmation_expired_time)
    );
    setValue("form_id", String(event.form_id ?? ""));
    setValue("completed_at", event.completed_at);
    setValue("realized_at", event.realized_at);
    setValue("stock", String(event.stock));
    setValue("disabledLimitVacancies", event.stock ? "Não" : "Sim");
  };

  return {
    handleCleanForm,
    handleUpdateForm,
  };
}
