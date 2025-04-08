import { DotsOptions } from "@components/shared/others/DotsOptions";
import i18n from "@configs/i18n";
import { FormBuildProps } from "./type";
import { capitalize } from "@helpers/string";
import { FormBuilderViewed } from "./states/Viewed";
import { FormBuilderEditing } from "./states/Editing";
import { StoreFieldsModal } from "./Modals/StoreFields";
import useWindow from "@hooks/useWindow";
import { When } from "@components/utilities/When";

export function Builder({
  fields = [],
  title = "",
  isEditing,
  handleEdit,
  onModal,
  isShowModal,
  fieldGroups = [],
  createdAt,
}: FormBuildProps) {
  const { screenType } = useWindow();

  return (
    <div className="mt-5 p-6 rounded-2xl bg-white">
      <div className="flex flex-wrap lg:flex-none justify-between mb-1 pb-4 ">
        <div className="flex justify-between items-center w-full lg:w-auto ">
          {/* <GripVertical className="cursor-pointer" /> */}
          <h2 className="text-2xl ml-1">
            <strong>
              {capitalize(i18n(`words.${title?.toLowerCase()}`) || title)}
            </strong>
          </h2>
          <When value={screenType === "MOBILE"}>
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
          </When>
        </div>
        <div className="flex">
          <When value={!!createdAt}>
            <div className="mr-2">
              <span className="text-secondary text-base text-[11px] md:text-base">
                {`Atualizado em: ${new Date(createdAt).toLocaleString()}`}
              </span>
            </div>
          </When>
          <When value={screenType === "DESKTOP"}>
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
          </When>
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
