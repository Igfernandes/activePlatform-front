import { GetServerSideProps } from "next";
import { FormPageProps } from "@components/Public/Forms/types";
import { Header } from "@components/Public/External/Header";
import { Footer } from "@components/Public/Footer";
import { isErrorRequest } from "@helpers/routes";
import { getForm } from "@services/CustomForms/Get/SSR";
import { FormBuilderPreview } from "@components/shared/layouts/FormBuilder/Preview";
import { useForm } from "@components/Public/Forms/hooks/useForm";
import { getCSRF } from "@services/Authentications/CSRF/SSR";
import { useEffect } from "react";

export default function Form({ form, csrf }: FormPageProps) {
  const { handleSubmit, isLoading, components } = useForm({
    form,
    csrf,
  });
  useEffect(() => {
    const version = "1.0.2"; // altere a cada deploy
    const stored = localStorage.getItem("app_version");

    if (stored && stored !== version) {
      localStorage.setItem("app_version", version);
      window.location.reload();
    }

    localStorage.setItem("app_version", version);
  }, []);

  useEffect(() => {
    caches.keys().then(names => {
      names.forEach(name => caches.delete(name));
    });
  }, []);

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
            <div
              className="flex flex-col min-h-[60vh] justify-between"
            >
              <FormBuilderPreview
                isLoading={isLoading}
                onSubmit={handleSubmit}
                fields={components ?? "{}"}
              />
            </div>
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
        destination: `/forms/404?form=${slug}`, // Redireciona para a página principal
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
