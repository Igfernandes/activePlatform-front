import { useFormRules } from "@hooks/Forms/useFormRules";
import { useRecaptcha } from "@hooks/useRecaptcha";
import { paymentFormSchema, PaymentPayload } from "../schemas";
import { useEffect, useState } from "react";
import { useMercadoPago } from "@hooks/useMercadoPago";
import useGetClientPreview from "@services/Clients/GetPreview/useGet";
import usePostCheckout from "@services/Checkout/Post/usePost";
import { useRouter } from "next/router";

const RECAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

export function usePaymentForm() {
  const { token, handleLoaded } = useRecaptcha(RECAPTCHA_KEY ?? "", "login");
  const { formMethods, hasAllFilledFields } = useFormRules<PaymentPayload>({
    schema: paymentFormSchema,
    defaultValues: {
      amounts: ["1"],
    },
  });
  const [phone, setPhone] = useState<string>();
  const { refetch } = useGetClientPreview({
    phone: phone,
  });
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = formMethods;
  const [hasFillPhone, setHasFillPhone] = useState<boolean>(false);
  const { handleUpdateMpProductKey } = useMercadoPago();
  const { mutateAsync: postCheckout } = usePostCheckout();
  const { query } = useRouter();
  const router = useRouter();

  const onSubmit = async (payload: PaymentPayload) => {
    handleLoaded().then(async () => {
      const { product_id, product_url } = await postCheckout({
        ...payload,
        product: query.charge as string,
        amounts: payload.amounts.map((amount) => +amount),
        "g-recaptcha-response": token,
      });

      if (product_url) return router.push(product_url);

      handleUpdateMpProductKey(product_id);
    });
  };

  useEffect(() => {
    if (!phone || phone.length < 16) return setHasFillPhone(false);
    const { setValue } = formMethods;

    refetch().then(({ data: client }) => {
      if (Object.hasOwn(client ?? {}, "name")) {
        setValue("name", client?.name ?? "");
        setValue("email", client?.email ?? "");
      }
      setHasFillPhone(true);
    });
  }, [phone]);

  const handleCaptureClientByPhone = () => {
    const phone = formMethods.getValues("phone");

    setPhone(phone);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    formMethods,
    hasAllFilledFields,
    isLoading: isSubmitting,
    recaptchaToken: token,
    hasFillPhone,
    handleCaptureClientByPhone,
  };
}
