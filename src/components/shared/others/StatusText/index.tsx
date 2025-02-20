import i18n from "@configs/i18n";
import { Status } from "../../../../types/status";
import { COLORS } from "@constants/colors";
import { textColors } from "@assets/colors/colors";

type Props = {
  status: Status;
};

export function StatusText({ status }: Props) {
  const statusColors = {
    ACTIVE: COLORS.success,
    INACTIVE: textColors.red,
    AWAITING: textColors.orange,
  };
  return (
    <span className="font-bold"
      style={{
        color: statusColors[status],
      }}
    >
      {i18n(`words.${status.toLowerCase()}`)}
    </span>
  );
}
