import { useFormRules } from "@hooks/Forms/useFormRules";

import { useRouter } from "next/navigation";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { EventsModalSchema, EventsPayload } from "../Schemas";
import { EventShape } from "@type/Events";
import usePutEvents from "@services/Events/Put/usePut";
import usePostEvent from "@services/Events/Post/usePost";
import useGetForms from "@services/CustomForms/Get/useGetForms";

type Props = {
  event?: EventShape;
};

export function useEventsForm({ event }: Props) {
  const { formMethods, register, handleSubmit, errors } =
    useFormRules<EventsPayload>({
      schema: EventsModalSchema,
      defaultValues: {
        disabledLimitVacancies: (event?.stock ?? 0) > 0 ? "Sim" : "Não",
      },
    });
  const { data: forms } = useGetForms();
  const { mutateAsync: postEvent, isPending: isLoadingPost } = usePostEvent();
  const { mutateAsync: putEvent, isPending: isLoadingPut } = usePutEvents();
  const router = useRouter();
  const { events } = privateRoutes;

  const submit = ({ form_id, ...formData }: EventsPayload) => {
    const payload = {
      ...formData,
      stock: parseInt(formData.stock),
      form_id: form_id ? parseInt(form_id) : undefined,
      address: formData.address ?? "",
      realized_at: formData.realized_at ?? "",
      completed_at: formData.completed_at ?? "",
      description: formData.description ?? "",
      confirmation_expired_time: formData.confirmation_expired_time
        ? +formData.confirmation_expired_time
        : undefined,
    };

    if (!event) {
      postEvent(payload).then(() => {
        router.push(events);
      });
    } else {
      formMethods.setValue("stock", String(payload.stock));
      putEvent({
        ...payload,
        banner:
          Array.from(formData.banner).length > 0
            ? formData.banner
            : event?.banner,
        id: event.id,
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
    forms
  };
}
