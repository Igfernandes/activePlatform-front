import { GetServerSideProps } from "next";
import { privateRoutes } from "@configs/routes/Web/navigation";
import i18n from "@configs/i18n";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import { ServicePageProps } from "@components/Private/Services/Forms/type";
import { ServicesForm } from "@components/Private/Services/Forms";
import useGetServices from "@services/Services/Get/useGetServices";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ServicesShape } from "@type/Services";

export default function UserProfile({ serviceId }: ServicePageProps) {
  const { data, isFetched } = useGetServices<{ id: number }>({
    id: serviceId,
  });
  const [service, setService] = useState<ServicesShape>();
  const router = useRouter();

  useEffect(() => {
    if (!data && !!isFetched) {
      router.push(
        `${privateRoutes.services}?alert=${i18n(
          "errors.system.not_found_service"
        )}`
      );
      return;
    }

    setService(data);
  }, [data, isFetched, router]);

  return (
    <DashboardContainer>
      <ServicesForm service={service} />
    </DashboardContainer>
  );
}

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<ServicePageProps> = async ({
  params,
}) => {
  const { id } = params as { id: string }; // Tipando o params

  return {
    props: {
      serviceId: parseInt(id),
    },
  };
};
