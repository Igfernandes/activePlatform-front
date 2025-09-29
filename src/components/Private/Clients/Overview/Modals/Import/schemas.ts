import { z } from "zod";

export const ImportSchema = z.object({
  excel: z
    .custom<FileList>(
      (files) => files instanceof FileList && files.length > 0,
      {
        message: "Arquivo é obrigatório",
      }
    )
    .refine(
      (files) => {
        const file = files[0];
        if (!file) return false;
        // valida extensão
        const validExt = /\.(xls|xlsx)$/i.test(file.name);
        // valida MIME type
        const validMime =
          file.type === "application/vnd.ms-excel" ||
          file.type ===
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
        return validExt && validMime;
      },
      {
        message: "Somente arquivos Excel (.xls ou .xlsx) são permitidos",
      }
    ),
});

export type ImportPayload = z.infer<typeof ImportSchema>;
