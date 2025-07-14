import React, { useEffect } from "react";
import { useGallery } from "./hooks/useGallery";
import { GalleryItem } from "./GalleryItem";
import { UploadModal } from "./Modal";
import i18n from "@configs/i18n";
import { FieldsShape } from "@type/Fields";
import { useFormContext } from "react-hook-form";
import { GalleryFileShape } from "./type";

export function TGallery({ label, name, defaultValue }: FieldsShape) {
  const IdCurrent = `input_${name}`;
  const { setValue } = useFormContext();
  const {
    galleryRef,
    filesUploaded,
    handleUpdateFilesUploaded,
    handleModal,
    isShowModal,
    handleDeleteFile,
  } = useGallery({
    IdCurrent,
    setValue,
    name: name ?? "",
  });

  useEffect(() => {
    if (!defaultValue) return;

    const files = JSON.parse(defaultValue) ?? [];

    if (!Array.isArray(files)) return;
    
    handleUpdateFilesUploaded(
      files.map(
        (fileUrl: string) =>
          ({
            name: fileUrl.split("/")[-2],
            url: fileUrl,
            status: "UPLOADED",
            type: "image",
          } as GalleryFileShape)
      )
    );
  }, [defaultValue]);

  return (
    <tr>
      <td colSpan={2}>
        <div className="relative w-full  my-4 z-50">
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
                className="absolute bottom-0 right-0 bg-red text-white p-2 rounded-md"
                type="button"
              >
                {i18n("Words.add")}
              </button>
              <UploadModal
                files={filesUploaded}
                galleryRef={galleryRef}
                handleUpdateFilesUploaded={handleUpdateFilesUploaded}
                isShow={isShowModal}
                handleModal={handleModal}
              />
            </div>
            <div>
              <input
                name={name}
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
      </td>
    </tr>
  );
}
