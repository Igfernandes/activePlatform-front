import { useFormRules } from "@hooks/Forms/useFormRules";
import { GroupModalSchema, UsersGroupPayload } from "../schemas";
import useGetPermissions from "../../../../../../services/Permissions/Get/useGetClients";
import { useEffect, useState } from "react";
import usePostCreateGroup from "../../../../../../services/Users/Groups/Post/usePostCreateGroup";
import { PermissionsShape } from "../../../../../../types/Permissions/Permissions";
import { UsersGroupShape } from "../../../../../../types/Users/UsersGroup";
import { useModalContext } from "@contexts/Modal";
import useGetGroupsPermissions from "../../../../../../services/Permissions/Groups/Get/useGetClients";
import usePutGroup from "../../../../../../services/Users/Groups/Put/usePutGroup";

type Props = {
  onModal: (isShow: boolean) => void;
  groups: UsersGroupShape[];
};

export function useModalForm({ onModal, groups }: Props) {
  const { data } = useGetPermissions();
  const { formMethods } = useFormRules<UsersGroupPayload>({
    schema: GroupModalSchema,
    defaultValues: {
      permissions: [],
    },
  });
  const { modal } = useModalContext();
  const { data: dataGroupPermissions } = useGetGroupsPermissions({
    id: modal.id as number,
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    reset,
  } = formMethods;
  const { mutateAsync: postGroup, isPending } = usePostCreateGroup();
  const { mutateAsync: putGroup, isPending: isPendingPut } = usePutGroup();
  const [permissions, setPermissions] = useState<Array<PermissionsShape>>([]);

  const handleSuccessRequest = () => {
    reset();
    onModal(false);
  };

  const submit = (formData: UsersGroupPayload) => {
    const permissions = formMethods.getValues().permissions;
    const permissionsAvailable = permissions.filter(
      (permission) => !!permission
    );

    const payload = {
      ...formData,
      permissions: permissionsAvailable.map((permission) =>
        parseInt(permission as string)
      ),
      id: modal.id as number,
    };

    if (modal.id) {
      putGroup(payload).then(handleSuccessRequest);
    } else postGroup(payload).then(handleSuccessRequest);
  };

  useEffect(() => {
    setPermissions(data ?? []);
  }, [data]);

  useEffect(() => {
    const currentGroup = groups.find((group) => group.id === modal.id);
    setValue("name", currentGroup?.name ?? "");

    const group = dataGroupPermissions?.find(
      (groupPermissions) => groupPermissions.id === modal.id
    );
    if (!group) return;

    const permissionsId = group.permissions.map((permission) =>
      String(permission.id)
    );

    setValue("permissions", permissionsId);
  }, [modal, groups]);

  return {
    formMethods,
    errors,
    isLoading: isPending || isPendingPut,
    handleSubmit,
    permissions,
    submit,
    register,
  };
}
