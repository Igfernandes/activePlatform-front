import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import i18n from "@configs/i18n";
import { usePaymentsTable } from "./hooks/usePaymentsTable";
import { PaymentShape } from "@type/Payments";
import { PaymentActions } from "./PaymentActions";
import { ClientShape } from "@type/Clients";
import { getMoneyBrFormatted } from "@helpers/string";

type Props = {
  clients: Array<ClientShape>;
  payments: Array<PaymentShape>;
};

export function PaymentsTable({ payments, clients }: Props) {
  const { tHeadsPayment, getClientName } = usePaymentsTable();

  return (
    <div>
      <SmartTable
        data={payments.map((payment) => ({
          ID: payment.id,
          name: getClientName(clients, payment.client_id),
          paid_amount: getMoneyBrFormatted(payment.paid_amount),
          status: i18n(`Words.${payment.status.toLocaleLowerCase()}`),
          bank: payment?.bank?.name,
          action: (
            <PaymentActions
              chargeId={payment.charge_id}
              paymentId={payment.id}
            />
          ),
        }))}
        options={{}}
        tHeads={{
          data: tHeadsPayment.current,
          widths: [50, 200, 180, 100, 150, 30],
        }}
        title={i18n("Words.payments")}
      />
    </div>
  );
}
