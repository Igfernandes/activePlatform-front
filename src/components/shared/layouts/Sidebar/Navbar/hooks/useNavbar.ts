import { textColors } from "@assets/colors/colors";
import { textDefaultColors } from "@assets/colors/default";
import { useState } from "react";

export function useNavbar() {
  const [itemColor, setItemColor] = useState<string>(textDefaultColors.primary);

  const handleToggleItemColor = (isHover: boolean) => {
    setItemColor(isHover ? textColors.red : textDefaultColors.primary);
  };
  
  return {
    itemColor,
    handleToggleItemColor,
  };
}
