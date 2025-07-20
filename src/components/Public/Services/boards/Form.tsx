import { When } from "@components/utilities/When";
import i18n from "@configs/i18n";
import { ServicePreviewShape } from "@type/Services";
import dayjs from "dayjs";
import Link from "next/link";
import { useState } from "react";

type Props = Pick<
  ServicePreviewShape,
  | "name"
  | "address"
  | "photo"
  | "stock"
  | "expired_at"
  | "realized_at"
  | "forms"
>;

export function BoardForm({ name, address, realized_at, stock, forms }: Props) {
  const [targetForm, setTargetForm] = useState<string>();
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
        <div className="mt-4">
          <div>
            <span>{i18n("Screens.services.selected_form")}</span>
          </div>
          <div className="mt-2">
            <select
              onChange={(ev) => {
                setTargetForm(`/forms/${ev.currentTarget.value}`);
              }}
              className="p-2 rounded-lg w-full shadow-sm"
            >
              <option key={`none`} value="">
                {i18n("Screens.services.switch_event")}
              </option>
              {forms.map((form) => (
                <option key={`${form.slug}`} value={form.slug}>
                  {form.name}
                </option>
              ))}
            </select>
            <div className="mt-4">
              <Link
                className={`red py-2 px-6  rounded-md  shadow-md ${
                  targetForm
                    ? "bg-red text-white hover:bg-rose-900"
                    : "text-black opacity-70 cursor-not-allowed bg-disabled"
                }`}
                href={targetForm ?? "#none"}
              >
                {i18n("Words.inscribe")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
