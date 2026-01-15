import { useState } from "react";
import { DependentsData } from "../type";
import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
};

export function useDependent({ name }: Props) {
  const { setValue } = useFormContext();
  const [rows, setRows] = useState<Array<DependentsData>>([]);

  const handleChanges = (rows: Array<DependentsData>) => {
    setRows(rows);
    setValue(name, JSON.stringify(rows));
  };
  return {
    rows,
    setRows,
    handleChanges,
  };
}
