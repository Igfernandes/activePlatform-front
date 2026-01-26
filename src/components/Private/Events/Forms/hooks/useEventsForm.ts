import { useFormRules } from "@hooks/Forms/useFormRules";

import { useRouter } from "next/navigation";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { EventsModalSchema, EventsPayload } from "../Schemas";
import { EventShape } from "@type/Events";
import usePutEvents from "@services/Events/Put/usePut";
import usePostEvent from "@services/Events/Post/usePost";
import useGetForms from "@services/CustomForms/Get/useGetForms";
import { useI18n } from "@contexts/I18n";
import { useEffect, useMemo } from "react";

type Props = {
  event?: EventShape;
};

export function useEventsForm({ event }: Props) {
  const { t } = useI18n();
  const schema = useMemo(() => EventsModalSchema(t), [t]);
  const { formMethods, register, handleSubmit, errors } =
    useFormRules<EventsPayload>({
      schema,
    });
  const { reset } = formMethods;
  const { data: forms } = useGetForms({
    status: "PUBLISHED",
  });
  const { mutateAsync: postEvent, isPending: isLoadingPost } = usePostEvent();
  const { mutateAsync: putEvent, isPending: isLoadingPut } = usePutEvents();
  const router = useRouter();
  const { events } = privateRoutes;

  const submit = (formData: EventsPayload) => {
    const payload = {
      ...formData,
      confirmation_expired_time: formData.confirmation_expired_time
        ? +formData.confirmation_expired_time
        : undefined,
    };

    if (!event) {
      postEvent(payload).then(() => {
        router.push(events);
      });
    } else {
      formMethods.setValue("stock", payload.stock);
      putEvent({
        ...payload,
        id: event.id,
      });
    }
  };

  useEffect(() => {
    if (!event) return;

    reset(event);
  }, [event, reset]);

  return {
    formMethods,
    register,
    submit,
    handleSubmit,
    isLoading: isLoadingPost || isLoadingPut,
    errors,
    forms,
  };
}
