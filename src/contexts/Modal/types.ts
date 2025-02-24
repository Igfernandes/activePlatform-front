export type ModalContextData<OptionsType> = {
  modal: ModalProps<OptionsType>;
  handleToggleModal: (type: OptionsType, id?: string | number) => void;
};

export type ModalProps<OptionsType> = {
  type: OptionsType;
  id: number | string;
};
