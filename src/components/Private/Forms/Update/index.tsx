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
      started_at: targetForm.started_at,
      expired_at: targetForm.expired_at,
      template: String(targetForm.id),
      service_id: targetForm.service_id
        ? String(targetForm.service_id)
        : undefined,
    },
  });

  const { modal, handleToggleModal } = useModalContext();
  const { handleNextStep, handlePrevStep, stepActive, isLastStep } =
    useFormStep({
      formMethods,
    });
  const { handleDeleteFillField, isLoadingFillFieldDelete } =
    useFillFieldsModal({
      formId: targetForm.id,
      serviceId: targetForm.service_id,
    });

  useEffect(() => {
    const fields = JSON.parse(targetForm.components ?? "{}");
    handleChangeFormFields(fields);
  }, [targetForm]);

  const handleSubmit = formMethods.handleSubmit(submit);

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
        <form>
          <Forms
            step={stepActive}
            form={form}
            slug={targetForm.slug}
            onChangeFormFields={handleChangeFormFields}
          />
          <div className="mt-4">
            <FilledFormsTable
              formId={targetForm.id}
              serviceId={targetForm.service_id}
            />
          </div>
          <FooterForms
            isFirstStep={stepActive == 1}
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
            isLoading={isLoading}
            handleSubmit={handleSubmit}
            isLastStep={isLastStep}
          />
        </form>
      </FormProvider>
      <Notice
        headerTitle={i18n("Words.attention")}
        title={i18n("Screens.dashboard.forms.fills.title_already_exclude")}
        text={i18n("Screens.dashboard.forms.fills.text_already_exclude")}
        onSubmit={handleDeleteFillField}
        isShowModal={modal.type === "DELETE"}
        onModal={handleToggleModal}
        isLoading={isLoadingFillFieldDelete}
      />
    </div>
  );
}
