import i18n from "@configs/i18n";
import { Option } from "./Option";
import { useGroupsTab } from "./hooks/useGroupsTab";
import { OptionShape } from "./type";

type Props = {
  currentOptions: Array<OptionShape>;
  onChange: ((name: string, value: string) => void) | undefined;
};

export function Options({ onChange, currentOptions }: Props) {
  const {
    handleAddOption,
    handleRemoveOption,
    handleChangeOption,
    options,
  } = useGroupsTab({ currentOptions, onChange });

  return (
    <div className="mb-6">
      <div className="text-end">
        <button
          onClick={() => handleAddOption(options)}
          className="bg-primary text-white p-2 rounded-md mb-1"
          type="button"
        >
          {i18n("Words.add")}
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="bg-disabled border-2">{i18n("Words.text")}</th>
            <th className="bg-disabled border-2"></th>
          </tr>
        </thead>
        <tbody>
          {options.map((option, key) => (
            <Option
              key={`option_row_${key}`}
              handleRemoveOption={handleRemoveOption}
              handleChangeOption={handleChangeOption}
              option={option}
              options={options}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
