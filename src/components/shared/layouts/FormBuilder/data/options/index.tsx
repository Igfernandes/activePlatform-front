import { OptionData } from "../../type";
import { optionsUser } from "./users";
import { optionsSimples } from "./simples";
import { optionsLayout } from "./layout";
import { optionsCustom } from "./custom";

export const options: Array<OptionData> = [
  ...optionsUser,
  ...optionsSimples,
  ...optionsCustom,
  ...optionsLayout,
];
