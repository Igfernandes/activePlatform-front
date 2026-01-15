import { Close } from "@assets/Icons/black/CloseClean";
import { When } from "@components/utilities/When";
import { useFormBuilderContext } from "../../context";
import { useModal } from "./hooks/useModal";
import { HeaderTab } from "./tabs/HeaderTab";
import { useTabs } from "./hooks/useTabs";
import { StructsTab } from "./tabs/StructsTab";
import { ColorsTab } from "./tabs/ColorsTab";
import { useMemo, useRef } from "react";
import { OptionData } from "../../type";
import { options } from "../../data/options";
import { useI18n } from "@contexts/I18n";

export function Modal() {
  const { t } = useI18n()
  const { handleToggleModal, isShowModal, currentField, handleRemoveField } =
    useFormBuilderContext();
  const fieldSettings = useMemo<OptionData | undefined>(() => {
    return options.find((option) => option.field === currentField?.element);
  }, [currentField]);
  const defaultTabs = useRef<Array<string>>(["settings", "colors", "structs"]);
  const tabs = useMemo<Array<string>>(() => {
    if (!fieldSettings) return defaultTabs.current;

    const fieldTabs = fieldSettings?.editTabs ?? [];

    return [
      ...fieldTabs.map((tab) => tab.name),
      "colors",
      "structs",
    ];
  }, [fieldSettings]);
  const { activeTab, handleChangeTab } = useTabs({ tabs });
  const { handleSubmit, handleChangeField, handleUpdateField, payload } =
    useModal({
      currentField: currentField,
    });


  return (
    <When value={isShowModal}>
      <div className="modal fixed top-0 left-0 Z-[999] w-full h-full bg-[#00000059] flex justify-center items-center">
        <div className="bg-zinc-100 sm:max-w-[60%] max-h-[95vh] min-w-[350px] w-[60%] overflow-x-hidden overflow-y-auto p-6 rounded-xl">
          <div id="form">
            <div className="flex items-center border-b-2 border-b-secondary pb-3 mb-1">
              <div>
                <h4 className="text-lg">
                  {t("Words.edit") + ": "}
                  <strong>{currentField?.element.toLocaleUpperCase()}</strong>
                </h4>
              </div>
              <div
                className="ml-auto bg-tertiary rounded-lg p-1 cursor-pointer"
                onClick={() => handleToggleModal(false)}
              >
                <Close />
              </div>
            </div>
            <HeaderTab
              menus={tabs}
              activeMenu={activeTab}
              onChangeTab={handleChangeTab}
            />
            {fieldSettings?.editTabs?.map(({ component: Component }, key) => (
              <Component
                key={`form_builder_table_${key}`}
                tabActive={activeTab}
                field={payload}
                oChangeField={handleChangeField}
                handleUpdateField={handleUpdateField}
              />
            ))}
            <ColorsTab
              tabActive={activeTab}
              field={payload}
              oChangeField={handleChangeField}
            />
            <StructsTab
              tabActive={activeTab}
              field={payload}
              oChangeField={handleChangeField}
            />
            <div className="mt-8 text-right">
              <button
                type="button"
                className="border-2 border-rose-500 py-2 px-8 text-black font-semibold rounded-md mr-4"
                onClick={() => {
                  handleRemoveField(currentField?.id ?? "");
                  handleChangeTab("settings");
                }}
              >
                {t("Words.remove")}
              </button>
              <button
                onClick={(ev) => {
                  handleSubmit(ev);
                  handleChangeTab("settings");
                }}
                type="button"
                className="bg-rose-500 border-2 border-rose-500 py-2 px-10 text-white rounded-md font-semibold"
              >
                {t("Words.save")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </When>
  );
}
