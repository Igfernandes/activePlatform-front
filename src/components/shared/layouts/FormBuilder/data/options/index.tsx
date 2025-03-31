import { OptionData } from "../../type";
import { optionsUser } from "./users";
import { optionsSimples } from "./simples";
import { optionsLayout } from "./layout";

export const options: Array<OptionData> = [
  ...optionsUser,
  ...optionsSimples,
  ...optionsLayout,
];
