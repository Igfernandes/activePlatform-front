import { Pen } from "@assets/Icons/black/Pen";
import { OptionData } from "../../type";

export const optionsUser = [
  {
    id: "email",
    field: "email",
    icon: <Pen width={12} height={12} />,
  },
  {
    id: "password",
    field: "password",
    icon: <Pen width={12} height={12} />,
  },
].map((option) => ({
  ...option,
  element: "INPUT",
})) as Array<OptionData>;
