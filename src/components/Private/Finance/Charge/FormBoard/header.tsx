import { Select } from "@components/shared/forms/Select";
import { ChargeShape } from "@type/Charges";
import dayjs from "dayjs";
import { UseFormSetValue } from "react-hook-form";
import { ChargeUpdatePayload } from "../schemas";
import { ToggleSwitch } from "@components/shared/forms/ToggleSwitch";
import { useI18n } from "@contexts/I18n";

type Props = {
  setValue: UseFormSetValue<ChargeUpdatePayload>;
  charge: ChargeShape;
};

export function FormBoardHeader({ charge, setValue }: Props) {
  const {t} = useI18n();
  return (
    <div className="header mb-4">
      <div className="content flex justify-between">
        <div className="title mb-4">
          <h1 className="font-bold text-xl">{t(`Words.definitions`)}</h1>
        </div>
        <div className="dates flex">
          <div className="status mr-5">
            <ToggleSwitch
              setValue={setValue}
              name="status"
              label={t("Words.status")}
              dataTestId="status"
              options={{
                left: {
                  text: t(`Words.active`),
                  value: "ACTIVE",
                },
                right: {
                  text: t(`Words.inactive`),
                  value: "INACTIVE",
                },
              }}
            />
          </div>
          <div className="created_at text-center text-xs mr-2">
            <div>
              <span className="font-semibold">{t("Words.created")}</span>
            </div>
            <div>
              <span>{dayjs(charge.created_at).format("DD/MM/YYYY")}</span>
            </div>
          </div>
          <div className="updated_at text-center text-xs ">
            <div className="border-l-2 border-l-slate-300 pl-2">
              <span className="font-semibold">
                {t("Words.last_updated")}
              </span>
            </div>
            <div>
              <span>{dayjs(charge.updated_at).format("DD/MM/YYYY")}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="box flex justify-between my-4">
        <div className="type w-[20%]">
          <Select
            label={t("Words.type")}
            dataTestId="type"
            options={["APPELLANT", "PUNCTUAL"].map((type) => ({
              text: t(`Words.${type.toLowerCase()}`),
              value: type,
            }))}
            defaultValue={charge.type}
            onChange={(ev) =>
              setValue(
                "type",
                ev.currentTarget.value as "APPELLANT" | "PUNCTUAL"
              )
            }
          />
        </div>
      </div>
    </div>
  );
}
