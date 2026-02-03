import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { ClientActions } from "./ClientActions";
import { UserPlus } from "@assets/Icons/red/UserPlus";
import { useModalContext } from "@contexts/Modal";
import { ClientShape } from "@type/Clients";
import { Notice } from "@components/shared/others/Notice";
import { getNumberFormatted } from "@helpers/string";
import { useClientsTable } from "./hooks/useClientsTable";
import { useI18n } from "@contexts/I18n";

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
  const { t } = useI18n()
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
          data: tHeadsClient,
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
                {t("Texts.clients_add")}
              </span>
            </a>
          ),
        }}
        title={title ?? t("Texts.link_clients")}
      />
      <Notice
        headerTitle={t("Words.attention")}
        title={t("Components.clients_table.title_already_exclude")}
        text={t("Components.clients_table.text_already_exclude")}
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
