import { Pen } from "@assets/Icons/black/Pen";
import { OptionData } from "../../type";

export const optionsCustom = [
  {
    id: "gallery",
    field: "gallery",
    icon: <Pen width={12} height={12} />,
  },
].map((option) => ({
  ...option,
  element: "GALLERY",
})) as Array<OptionData>;
