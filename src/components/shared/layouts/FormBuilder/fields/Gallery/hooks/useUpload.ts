import { GalleryFileShape } from "../type";
import usePostFiles from "@services/Files/Post/usePost";
import { HookUploadProps } from "../Modal/type";

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

    for (let index = 0; index < filesNotUploaded.length; index++) {
      const file = filesNotUploaded[index];

      await postFiles({
        files: [file.ref],
        packageRef: galleryRef.current,
      }).then(({ files: filesUploaded }) => {
        processedFiles[index] = {
          ...file,
          url: filesUploaded.success ? filesUploaded.success[0] : file.url,
          status: filesUploaded.failed[0] ? "INVALIDED" : "UPLOADED",
        };

        isInvalidFile = filesUploaded.failed.length > 0;
      });
    }

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
