import { StepBarProps } from "./type";
import { StepItem } from "./StepItem";
import { useStepBar } from "./hooks/useStepBar";
import { useEffect } from "react";

export function StepBar({ steps = [] }: StepBarProps) {
  const { setStepActive, getStatus, stepWidthItem } = useStepBar({ steps });

  useEffect(() => {
    let stepPosition = 1;
    steps.find((step, index) => {
      if (step.active) return (stepPosition = index + 1);
    });

    setStepActive(stepPosition);
  }, [steps]);

  return (
    <div className="bg-white p-6 rounded-xl">
      <div className="flex justify-between">
        {steps.map(({ title }, index) => (
          <StepItem
            title={title}
            id={index + 1}
            status={getStatus(index + 1)}
            key={index + 1}
            width={stepWidthItem}
          />
        ))}
      </div>
    </div>
  );
}
