import { HookSelectorProps } from "../type";

export function useSelectorForm({ selectors }: HookSelectorProps) {
  const getValues = () => {
    const filteredSelectors = selectors.filter(
      (selector) => selector.isChecked
    );

    return filteredSelectors.map((selector) => selector.value);
  };
  return {
    getValues,
  };
}
