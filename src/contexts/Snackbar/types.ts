export type SnackbarContextData = {
  dispatchSnackbar: (
    args: Pick<SnackbarProps, "type" | "message" | "title">
  ) => void;
};

export type SnackbarProps = {
  type?: "error" | "success" | "notice";
  message?: string;
  title?: string;
  timestamp: Date;
};

export type SnackbarData = Pick<SnackbarProps, "message" | "type" | "title">;
