import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import i18n from "@configs/i18n";
import { UserPlus } from "@assets/Icons/red/UserPlus";
import { useModalContext } from "@contexts/Modal";
import { ClientShape } from "@type/Clients";
import { Notice } from "@components/shared/others/Notice";
import { getNumberFormatted } from "@helpers/string";
import { ClientActions } from "@components/shared/others/ClientsTable/ClientActions";

type Props = {
  title?: string;
  clientsSelected: Array<ClientShape>;
  handleUpdateClients: (clients: Array<ClientShape>) => void;
};

export function InscribesTable({
  title,
  clientsSelected,
  handleUpdateClients,
}: Props) {
  const { handleToggleModal, modal } = useModalContext();

  return (
    <div>
      <SmartTable
        data={clientsSelected.map((client) => ({
          ID: client.id,
          name: client.name,
          phone: getNumberFormatted(client.phone),
          category: client.categories
            .map((category) => category.name)
            .join("/"),
          confirmation: false,
          action: <ClientActions id={client.id} />,
        }))}
        tHeads={{
          data: [
            "ID",
            i18n("Words.name"),
            i18n("Words.phone"),
            i18n("Words.category"),
            i18n("Texts.is_confirmation"),
            i18n("Words.actions"),
          ],
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
