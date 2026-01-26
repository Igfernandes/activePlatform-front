import { UseFormReturn } from "react-hook-form";
import { EventsPayload } from "../Schemas";
import { useCallback } from "react";

type Props = {
  formMethods: UseFormReturn<EventsPayload>;
};

export function useStateFields({ formMethods }: Props) {
  const { resetField } = formMethods;

  const handleCleanForm = useCallback(() => {
    resetField("description");
    resetField("name");
    resetField("stock");
    resetField("banner");
  }, [resetField]);

  return {
    handleCleanForm,
  };
}
