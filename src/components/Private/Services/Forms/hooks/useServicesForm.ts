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
    });
  const { mutateAsync: postService, isPending: isLoadingPost } =
    usePostCreateService();
  const { mutateAsync: putService, isPending: isLoadingPut } = usePutService();
  const router = useRouter();
  const { services } = privateRoutes;

  const submit = (formData: ServicesPayload) => {
    const payload = {
      ...formData,
      address: formData.address ?? "",
      realized_at: formData.realized_at ?? "",
      expired_at: formData.expired_at ?? "",
      description: formData.description ?? "",
    };

    if (!service) {
      postService(payload).then(() => {
        router.push(services);
      });
    } else {
      putService({
        ...payload,
        photo: formData.photo ?? service?.photo,
        id: service.id,
      });
    }
  };

  return {
    formMethods,
    register,
    submit,
    handleSubmit,
    isLoading: isLoadingPost || isLoadingPut,
    errors,
  };
}
