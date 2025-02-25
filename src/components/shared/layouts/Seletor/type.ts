import { CheckboxProps } from "@components/shared/layouts/Checkbox/type";
import { Dispatch, SetStateAction } from "react";

type Props = {
  value: SelectorValue;
  onChange?: () => SelectorShape | undefined;
};

export type SelectorProps = Omit<
  CheckboxProps,
  "dataTestId" | "value" | "onChange"
> &
  Props;
export type HookSelectorProps = {
  selectors: Array<SelectorShape>;
  setSelectors: Dispatch<SetStateAction<SelectorShape[]>>;
};

export type SelectorShape = {
  isChecked: boolean;
  value: SelectorValue;
};

export type SelectorValue = string | "all";
