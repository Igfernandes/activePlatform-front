import { Dispatch, SetStateAction } from "react";
import { SelectorShape } from "../type";

export type TableDataShape = Array<Record<string, unknown>>;

export type SelectorContextData = {
  selectors: SelectorShape[];
  setSelectors: React.Dispatch<React.SetStateAction<SelectorShape[]>>;
  handleCheckedAll: () => void;
  handleChangeSelector: (value: string) => void;
};

export type SelectorProps = {
  children: React.ReactNode;
  selectors: Array<SelectorShape>;
  setSelectors: Dispatch<SetStateAction<SelectorShape[]>>;
};
