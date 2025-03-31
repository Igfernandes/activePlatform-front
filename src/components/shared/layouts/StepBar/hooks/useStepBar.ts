import { useEffect, useState } from "react";
import { HookStepBarProps, StepStatus } from "../type";

export function useStepBar({ steps }: HookStepBarProps) {
  const [stepActive, setStepActive] = useState<number>(1);
  const [stepWidthItem, setStepWidthItem] = useState<number>(98);

  const getStatus = (stepKey: number): StepStatus => {
    if (stepKey < stepActive) return "COMPLETE";
    else if (stepKey === stepActive) return "PROGRESS";
    else return "PENDENT";
  };

  useEffect(() => {
    const stepsLength = steps.length;
    setStepWidthItem(stepsLength / 98);
  }, [steps]);

  return {
    setStepActive,
    stepActive,
    getStatus,
    stepWidthItem,
  };
}
