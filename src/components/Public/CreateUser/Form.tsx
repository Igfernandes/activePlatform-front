import { useForm } from "./hooks/useForm";
import { FormProvider } from "react-hook-form";
import { Credentials } from "./Credentials";
import { Personal } from "./Personal";
import { When } from "@components/utilities/When";

export function CreateUserForm() {
  const {
    formMethods,
    handleToggleStageForm,
    isLoading,
    handleSubmit,
    onSubmit,
    stageForm,
    errors,
  } = useForm();

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <When value={stageForm === "PERSONAL"}>
          <Personal handleToggleStageForm={handleToggleStageForm} />
        </When>
        <When value={stageForm === "CREDENTIALS"}>
          <Credentials
            handleToggleStageForm={handleToggleStageForm}
            isLoading={isLoading}
            errors={errors}
          />
        </When>
      </form>
    </FormProvider>
  );
}
