import { useEffect, useState } from "react";
import { FieldGroupsShape, FieldsShape } from "../../types/Fields";

type Props = {
  fields: FieldsShape[];
  fieldGroups: FieldGroupsShape[];
};

export function useFieldsByGroup({ fields, fieldGroups }: Props) {
  const [fieldByGroup, setFieldByGroup] = useState<[string, FieldsShape[]][]>(
    []
  );

  const organizedFieldsByGroupPosition = (
    userFieldsByGroup: [string, FieldsShape[]][]
  ) => {
    // 🟢 Criando um mapa para facilitar a busca de posições
    const positionMap = fieldGroups.reduce(
      (acc: Record<string, number>, item) => {
        acc[item.name] = Number(item.position); // Convertendo position para número
        return acc;
      },
      {}
    );

    // 🟢 Ordenando matriz com base no mapa de posições
    return userFieldsByGroup.sort((a, b) => {
      const lastedPosition = Object.values(positionMap).length + 1;
      const afterElement =
        String(positionMap[b[0]]) == "undefined"
          ? lastedPosition
          : positionMap[b[0]];

      return positionMap[a[0]] - afterElement;
    });
  };

  useEffect(() => {
    const filteredFieldsByGroup = {
      ATTACHMENTS: [],
    } as Record<string, FieldsShape[]>;

    fields.forEach((field: FieldsShape) => {
      if (!filteredFieldsByGroup[field.group])
        filteredFieldsByGroup[field.group] = [];

      if (field.isFile) return filteredFieldsByGroup["ATTACHMENTS"].push(field);

      filteredFieldsByGroup[field.group].push(field);
    });

    const matriz = Object.entries(filteredFieldsByGroup);

    setFieldByGroup(organizedFieldsByGroupPosition(matriz));
  }, [fields]);

  return {
    fieldByGroup,
  };
}
