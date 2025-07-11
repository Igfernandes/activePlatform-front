import { GalleryFileShape, InputProps } from "./type";
import React from "react";
import ErrorMessage from "@components/shared/others/ErrorMessage";
import { useGallery } from "./hooks/useGallery";
import { GalleryItem } from "./GalleryItem";
import { UploadModal } from "./Modal";
import { useModal } from "./hooks/useModal";

export function Gallery({
  dataTestId,
  id,
  label,
  errors,
  name,
  required,
  setValue,
  ...rest
}: InputProps) {
  const IdCurrent = id ?? dataTestId ?? `${name}_${new Date().getTime()}`;
  const { files } = useGallery({
    setValue,
    inputName: name ?? "",
  });
  const { handleModal, isShowModal } = useModal();

  return (
    <>
      <div className="relative w-full  my-4">
        <div>
          <div>
            <p className="line-clamp-1">{label}</p>
          </div>
          <div className="p-2 border-2 border-disabled rounded-lg shadow-md">
            <ul className="flex flex-wrap">
              {Array.from(files ?? []).map(
                (file: GalleryFileShape, key: number) => (
                  <GalleryItem {...file} key={key} />
                )
              )}
              <li className="w-1/2 md:w-1/5 h-40 m-1">
                <div className="relative flex items-center justify-center text-center w-full h-full border-2">
                  <div id={`content_file_${name}`}></div>
                  <span> {"Adicionar nova imagem"}</span>
                </div>
              </li>
            </ul>

            <button
              onClick={() => handleModal(true)}
              className="absolute top-6 right-0 bg-red text-white p-2"
              type="button"
            >
              Adicionar
            </button>
            <UploadModal isShow={isShowModal} handleModal={handleModal} />
          </div>
          <div>
            <input
              {...rest}
              name={name}
              type={"hidden"}
              required={!!required}
              data-testid={dataTestId}
              id={IdCurrent}
            />
          </div>
        </div>
      </div>
      <ErrorMessage errors={errors?.message} />
    </>
  );
}
