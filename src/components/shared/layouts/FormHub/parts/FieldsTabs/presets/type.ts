import { FieldsShape } from "@type/Fields";
import { FieldsGroupsShape } from "@type/Fields/fieldsGroups";
import { OptionsFieldTabTarget } from "../../../context/types";

export type PresetsFieldsTabsProps = {
  tailwindClass: string;
  fieldsGroups: FieldsGroupsShape[];
  fields: FieldsShape[];
  handleToggleTab: (
    tabRef: OptionsFieldTabTarget
  ) => "bg-red text-white" | "bg-white";
  handleChangeTab: (tabId: OptionsFieldTabTarget) => void;
};
