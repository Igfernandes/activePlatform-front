import { GalleryFileShape } from "../type";
import usePostFiles from "@services/Files/Post/usePost";
import { HookUploadProps } from "../Modal/type";
import { compressImage } from "@helpers/file";

export function useUpload({
  galleryRef,
  handleUpdateFilesUploaded,
  setFiles,
  files,
  handleModal,
}: HookUploadProps) {
  const { mutateAsync: postFiles, isPending: isLoading } = usePostFiles();

  const handleUploadFiles = async () => {
    const processedFiles = [] as Array<GalleryFileShape>;
    let isInvalidFile = false;
    const filesNotUploaded = files.filter((file) => file.status === "AWAITING");

    if (filesNotUploaded.length == 0) {
      handleUpdateFilesUploaded(files);
      return handleModal(false);
    }

    await postFiles({
      files: await Promise.all(filesNotUploaded.map((file) => compressImage(file.ref))),
      packageRef: galleryRef.current,
    }).then(({ files: filesUploaded }) => {
      const totalFiles =
        filesUploaded.failed.length > filesUploaded.success.length
          ? filesUploaded.failed.length
          : filesUploaded.success.length;

      for (let i = 0; i < totalFiles; i++) {
        processedFiles.push({
          ...filesNotUploaded[i],
          url: filesUploaded.success[i],
          status: filesUploaded.failed[i] ? "INVALIDED" : "UPLOADED",
        });
      }

      isInvalidFile = filesUploaded.failed.length > 0;
    });

    setFiles(processedFiles);
    if (isInvalidFile) return;

    handleUpdateFilesUploaded(processedFiles);
  };

  return {
    files,
    handleUploadFiles,
    isLoading,
  };
}
