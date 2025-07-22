import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { OptionsShape } from "../type";

export function useSelect() {
  const { setValue } = useFormContext();
  const [selected, setSelected] = useState<string>();
  const [isShowList, setIsShowList] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const handleChangeValue = (name: string, option: OptionsShape) => {
    setValue(name, String(option.value));
    setSelected(option.value ? option.text : "");
  };

  const handleToggleList = (isShowList: boolean) => {
    setIsShowList(isShowList);
  };
  const handleSearch = (search: string) => {
    setSearch(search);
  };
  return {
    handleChangeValue,
    handleToggleList,
    isShowList,
    selected,
    handleSearch,
    search,
  };
}
