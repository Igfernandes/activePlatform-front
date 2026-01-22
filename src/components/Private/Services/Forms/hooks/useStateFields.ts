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
    resetField("photo");
  };

  const handleUpdateForm = (service: ServicesShape) => {
    setValue("name", service.name);
    setValue("description", service.description ?? "");
    setValue("alerts", service.alerts ?? "");
    setValue("photo", service.photo ?? "");
    setValue("status", service.status);
    setValue("snippet", service.snippet ?? "");
    setValue("address", service.address);
    setValue("expired_at", service.expired_at);
    setValue("realized_at", service.realized_at);
  };

  return {
    handleCleanForm,
    handleUpdateForm,
  };
}
