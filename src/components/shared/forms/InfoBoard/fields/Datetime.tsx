import { Calendar } from "@assets/Icons/black/Calendar";
import i18n from "@configs/i18n";
import { handleMaskDate } from "@helpers/date";
import dayjs from "dayjs";
import { useFormContext } from "react-hook-form";
import { TFields } from "../type";

export function TDatetime({
  label,
  name,
  className,
  type,
  required,
  ...props
}: TFields) {
  const { register, setValue } = useFormContext();
  const currentId = `input_${name}`;

  return (
    <tr
      className={`relative border-t-2 border-t-zinc-200 ${
        type == "hidden" ? "hidden" : ""
      }`}
    >
      <td className="py-2 pl-4 w-2/6">
        <strong>{label}</strong>
      </td>
      <td className="py-2">
        <div className="flex">
          <input
            {...register(name)}
            {...props}
            type={"text"}
            required={required === "true"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleMaskDate(e)
            }
            placeholder="Dia/Mes/Ano"
            className={`${
              className ?? ""
            }  w-full px-3 pt-8 pb-4 bg-white border-secondary border-2 rounded-lg text-rose-500 text-sm disabled:bg-disable`}
            id={currentId}
          />
          <div className="absolute right-4 top-4">
            <label htmlFor={`calendar_${name}`}>
              <Calendar />
            </label>
            <input
              id={`calendar_${name}`}
              type="date"
              onChange={(ev) => {
                setValue(
                  name,
                  dayjs(ev.currentTarget.value).format(
                    i18n("Configs.format.date")
                  )
                );
              }}
              className="opacity-0 absolute w-4 h-full top-0"
            />
          </div>
        </div>
      </td>
    </tr>
  );
}
