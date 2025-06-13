import { Input } from "@components/shared/forms/Input";
import { FormProvider } from "react-hook-form";
import { usePaymentForm } from "./hooks/usePaymentForm";
import i18n from "@configs/i18n";
import { OrderSummary } from "./OrderSummary";
import { handleMaskPhone } from "@helpers/string";
import { ChargePreviewShape } from "./types";

type Props = {
  charge: ChargePreviewShape;
};

export function PaymentForm({ charge }: Props) {
  const {
    errors,
    formMethods,
    handleSubmit,
    onSubmit,
    register,
    isLoading,
    recaptchaToken,
    hasAllFilledFields,
    hasFillPhone,
    handleCaptureClientByPhone,
  } = usePaymentForm();

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="content flex">
          <div className="w-4/6">
            <div className="form-group w-full mb-4 lg:mb-6">
              <Input
                {...register("phone")}
                dataTestId="phone"
                label={i18n("Words.phone")}
                onChange={(ev) => {
                  handleMaskPhone(ev);
                  formMethods.setValue("phone", ev.currentTarget.value);
                  handleCaptureClientByPhone();
                }}
                required={true}
                errors={errors.phone}
              />
            </div>
            <div className="form-group w-full mb-4 lg:mb-6">
              <Input
                {...register("cpf")}
                dataTestId="cpf"
                label={i18n("Words.cpf")}
                required={true}
                errors={errors.cpf}
                disabled={!hasFillPhone}
              />
            </div>
            <div className="form-group w-full mb-4 lg:mb-6">
              <Input
                {...register("name")}
                dataTestId="name"
                label={i18n("Words.name")}
                required={true}
                errors={errors.name}
                disabled={!hasFillPhone}
              />
            </div>
            <div className="form-group w-full mb-4 lg:mb-6">
              <Input
                {...register("email")}
                dataTestId="email"
                label={i18n("Words.email")}
                required={true}
                errors={errors.email}
                disabled={!hasFillPhone}
              />
            </div>
          </div>
          <div className="w-2/6">
            <OrderSummary
              type={charge.type}
              products={[
                {
                  title: charge.title,
                  price: charge.promotional_price
                    ? charge.promotional_price
                    : charge.price,
                  amount: 1,
                  max: charge.amount ?? 1,
                },
              ]}
              isLoading={isLoading || !recaptchaToken}
              hasAllFilledFields={hasAllFilledFields}
            />
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
