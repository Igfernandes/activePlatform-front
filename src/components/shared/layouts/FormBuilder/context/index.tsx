import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FormBuilderContextData, FormBuilderData } from "./types";
import { closestCenter, DndContext, DragEndEvent } from "@dnd-kit/core";
import { FieldShape, OptionData } from "../type";
import { handleDragEndSidebar } from "../handles/DragSidebar";
import { handleDragEndForm } from "../handles/DragForm";
import { useAccordion } from "../hooks/useAccordion";

export const FormBuilderContext = createContext({} as FormBuilderContextData);

const FormBuilderProvider = ({
  children,
  form,
  onChangeForm,
}: FormBuilderData) => {
  const [optionDrag, setOptionDragId] = useState<OptionData | null>(null);
  const [fields, setFields] = useState<Array<FieldShape>>(form);
  const { accordionActive, handleCollapse } = useAccordion();
  const [activeFieldId, setActiveFieldId] = useState<string>();
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [currentField, setCurrentField] = useState<FieldShape>();

  const handleAddField = (newField: FieldShape) => {
    setFields((prevItems: Array<FieldShape>) => [...prevItems, newField]);
  };
  const handleChangeFields = (fields: Array<FieldShape>) => {
    setFields(fields);
  };

  const handleDragEnd = (ev: DragEndEvent) => {
    const data = ev.active.data.current;

    if (!data) return;

    if (data.fromSidebar) {
      const field = handleDragEndSidebar(ev, handleAddField);

      if (!field) return;

      setCurrentField(field);
      handleToggleModal(true);
    }
    if (data.fromForm) handleDragEndForm(ev, handleChangeFields, fields);
  };

  const handleChangePositionField = (
    currentPosition: number,
    newPosition: number | "DOWN" | "UP"
  ) => {
    if (String(currentPosition) === "NaN") return;

    switch (newPosition) {
      case "DOWN":
        newPosition = +currentPosition + 1;
        break;
      case "UP":
        newPosition = +currentPosition - 1;
        break;
    }

    if (currentPosition >= fields.length || newPosition >= fields.length) {
      return;
    }

    setFields((prevFields) => {
      const newFields = [...prevFields]; // cópia segura
      const [item] = newFields.splice(currentPosition, 1);
      newFields.splice(newPosition, 0, item);
      return newFields;
    });
  };
  const handleToggleField = (field: FieldShape) => setCurrentField(field);

  const handleToggleModal = (isModal: boolean, fieldId?: string) => {
    setIsShowModal(isModal);
    if (isModal) setActiveFieldId(fieldId);
  };

  const handleRemoveField = (fieldId: string) => {
    setFields(fields.filter((field) => field.id !== fieldId));
    setIsShowModal(false);
  };

  useEffect(() => {
    onChangeForm(fields);
    const field = fields.find((field) => field.id === activeFieldId);

    if (!field) return;
    handleToggleField(field);
  }, [fields, activeFieldId]);

  const contextValue = useMemo(
    () => ({
      optionDrag,
      fields,
      handleCollapse,
      accordionActive,
      activeFieldId,
      isShowModal,
      currentField,
      handleToggleModal,
      handleToggleField,
      handleChangeFields,
      handleRemoveField,
      handleChangePositionField,
    }),
    [
      optionDrag,
      fields,
      accordionActive,
      activeFieldId,
      isShowModal,
      currentField,
      handleChangePositionField,
    ]
  );

  return (
    <FormBuilderContext.Provider value={contextValue}>
      <DndContext
        onDragStart={(event) => {
          const data = event.active.data.current;
          if (!data)
            return console.log(
              "Ocorreu um erro ao manipular a opção " + event.active.id
            );

          setOptionDragId(data.field as OptionData);
        }}
        autoScroll={true}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCenter}
      >
        {children}
      </DndContext>
    </FormBuilderContext.Provider>
  );
};

export default FormBuilderProvider;

// Hook para acessar o contexto
export const useFormBuilderContext = () => useContext(FormBuilderContext);
