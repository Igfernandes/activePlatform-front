import { useFormRules } from "@hooks/Forms/useFormRules";
import { ServicesModalSchema, ServicesPayload } from "../schemas";
import usePostCreateService from "../../../../services/Services/Post/usePostCreateClient";
import { useState } from "react";
import { useRouter } from "next/router";
import { privateRoutes } from "@configs/routes/Web/navigation";

export function useServicesForm() {
  const [isKeepCreating, setIsKeepCreating] = useState<boolean>(false);
  const { formMethods, register, handleSubmit, errors } =
    useFormRules<ServicesPayload>({
      schema: ServicesModalSchema,
      defaultValues: {
        type: "APPELLANT",
        privacy: "PRIVATE",
        disabledReservationVacancies: "Não",
        disabledLimitVacancies: "Não",
      },
    });
  const { mutateAsync: postService } = usePostCreateService();
  const router = useRouter();
  const { services } = privateRoutes;

  const handleCleanForm = () => {
    const { setValue, resetField } = formMethods;

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

  const submit = (payload: ServicesPayload) => {
    postService({
      name: payload.name,
      photo: payload.photo,
      privacy: payload.privacy,
      reservations: parseInt(payload.reservations),
      stock: parseInt(payload.stock),
      status: payload.status,
      type: payload.type,
      description: payload.description,
    }).then(() => {
      if (!isKeepCreating) router.push(services);
    });
  };

  return {
    formMethods,
    register,
    submit,
    handleSubmit,
    handleCleanForm,
    errors,
    setIsKeepCreating,
  };
}
