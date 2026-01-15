import {
  ChangeEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useFormBuilderContext } from "../../../context";
import { FieldShape } from "../../../type";
import { isEquals } from "@helpers/json";

type Props = {
  currentField?: FieldShape;
};

export function useModal({ currentField }: Props) {
  const [payload, setPayload] = useState<FieldShape>({} as FieldShape);

  const { handleChangeFields, fields, handleToggleModal } =
    useFormBuilderContext();

  const getPayloadStyled = useCallback(
    (fieldName: string, fieldValue: string) => {
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
    },
    [payload]
  );

  const handleChangeField = useCallback(
    (ev: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

      setPayload((prev) => {
        return {
          ...prev,
          ...(payloadUpdated as FieldShape),
        };
      });
    },
    [getPayloadStyled, payload]
  );

  const handleUpdateField = useCallback(
    (name: string, value: string) => {
      if (!name || !payload) return;

      const payloadUpdated: Record<string, unknown> = getPayloadStyled(
        name,
        value
      );

      setPayload((prev) => {
        return {
          ...prev,
          ...(payloadUpdated as FieldShape),
        };
      });
    },
    [getPayloadStyled, payload]
  );

  const handleSubmit = useCallback(
    (ev: MouseEvent) => {
      const form = ev.currentTarget.closest("#form");

      if (!currentField || !form) return;

      const fieldUpdated = {
        ...currentField,
        ...payload,
      };

      const filteredFields = fields.map((fieldItem) => {
        return fieldItem.id === currentField.id ? fieldUpdated : fieldItem;
      });

      handleChangeFields(filteredFields);
      handleToggleModal(false);
    },
    [currentField, fields, handleChangeFields, handleToggleModal, payload]
  );

  useEffect(() => {
    setPayload((prev) => {
      if (isEquals(prev, currentField)) return prev;
      return currentField || ({} as FieldShape);
    });
  }, [currentField]);

  return {
    payload,
    handleSubmit,
    handleChangeField,
    setPayload,
    handleUpdateField,
  };
}
