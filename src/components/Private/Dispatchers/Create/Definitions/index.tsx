import { Input } from "@components/shared/forms/Input";
import i18n from "@configs/i18n";
import { useFormContext } from "react-hook-form";
import { FormsPayload } from "../schema";
import { Select } from "@components/shared/forms/Select";
import dayjs from "dayjs";
import { GroupChecks } from "@components/shared/forms/GroupChecks";
import { GroupCards } from "@components/shared/forms/GroupCards";
import { Radio } from "@components/shared/forms/Radio";
import { useDefinitions } from "./hooks/useDefinitions";
import { When } from "@components/utilities/When";
import { Date } from "@components/shared/forms/Date";

export function Definitions() {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<FormsPayload>();
  const { platforms } = useDefinitions({ watch, setValue });

  return (
    <div className="form-definitions">
      <div className="form-title mb-6">
        <h1 className="text-xl font-bold">{i18n("Words.definitions")}</h1>
      </div>
      <div className="form-row mb-4 ">
        <div className="form-group">
          <Input
            {...register("title")}
            label={i18n(`Words.title`)}
            dataTestId="title"
            required={true}
            errors={errors.title}
          />
        </div>
      </div>
      <div className="form-row flex flex-wrap md:mb-4 justify-between">
        <div className="form-group w-full md:w-[48%]">
          <Date
            {...register("started_at")}
            label={i18n(`Words.started_at`)}
            dataTestId="started_at"
            type="datetime-local"
            defaultValue={dayjs().format("YYYY-MM-DD H:s")}
            errors={errors.started_at}
          />
        </div>
        <div className="form-group w-full md:w-[48%] mt-4 md:mt-0">
          <Select
            {...register("period")}
            options={[
              {
                text: "--",
                value: "",
              },
              ...["DAILY", "WEEKLY", "MONTHLY"].map((period) => ({
                text: i18n(`Words.${period.toLocaleLowerCase()}`) as string,
                value: period,
              })),
            ]}
            label={i18n(`Words.period`)}
            dataTestId="period"
            errors={errors.period}
          />
        </div>
      </div>
      <div className="form-row flex flex-wrap">
        <When value={watch("period") === "WEEKLY"}>
          <div className="form-group w-full md:w-[48%] mr-6">
            <div className="border-b-2 border-slate-300 mb-3">
              <label htmlFor="weekday" className="font-bold">
                {i18n(`Words.weekdays`)}
              </label>
            </div>
            <div className="border-2 border-slate-200 rounded-lg p-3">
              <GroupChecks
                register={register}
                items={[
                  "SUNDAY",
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                ].map((weekday) => ({
                  label: i18n(`Words.${weekday.toLocaleLowerCase()}`),
                  value: weekday,
                }))}
                name="weekday"
              />
            </div>
          </div>
        </When>
        <div className="form-group w-full md:w-[48%] mt-6">
          <When value={watch("period") === "MONTHLY"}>
            <div className="mb-6">
              <Input
                {...register("scheduled_day")}
                label={i18n(`Words.scheduled_day`)}
                dataTestId="scheduled_day"
                type="number"
                max={31}
                min={1}
                defaultValue={1}
                errors={errors.scheduled_day}
              />
            </div>
          </When>
          <div className="my-2">
            <span>{i18n("Screens.dashboard.dispatchers.ask_about_send_files_images")}</span>
            <div className="flex mt-2">
              <div className="mr-2">
                <Radio
                  {...register("has_file")}
                  label={i18n(`Words.yes`)}
                  dataTestId="has_file_yes"
                  defaultValue={"SIM"}
                />
              </div>
              <div>
                <Radio
                  {...register("has_file")}
                  label={i18n(`Words.not`)}
                  dataTestId="has_file_not"
                  defaultValue={"NÃO"}
                  defaultChecked={true}
                  className="ml-2"
                />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <span>Será enviado imagens?</span>
            <div className="flex mt-2">
              <div className="mr-2">
                <Radio
                  {...register("has_image")}
                  label={i18n(`Words.yes`)}
                  dataTestId="has_image_yes"
                  defaultValue={"SIM"}
                />
              </div>
              <div>
                <Radio
                  {...register("has_image")}
                  label={i18n(`Words.not`)}
                  dataTestId="has_image_not"
                  defaultValue={"NÃO"}
                  defaultChecked={true}
                  className="ml-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-row mt-6">
        <div className="form-title mb-4">
          <h4 className="font-bold">
            {i18n("Screens.dashboard.dispatchers.select_shape_send")}
          </h4>
        </div>
        <div className="form-group">
          <GroupCards register={register} name="platforms" items={platforms} />
        </div>
      </div>
    </div>
  );
}
