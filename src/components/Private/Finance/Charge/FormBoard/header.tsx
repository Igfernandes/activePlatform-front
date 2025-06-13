import { Select } from "@components/shared/forms/Select";
import i18n from "@configs/i18n";
import { PRIVACY } from "@constants/options";
import { ChargeShape } from "@type/Charges";
import dayjs from "dayjs";
import { UseFormSetValue } from "react-hook-form";
import { ChargeUpdatePayload } from "../schemas";
import { ToggleSwitch } from "@components/shared/forms/ToggleSwitch";

type Props = {
  setValue: UseFormSetValue<ChargeUpdatePayload>;
  charge: ChargeShape;
};

export function FormBoardHeader({ charge, setValue }: Props) {
  return (
    <div className="header mb-4">
      <div className="content flex justify-between">
        <div className="title mb-4">
          <h1 className="font-bold text-xl">{i18n(`Words.definitions`)}</h1>
        </div>
        <div className="dates flex">
          <div className="status mr-5">
            <ToggleSwitch
              setValue={setValue}
              name="status"
              label={i18n("Words.status")}
              dataTestId="status"
              options={{
                left: {
                  text: i18n(`Words.active`),
                  value: "ACTIVE",
                },
                right: {
                  text: i18n(`Words.inactive`),
                  value: "INACTIVE",
                },
              }}
            />
          </div>
          <div className="created_at text-center text-xs mr-2">
            <div>
              <span className="font-semibold">{i18n("Words.created")}</span>
            </div>
            <div>
              <span>{dayjs(charge.created_at).format("DD/MM/YYYY")}</span>
            </div>
          </div>
          <div className="updated_at text-center text-xs ">
            <div className="border-l-2 border-l-slate-300 pl-2">
              <span className="font-semibold">
                {i18n("Words.last_updated")}
              </span>
            </div>
            <div>
              <span>{dayjs(charge.updated_at).format("DD/MM/YYYY")}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="box flex justify-between my-4">
        <div className="status w-[20%]">
          <Select
            label={i18n("Words.privacy")}
            dataTestId="privacy"
            options={PRIVACY.map((privacy) => ({
              text: i18n(`Words.${privacy.toLowerCase()}`),
              value: privacy,
            }))}
            defaultValue={charge.privacy}
            onChange={(ev) =>
              setValue(
                "privacy",
                ev.currentTarget.value as "PUBLIC" | "PRIVATE"
              )
            }
          />
        </div>
        <div className="type w-[20%]">
          <Select
            label={i18n("Words.type")}
            dataTestId="type"
            options={["APPELLANT", "PUNCTUAL"].map((type) => ({
              text: i18n(`Words.${type.toLowerCase()}`),
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
