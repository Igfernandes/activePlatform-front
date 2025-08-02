import { useFormRules } from "@hooks/Forms/useFormRules";
import { ClientCategoryModalSchema, ClientCategoryPayload } from "../schemas";
import { SelectorShape } from "@components/shared/layouts/Seletor/type";
import { PatchClientsCategoryPayload } from "../../../../../../../services/Clients/PatchCategory/type";
import usePatchClientCategory from "../../../../../../../services/Clients/PatchCategory/usePatch";
import { useModalContext } from "@contexts/Modal";

type Props = {
  selectors: SelectorShape[];
};

export function useClientCategoriesModal({ selectors }: Props) {
  const { formMethods, isLoading, register, errors } =
    useFormRules<ClientCategoryPayload>({
      schema: ClientCategoryModalSchema,
    });
  const { handleToggleModal } = useModalContext();
  const { mutateAsync: patchClientsCategory } = usePatchClientCategory();

  const submit = (payload: Pick<PatchClientsCategoryPayload, "category">) => {
    const selectorsChecked = selectors.filter(
      (selector) => selector.isChecked && !!selector.value
    );

    patchClientsCategory({
      ...payload,
      clients: selectorsChecked.map((client) => parseInt(client.value)),
    }).then(() => handleToggleModal(false));
  };

  return {
    formMethods,
    isLoading,
    register,
    errors,
    submit,
  };
}
