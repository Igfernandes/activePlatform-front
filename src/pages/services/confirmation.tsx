import { Header } from "@components/Public/External/Header";
import { Footer } from "@components/Public/Footer";
import { ConfirmationContent } from "@components/Public/Services/Confirmation";
import { ServicesConfirmationPageProps } from "@components/Public/Services/Confirmation/types";
import { getServicePreview } from "@services/Services/GetPreview/SSR";
import { GetServerSideProps } from "next";

export default function Confirmation({
  service,
}: ServicesConfirmationPageProps) {
  return (
    <>
      <Header />
      <div className="row flex items-center justify-center min-h-[78vh] mt-8 mb-4">
        <div className="column w-[400px] border-2 border-cross-black-secondary rounded-xl p-4">
          <ConfirmationContent service={service} />
        </div>
      </div>
      <Footer />
    </>
  );
}

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<
  ServicesConfirmationPageProps
> = async ({ query }) => {
  const { key } = query as {
    key: string;
  };
  const service = await getServicePreview({ id: +key });

  if (!service || Object.hasOwn(service, "errors")) {
    return {
      redirect: {
        destination: `/404`, // Redireciona para a página principal
        permanent: false, // Define como redirecionamento temporário (status 307)
      },
    };
  }

  return {
    props: {
      service, // Passa o ID para o componente
    },
  };
};
