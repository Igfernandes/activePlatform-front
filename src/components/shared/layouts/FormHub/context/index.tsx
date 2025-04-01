import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FieldGroupsShape, FieldsShape } from "../../../../../types/Fields";
import {
  FieldContextData,
  FieldProviderProps,
  OptionsFieldTabTarget,
  ViewedEntityShape,
} from "./types";
const FielContext = createContext<FieldContextData>({} as FieldContextData);

function FieldsProvider({
  children,
  fieldsRelation,
  entity,
}: FieldProviderProps) {
  const [viewedField, setViewedField] = useState<ViewedEntityShape>(entity);
  const [targetTab, setTargetTab] = useState<OptionsFieldTabTarget>("ALL");
  const [fields, setFields] = useState<FieldsShape[]>([]);
  const [fieldsGroup, setFieldsGroup] = useState<FieldGroupsShape[]>([]);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const handleChangeField = (field: ViewedEntityShape) => {
    setViewedField(field);
  };

  const handleChangeTab = (tab: OptionsFieldTabTarget) => {
    setTargetTab(tab);
  };
  const handleToggleModal = (isShowModal: boolean) => {
    setIsShowModal(isShowModal);
  };

  useEffect(() => {
    handleChangeField(entity);
  }, [entity]);

  useEffect(() => {
    setFields(fieldsRelation);
  }, [fieldsRelation]);

  const tabProps = useMemo(
    () => ({
      targetTab,
      handleChangeTab,
    }),
    [targetTab]
  );

  const modalProps = useMemo(
    () => ({
      isShowModal,
      handleToggleModal,
    }),
    [isShowModal]
  );

  const props = useMemo(
    () => ({
      viewedField,
      handleChangeField,
      fields,
      fieldsGroup,
    }),
    [viewedField, fields, fieldsGroup]
  );

  return (
    <FielContext.Provider value={{ ...props, ...tabProps, ...modalProps }}>
      {children}
    </FielContext.Provider>
  );
}

export default FieldsProvider;

export function useFieldContext() {
  return useContext(FielContext) as FieldContextData;
}
