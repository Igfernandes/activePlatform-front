import { useFormRules } from "@hooks/Forms/useFormRules";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { ClientSchema, ClientUpdatePayload } from "../schemas";
import { ClientCategoriesShape } from "@type/Clients/ClientCategories";
import { useCallback, useEffect, useMemo, useState } from "react";
import useGetCategories from "@services/Clients/Categories/Get/useGetCategories";
import usePutClient from "@services/Clients/Put/usePut";
import { ClientShape } from "@type/Clients";
import { useRouter } from "next/router";
import { useI18n } from "@contexts/I18n";

dayjs.extend(customParseFormat);

type Props = {
  client: ClientShape;
};

export function useClientModal({ client }: Props) {
  const { t } = useI18n();
  const schema = useMemo(() => ClientSchema(t), [t]);
  const { formMethods, handleSubmit } = useFormRules<ClientUpdatePayload>({
    schema,
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

  const submit = useCallback(
    ({ birthdate, ...payload }: ClientUpdatePayload) => {
      putClient({
        ...payload,
        id: client.id,
        cpf: client.cpf,
        birthdate: birthdate
          ? dayjs(birthdate, t("Configs.format.date")).format("YYYY-MM-DD")
          : undefined,
      }).then(() => router.reload());
    },
    [client.id, client.cpf, putClient, router, t],
  );

  return {
    formMethods,
    handleSubmit,
    submit,
    isLoading: isPending,
    categories,
  };
}
