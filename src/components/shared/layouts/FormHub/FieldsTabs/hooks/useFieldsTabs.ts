import { FieldsShape } from "../../../../../../types/Fields";
import { OptionsFieldTabTarget } from "../../context/types";

type Props = {
  targetTab: OptionsFieldTabTarget;
};

export function useFieldsTabs({ targetTab }: Props) {
  const TAILWIND_CLASS_TAB_ACTIVE = "bg-red text-white";

  const handleToggleTab = (tabRef: OptionsFieldTabTarget) => {
    return targetTab === tabRef ? TAILWIND_CLASS_TAB_ACTIVE : "bg-white";
  };

  // Remove duplicidades com base na coluna "group"
  const uniqueFieldsByGroup = (fields: FieldsShape[]) =>
    fields.filter(
      (field, index, self) =>
        index === self.findIndex((f) => f.group === field.group)
    );
  return {
    handleToggleTab,
    uniqueFieldsByGroup,
  };
}
