import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { useModalContext } from "@contexts/Modal";
import { Notice } from "@components/shared/others/Notice";
import { getNumberFormatted } from "@helpers/string";
import { ClientActions } from "@components/shared/others/ClientsTable/ClientActions";
import Link from "next/link";
import { getMessageConfirmation } from "./message";
import useWindow from "@hooks/useWindow";
import { ClientsModal } from "./ClientsModal";
import { ActionsTable } from "./ActionsTable";
import { EventShape } from "@type/Events";
import { useInscribeEvent } from "../hooks/useInscribeService";
import { useI18n } from "@contexts/I18n";

type Props = {
  event: EventShape;
  stock?: number;
  title?: string;
};

export function InscribesTable({ title, event, stock }: Props) {
  const {
    clients,
    clientsSelected,
    handleInscribes,
    handleUnsubscribe,
    isLoadingInscribes,
  } = useInscribeEvent({ event, stock });
  const { t } = useI18n();
  const { baseUrl } = useWindow();
  const { handleToggleModal, modal } = useModalContext();

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
                  event,
                  clientName: client.name,
                  link: `${baseUrl}/events/confirmation?key=${event.id}&client=${client.id}`,
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
            t("Words.name"),
            t("Words.phone"),
            t("Words.category"),
            t("Texts.is_confirmation"),
            t("Words.actions"),
          ],
          widths: [50, 200, 180, 100, 150, 30],
        }}
        options={{
          pagination: {
            max: 10,
          },
          filters: {
            tag: {
              key: "confirmation",
            },
          },
          buttons: (
            <ActionsTable
              serviceId={event.id}
              handleToggleModal={handleToggleModal}
            />
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

          handleUnsubscribe(modal.id as number);
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
