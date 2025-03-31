import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { useFormBuilderContext } from "../../../context";
import { FieldShape } from "../../../type";

type Props = {
  currentField?: FieldShape;
};

export function useModal({ currentField }: Props) {
  const [payload, setPayload] = useState<FieldShape>();

  const { handleChangeFields, fields, handleToggleModal } =
    useFormBuilderContext();

  const getPayloadStyled = (fieldName: string, fieldValue: string) => {
    let payloadUpdated: Record<string, unknown> = {
      ...payload,
    };
    if (!payload) return {};

    const fieldNameParts = fieldName.split(".");

    if (fieldNameParts.length === 2) {
      const style = payload.style as Record<string, unknown>;
      payloadUpdated = {
        style: {
          ...style,
          [fieldNameParts[1]]: fieldValue,
        },
      };
    } else {
      payloadUpdated[fieldName] = fieldValue;
    }

    return payloadUpdated;
  };

  const handleChangeField = (ev: ChangeEvent<HTMLInputElement>) => {
    const field = ev.target;
    const fieldName = field.getAttribute("name");
    if (!fieldName || !payload) return;
    let fieldValue = ev.target.value;

    const { measure } = field.dataset;

    fieldValue = fieldValue + (measure ?? "");

    const payloadUpdated: Record<string, unknown> = getPayloadStyled(
      fieldName,
      fieldValue
    );

    setPayload({
      ...payload,
      ...payloadUpdated,
    });
  };

  const handleSubmit = (ev: MouseEvent) => {
    const form = ev.currentTarget.closest("#form");

    if (!currentField || !form) return;

    const fieldUpdated = {
      ...currentField,
      ...payload,
    };

    const filteredFields = fields.filter(
      (fieldItem) => fieldItem.id != currentField.id
    );

    handleChangeFields([...filteredFields, fieldUpdated]);
    handleToggleModal(false);
  };
  useEffect(() => {
    if (!currentField) return;

    if (!payload || currentField.id != payload.id) setPayload(currentField);
  }, [currentField]);

  return {
    payload,
    handleSubmit,
    handleChangeField,
    setPayload,
  };
}
