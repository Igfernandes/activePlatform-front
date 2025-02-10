export type SnackbarContextData = {
  dispatchSnackbar: (
    args: Pick<SnackbarProps, "type" | "message" | "title">
  ) => void;
};

export type SnackbarProps = {
  type?: "error" | "success";
  message?: string;
  title?: string;
  timestamp: Date;
};

export type SnackbarData = Pick<SnackbarProps, "message" | "type" | "title">;
