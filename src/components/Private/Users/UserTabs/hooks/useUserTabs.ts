import { FieldsShape } from "../../../../../types/Fields";
import { OptionsUserTabTarget } from "../../context/types";

type Props = {
  targetTab: OptionsUserTabTarget;
};

export function useUserTabs({ targetTab }: Props) {
  const TAILWIND_CLASS_TAB_ACTIVE = "bg-red text-white";

  const handleToggleTab = (tabRef: OptionsUserTabTarget) => {
    return targetTab === tabRef ? TAILWIND_CLASS_TAB_ACTIVE : "bg-white";
  };

  // Remove duplicidades com base na coluna "group"
  const uniqueFieldsByGroup = (userFields: FieldsShape[]) =>
    userFields.filter(
      (field, index, self) =>
        index === self.findIndex((f) => f.group === field.group)
    );
  return {
    handleToggleTab,
    uniqueFieldsByGroup,
  };
}
