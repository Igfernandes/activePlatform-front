import { UseFormReturn } from "react-hook-form";
import { ServicesShape } from "../../../../../types/Services";
import { ServicesPayload } from "../Schemas";

type Props = {
  formMethods: UseFormReturn<ServicesPayload>;
};

export function useStateFields({ formMethods }: Props) {
  const { setValue, resetField } = formMethods;

  const handleCleanForm = () => {
    resetField("description");
    resetField("name");
    setValue("disabledLimitVacancies", "Não");
    setValue("disabledLimitVacancies", "Não");
    resetField("stock");
    resetField("photo");
  };

  const handleUpdateForm = (service: ServicesShape) => {
    setValue("name", service.name);
    setValue("description", service.description ?? "");
    setValue("alerts", service.alerts ?? "");
    setValue("status", service.status);
    setValue("address", service.address);
    setValue("expired_at", service.expired_at);
    setValue("realized_at", service.realized_at);
    setValue("stock", String(service.stock));
    setValue("gratuity", String(service.gratuity));
  };

  return {
    handleCleanForm,
    handleUpdateForm,
  };
}
