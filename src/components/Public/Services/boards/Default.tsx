import { When } from "@components/utilities/When";
import i18n from "@configs/i18n";
import { ServicePreviewShape } from "@type/Services";
import dayjs from "dayjs";

type Props = Pick<
  ServicePreviewShape,
  "name" | "address" | "photo" | "stock" | "expired_at" | "realized_at"
>;

export function BoardDefault({ name, address, realized_at, stock }: Props) {
  return (
    <div className="content">
      <div className="title">
        <h3 className="text-2xl font-bold">{name}</h3>
      </div>
      <div className=" mt-4 mb-2">
        <div className="mt-2">
          <p className="text-xs">{address}</p>
        </div>
        <When value={!!realized_at}>
          <div className="mt-2">
            <p className="text-xs">
              {i18n("Words.started_date")}:{" "}
              {dayjs(realized_at).format("DD/MM/YYYY HH:MM")}
            </p>
          </div>
        </When>
        <When value={!!stock}>
          <div className="mt-2">
            <p className="text-xs">
              {stock} {i18n("Words.vacancies_total")}
            </p>
          </div>
        </When>
      </div>
    </div>
  );
}
