import i18n from "@configs/i18n";
import { MercadoPagoPaymentShape } from "@type/Extracts/MercadoPago/MercadoPago";
import dayjs from "dayjs";

type Props = {
  payment: MercadoPagoPaymentShape;
};

export function FormBoardHeader({ payment }: Props) {
  return (
    <div className="header mb-4">
      <div className="content flex justify-between">
        <div className="title mb-4">
          <h1 className=" text-xl">
            <strong> {i18n("Words.transaction")}</strong>: {payment.id}
          </h1>
        </div>
        <div className="dates flex">
          <div className="created_at text-center text-xs mr-2">
            <div>
              <span className="font-semibold">{i18n("Words.created")}</span>
            </div>
            <div>
              <span>{dayjs(payment.date_created).format("DD/MM/YYYY")}</span>
            </div>
          </div>
          <div className="updated_at text-center text-xs ">
            <div className="border-l-2 border-l-slate-300 pl-2">
              <span className="font-semibold">
                {i18n("Words.last_updated")}
              </span>
            </div>
            <div>
              <span>
                {payment.last_modified
                  ? dayjs(payment.last_modified).format("DD/MM/YYYY")
                  : "-"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
