import { DotsOptions } from "@components/shared/others/DotsOptions";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { useI18n } from "@contexts/I18n";
import { useRouter } from "next/router";
import { useMemo } from "react";

type Props = {
  chargeId: number;
  paymentId: number;
};

export function PaymentActions({ chargeId, paymentId }: Props) {
  const router = useRouter();
  const { t } = useI18n()
  const paymentRoute = useMemo(() =>
    privateRoutes.financePayments
      .replace("{id}", String(chargeId))
      .replace("{payment_id}", String(paymentId))
    ,
    [chargeId, paymentId])

  return (
    <div className="flex justify-end">
      <DotsOptions
        actions={[
          {
            text: t("Words.more_details"),
            handle: () => router.push(paymentRoute)
          }
        ]}
      />
    </div>
  );
}
