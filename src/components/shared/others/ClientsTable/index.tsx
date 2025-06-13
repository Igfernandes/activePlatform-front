import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import i18n from "@configs/i18n";
import { useClientsTable } from "../../../Private/Finance/Create/hooks/useClientsTable";
import { ClientActions } from "./ClientActions";
import { UserPlus } from "@assets/Icons/red/UserPlus";
import { useModalContext } from "@contexts/Modal";
import { ClientShape } from "@type/Clients";
import { Notice } from "@components/shared/others/Notice";
import { getNumberFormatted } from "@helpers/string";

type Props = {
  title?: string;
  clients: ClientShape[];
  clientsSelected: Array<ClientShape>;
  handleUpdateClients: (clients: Array<ClientShape>) => void;
};

export function ClientsTable({
  title,
  clientsSelected,
  handleUpdateClients,
}: Props) {
  const { tHeadsClient } = useClientsTable();
  const { handleToggleModal, modal } = useModalContext();

  return (
    <div>
      <SmartTable
        data={clientsSelected.map((client) => ({
          ID: client.id,
          name: client.name,
          phone: getNumberFormatted(client.phone),
          email: client.email,
          category: client.categories
            .map((category) => category.name)
            .join("/"),
          action: <ClientActions id={client.id} />,
        }))}
        tHeads={{
          data: tHeadsClient.current,
          widths: [50, 200, 180, 100, 150, 30],
        }}
        options={{
          buttons: (
            <a
              className="flex items-center cursor-pointer"
              onClick={() => handleToggleModal("ADD_CLIENT")}
            >
              <UserPlus />
              <span className="text-red font-semibold ml-2">
                {i18n("Texts.clients_add")}
              </span>
            </a>
          ),
        }}
        title={title ?? i18n("Texts.link_clients")}
      />
      <Notice
        headerTitle={i18n("Words.attention")}
        title={i18n("Components.clients_table.title_already_exclude")}
        text={i18n("Components.clients_table.text_already_exclude")}
        onSubmit={() => {
          handleToggleModal(false);
          handleUpdateClients(
            clientsSelected.filter((client) => client.id !== modal.id)
          );
        }}
        isShowModal={modal.type === "EXCLUDE"}
        onModal={handleToggleModal}
      />
    </div>
  );
}
