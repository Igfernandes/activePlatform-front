import { useEffect, useState } from "react";
import { FieldsShape } from "../../types/Fields";
import { FieldsGroupsShape } from "@type/Fields/fieldsGroups";

type Props = {
  fields: FieldsShape[];
  fieldGroups: FieldsGroupsShape[];
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
      const group = fieldGroups.find((group) => group.id === field.group_id);

      if (!group) return;

      if (!filteredFieldsByGroup[group.name])
        filteredFieldsByGroup[group.name] = [];

      if (field.type == "FILE")
        return filteredFieldsByGroup["ATTACHMENTS"].push(field);

      filteredFieldsByGroup[group.name].push(field);
    });

    const matriz = Object.entries(filteredFieldsByGroup).sort(
      ([prevKey], [nextKey]) => prevKey.length - nextKey.length
    );

    setFieldByGroup(organizedFieldsByGroupPosition(matriz));
  }, [fields, fieldGroups]);

  return {
    fieldByGroup,
  };
}
