import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { OptionShape } from "../type";
import { isEquals } from "@helpers/json";

type Props = {
  currentOptions: Array<OptionShape>;
  onChange: ((name: string, value: string) => void) | undefined;
};

export function useGroupsTab({ currentOptions, onChange }: Props) {
  const defaultOption: OptionShape = useMemo(() => ({ id: 1, value: "" }), []);
  const [options, setOptions] = useState<Array<OptionShape>>([]);

  const handleRemoveOption = useCallback(
    (id: number, options: Array<OptionShape>) => {
      const optionsUpdated = options.filter((option) => option.id !== id);
      setOptions(optionsUpdated);
      if (onChange) onChange("options", JSON.stringify(optionsUpdated));
    },
    [onChange]
  );

  const handleAddOption = useCallback(
    (options: Array<OptionShape>) => {
      const optionsUpdated: Array<OptionShape> = [
        ...options,
        { ...defaultOption, id: new Date().getTime() },
      ];
      setOptions(optionsUpdated);

      if (onChange) onChange("options", JSON.stringify(optionsUpdated));
    },
    [onChange, defaultOption]
  );

  const handleChangeOption = useCallback(
    (
      ev: ChangeEvent<HTMLInputElement>,
      id: number,
      prop: keyof OptionShape,
      options: Array<OptionShape>
    ) => {
      const optionsUpdated: Array<OptionShape> = options.map((option) =>
        option.id === id
          ? { ...option, [prop]: ev?.currentTarget?.value }
          : option
      );
      setOptions(optionsUpdated);

      if (onChange) onChange("options", JSON.stringify(optionsUpdated));
    },
    [onChange]
  );

  useEffect(() => {
    setOptions((prev) => {
      if (isEquals(prev, currentOptions)) return prev;
      return currentOptions;
    });
  }, [currentOptions]);

  return {
    handleRemoveOption,
    handleAddOption,
    handleChangeOption,
    options,
    setOptions,
  };
}
