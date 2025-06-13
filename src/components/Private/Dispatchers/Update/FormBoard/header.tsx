import i18n from "@configs/i18n";
import dayjs from "dayjs";
import { MessagesDispatcherShape } from "@type/MessagesDispatcherShape";
import { useFormContext } from "react-hook-form";
import { DispatcherUpdatePayload } from "../schemas";
import { ToggleSwitch } from "@components/shared/forms/ToggleSwitch";

type Props = {
  dispatcher: MessagesDispatcherShape;
};

export function FormBoardHeader({ dispatcher }: Props) {
  const {
    setValue,
    formState: { errors },
  } = useFormContext<DispatcherUpdatePayload>();

  return (
    <div className="header mb-4">
      <div className="content flex flex-wrap  justify-between">
        <div className="title mb-4">
          <h1 className="font-bold text-xl">{i18n(`Words.notification`)}</h1>
        </div>
        <div className="status w-15 ml-auto mr-2">
          <div>
            <ToggleSwitch
              dataTestId="status"
              label={i18n("Words.status")}
              name="status"
              setValue={setValue}
              options={{
                left: {
                  text: i18n("Words.active"),
                  value: "ACTIVE",
                },
                right: {
                  text: i18n("Words.inactive"),
                  value: "INACTIVE",
                },
              }}
              errors={errors.status}
            />
          </div>
        </div>
        <div className="dates flex w-full md:w-auto justify-center md:justify-start mt-3 md:mt-0">
          <span className="block md:border-[1px] border-tertiary mb-4 md:mx-2"></span>
          <div className="linked text-center text-xs mr-2">
            <div>
              <span className="font-semibold">{i18n("Words.linked")}</span>
            </div>
            <div>
              <span>{String(dispatcher.linked).padStart(5, "0")}</span>
            </div>
          </div>
          <span className="block border-[1px] border-tertiary mb-4 mx-2"></span>
          <div className="created_at text-center text-xs mr-2">
            <div>
              <span className="font-semibold">{i18n("Words.created_at")}</span>
            </div>
            <div>
              <span>{dayjs(dispatcher.created_at).format("DD/MM/YYYY")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
