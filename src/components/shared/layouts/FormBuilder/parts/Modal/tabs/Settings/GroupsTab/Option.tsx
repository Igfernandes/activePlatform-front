import { Close } from "@assets/Icons/black/CloseClean";
import { ChangeEvent } from "react";
import { OptionShape } from "./type";

type Props = {
  handleRemoveOption: (id: number, options: OptionShape[]) => void;
  handleChangeOption: (
    ev: ChangeEvent<HTMLInputElement>,
    id: number,
    prop: keyof OptionShape,
    options: OptionShape[]
  ) => void;
  option: OptionShape;
  options: OptionShape[]
};

export function Option({
  option,
  handleChangeOption,
  handleRemoveOption,
  options
}: Props) {
  return (
    <tr>
      <td>
        <input
          className="w-full p-1 border-2"
          type="text"
          name="option"
          onChange={(ev) => handleChangeOption(ev, option.id, "value", options)}
          value={option.value ?? ""}
        />
      </td>
      <td className="text-center">
        <button onClick={() => handleRemoveOption(option.id, options)} type="button">
          <Close />
        </button>
      </td>
    </tr>
  );
}
