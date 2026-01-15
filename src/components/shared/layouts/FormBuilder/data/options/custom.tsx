import { Pen } from "@assets/Icons/black/Pen";
import { OptionData } from "../../type";
import { SettingsGroupsTab } from "../../parts/Modal/tabs/Settings/GroupsTab";
import { SizesTab } from "../../parts/Modal/tabs/SizesTab";
import { SettingsFieldsTab } from "../../parts/Modal/tabs/Settings/FieldsTab";

export const optionsCustom = [
  {
    id: "gallery",
    field: "gallery",
    editTabs: [
      {
        name: "settings",
        component: SettingsFieldsTab,
      },
      {
        name: "sizes",
        component: SizesTab,
      },
    ],
    icon: <Pen width={12} height={12} />,
  },
  {
    id: "list",
    field: "list",
    editTabs: [
      {
        name: "settings",
        component: SettingsGroupsTab,
      },
      {
        name: "sizes",
        component: SizesTab,
      },
    ],
    icon: <Pen width={12} height={12} />,
  },
  {
    id: "checkboxes",
    field: "checkboxes",
    editTabs: [
      {
        name: "settings",
        component: SettingsGroupsTab,
      },
      {
        name: "sizes",
        component: SizesTab,
      },
    ],
    icon: <Pen width={12} height={12} />,
  },
] as Array<OptionData>;
