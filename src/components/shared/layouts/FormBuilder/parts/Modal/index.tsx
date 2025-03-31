import { Close } from "@assets/Icons/black/CloseClean";
import { When } from "@components/utilities/When";
import { useFormBuilderContext } from "../../context";
import i18n from "@configs/i18n";
import { useModal } from "./hooks/useModal";
import { SettingsTab } from "./tabs/SettingsTab";
import { HeaderTab } from "./tabs/HeaderTab";
import { useTabs } from "./hooks/useTabs";
import { StructsTab } from "./tabs/StructsTab";
import { SizesTab } from "./tabs/SizesTab";
import { ColorsTab } from "./tabs/ColorsTab";

export function Modal() {
  const { handleToggleModal, isShowModal, currentField, handleRemoveField } =
    useFormBuilderContext();

  const { activeTab, handleChangeTab } = useTabs();
  const { handleSubmit, handleChangeField, payload } = useModal({
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
                  {"Edição: "}
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
              menus={["settings", "sizes", "colors", "structs"]}
              activeMenu={activeTab}
              onChangeTab={handleChangeTab}
            />
            <SettingsTab
              tabActive={activeTab}
              field={payload}
              oChangeField={handleChangeField}
            />
            <SizesTab
              tabActive={activeTab}
              field={payload}
              oChangeField={handleChangeField}
            />
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
                className="border-2 border-red py-2 px-8 text-black font-semibold rounded-md mr-4"
                onClick={() => {
                  handleRemoveField(currentField?.id ?? "");
                  handleChangeTab("settings");
                }}
              >
                {i18n(`words.remove`)}
              </button>
              <button
                onClick={(ev) => {
                  handleSubmit(ev);
                  handleChangeTab("settings");
                }}
                type="button"
                className="bg-red border-2 border-red py-2 px-10 text-white rounded-md font-semibold"
              >
                {i18n(`words.save`)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </When>
  );
}
