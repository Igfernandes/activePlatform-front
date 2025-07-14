import { GetServerSideProps } from "next";
import { FormPageProps } from "@components/Public/Forms/types";
import { Header } from "@components/Public/External/Header";
import { Footer } from "@components/Public/Footer";
import { isErrorRequest } from "@helpers/routes";
import { getForm } from "@services/CustomForms/Get/SSR";
import { FormBuilderPreview } from "@components/shared/layouts/FormBuilder/Preview";
import { useForm } from "@components/Public/Forms/hooks/useForm";
import { Button } from "@components/shared/forms/Button";
import i18n from "@configs/i18n";
import { getCSRF } from "@services/Authentications/CSRF/SSR";

export default function Form({ form, csrf }: FormPageProps) {
  const { handleSubmit, isLoading, handleChange, components } = useForm({
    form,
    csrf,
  });

  return (
    <>
      <Header />
      <div className="flex flex-col justify-between min-h-[85vh] mx-w-[1440px]">
        <main>
          <div className="bg-tertiary max-w-[800px] p-4 mx-auto mt-4">
            <div className="text-center">
              <h1 className="text-2xl font-semibold">{form.name}</h1>
            </div>
            <div className="text-justify mt-4">
              <p>{form.description}</p>
            </div>
          </div>
          <div className="w-full lg:w-[60%] px-4 lg:px-0 mx-auto">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col min-h-[60vh] justify-between"
            >
              <FormBuilderPreview
                handleValue={handleChange}
                fields={components}
              />
              <div className="flex justify-end items-center">
                <div className="mt-4 ml-4 mb-6">
                  <Button
                    className="text-white font-semibold w-[190px]"
                    text={i18n("Words.send")}
                    isLoading={isLoading}
                  />
                </div>
              </div>
            </form>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<FormPageProps> = async ({
  params,
}) => {
  const { slug } = params as { slug: string }; // Tipando o params
  const form = await getForm({ slug });
  const csrf = await getCSRF();

  if (!form || isErrorRequest(form)) {
    return {
      redirect: {
        destination: `/404`, // Redireciona para a página principal
        permanent: false, // Define como redirecionamento temporário (status 307)
      },
    };
  }

  return {
    props: {
      form, // Passa o ID para o componente
      csrf,
    },
  };
};
