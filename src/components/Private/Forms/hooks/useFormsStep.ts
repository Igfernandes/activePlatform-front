import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { FormsPayload } from "../schema";

type Props = {
  formMethods: UseFormReturn<FormsPayload>;
};

export function useFormStep({ formMethods }: Props) {
  const { trigger } = formMethods;
  const [stepActive, setStepActive] = useState<number>(1);
  const [isLastStep, setIsLastStep] = useState<boolean>(false);
  const handleNextStep = async () => {
    const resp = await trigger(["name"]);

    if (resp !== true) return;

    const nextStep = stepActive + 1;
    const stepUpdated = nextStep < 3 ? nextStep : 3;
    setStepActive(stepUpdated);
    setIsLastStep(stepUpdated === 3);
  };

  const handlePrevStep = () => {
    const prevStep = stepActive - 1;
    const stepUpdated = prevStep < 1 ? 1 : prevStep;

    setStepActive(stepUpdated);
    setIsLastStep(stepUpdated === 3);
  };

  return {
    handleNextStep,
    stepActive,
    handlePrevStep,
    isLastStep,
  };
}
