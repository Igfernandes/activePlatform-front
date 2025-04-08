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
