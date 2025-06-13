import { Modal } from "@components/shared/layouts/Modal";
import { ModalProps } from "@components/shared/layouts/Modal/type";
import i18n from "@configs/i18n";
import { Button } from "@components/shared/layouts/Button";
import { UploadPreview } from "./UploadPreview";
import { UploadPrompt } from "./UploadPrompt";
import { When } from "@components/utilities/When";
import { useFileModal } from "./hook/useFileModal";

type Props = Omit<ModalProps, "children" | "title"> & {
  fileId: string;
  name: string;
  accept?: string;
};

export function FileModal({
  handleModal,
  isShowModal,
  name,
  fileId,
  accept,
}: Props) {
  const { progress, files, setFiles, handleCleanFile, setValue } = useFileModal(
    {
      name,
    }
  );
  const fileIdModal = `modal_${fileId}`;

  return (
    <Modal title={"Upload"} isShowModal={isShowModal} handleModal={handleModal}>
      <div>
        <When value={!!files}>
          <UploadPreview
            file={files && files.length > 0 ? files[0] : undefined}
            onCleanFile={handleCleanFile}
            progress={progress}
          />
        </When>
        <When value={!files}>
          <UploadPrompt fileId={fileIdModal} />
        </When>
        <div className="flex justify-between mt-4">
          <div>
            <p className="text-[.63rem]">
              {i18n(`Words.allowed_formats_image`)}
            </p>
          </div>
          <div>
            <p className="text-[.63rem]">{i18n(`Words.allowed_size_image`)}</p>
          </div>
        </div>
        <div>
          <input
            id={fileIdModal}
            className="hidden"
            type="file"
            accept={accept}
            onChange={(ev) => {
              const currentFiles = ev.currentTarget.files;

              if (!currentFiles || currentFiles.length == 0) return;

              setFiles(currentFiles);
            }}
          />
        </div>
      </div>
      <div className="flex justify-between border-t-2 border-secondary mt-6 pt-4">
        <div className="w-[47%]">
          <Button
            type="button"
            className="border-secondary border-2 font-semibold"
            text={i18n(`Words.cancel`)}
            onClick={() => handleModal(false)}
          />
        </div>
        <div className="w-[47%]">
          <Button
            type="button"
            text={i18n(`Words.save`)}
            className="bg-red  text-white font-semibold disabled:bg-disable"
            disabled={progress == 100 ? false : true}
            onClick={() => {
              handleModal(false);
              setValue(`${name}`, files);
            }}
          />
        </div>
      </div>
    </Modal>
  );
}
