import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { ModalContextData, ModalProps } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ModalContext = createContext<ModalContextData<any>>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  {} as ModalContextData<any>
);

function ModalProvider<OptionsType>({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<ModalProps<OptionsType>>(
    {} as ModalProps<OptionsType>
  );
  const handleToggleModal = useCallback(
    (type: OptionsType, id: string | number = 0) => {
      console.log("type", type);
      setModal({
        type,
        id,
      });
    },
    []
  );

  const props = useMemo<ModalContextData<OptionsType>>(
    () => ({
      modal,
      handleToggleModal,
    }),
    [handleToggleModal, modal]
  );

  return (
    <ModalContext.Provider value={props}>{children}</ModalContext.Provider>
  );
}

export default ModalProvider;

export function useModalContext<OptionsType>() {
  return useContext(ModalContext) as ModalContextData<OptionsType>;
}
