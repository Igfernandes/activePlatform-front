import { Forms } from "@components/Private/Forms";
import { FooterForms } from "@components/Private/Forms/FooterForms";
import { useForms } from "@components/Private/Forms/hooks/useForms";
import { useFormStep } from "@components/Private/Forms/hooks/useFormsStep";
import { FormsPayload, formsSchema } from "@components/Private/Forms/schema";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import { StepBar } from "@components/shared/layouts/StepBar";
import i18n from "@configs/i18n";
import { useFormRules } from "@hooks/Forms/useFormRules";
import { FormProvider } from "react-hook-form";

export default function Create() {
  const { formMethods } = useFormRules<FormsPayload>({
    schema: formsSchema,
    criteriaMode: "all",
    shouldUseNativeValidation: false,
  });
  const { handleNextStep, handlePrevStep, stepActive, isLastStep } =
    useFormStep({
      formMethods,
    });
  const { submit, form, handleChangeFormFields, isLoading } = useForms();

  return (
    <DashboardContainer title={i18n("Words.new_form")}>
      <FormProvider {...formMethods}>
        <StepBar
          steps={[
            {
              title: i18n(`Words.definitions`),
              active: stepActive == 1,
            },
            {
              title: i18n(`Words.customization`),
              active: stepActive == 2,
            },
            {
              title: i18n(`Words.preview`),
              active: stepActive == 3,
            },
          ]}
        />
        <form onSubmit={formMethods.handleSubmit(submit)}>
          <Forms
            step={stepActive}
            form={form}
            onChangeFormFields={handleChangeFormFields}
          />
          <FooterForms
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
            isLoading={isLoading}
            isLastStep={isLastStep}
          />
        </form>
      </FormProvider>
    </DashboardContainer>
  );
}
