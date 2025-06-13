import { useFormRules } from "@hooks/Forms/useFormRules";
import { UsersModalSchema, UsersPayload } from "../schemas";
import usePostInviteUser from "../../../../../../services/Invites/Post/Users/usePost";
import usePutUsers from "@services/Users/Put/usePutUsers";

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
  const { mutateAsync: putUsers } = usePutUsers();

  const submit = ({ group, id, ...rest }: UsersPayload) => {
    const payload = {
      ...rest,
      group: group.map((groupId) => parseInt(groupId)),
    };
    if (id) {
      putUsers({
        ...payload,
        id,
      }).then(() => onModal(false));
    } else
      postInviteUser(payload).then(() => {
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
