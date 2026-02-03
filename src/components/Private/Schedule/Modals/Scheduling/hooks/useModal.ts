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
import { hasInvalidDateRange } from "@helpers/date";
import i18n from "@configs/i18n";

dayjs.extend(customParseFormat);

export function useModal() {
  const [step, setStep] = useState<"INFORMATION" | "USERS">("INFORMATION");
  const { formMethods, handleSubmit } =
    useFormRules<ScheduleUpdatePayload>({
      schema: ScheduleSchema,
    });

  const { watch, trigger, reset } = formMethods;
  const { handleToggleModal, modal } = useModalContext();
  const [users, setUsers] = useState<UsersShape[]>([]);
  const { data: usersData, isFetched: isFetchedUsers } = useGetUsers();
  const { mutateAsync: postSchedule, isPending: isLoadingPost } =
    usePostCreateSchedule();
  const { mutateAsync: putSchedule, isPending: isLoadingPut } =
    usePutCreateSchedule();
  const { mutateAsync: deleteSchedule, isPending: isLoadingDelete } =
    useDeleteSchedule();

  /**
   * Sempre que "date" ou "end_date" mudarem, dispara a validação
   * Isso garante que o refine de comparação de datas seja reavaliado na hora
   */
  const watchDate = watch("date");
  const watchEndDate = watch("end_date");

  const handleSteps = async (action: "PREV" | "NEXT") => {
    let isValid = await trigger(["title", "date", "end_date"], {
      shouldFocus: true,
    });

    if (watchEndDate && !!isValid) {
      isValid = !!hasInvalidDateRange(watchDate, watchEndDate ?? "");

      if (!isValid)
        formMethods.setError("end_date", {
          message: i18n("Validations.invalid_end_date"),
        });
    }

    switch (action) {
      case "PREV":
        if (step === "USERS") setStep("INFORMATION");
        break;
      case "NEXT":
        if (step === "INFORMATION" && isValid) {
          setStep("USERS");
        }
        break;
    }
  };

  const handleDeleteSchedule = async () => {
    await deleteSchedule({
      id: parseInt(modal.id as string),
    });
    setStep("INFORMATION");
    handleToggleModal(false);
    reset();
  };

  useEffect(() => {
    setStep("INFORMATION");
  }, [modal]);

  useEffect(() => {
    if (usersData) {
      setUsers(usersData);
    }
  }, [usersData, isFetchedUsers]);

  const submit = async ({ linked, ...rest }: ScheduleUpdatePayload) => {
    const payload = {
      ...rest,
      linked: linked.filter((user) => !!user).map((user) => +user),
    };

    if (modal.id) {
      await putSchedule({
        id: parseInt(modal.id as string),
        ...payload,
        describe: payload.describe ?? "",
      });
    } else {
      await postSchedule({
        ...payload,
        describe: payload.describe ?? "",
      });
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
    step,
    setStep,
    handleSteps,
  };
}
