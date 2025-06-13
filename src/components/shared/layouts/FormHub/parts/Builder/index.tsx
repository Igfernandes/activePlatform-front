import { DotsOptions } from "@components/shared/others/DotsOptions";
import i18n from "@configs/i18n";
import { FormBuildProps } from "./type";
import { capitalize } from "@helpers/string";
import { FormBuilderViewed } from "./states/Viewed";
import { FormBuilderEditing } from "./states/Editing";
import { StoreFieldsModal } from "./Modals/StoreFields";
import useWindow from "@hooks/useWindow";
import { When } from "@components/utilities/When";
import { useModalContext } from "../../context/Modal";
import { useFieldsGroupsContext } from "../../context/FieldsGroups";

export function Builder({
  fields = [],
  title = "",
  isEditing,
  createdAt,
}: FormBuildProps) {
  const { screenType } = useWindow();
  const { handleToggleModal, isShowModal } = useModalContext();
  const { handleFieldsGroupToEditing, fieldsGroupEditing, fieldsGroups } =
    useFieldsGroupsContext();

  return (
    <div className="mt-5 p-6 rounded-2xl bg-white">
      <div className="flex flex-wrap lg:flex-none justify-between mb-1 pb-4 ">
        <div className="flex justify-between items-center w-full lg:w-auto ">
          {/* <GripVertical className="cursor-pointer" /> */}
          <h2 className="text-2xl ml-1">
            <strong>
              {capitalize(i18n(`Words.${title?.toLowerCase()}`) || title)}
            </strong>
          </h2>
          <When value={screenType === "MOBILE" && fieldsGroupEditing != title}>
            <div>
              <DotsOptions
                actions={[
                  {
                    text: i18n("Words.edit"),
                    handle: () => handleFieldsGroupToEditing(title),
                  },
                ]}
              />
            </div>
          </When>
        </div>
        <div className="flex">
          <When value={!!createdAt}>
            <div className="mr-2">
              <span className="text-secondary text-xs  md:text-base">
                {`Atualizado em: ${new Date(createdAt).toLocaleString()}`}
              </span>
            </div>
          </When>
          <When value={screenType === "DESKTOP" && fieldsGroupEditing != title}>
            <div>
              <DotsOptions
                actions={[
                  {
                    text: i18n("Words.edit") || "Edit",
                    handle: () => handleFieldsGroupToEditing(title),
                  },
                ]}
              />
            </div>
          </When>
        </div>
      </div>
      <FormBuilderViewed fields={fields} isEditing={isEditing} />
      <FormBuilderEditing
        fields={fields}
        isEditing={isEditing}
        handleEdit={handleFieldsGroupToEditing}
        onModal={handleToggleModal}
      />
      <StoreFieldsModal
        isShowModal={isShowModal}
        onModal={handleToggleModal}
        groups={fieldsGroups}
      />
    </div>
  );
}
