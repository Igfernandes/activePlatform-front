export type StepBarProps = {
  steps: Array<StepData>;
};

export type HookStepBarProps = {
  steps: Array<StepData>;
};

type StepData = {
  title: string;
  active?: boolean;
};

export type StepStatus = "COMPLETE" | "PENDENT" | "PROGRESS";

export type StepItemProps = {
  title: string;
  id: number;
  status: StepStatus;
  width: number;
};
