import { GetServerSideProps } from "next";
import { privateRoutes } from "@configs/routes/Web/navigation";
import i18n from "@configs/i18n";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { EventShape } from "@type/Events";
import { EventPageProps } from "@components/Private/Events/Forms/type";
import useGetEvents from "@services/Events/Get/useGetServices";
import { EventsForm } from "@components/Private/Events/Forms";

export default function EventUpdate({ eventId }: EventPageProps) {
  const { data, isFetched } = useGetEvents<{ id: number }>({
    id: eventId,
  });
  const [event, setEvent] = useState<EventShape>();
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

    setEvent(data as EventShape);
  }, [data, isFetched, router]);

  return (
    <DashboardContainer>
      <EventsForm event={event} />
    </DashboardContainer>
  );
}

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<EventPageProps> = async ({
  params,
}) => {
  const { id } = params as { id: string }; // Tipando o params

  return {
    props: {
      eventId: parseInt(id),
    },
  };
};
