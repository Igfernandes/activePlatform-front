import { useFormRules } from "@hooks/Forms/useFormRules";
import { UsersModalSchema, UsersPayload } from "../schemas";
import usePostInviteUser from "../../../../../../services/Invites/Post/Users/usePostCreateUser";

type Props = {
  onModal: (isModal: boolean) => void;
};

export function useModalForm({ onModal }: Props) {
  const formProps = useFormRules<UsersPayload>({
    schema: UsersModalSchema,
  });
  const {
    formMethods: { reset },
  } = formProps;
  const { mutateAsync: postInviteUser, isPending } = usePostInviteUser();

  const submit = ({ group, ...payload }: UsersPayload) => {
    postInviteUser({
      ...payload,
      group: group.map((groupId) => parseInt(groupId)),
    }).then(() => {
      reset();
      onModal(false);
    });
  };

  return {
    ...formProps,
    isLoading: isPending,
    submit,
  };
}
