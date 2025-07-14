import usePutFills from "@services/Forms/Fills/Put/usePut";

type Props = {
  ref: string;
  formId: number;
};

export function useFillsSubmit({ ref, formId }: Props) {
  const { mutateAsync: putFills } = usePutFills();
  const handleSubmit = (payload: Record<string, string>) => {
    const matrizValuesNotEmpty = Object.entries(payload).filter(
      ([key, value]) => !!value && key
    );

    putFills({
      ref,
      formId,
      fields: Object.fromEntries(matrizValuesNotEmpty) as Record<
        string,
        string
      >,
    });
  };
  return {
    handleSubmit,
  };
}
