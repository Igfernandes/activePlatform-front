import { SnackbarContext } from "@contexts/Snackbar";
import { useContext } from "react";

export const useSnackbar = () => {
  return useContext(SnackbarContext);
};
