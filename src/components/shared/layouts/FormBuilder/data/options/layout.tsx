import { Pen } from "@assets/Icons/black/Pen";
import { OptionData } from "../../type";

export const optionsLayout = [
  {
    id: "paragraph",
    field: "paragraph",
    icon: <Pen width={12} height={12} />,
  },
  {
    id: "title",
    field: "title",
    icon: <Pen width={12} height={12} />,
  },
  {
    id: "span",
    field: "span",
    icon: <Pen width={12} height={12} />,
  },
  {
    id: "link",
    field: "link",
    icon: <Pen width={12} height={12} />,
  },
  {
    id: "hr",
    field: "hr",
    icon: <Pen width={12} height={12} />,
  },
].map((option) => ({
  ...option,
  element: "TEXT",
})) as Array<OptionData>;
