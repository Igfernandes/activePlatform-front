import { useFormRules } from "@hooks/Forms/useFormRules";
import usePostCreateService from "../../../../services/Services/Post/usePostCreateService";
import { useState } from "react";
import { useRouter } from "next/router";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { ServicesModalSchema, ServicesPayload } from "../Schemas";
import usePutService from "../../../../services/Services/Put/usePostCreateClient";
import { ServicesShape } from "../../../../types/Services";

type Props = {
  service?: ServicesShape;
};

export function useServicesForm({ service }: Props) {
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
  const { mutateAsync: putService } = usePutService();
  const router = useRouter();
  const { services } = privateRoutes;

  const submit = (formData: ServicesPayload) => {
    const payload = {
      name: formData.name,
      photo: formData.photo,
      privacy: formData.privacy,
      reservations: parseInt(formData.reservations),
      stock: parseInt(formData.stock),
      status: formData.status,
      type: formData.type,
      description: formData.description,
    };

    if (!service) {
      postService(payload).then(() => {
        if (!isKeepCreating) router.push(services);
      });
    } else {
      putService({
        ...payload,
        id: service.id,
      });
    }
  };

  return {
    formMethods,
    register,
    submit,
    handleSubmit,
    errors,
    setIsKeepCreating,
  };
}
