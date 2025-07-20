import { useFormRules } from "@hooks/Forms/useFormRules";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { ScheduleSchema, ScheduleUpdatePayload } from "../schemas";
import { useEffect, useState } from "react";
import useGetUsers from "@services/Users/Get/useGetUsers";
import { UsersShape } from "@type/Users";
import usePostCreateSchedule from "@services/Schedule/Post/usePost";
import { useModalContext } from "@contexts/Modal";
import usePutCreateSchedule from "@services/Schedule/Put/usePut";
import useDeleteSchedule from "@services/Schedule/Delete/useDelete";

dayjs.extend(customParseFormat);

export function useModal() {
  const { formMethods, handleSubmit } = useFormRules<ScheduleUpdatePayload>({
    schema: ScheduleSchema,
  });
  const { handleToggleModal, modal } = useModalContext();
  const [users, setUsers] = useState<UsersShape[]>([]);
  const { data: usersData, isFetched: isFetchedUsers } = useGetUsers();
  const { mutateAsync: postSchedule, isPending: isLoadingPost } =
    usePostCreateSchedule();
  const { mutateAsync: putSchedule, isPending: isLoadingPut } =
    usePutCreateSchedule();
  const { mutateAsync: deleteSchedule, isPending: isLoadingDelete } =
    useDeleteSchedule();

  const handleDeleteSchedule = () => {
    deleteSchedule({
      id: parseInt(modal.id as string),
    }).then(() => {
      handleToggleModal(false);
      formMethods.reset();
    });
  };

  useEffect(() => {
    if (!usersData) return;

    setUsers(usersData);
  }, [usersData, isFetchedUsers]);

  const submit = async ({ linked, ...rest }: ScheduleUpdatePayload) => {
    const payload = {
      ...rest,
      linked: linked.filter((user) => !!user).map((user) => +user),
    };

    if (modal.id) {
      putSchedule({
        id: parseInt(modal.id as string),
        ...payload,
      });
    } else {
      await postSchedule(payload);
    }

    handleToggleModal(false);
  };

  return {
    formMethods,
    handleSubmit,
    submit,
    isLoading: isLoadingPost || isLoadingPut || isLoadingDelete,
    users,
    handleDeleteSchedule,
  };
}
