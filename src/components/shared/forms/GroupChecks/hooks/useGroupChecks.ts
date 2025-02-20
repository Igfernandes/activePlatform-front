import { useFieldArray, useFormContext } from "react-hook-form";

type Props = {
  name: string;
};

export function useGroupChecks({ name }: Props) {
  const { control } = useFormContext();
  const { remove } = useFieldArray({
    control,
    name, // Nome do array de campos
  });

  const handleRemoveValue = (index: number) => remove(index);

  return {
    handleRemoveValue,
  };
}
