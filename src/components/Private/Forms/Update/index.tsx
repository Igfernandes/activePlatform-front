import { Notice } from "@components/shared/others/Notice";
import { useFormStep } from "../hooks/useFormsStep";
import { FormsShape } from "@type/Forms";
import { FormProvider } from "react-hook-form";
import { StepBar } from "@components/shared/layouts/StepBar";
import i18n from "@configs/i18n";
import { useForms } from "../hooks/useForms";
import { useEffect } from "react";
import { Forms } from "..";
import { FooterForms } from "../FooterForms";
import { useModalContext } from "@contexts/Modal";
import { useFillFieldsModal } from "./hooks/useFillFieldsModal";
import { useFormData } from "./hooks/useFormData";

type Props = {
  targetForm: FormsShape;
};

export function FillFieldsUpdate({ targetForm }: Props) {
  const { submit, components, handleChangeFormFields, isLoading } = useForms();
  const { formMethods } = useFormData({ targetForm });
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
            form={targetForm}
            components={components}
            slug={targetForm.slug}
            onChangeFormFields={handleChangeFormFields}
          />

          <FooterForms
            formId={targetForm.id}
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
