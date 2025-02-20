import { useEffect, useMemo, useState } from "react";
import { CriteriaStatusShape, StatusValidation } from "../type";
import {
  hasMinLength,
  hasSomeLetterLowercase,
  hasSomeLetterUppercase,
  hasSomeNumber,
  hasSomeSpecialCharacter,
} from "@helpers/string";
import { useFormContext } from "react-hook-form";

export function useValidations() {
  const { watch } = useFormContext();
  const password = watch("password");
  const [validationsStatus, setValidationsStatus] =
    useState<StatusValidation>("void");
  const fieldsAllEmpties = useMemo(() => {
    return {
      hasLowercase: "void",
      hasUppercase: "void",
      hasNumber: "void",
      hasSpecialLetter: "void",
      hasMinEightLetters: "void",
    } as CriteriaStatusShape;
  }, []);
  const [criteriaStatus, setCriteriaStatus] =
    useState<CriteriaStatusShape>(fieldsAllEmpties);

  const handleChangeValidationsStatus = () => {
    const password = watch("password");
   
    if (!password) return setValidationsStatus("void");

   
    const criteriaFiltered = Object.entries(criteriaStatus).filter(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ([key, value]) => value !== "success"
    );
    setValidationsStatus(criteriaFiltered.length == 0 ? "success" : "error");
  };

  const getStatus = (resp: boolean) => (resp ? "success" : "error");

  useEffect(() => {
    if (!password) return setCriteriaStatus(fieldsAllEmpties);

    setCriteriaStatus({
      hasMinEightLetters: getStatus(hasMinLength(8, password)),
      hasUppercase: getStatus(hasSomeLetterUppercase(password)),
      hasLowercase: getStatus(hasSomeLetterLowercase(password)),
      hasNumber: getStatus(hasSomeNumber(password)),
      hasSpecialLetter: getStatus(hasSomeSpecialCharacter(password)),
    });
  }, [password, fieldsAllEmpties, watch]);

  return {
    handleChangeValidationsStatus,
    validationsStatus,
    criteriaStatus,
  };
}
