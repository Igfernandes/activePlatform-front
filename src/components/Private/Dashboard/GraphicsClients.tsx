import { CircleGraphic } from "@components/shared/others/Graphics/CircleGraphic";
import i18n from "@configs/i18n";
import { ChartOptions } from "chart.js";
import { CategoryStaticData, ClientsByDDDStaticData } from "./type";
import { getRandomColor } from "@helpers/colors";
import { ClientShape } from "@type/Clients";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { Feeds } from "@components/shared/layouts/Feeds";
import { PolarGraphic } from "@components/shared/others/Graphics/PolarGraphic";
import { InvitesShape } from "@type/Invites";
import { Skeleton } from "@components/utilities/Skeleton";

const sampleOptions: ChartOptions<"doughnut"> = {
  responsive: true,
  maintainAspectRatio: false,
};

type Props = {
  categories: Array<CategoryStaticData>;
  clients: Array<ClientShape>;
  clientsByDDD: Array<ClientsByDDDStaticData>;
  invites: Array<InvitesShape>;
};
export function GraphicsClients({
  categories,
  clients,
  clientsByDDD,
  invites,
}: Props) {
  const { clients: clientsRoute, usersManager } = privateRoutes;

  return (
    <div className="my-4">
      <div className="content flex flex-wrap justify-around">
        <div className="w-full md:w-[320px] my-4 md:my-0">
          <Skeleton
            settings={{
              type: "board",
              amount: 1,
            }}
            isLoading={!categories}
          >
            <CircleGraphic
              title={i18n("Words.clients_categories")}
              data={{
                labels: categories.map((category) => category.name),
                datasets: [
                  {
                    data: categories.map((category) => category?.clients ?? 0),
                    backgroundColor: categories.map(() => getRandomColor()),
                  },
                ],
              }}
              options={sampleOptions}
            />
          </Skeleton>
        </div>
        <div className="w-full md:w-[320px] my-4 md:my-0 ml-2">
          <Skeleton
            settings={{
              type: "board",
              amount: 1,
            }}
            isLoading={!clientsByDDD}
          >
            <PolarGraphic
              title={i18n("Words.clients_by_ddd")}
              data={{
                labels: clientsByDDD.slice(0, 3).map((client) => client.ddd),
                datasets: [
                  {
                    data: clientsByDDD.map((client) => client.amount ?? 0),
                    backgroundColor: categories.map(() => getRandomColor()),
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: true, // ou false se quiser ocultar
                    position: "top",
                  },
                  decimation: {
                    algorithm: "lttb",
                  },
                  tooltip: {
                    enabled: true,
                  },
                },
              }}
            />
          </Skeleton>
        </div>
        <div className="w-full md:w-[30%] ml-2">
          <Skeleton
            isLoading={!clients || !invites}
            settings={{
              type: "board",
            }}
          >
            <Feeds
              title={i18n("Words.dependencies_historic")}
              data={[
                ...clients
                  ?.filter((client) => !client.email)
                  .map((client) => ({
                    scape: `${clientsRoute}/${client.id}`,
                    message: `${i18n("Words.not_fill_email")}:  ${client.name}`,
                  })),
                ...invites
                  .filter((invite) => !!invite.is_valid)
                  ?.map((invite) => ({
                    message: `${i18n(
                      "Words.invite_pending"
                    )}: ${invite.email.slice(0, 14)}...`,
                    scape: usersManager,
                  })),
              ]}
            />
          </Skeleton>
        </div>
      </div>
    </div>
  );
}
