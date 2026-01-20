import { useFormRules } from "@hooks/Forms/useFormRules";
import { ChargeSchema, ChargesPayload } from "../schemas";
import { ClientShape } from "@type/Clients";
import usePostCreateCharge from "@services/Charges/Post/usePost";
import { useRouter } from "next/router";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { useI18n } from "@contexts/I18n";
import { useMemo } from "react";

type Props = {
  clientsSelected: Array<ClientShape>;
};

export function useCharge({ clientsSelected }: Props) {
  const { t } = useI18n();
  const schema = useMemo(() => ChargeSchema(t), [t]);
  const { formMethods, errors } = useFormRules<ChargesPayload>({
    schema,
  });
  const { mutateAsync: postCharge, isPending } = usePostCreateCharge();
  const router = useRouter();

  const submit = ({
    amount,
    period,
    expired_days,
    ...payload
  }: ChargesPayload) => {
    postCharge({
      ...payload,
      service_id: +payload.service_id,
      price: +payload.price,
      amount: amount ? +amount : undefined,
      period: period ? +period : undefined,
      privacy: "PUBLIC",
      promotional_price: +payload.promotional_price,
      clients: clientsSelected.map((client) => client.id),
      expired_days: expired_days ? +expired_days : undefined,
    }).then(() => {
      setTimeout(() => {
        router.push(privateRoutes.finance);
      }, 2000);
    });
  };

  return {
    formMethods,
    errors,
    submit,
    isLoading: isPending,
  };
}
