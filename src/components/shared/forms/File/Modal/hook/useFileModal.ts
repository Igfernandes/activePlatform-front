import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
};

export function useFileModal({ name }: Props) {
  const { setValue, watch } = useFormContext();
  const [progress, setProgress] = useState(0);
  const [files, setFiles] = useState<FileList>();

  const handleCleanFile = () => {
    setFiles(undefined);
    setValue(`${name}`, undefined);
  };

  useEffect(() => {
    if (!files) return setProgress(0);

    // Reseta o progresso quando um novo arquivo é selecionado
    setProgress(0);
    let interval = setInterval(() => "");

    const fakeUpload = new Promise((resolve) => {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            resolve(Promise);
            return 100;
          }
          return prev + 25; // Incrementa o progresso
        });
      }, 300);
    });

    fakeUpload.then();

    // Limpa o intervalo se o componente desmontar ou se um novo arquivo for selecionado
    return () => clearInterval(interval);
  }, [files]);

  useEffect(() => {
    const value = watch(`${name}`);
    if (!value) setFiles(undefined);
  }, [watch(`${name}`)]);

  return {
    progress,
    setFiles,
    files,
    handleCleanFile,
    setValue,
  };
}
