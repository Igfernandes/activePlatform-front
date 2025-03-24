import React, { createContext, ReactNode, useCallback, useState } from "react";
import { SnackbarProps, SnackbarData, SnackbarContextData } from "./types";
import SnackbarMessage from "@components/shared/others/SnackbarMessage";
import { When } from "@components/utilities/When";

export const SnackbarContext = createContext({
  dispatchSnackbar: () => "",
} as SnackbarContextData);

const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [snackbar, setSnackbar] = useState<SnackbarProps>({} as SnackbarProps);
  const addSnackbar = useCallback(({ type, message, title }: SnackbarData) => {
    const timestamp = new Date();
    timestamp.setSeconds(timestamp.getSeconds() + 1);
    
    setSnackbar({
      type,
      message,
      title,
      timestamp,
    });
  }, []);

  const deleteSnackbar = () => {
    setTimeout(() => setSnackbar({} as SnackbarProps), 1000);
  };

  return (
    <SnackbarContext.Provider
      value={{
        dispatchSnackbar: addSnackbar,
      }}
    >
      <When value={!!snackbar.message}>
        <div style={{ position: "fixed", zIndex: 9998, right: 0 }}>
          <SnackbarMessage
            snackbar={snackbar}
            deleteSnackbar={deleteSnackbar}
          />
        </div>
      </When>
      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
