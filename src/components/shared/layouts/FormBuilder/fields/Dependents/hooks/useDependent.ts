import { useState } from "react";
import { DependentsData } from "../type";
import { SetValue } from "../../../type";

type Props = {
  name: string;
  setValue?: SetValue;
};

export function useDependent({ setValue, name }: Props) {
  const [rows, setRows] = useState<Array<DependentsData>>([]);

  const handleChanges = (rows: Array<DependentsData>) => {
    setRows(rows);
    if (setValue) setValue(name, JSON.stringify(rows));
  };
  return {
    rows,
    setRows,
    handleChanges,
  };
}
