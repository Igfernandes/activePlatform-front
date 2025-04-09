import { useFormRules } from "@hooks/Forms/useFormRules";
import { SettingsPayload, SettingsSchema } from "../schemas";
import { useUserNavigationContext } from "@contexts/UserNavigation";
import usePutUsers from "@services/Users/Put/usePostCreateUsers";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { getCPFFormatted, getNumberFormatted } from "@helpers/string";
import { useEffect, useState } from "react";

dayjs.extend(customParseFormat);

export function useForms() {
  const { userAuth } = useUserNavigationContext();
  const { formMethods, handleSubmit, errors } = useFormRules<SettingsPayload>({
    schema: SettingsSchema,
  });
  const { mutateAsync: putUsers } = usePutUsers();
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const submit = ({ birthdate, ...payload }: SettingsPayload) => {
    const dataEUA = dayjs(birthdate, "DD/MM/YYYY").format("YYYY-MM-DD");

    putUsers({
      ...payload,
      birthdate: dataEUA,
      id: userAuth?.id as number,
    });
  };
  useEffect(() => {
    if (!userAuth) return;

    Object.entries({
      name: userAuth?.name,
      birthdate: dayjs(userAuth?.birthdate, "YYYY-MM-DD").format("DD/MM/YYYY"),
      cpf: getCPFFormatted(userAuth?.cpf),
      phone: getNumberFormatted(userAuth?.phone),
    }).forEach(([colName, ColValue]) =>
      formMethods.setValue(colName as keyof SettingsPayload, ColValue)
    );
  }, [userAuth]);

  const handleToggleModel = (isShowModal: boolean) => {
    setIsShowModal(isShowModal);
  };

  return {
    formMethods,
    handleSubmit,
    errors,
    submit,
    userAuth,
    isShowModal,
    handleToggleModel,
  };
}
