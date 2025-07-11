export type PostFilesPayload = {
  files: Array<File>;
  packageRef: string;
};

export type PostFilesResponse = {
  success?: string;
  errors?: Array<string>;
  files: FilesData;
};

type FilesData = {
  success: Array<string>;
  failed: Array<string>;
};
