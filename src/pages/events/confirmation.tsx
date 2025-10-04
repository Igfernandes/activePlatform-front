import { Header } from "@components/Public/External/Header";
import { Footer } from "@components/Public/Footer";
import { ConfirmationContent } from "@components/Public/Events/Confirmation";
import { EventConfirmationPageProps } from "@components/Public/Events/Confirmation/types";
import { GetServerSideProps } from "next";
import { getEventPreview } from "@services/Events/GetPreview/SSR";

export default function Confirmation({
  event,
}: EventConfirmationPageProps) {
  return (
    <>
      <Header />
      <div className="row flex items-center justify-center min-h-[78vh] mt-8 mb-4">
        <div className="column w-[400px] border-2 border-cross-black-secondary rounded-xl p-4">
          <ConfirmationContent event={event} />
        </div>
      </div>
      <Footer />
    </>
  );
}

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<
  EventConfirmationPageProps
> = async ({ query }) => {
  const { key } = query as {
    key: string;
  };
  const event = await getEventPreview({ id: +key });

  if (!event || Object.hasOwn(event, "errors")) {
    return {
      redirect: {
        destination: `/404`, // Redireciona para a página principal
        permanent: false, // Define como redirecionamento temporário (status 307)
      },
    };
  }

  return {
    props: {
      event, // Passa o ID para o componente
    },
  };
};
