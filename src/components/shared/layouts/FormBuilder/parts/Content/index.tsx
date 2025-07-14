import { useFormBuilderContext } from "../../context";
import { Settings } from "@assets/Icons/black/Settings";
import { Trash } from "@assets/Icons/black/Trash";

import { Field } from "./Field";
export function FormBuilderContent() {
  const {
    fields,
    handleChangePositionField,
    handleToggleModal,
    handleRemoveField,
  } = useFormBuilderContext();

  return (
    <div
      className="canvas w-full md:w-[70%] min-h-[50vh] mt-6 md:ml-2"
      style={{
        border: "2px dashed #ccc",
        display: "flex",
      }}
    >
      <div className="canvas-fields w-full p-2">
        {fields?.map((field, i) => (
          <div
            key={`${field.id}_${i}`}
            className={`relative z-0 inline-block mr-1 ${
              field.className?.includes("w")
                ? field.className
                : `${field.className ?? ""} w-full`
            }`}
          >
            <div className="flex items-center justify-end z-[999]">
              <div>
                <input
                  className="w-10 border-[1px] pl-1 text-right rounded-md"
                  type="number"
                  name={`${field.id}_${i}`}
                  min={0}
                  max={fields.length - 1}
                  value={i}
                  onChange={(ev) => {
                    handleChangePositionField(i, +ev.currentTarget.value);
                  }}
                />
              </div>
              <div className="mx-1 cursor-pointer">
                <Settings
                  onClick={() => handleToggleModal(true, field.id)}
                  width={20}
                  height={20}
                />
              </div>
              <div className="cursor-pointer">
                <Trash
                  width={13}
                  height={13}
                  fill={"#d50245"}
                  onClick={() => handleRemoveField(field.id)}
                />
              </div>
            </div>
            <div className="my-1 cursor-pointer z-40">
              <Field {...field} id={field.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
