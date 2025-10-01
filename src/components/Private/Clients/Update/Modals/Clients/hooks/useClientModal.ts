import { useFormRules } from "@hooks/Forms/useFormRules";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { ClientSchema, ClientUpdatePayload } from "../schemas";
import { ClientCategoriesShape } from "@type/Clients/ClientCategories";
import { useEffect, useState } from "react";
import useGetCategories from "@services/Clients/Categories/Get/useGetCategories";
import usePutClient from "@services/Clients/Put/usePut";
import { ClientShape } from "@type/Clients";
import { useRouter } from "next/router";
import i18n from "@configs/i18n";

dayjs.extend(customParseFormat);

type Props = {
  client: ClientShape;
};

export function useClientModal({ client }: Props) {
  const { formMethods, handleSubmit } = useFormRules<ClientUpdatePayload>({
    schema: ClientSchema,
  });
  const [categories, setCategories] = useState<ClientCategoriesShape[]>([]);
  const { data: categoryData, isFetched: isFetchedCategory } =
    useGetCategories();
  const router = useRouter();

  useEffect(() => {
    if (!categoryData) return;

    setCategories(categoryData);
  }, [categoryData, isFetchedCategory]);
  const { mutateAsync: putClient, isPending } = usePutClient();

  const submit = ({ birthdate, ...payload }: ClientUpdatePayload) => {
    putClient({
      ...payload,
      id: client.id,
      cpf: client.cpf,
      birthdate: birthdate
        ? dayjs(birthdate, i18n("Configs.format.date")).format("YYYY-MM-DD")
        : undefined,
    }).then(() => router.reload());
  };

  return {
    formMethods,
    handleSubmit,
    submit,
    isLoading: isPending,
    categories,
  };
}
