import { OptionsFieldTabTarget } from "../../../context/types";

type Props = {
  targetTab: OptionsFieldTabTarget;
};

export function useFieldsTabs({ targetTab }: Props) {
  const TAILWIND_CLASS_TAB_ACTIVE = "bg-red text-white";

  const handleToggleTab = (tabRef: OptionsFieldTabTarget) => {
    return targetTab === tabRef ? TAILWIND_CLASS_TAB_ACTIVE : "bg-white";
  };

  return {
    handleToggleTab,
  };
}
