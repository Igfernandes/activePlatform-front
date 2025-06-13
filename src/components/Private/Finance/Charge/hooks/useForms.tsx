import { useFormRules } from "@hooks/Forms/useFormRules";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useState } from "react";
import { ChargeUpdatePayload, ChargeUpdateSchema } from "../schemas";
import useGetServices from "@services/Services/Get/useGetServices";
import usePutCharge from "@services/Charges/Put/usePut";
import { ChargeShape } from "@type/Charges";

dayjs.extend(customParseFormat);

type Props = {
  charge: ChargeShape;
};

export function useForms({ charge }: Props) {
  const { formMethods, handleSubmit, errors } =
    useFormRules<ChargeUpdatePayload>({
      schema: ChargeUpdateSchema,
      defaultValues: {
        status: charge.status,
        privacy: charge.privacy,
        type: charge.type,
        amount: String(charge.amount) ?? "1",
        expired_days: String(charge.expired_days),
      },
    });
  const { data: services } = useGetServices();
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const { mutateAsync: putCharges, isPending: isLoadingPutCharge } =
    usePutCharge();

  const submit = ({
    period,
    amount,
    expired_days,
    ...payload
  }: ChargeUpdatePayload) => {
    putCharges({
      ...payload,
      id: charge.id,
      service_id: parseInt(payload?.service_id ?? ""),
      amount: amount ? +amount : undefined,
      period: period ? +period : undefined,
      price: +payload.price,
      promotional_price: +payload.promotional_price,
      expired_days: expired_days ? +expired_days : undefined,
    });
  };

  const handleToggleModel = (isShowModal: boolean) => {
    setIsShowModal(isShowModal);
  };

  return {
    formMethods,
    handleSubmit,
    errors,
    submit,
    isShowModal,
    handleToggleModel,
    isLoadingPutCharge,
    services,
  };
}
