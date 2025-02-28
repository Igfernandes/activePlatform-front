import { bgColors } from "@assets/colors/colors";
import { bgDefaultColor } from "@assets/colors/default";

type Props = {
  onChecked?: (prop: boolean) => void;
  onChange?: () => boolean;
};

export function useCheckbox({ onChecked }: Props) {
  const handleChecked = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const divElement = ev.currentTarget as HTMLDivElement;
    const inputElement = divElement.querySelector("input");

    if (!inputElement) return;

    const isChecked = inputElement.checked;

    inputElement.style.background = isChecked
      ? bgColors.red
      : bgDefaultColor.disable;
    if (onChecked) onChecked(inputElement.checked);
  };

  return {
    handleChecked,
  };
}
