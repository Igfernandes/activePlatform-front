import { Pen } from "@assets/Icons/black/Pen";
import { RectangleAd } from "@assets/Icons/black/RectangleAd";
import { OptionData } from "../../type";

export const optionsSimples = [
  {
    id: "text",
    field: "text",
    icon: <Pen width={12} height={12} />,
  },
  {
    id: "radio",
    field: "radio",
    icon: <Pen width={12} height={12} />,
  },
  {
    id: "checkbox",
    field: "checkbox",
    icon: <Pen width={12} height={12} />,
  },
  {
    id: "select",
    field: "select",
    icon: <Pen width={12} height={12} />,
  },
  {
    id: "datetime-local",
    field: "datetime-local",
    icon: <Pen width={12} height={12} />,
  },
  {
    id: "date",
    field: "date",
    icon: <Pen width={12} height={12} />,
  },
  {
    id: "file",
    field: "file",
    icon: <Pen width={12} height={12} />,
  },
  {
    id: "color",
    field: "color",
    icon: <Pen width={12} height={12} />,
  },
  {
    id: "url",
    field: "url",
    icon: <Pen width={12} height={12} />,
  },
  {
    id: "hidden",
    field: "hidden",
    icon: <Pen width={12} height={12} />,
  },
  {
    id: "button",
    field: "button",
    icon: <RectangleAd width={12} height={12} />,
  },
].map((option) => ({
  ...option,
  element: "INPUT",
})) as Array<OptionData>;
