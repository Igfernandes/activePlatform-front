import { GetServerSideProps } from "next";
import { FormPageProps } from "@components/Public/Forms/types";
import { Header } from "@components/Public/External/Header";
import { Footer } from "@components/Public/Footer";
import { isErrorRequest } from "@helpers/routes";
import { getForm } from "@services/CustomForms/Get/SSR";
import { FieldShape } from "@components/shared/layouts/FormBuilder/type";
import { FormBuilderPreview } from "@components/shared/layouts/FormBuilder/Preview";
import { useForm } from "@components/Public/Forms/hooks/useForm";
import { Button } from "@components/shared/forms/Button";
import i18n from "@configs/i18n";

export default function Form({ form }: FormPageProps) {
  const { handleSubmit, isLoading } = useForm({ form });

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
          <div className="w-[60%] mx-auto">
            <form onSubmit={handleSubmit}>
              <FormBuilderPreview
                fields={JSON.parse(form.components) as Array<FieldShape>}
              />
              <div className="max-w-40 ml-auto">
                <Button
                  className="text-white font-semibold"
                  text={i18n("Words.send")}
                  isLoading={isLoading}
                />
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
    },
  };
};
