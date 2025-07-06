import { GalleryFileShape, InputProps } from "./type";
import React from "react";
import ErrorMessage from "@components/shared/others/ErrorMessage";
import { useGallery } from "./hooks/useGallery";
import { capitalize } from "@helpers/string";
import { GalleryItem } from "./GalleryItem";

export function Gallery({
  dataTestId,
  className,
  id,
  label,
  errors,
  name,
  required,
  setValue,
  ...rest
}: InputProps) {
  const IdCurrent = id ?? dataTestId ?? `${name}_${new Date().getTime()}`;
  const { files, handleChangeFile } = useGallery({
    setValue,
    inputName: name ?? "",
  });

  return (
    <>
      <div className="relative w-full  my-4">
        <div>
          <div>
            <p className="line-clamp-1">
              <strong>{capitalize(label ?? "")}</strong>
            </p>
          </div>
          <div className="p-2 border-2 border-disabled rounded-lg shadow-md">
            <ul className="flex flex-wrap">
              {Array.from(files ?? []).map(
                (file: GalleryFileShape, key: number) => (
                  <GalleryItem {...file} key={key} />
                )
              )}
              <li className="w-1/5 h-40 m-1">
                <div className="relative flex items-center justify-center text-center w-full h-full border-2">
                  <div id={`content_file_${name}`}>
                    <input
                      {...rest}
                      name={name}
                      type={"file"}
                      multiple={true}
                      required={!!required}
                      onChange={handleChangeFile}
                      className={`${className} w-full h-full opacity-0 absolute top-0 left-0`}
                      data-testid={dataTestId}
                      id={IdCurrent}
                    />
                  </div>
                  <span> {"Adicionar nova imagem"}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ErrorMessage errors={errors?.message} />
    </>
  );
}
