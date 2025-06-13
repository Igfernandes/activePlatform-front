import { useFormRules } from "@hooks/Forms/useFormRules";
import { FormsPayload, formsSchema } from "../schema";
import { useMessagesDispatcherStep } from "./useMessagesDispatcherStep";
import usePostMessagesDispatcher from "@services/Dispatchers/Post/usePost";
import { ClientShape } from "@type/Clients";
import {
  TypesPeriodsMessagesDispatcher,
  TypesPlatformsMessagesDispatchers,
  TypesWeekdaysMessagesDispatcher,
} from "@type/MessagesDispatcherShape";
import { useRouter } from "next/router";
import { privateRoutes } from "@configs/routes/Web/navigation";

type Props = {
  clientsSelected: ClientShape[];
};

export function useMessagesDispatcherForms({ clientsSelected }: Props) {
  const { formMethods, handleSubmit } = useFormRules<FormsPayload>({
    schema: formsSchema,
    defaultValues: {
      all_clients: false,
    },
  });
  const router = useRouter();
  const { handleNextStep, handlePrevStep, stepActive, isLastStep } =
    useMessagesDispatcherStep({
      formMethods,
    });
  const {
    mutateAsync: postMessagesDispatcher,
    isPending: isLoadingPostNotification,
  } = usePostMessagesDispatcher();

  const submit = ({
    service_id,
    charge_id,
    platforms,
    period,
    weekday,
    ...payload
  }: FormsPayload) => {
    postMessagesDispatcher({
      ...payload,
      clients: clientsSelected.map((client) => client.id),
      service_id: service_id ? +service_id : undefined,
      charge_id: charge_id ? +charge_id : undefined,
      platforms: platforms.filter(
        (platform) => typeof platform !== "boolean"
      ) as TypesPlatformsMessagesDispatchers,
      period: period as TypesPeriodsMessagesDispatcher,
      weekday: (weekday ?? []).filter(
        (platform) => typeof platform !== "boolean"
      ) as TypesWeekdaysMessagesDispatcher,
    })
    .then(() => router.push(privateRoutes.dispatcher));
  };

  return {
    formMethods,
    handleNextStep,
    handlePrevStep,
    stepActive,
    isLastStep,
    handleSubmit,
    submit,
    isLoading: isLoadingPostNotification,
  };
}
