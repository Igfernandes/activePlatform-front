import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import i18n from "@configs/i18n";
import { UserPlus } from "@assets/Icons/red/UserPlus";
import { useModalContext } from "@contexts/Modal";
import { Notice } from "@components/shared/others/Notice";
import { getNumberFormatted } from "@helpers/string";
import { ClientActions } from "@components/shared/others/ClientsTable/ClientActions";
import useGetClientsServices from "@services/Clients/Services/Get/useGet";
import { useEffect, useState } from "react";
import { useInscribeService } from "../hooks/useInscribeService";
import { ServicesShape } from "@type/Services";
import { ClientsModal } from "@components/shared/others/ClientsTable/modals/ClientsModal";
import Link from "next/link";
import { getMessageConfirmation } from "./message";
import useWindow from "@hooks/useWindow";

type Props = {
  service: ServicesShape;
  stock: number;
  title?: string;
};

export function InscribesTable({ title, service, stock }: Props) {
  const {
    clients,
    clientsSelected,
    handleUpdateClientsSelected,
    handleInscribes,
    isLoadingInscribes,
  } = useInscribeService({ service, stock });
  const { data: inscribesData } = useGetClientsServices({
    serviceId: service.id,
  });
  const { baseUrl } = useWindow();
  const { handleToggleModal, modal } = useModalContext();
  const [inscribesId, setInscribesId] = useState<Array<number>>([]);

  useEffect(() => {
    if (!inscribesData) return;

    const clientIds = inscribesData.map((inscribe) => inscribe.id);

    setInscribesId(inscribesId);
    handleUpdateClientsSelected(
      clients.filter((client) => clientIds.includes(client.id))
    );
  }, [inscribesData, clients]);

  return (
    <div>
      <SmartTable
        data={clientsSelected.map((client) => ({
          ID: client.id,
          name: client.name,
          phone: (
            <Link
              className="underline text-red"
              target="_blank"
              href={`https://wa.me/${client.phone}?text=${encodeURIComponent(
                getMessageConfirmation({
                  service,
                  clientName: client.name,
                  link: `${baseUrl}/services/confirmation?key=${service.id}&client=${client.id}`,
                })
              )}`}
            >
              {getNumberFormatted(client.phone)}
            </Link>
          ),
          category: client.categories
            .map((category) => category.name)
            .join("/"),
          confirmation: client.is_confirm ? "Confirmado" : "Pendente",
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
          handleInscribes(
            clientsSelected.filter((client) => client.id !== modal.id)
          );
        }}
        isShowModal={modal.type === "EXCLUDE"}
        onModal={handleToggleModal}
      />
      <ClientsModal
        clients={clients}
        clientsSelected={clientsSelected}
        handleAddClients={handleInscribes}
        isLoading={isLoadingInscribes}
      />
    </div>
  );
}
