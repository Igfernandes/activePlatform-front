import { Notice } from "@components/shared/others/Notice";
import { useFormStep } from "../hooks/useFormsStep";
import { useFormRules } from "@hooks/Forms/useFormRules";
import { FormsPayload, formsSchema } from "../schema";
import { FormsShape } from "@type/Forms";
import { FormProvider } from "react-hook-form";
import { StepBar } from "@components/shared/layouts/StepBar";
import i18n from "@configs/i18n";
import { useForms } from "../hooks/useForms";
import { useEffect } from "react";
import { Forms } from "..";
import { FilledFormsTable } from "./FilledFormsTable";
import { FooterForms } from "../FooterForms";
import { useModalContext } from "@contexts/Modal";
import { useFillFieldsModal } from "./hooks/useFillFieldsModal";

type Props = {
  targetForm: FormsShape;
};

export function FillFieldsUpdate({ targetForm }: Props) {
  const { submit, form, handleChangeFormFields, isLoading } = useForms();
  const { formMethods } = useFormRules<FormsPayload>({
    schema: formsSchema,
    defaultValues: {
      id: targetForm.id,
      name: targetForm.name,
      description: targetForm.description,
      template: String(targetForm.id),
    },
  });
  const { modal, handleToggleModal } = useModalContext();
  const { handleNextStep, handlePrevStep, stepActive, isLastStep } =
    useFormStep({
      formMethods,
    });
  const { handleDeleteFillField, isLoadingFillFieldDelete } =
    useFillFieldsModal({ formId: targetForm.id });

  useEffect(() => {
    const fields = JSON.parse(targetForm.components ?? "{}");
    handleChangeFormFields(fields);
  }, [targetForm]);

  return (
    <div>
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
          <div className="mt-4">
            <FilledFormsTable formId={targetForm.id} />
          </div>
          <FooterForms
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
            isLoading={isLoading}
            isLastStep={isLastStep}
          />
        </form>
      </FormProvider>
      <Notice
        headerTitle={i18n("Words.attention")}
        title={i18n("custom_forms.fills.modal.title_already_exclude")}
        text={i18n("custom_forms.fills.modal.text_already_exclude")}
        onSubmit={handleDeleteFillField}
        isShowModal={modal.type === "DELETE"}
        onModal={handleToggleModal}
        isLoading={isLoadingFillFieldDelete}
      />
    </div>
  );
}
