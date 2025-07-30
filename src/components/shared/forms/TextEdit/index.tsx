import { When } from "@components/utilities/When";
import React from "react";
import ErrorMessage from "@components/shared/others/ErrorMessage";
import { TextAreaProps } from "../TextArea/type";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useFormContext } from "react-hook-form";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline", "strike", "blockquote", "code"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "code",
  "color",
  "background",
  "script",
  "list",
  "bullet",
  "indent",
  "align",
  "link",
];
export const TextEdit = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextEdit(
    {
      dataTestId,
      id,
      label,
      errors,
      required,
      defaultValue,
      placeholder,
      ...rest
    }: TextAreaProps,
    ref
  ) {
    const IdCurrent = id ?? dataTestId;
    const { setValue: updateValue } = useFormContext();

    return (
      <>
        <div className="relative">
          <label htmlFor={IdCurrent} className="font-semibold ml-1">
            {label}:
            <When value={required}>
              <span className="text-red">*</span>
            </When>
          </label>
          <textarea className="hidden" {...rest} ref={ref} />
          <div className="mt-1 mb-36 md:mb-16 p-1">
            <ReactQuill
              theme="snow"
              modules={modules}
              formats={formats}
              className="h-[30vh] md:h-60 "
              defaultValue={String(defaultValue ?? "")}
              onChange={(value) => {
                if (!rest.name) return;

                updateValue(rest.name, String(value ?? ""));
              }}
              placeholder={placeholder}
            />
          </div>
        </div>
        <ErrorMessage errors={errors?.message} />
      </>
    );
  }
);
