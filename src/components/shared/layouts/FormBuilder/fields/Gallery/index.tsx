import { InputProps } from "./type";
import React from "react";
import ErrorMessage from "@components/shared/others/ErrorMessage";
import { useGallery } from "./hooks/useGallery";
import { GalleryItem } from "./GalleryItem";
import { UploadModal } from "./Modal";
import i18n from "@configs/i18n";

export const Gallery = React.forwardRef<HTMLInputElement, InputProps>(
  function Gallery(
    {
      id,
      label,
      required,
      ...rest
    }: InputProps,
    ref
  ) {
    const IdCurrent = id ?? `${rest.name}_${new Date().getTime()}`;
    const {
      galleryRef,
      filesUploaded,
      handleUpdateFilesUploaded,
      handleModal,
      isShowModal,
      handleDeleteFile,
    } = useGallery({
      IdCurrent,
      name: rest.name,
    });

    return (
      <>
        <div className="relative w-full my-4 z-50" >
          <div>
            <div>
              <p className="line-clamp-1">{label}</p>
            </div>
            <div className="p-1 border-2 border-disabled rounded-lg shadow-md">
              <ul className="flex flex-wrap min-h-40">
                {filesUploaded.map((file, key: number) => (
                  <GalleryItem
                    {...file}
                    key={key}
                    id={key}
                    handleDelete={handleDeleteFile}
                  />
                ))}
              </ul>
              <button
                onClick={() => handleModal(true)}
                className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-md"
                type="button"
              >
                {i18n("Words.add")}
              </button>

            </div>
            <div>
              <input
                {...rest}
                ref={ref}
                type={"hidden"}
                value={
                  filesUploaded.length > 0
                    ? JSON.stringify(filesUploaded)
                    : undefined
                }
                id={IdCurrent}
              />
            </div>
          </div>
        </div>
        <ErrorMessage
          errors={
            !!required && filesUploaded.length == 0
              ? i18n(`Texts.field_required`)
              : undefined
          }
        />
        <div className="relative z-[9999]">
          <UploadModal
            files={filesUploaded}
            galleryRef={galleryRef}
            handleUpdateFilesUploaded={handleUpdateFilesUploaded}
            isShow={isShowModal}
            handleModal={handleModal}
          />
        </div>
      </>
    );
  }
)
