import { InfoBoard } from "@components/shared/forms/InfoBoard/viewer";
import i18n from "@configs/i18n";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { PaymentPreviewProps } from "../type";
import { useRef } from "react";
import { FormBoardHeader } from "./header";
import { TSpan } from "@components/shared/forms/InfoBoard/fields/Span";

dayjs.extend(customParseFormat);

export function FormBoard({ payment }: Pick<PaymentPreviewProps, "payment">) {
  const additionalInfo = payment?.additional_info?.items;
  const chargesDetails = useRef(payment?.charges_details);

  return (
    <div className="bg-white py-7 px-4 rounded-lg">
      <FormBoardHeader payment={payment} />
      <InfoBoard>
        <TSpan
          text={i18n("Words.operation_type")}
          dataTestId="operation_type"
          defaultValue={payment.operation_type}
        />
        <TSpan
          text={i18n("Words.order")}
          dataTestId="order"
          defaultValue={payment?.order?.id}
        />
        <TSpan
          text={i18n("Words.status")}
          dataTestId="status"
          defaultValue={payment.status}
        />
        <TSpan
          text={i18n("Words.status_detail")}
          dataTestId="status_detail"
          defaultValue={payment.status_detail}
        />
        <TSpan
          text={i18n("Words.amount")}
          dataTestId="amount"
          defaultValue={
            Array.isArray(additionalInfo) && additionalInfo[0]
              ? additionalInfo[0].quantity
              : ""
          }
        />
        <TSpan
          text={i18n("Words.ip_address_payer")}
          dataTestId="ip_address_payer"
          defaultValue={payment?.additional_info?.ip_address}
        />
        <TSpan
          text={i18n("Words.taxes_amount")}
          dataTestId="taxes_amount"
          defaultValue={payment.taxes_amount}
        />
        <TSpan
          text={i18n("Words.payment_type")}
          dataTestId="payment_type"
          defaultValue={payment.payment_type ?? ""}
        />
        <TSpan
          text={i18n("Words.date_approved")}
          dataTestId="date_approved"
          defaultValue={payment.date_approved}
        />
        <TSpan
          text={i18n("Words.currency_type")}
          dataTestId="currency_id"
          defaultValue={payment.currency_id}
        />
        <TSpan
          text={i18n("Words.transaction_amount")}
          dataTestId="transaction_amount"
          defaultValue={payment.transaction_amount}
        />
        <TSpan
          text={i18n("Words.transaction_amount_refunded")}
          dataTestId="transaction_amount_refunded"
          defaultValue={payment.transaction_amount_refunded}
        />
        <TSpan
          text={i18n("Words.shipping_cost")}
          dataTestId="shipping_cost"
          defaultValue={payment.shipping_cost ?? 0}
        />
        <TSpan
          text={i18n("Words.total_paid_amount")}
          dataTestId="total_paid_amount"
          defaultValue={payment.total_paid_amount ?? 0}
        />
        <TSpan
          text={i18n("Words.payer_name")}
          dataTestId="payer_name"
          defaultValue={`${payment.payer.first_name ?? ""} ${payment.payer.last_name ?? "--"}`}
        />
        <TSpan
          text={
            payment.payer.identification?.type ?? i18n("Words.identification")
          }
          dataTestId="identification"
          defaultValue={payment.payer.identification?.number}
        />
        <TSpan
          text={i18n("Words.flag")}
          dataTestId="flag"
          defaultValue={payment.payment_method_id}
        />
        <TSpan
          text={i18n("Words.payment_method")}
          dataTestId="payment_method"
          defaultValue={payment.payment_type_id}
        />
        <TSpan
          text={i18n("Words.bank_tax")}
          dataTestId="bank_tax"
          defaultValue={
            Array.isArray(chargesDetails) && chargesDetails[0]
              ? chargesDetails[0].amounts.original
              : 0
          }
        />
        <TSpan
          text={i18n("Words.bank_tax_refunded")}
          dataTestId="bank_tax_refunded"
          defaultValue={
            Array.isArray(chargesDetails) && chargesDetails[0]
              ? chargesDetails[0].amounts.refunded
              : 0
          }
        />
      </InfoBoard>
    </div>
  );
}
