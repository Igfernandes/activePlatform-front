import { Pen } from "@assets/Icons/black/Pen";
import { OptionData } from "../../type";
import { SettingsFieldsTab } from "../../parts/Modal/tabs/Settings/FieldsTab";

export const optionsUser = [
  {
    id: "name",
    field: "name",
    icon: <Pen width={12} height={12} />,
  },
  {
    id: "email",
    field: "email",
    icon: <Pen width={12} height={12} />,
  },
  {
    id: "password",
    field: "password",
    icon: <Pen width={12} height={12} />,
  },
  {
    id: "phone",
    field: "phone",
    icon: <Pen width={12} height={12} />,
  },
  {
    id: "birthdate",
    field: "birthdate",
    icon: <Pen width={12} height={12} />,
  },
  {
    id: "cpf",
    field: "cpf",
    icon: <Pen width={12} height={12} />,
  },
  {
    id: "zipcode",
    field: "zipcode",
    icon: <Pen width={12} height={12} />,
  },
  {
    id: "dependents",
    field: "dependents",
    icon: <Pen width={12} height={12} />,
  },
].map((option) => ({
  ...option,
  element: "INPUT",
  editTabs: [
    {
      name: "settings",
      component: SettingsFieldsTab,
    },
  ],
})) as Array<OptionData>;
