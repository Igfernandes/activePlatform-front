import { getDatetime } from "@helpers/date";
import dayjs from "dayjs";
import { useState } from "react";

export function useDatetime() {
  const [datetime, setDatetime] = useState<string>("");

  const handleUpdateDatetimePreview = (datetime: string) => {
    const date = dayjs(datetime, "YYYY-MM-DDTHH:mm", true);

    if (!date.isValid()) {
      return setDatetime(getDatetime(datetime));
    }
    setDatetime(dayjs(datetime, "YYYY-MM-DDTHH:mm").format("DD/MM/YYYY HH:mm"));
  };
  return {
    handleUpdateDatetimePreview,
    setDatetime,
    datetime,
  };
}
