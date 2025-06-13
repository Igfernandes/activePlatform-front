import { DispatcherPreview } from "@components/Private/Dispatchers/Update";
import { MessagesDispatcherSinglePageProps } from "@components/Private/Dispatchers/Update/type";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import { getMessagesDispatcherRequest } from "@services/Dispatchers/Get/SSR";
import { GetServerSideProps } from "next";

export default function MessagesDispatcher({
  targetMessagesDispatcher,
}: MessagesDispatcherSinglePageProps) {
  return (
    <DashboardContainer>
      <DispatcherPreview dispatcher={targetMessagesDispatcher} />
    </DashboardContainer>
  );
}

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<
  MessagesDispatcherSinglePageProps
> = async ({ params, req }) => {
  const tokenNavigation = req.cookies["token_navigation"] ?? "";
  const { id } = params as { id: string };
  const dispatcher = await getMessagesDispatcherRequest(tokenNavigation, {
    id: parseInt(id),
  });

  if (!dispatcher || Object.hasOwn(dispatcher, "errors")) {
    return {
      redirect: {
        destination: `/404`, // Redireciona para a página principal
        permanent: false, // Define como redirecionamento temporário (status 307)
      },
    };
  }

  return {
    props: {
      targetMessagesDispatcher: Array.isArray(dispatcher)
        ? dispatcher[0]
        : dispatcher, // Passa o ID para o componente
    },
  };
};
