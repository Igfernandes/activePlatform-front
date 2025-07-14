import { useFormContext } from "react-hook-form";
import { FormsPayload } from "./schema";
import useWindow from "@hooks/useWindow";
import { useNavigator } from "@hooks/useNavigator";
import { ToggleSwitch } from "@components/shared/forms/ToggleSwitch";
import i18n from "@configs/i18n";
import { When } from "@components/utilities/When";
import { Link } from "@assets/Icons/black/Link";
import { Color } from "@components/shared/forms/Color";

type Props = {
  slug?: string;
};

export function TopBar({ slug }: Props) {
  const { setValue, getValues, register } = useFormContext<FormsPayload>();
  const { baseUrl } = useWindow();
  const { handleCopy } = useNavigator();
  const formId = getValues("id");

  return (
    <div className="flex justify-end">
      <div className="mr-auto">
        <div>
          <Color
            dataTestId="color_mark"
            label={i18n("Words.mark")}
            {...register("color_mark")}
            className="w-10 border-[1px] rounded-md"
            type="color"
            defaultValue={getValues("color_mark") ?? "#7ae3aa"}
          />
        </div>
      </div>
      <div className="mb-6">
        <ToggleSwitch
          setValue={setValue}
          label={i18n("Words.status")}
          dataTestId="status"
          name="status"
          defaultValue={getValues("status")}
          options={{
            left: {
              text: i18n("Words.active"),
              value: "PUBLISHED",
            },
            right: {
              text: i18n("Words.inactive"),
              value: "DRAFT",
            },
          }}
        />
      </div>
      <When value={!!formId}>
        <div>
          <div
            className="px-3 py-2 shadow-md hover:bg-red rounded-md cursor-pointer ml-2"
            onClick={() => handleCopy(`${baseUrl}/forms/${slug}`)}
          >
            <Link />
          </div>
        </div>
      </When>
    </div>
  );
}
