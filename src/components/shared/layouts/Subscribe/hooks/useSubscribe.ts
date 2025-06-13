import usePostSubscribeService from "@services/Notifications/Subscribe/usePost";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { SubscriptionShape } from "../type";
import { SubscribePayload, subscribeSchema } from "../schema";
import { useFormRules } from "@hooks/Forms/useFormRules";
import { handleStore } from "../handles/Store";
import { handlePermissions } from "../handles/Permissions";
import { handleSubscribe } from "../handles/Subscribe";
import { useCookies } from "@hooks/useCookies";

export function useSubscribe() {
  const { formMethods } = useFormRules<SubscribePayload>({
    schema: subscribeSchema,
  });
  const { getCookies, saveCookies } = useCookies();
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const [subscription, setSubscription] = useState<SubscriptionShape | null>(
    null
  );
  const [phone, setPhone] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { mutateAsync: postSubscribe } = usePostSubscribeService();
  const { register } = formMethods;
  const handleSubmitSubscribe = useCallback(postSubscribe, [postSubscribe]);

  const handleEnd = () => {
    setShowPopUp(false);
    saveCookies({
      PUSH_NOTIFICATION: true,
    });
  };

  const submit = async ({ phone }: SubscribePayload) => {
    setIsLoading(true);
    handleStore();
    handlePermissions().then((permission) => {
      if (permission === "denied") {
        handleEnd();
      } else {
        handleSubscribe({
          setSubscription,
        });
      }
    });

    setPhone(phone);
  };

  useEffect(() => {
    if (!subscription || !phone) return;

    handleSubmitSubscribe({
      phone,
      type: "PUSH_NOTIFICATION",
      data: JSON.stringify(subscription),
    }).then(() => handleEnd());
  }, [subscription, phone, handleSubmitSubscribe]);

  useLayoutEffect(() => {
    const cookies = getCookies(["PUSH_NOTIFICATION"]);

    if (!cookies.PUSH_NOTIFICATION) setShowPopUp(true);
  }, []);

  return {
    register,
    formMethods,
    subscription,
    submit,
    showPopUp,
    setShowPopUp,
    isLoading,
  };
}
