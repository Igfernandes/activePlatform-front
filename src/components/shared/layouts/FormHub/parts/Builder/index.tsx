import { DotsOptions } from "@components/shared/others/DotsOptions";
import i18n from "@configs/i18n";
import { FormBuildProps } from "./type";
import { capitalize } from "@helpers/string";
import { GripVertical } from "@assets/Icons/black/GripVertical";
import { FormBuilderViewed } from "./states/Viewed";
import { FormBuilderEditing } from "./states/Editing";
import { StoreFieldsModal } from "./Modals/StoreFields";

export function Builder({
  fields = [],
  title = "",
  isEditing,
  handleEdit,
  onModal,
  isShowModal,
  fieldGroups = [],
}: FormBuildProps) {
  return (
    <div className="mt-5 p-6 rounded-2xl bg-white">
      <div className="flex justify-between mb-1 pb-4 ">
        <div className="flex items-center">
          <GripVertical className="cursor-pointer" />
          <h2 className="text-2xl ml-1">
            <strong>
              {capitalize(i18n(`words.${title?.toLowerCase()}`) || title)}
            </strong>
          </h2>
        </div>
        <div className="flex">
          <div className="mr-2">
            <span className="text-secondary text-base">
              {"Atualizado em: Dez, 16, 2024 - 12:27PM"}
            </span>
          </div>
          <div>
            <DotsOptions
              actions={[
                {
                  text: i18n("words.edit") || "Edit",
                  handle: () => handleEdit(title),
                },
              ]}
            />
          </div>
        </div>
      </div>
      <FormBuilderViewed fields={fields} isEditing={isEditing} />
      <FormBuilderEditing
        fields={fields}
        isEditing={isEditing}
        handleEdit={handleEdit}
        onModal={onModal}
      />
      <StoreFieldsModal
        isShowModal={isShowModal}
        onModal={onModal}
        groups={fieldGroups}
      />
    </div>
  );
}
