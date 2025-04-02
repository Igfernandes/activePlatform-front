import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FieldsShape } from "../../../../../types/Fields";
import {
  FieldContextData,
  FieldProviderProps,
  OptionsFieldTabTarget,
  ViewedEntityShape,
} from "./types";
import { FieldsGroupsShape } from "@type/Fields/fieldsGroups";
const FielContext = createContext<FieldContextData>({} as FieldContextData);

function FieldsProvider({
  children,
  fieldsRelation,
  entity,
  Groups,
  entityType,
}: FieldProviderProps) {
  const [viewedField, setViewedField] = useState<ViewedEntityShape>(entity);
  const [targetTab, setTargetTab] = useState<OptionsFieldTabTarget>("ALL");
  const [fields, setFields] = useState<FieldsShape[]>([]);
  const [fieldsGroups, setFieldsGroups] = useState<FieldsGroupsShape[]>([]);
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
    setFields([...fieldsRelation]);
  }, [fieldsRelation]);

  useEffect(() => {
    setFieldsGroups(Groups);
  }, [Groups]);

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
      fieldsGroups,
      entityType,
    }),
    [viewedField, fields, fieldsGroups, entityType]
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
