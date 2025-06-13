import { useFormRules } from "@hooks/Forms/useFormRules";
import { alterPasswordFormSchema, AlterPasswordPayload } from "../schemas";
import usePatchPasswordUsers from "@services/Users/Patch/Password/usePatchPassword";
import { useUserNavigationContext } from "@contexts/UserNavigation";

type Props = {
  handleModal: (isShow: boolean) => void;
};

export function useModalAlterPassword({ handleModal }: Props) {
  const { formMethods, handleSubmit, errors } =
    useFormRules<AlterPasswordPayload>({
      schema: alterPasswordFormSchema,
    });
  const { userAuth } = useUserNavigationContext();
  const { mutateAsync: patchPassword, isPending: isLoading } = usePatchPasswordUsers();

  const submit = (payload: AlterPasswordPayload) => {
    patchPassword({ ...payload, id: userAuth?.id as number })
      .then(() => handleModal(false))
      .then(() => {
        formMethods.reset();
      });
  };

  return {
    formMethods,
    handleSubmit,
    submit,
    errors,
    isLoading
  };
}
