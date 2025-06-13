import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { FormsPayload } from "../schema";

type Props = {
  formMethods: UseFormReturn<FormsPayload>;
};

export function useMessagesDispatcherStep({ formMethods }: Props) {
  const { trigger } = formMethods;
  const [stepActive, setStepActive] = useState<number>(1);
  const [isLastStep, setIsLastStep] = useState<boolean>(false);

  const handleNextStep = async () => {
    const resp = await trigger(["title", "platforms"]);

    if (resp !== true) return;

    const nextStep = stepActive + 1;
    const stepUpdated = nextStep < 2 ? nextStep : 2;
    setStepActive(stepUpdated);
    setIsLastStep(stepUpdated === 2);
  };

  const handlePrevStep = () => {
    const prevStep = stepActive - 1;
    const stepUpdated = prevStep < 1 ? 1 : prevStep;

    setStepActive(stepUpdated);
    setIsLastStep(stepUpdated === 2);
  };

  return {
    handleNextStep,
    stepActive,
    handlePrevStep,
    isLastStep,
  };
}
