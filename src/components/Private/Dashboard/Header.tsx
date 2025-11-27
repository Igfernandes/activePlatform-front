import { Box } from "@assets/Icons/black/Box";
import { Form } from "@assets/Icons/black/Form";
import { UserGroup } from "@assets/Icons/black/UserGroup";
import { UsersManager } from "@assets/Icons/black/UsersManager";
import { Wallet } from "@assets/Icons/black/Wallet";
import { CardAmountBoard } from "@components/shared/layouts/CardAmountBoard";
import i18n from "@configs/i18n";
import { ManagerEntitiesProps } from "./type";

export function DashboardHeader({
  clients,
  services,
  users,
  forms,
  charges,
}: ManagerEntitiesProps) {
  return (
    <CardAmountBoard
      viewLimit={5}
      isLoading={!users || !clients || !services || !forms || !charges}
      items={[
        {
          icon: <UserGroup fill="white" />,
          title: i18n("Words.clients"),
          value: String(clients?.length ?? 0).padStart(6, "0"),
        },
        {
          icon: <UsersManager fill="white" />,
          background: "bg-red",
          title: i18n("Words.users"),
          value: String(users?.length ?? 0).padStart(6, "0"),
        },
        {
          icon: <Box fill="white" />,
          background: "bg-green",
          title: i18n("Words.services"),
          value: String(services?.length ?? 0).padStart(6, "0"),
        },
        {
          icon: <Form fill="white" />,
          background: "bg-purple",
          title: i18n("Words.forms"),
          value: String(forms?.length ?? 0).padStart(6, "0"),
        },
        {
          icon: <Wallet fill="white" />,
          background: "bg-orange",
          title: i18n("Words.charges"),
          value: String(charges?.length ?? 0).padStart(6, "0"),
        },
      ]}
    />
  );
}
