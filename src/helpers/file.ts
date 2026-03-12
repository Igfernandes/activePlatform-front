import imageCompression from "browser-image-compression";

// formatFileSize.js
export const formatFileSize = (file?: File) => {
  if (!file || !file.size) return "0B";

  const size = file.size;
  const units = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log10(size) / 3); // Calcula a unidade apropriada

  const formattedSize = (size / Math.pow(1024, i)).toFixed(2); // Ajusta para a unidade
  return `${formattedSize.replace(/\.00$/, "")}${units[i]}`; // Remove ".00" se for número inteiro
};

export function isFileList(value: unknown): value is FileList {
  return typeof value === "object" && value instanceof FileList;
}

export function fileToBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result); // Inclui o "data:image/jpeg;base64,..."
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function getFileName(file?: string) {
  if (!file) return;
  const fileParts = file.split("\\");

  return fileParts[fileParts.length - 1] || "";
}

export function getFileUrl(file: File | null, alternative?: string) {
  if (file) return URL.createObjectURL(file);

  return alternative ?? "";
}

export function bytesToMB(bytes: number, decimalPlaces: number = 4): string {
  if (bytes === 0) return "0 MB";
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(decimalPlaces)} MB`;
}
export async function compressImage(file: File): Promise<File> {
  const options = {
    maxSizeMB: 1, // tamanho máximo
    maxWidthOrHeight: 1080, // redimensionar proporcional
    useWebWorker: true, // uso de web worker para desempenho
  };
  const compressedBlob = await imageCompression(file, options);
  const uniqueName = `${Date.now()}-${file.name}`;

  return new File([compressedBlob], uniqueName, {
    type: compressedBlob.type,
    lastModified: Date.now(),
  });
}
