import { GetServerSideProps } from "next";
import { privateRoutes } from "@configs/routes/Web/navigation";
import i18n from "@configs/i18n";
import { getGalleries } from "@services/Galleries/Get/SSR";
import { GalleryPageProps } from "@components/Private/Galleries/type";
import { GalleryProfile } from "@components/Private/Galleries/Profile";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";

export default function GalleryUpdate({ targetGallery }: GalleryPageProps) {
  return (
    <DashboardContainer>
      <GalleryProfile gallery={targetGallery} />
    </DashboardContainer>
  );
}

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<GalleryPageProps> = async ({
  req,
  params,
}) => {
  try {
    const tokenNavigation = req.cookies["token_navigation"] ?? "";
    const { id } = params as { id: string }; // Tipando o params
    const data = await getGalleries(tokenNavigation, { id: +id });

    if (!Array.isArray(data) || data.length == 0) {
      return {
        redirect: {
          destination: `${privateRoutes.galleries}?alert=${i18n(
            "errors.system.not_found"
          )}`, // Redireciona para a página principal
          permanent: true, // Define como redirecionamento temporário (status 307)
        },
      };
    }

    return {
      props: {
        targetGallery: data[0], // Passa o ID para o componente
      },
    };
  } catch (error) {
    console.log(error);
    return {
      redirect: {
        destination: `${privateRoutes.galleries}?alert=${i18n("errors.system.not_found")}`, // Redireciona para a página principal
        permanent: true, // Define como redirecionamento temporário (status 307)
      },
    };
  }
}
