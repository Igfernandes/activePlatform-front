import { useFormRules } from "@hooks/Forms/useFormRules";
import usePostCreateService from "../../../../../services/Services/Post/usePost";

import { useRouter } from "next/navigation";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { ServicesModalSchema, ServicesPayload } from "../Schemas";
import usePutService from "../../../../../services/Services/Put/usePut";
import { ServicesShape } from "../../../../../types/Services";

type Props = {
  service?: ServicesShape;
};

export function useServicesForm({ service }: Props) {
  const { formMethods, register, handleSubmit, errors } =
    useFormRules<ServicesPayload>({
      schema: ServicesModalSchema,
      defaultValues: {
        type: "APPELLANT",
        privacy: "PRIVATE",
        disabledReservationVacancies:
          (service?.reservations ?? 0) > 0 ? "Sim" : "Não",
        disabledLimitVacancies: (service?.stock ?? 0) > 0 ? "Sim" : "Não",
      },
    });
  const { mutateAsync: postService, isPending: isLoadingPost } =
    usePostCreateService();
  const { mutateAsync: putService, isPending: isLoadingPut } = usePutService();
  const router = useRouter();
  const { services } = privateRoutes;

  const submit = (formData: ServicesPayload) => {
    const payload = {
      ...formData,
      reservations:
        formData.disabledReservationVacancies == "Não"
          ? 0
          : parseInt(formData.reservations),
      stock:
        formData.disabledLimitVacancies == "Não" ? 0 : parseInt(formData.stock),
      address: formData.address ?? "",
      realized_at: formData.realized_at ?? "",
      expired_at: formData.expired_at ?? "",
    };

    if (!service) {
      postService(payload).then(() => {
        const hasContinueRegister = formMethods.getValues(
          "hasContinueRegister"
        );
        if (!hasContinueRegister) router.push(services);
      });
    } else {
      formMethods.setValue("stock", String(payload.stock));
      formMethods.setValue("reservations", String(payload.reservations));
      putService({
        ...payload,
        photo:
          Array.from(formData.photo).length > 0
            ? formData.photo
            : service?.photo,
        id: service.id,
      });
    }
  };

  return {
    formMethods,
    register,
    submit,
    handleSubmit,
    isLoading: isLoadingPost ?? isLoadingPut,
    errors,
  };
}
