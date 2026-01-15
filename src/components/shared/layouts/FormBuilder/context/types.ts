import { FieldShape, OptionData } from "../type";

export type FormBuilderContextData = {
  optionDrag: OptionData | null;
  fields: Array<FieldShape>;
  handleCollapse: (accordionId: string) => void;
  accordionActive: string;
  activeFieldId?: string;
  isShowModal: boolean;
  currentField: FieldShape | undefined;
  handleToggleModal: (isModal: boolean, fieldId?: string) => void;
  handleChangeFields: (fields: Array<FieldShape>) => void;
  handleRemoveField: (fieldId: string) => void;
  handleChangePositionField: (
    currentPosition: number,
    newPosition: OptionsPositionField
  ) => void;
};

export type OptionsPositionField = number | "DOWN" | "UP";
export type FormBuilderProps = {
  children: React.ReactNode;
  form: FieldShape[];
  onChangeForm: (fieldsForm: Array<FieldShape>) => void;
};

export type FormBuilderData = FormBuilderProps;
