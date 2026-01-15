import { ChangeEvent, useCallback, useMemo, useRef } from "react";
import useGetGalleries from "../services/useGet";
import usePost from "../services/usePost";
import { compressImage } from "@helpers/file";
import { useModalContext } from "@contexts/Modal";
import useDelete from "../services/useDelete";

type Props = {
  url: string;
  key: string;
};

export function useGallery({ url, key }: Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const gallery = useGetGalleries(url, key);
  const { mutateAsync: postFile } = usePost({ key, url });
  const images = useMemo(() => {
    return gallery.map((image) => image);
  }, [gallery]);
  const { handleToggleModal } = useModalContext();
  const { mutateAsync: deleteFile } = useDelete({ key, url });

  const resetFile = useCallback(() => {
    if (fileRef.current) {
      fileRef.current.value = "";
    }
  }, [fileRef]);
  const isUploadingRef = useRef(false);

  const handleUploadFiles = useCallback(
    async (ev: ChangeEvent<HTMLInputElement>) => {
      if (isUploadingRef.current) return;
      isUploadingRef.current = true;

      try {
        const filesUploads = ev.currentTarget.files;
        if (!filesUploads || filesUploads.length === 0) return;

        handleToggleModal("LOADING");

        const filesArray = Array.from(filesUploads);

        const optimizedImages = await Promise.all(
          filesArray.map((file) => compressImage(file))
        );

        await postFile({ files: optimizedImages });
      } finally {
        resetFile();
        handleToggleModal(null);
        isUploadingRef.current = false;
      }
    },
    [postFile, handleToggleModal, resetFile]
  );

  const handleDeleteImage = useCallback(
    async (id: number) => {
      handleToggleModal("LOADING");
      await deleteFile(id);
      handleToggleModal(null);
    },
    [deleteFile, handleToggleModal]
  );

  return {
    handleUploadFiles,
    images,
    postFile,
    fileRef,
    handleDeleteImage,
  };
}
