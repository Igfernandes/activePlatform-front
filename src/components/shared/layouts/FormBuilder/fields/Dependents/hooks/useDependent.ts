import { useState } from "react";
import { DependentsData } from "../type";

export function useDependent() {
  const [rows, setRows] = useState<Array<DependentsData>>([]);
  return {
    rows,
    setRows,
  };
}
