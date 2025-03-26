import { UseFormReturn } from "react-hook-form";
import { ServicesShape } from "../../../../types/Services";
import { ServicesPayload } from "../Schemas";

type Props = {
  formMethods: UseFormReturn<ServicesPayload>;
};

export function useStateFields({ formMethods }: Props) {
  const { setValue, resetField } = formMethods;

  const handleCleanForm = () => {
    resetField("description");
    resetField("name");
    setValue("type", "APPELLANT");
    setValue("privacy", "PRIVATE");
    setValue("disabledLimitVacancies", "Não");
    setValue("disabledLimitVacancies", "Não");
    resetField("stock");
    resetField("reservations");
    resetField("photo");
  };

  const handleUpdateForm = (service: ServicesShape) => {
    setValue("description", service.description);
    setValue("name", service.name);
    setValue("type", service.type);
    setValue("privacy", service.privacy);
    setValue("disabledLimitVacancies", service.stock > 0 ? "Sim" : "Não");
    setValue(
      "disabledLimitVacancies",
      service.reservations > 0 ? "Sim" : "Não"
    );
    setValue("stock", String(service.stock));
    setValue("reservations", String(service.reservations));
  };
  return {
    handleCleanForm,
    handleUpdateForm,
  };
}
