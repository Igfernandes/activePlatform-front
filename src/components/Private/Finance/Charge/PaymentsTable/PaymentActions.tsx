import { DotsOptions } from "@components/shared/others/DotsOptions";
import i18n from "@configs/i18n";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { useRouter } from "next/router";

type Props = {
  chargeId: number;
  paymentId: number;
};

export function PaymentActions({ chargeId, paymentId }: Props) {
  const router = useRouter();

  return (
    <div className="flex justify-end">
      <DotsOptions
        actions={[
          {
            text: i18n("Words.more_details"),
            handle: () =>
              router.push(
                privateRoutes.financePayments
                  .replace("{id}", String(chargeId))
                  .replace("{payment_id}", String(paymentId))
              ),
          },
        ]}
      />
    </div>
  );
}
