import { useState } from "react";

export function useDate() {
  const [date, setDate] = useState<string>("");

  return {
    setDate,
    date,
  };
}
