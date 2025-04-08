import { Forms } from "@components/Private/Forms";
import { FooterForms } from "@components/Private/Forms/FooterForms";
import { useForms } from "@components/Private/Forms/hooks/useForms";
import { useFormStep } from "@components/Private/Forms/hooks/useFormsStep";
import { FormsPayload, formsSchema } from "@components/Private/Forms/schema";
import { FormsPageProps } from "@components/Private/Forms/type";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import { StepBar } from "@components/shared/layouts/StepBar";
import i18n from "@configs/i18n";
import { useFormRules } from "@hooks/Forms/useFormRules";
import { GetServerSideProps } from "next";
import { FormProvider } from "react-hook-form";
import { getForms } from "../../../services/Forms/Get/SSR";
import { privateRoutes } from "@configs/routes/Web/navigation";

export default function Update() {
  const { formMethods } = useFormRules<FormsPayload>({
    schema: formsSchema,
    defaultValues: {
      type: "PEOPLE",
    },
  });
  const { handleNextStep, handlePrevStep, stepActive, isLastStep } =
    useFormStep({
      formMethods,
    });
  const { submit, form, handleChangeFormFields, isLoading } = useForms();

  return (
    <DashboardContainer>
      <FormProvider {...formMethods}>
        <StepBar
          steps={[
            {
              title: i18n(`words.definitions`),
              active: stepActive == 1,
            },
            {
              title: i18n(`words.customization`),
              active: stepActive == 2,
            },
            {
              title: i18n(`words.preview`),
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

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<FormsPageProps> = async ({
  params,
  req,
}) => {
  const tokenNavigation = req.cookies["token_navigation"] ?? "";
  const { id } = params as { id: string }; // Tipando o params
  const services = await getForms(tokenNavigation, { id: parseInt(id) });
  const currentForm = Array.isArray(services) ? services[0] : services;

  if (!currentForm || Object.hasOwn(currentForm, "errors")) {
    return {
      redirect: {
        destination: `${privateRoutes.forms}?alert=${i18n(
          "errors.system.not_found_form"
        )}`, // Redireciona para a página principal
        permanent: true, // Define como redirecionamento temporário (status 307)
      },
    };
  }

  return {
    props: {
      targetForm: currentForm, // Passa o ID para o componente
    },
  };
};
