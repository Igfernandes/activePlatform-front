import { MessagesDispatcherShape } from "@type/MessagesDispatcherShape";
import { FormBoardHeader } from "./FormBoard/header";
import { TSpan } from "@components/shared/forms/InfoBoard/fields/Span";
import i18n from "@configs/i18n";
import dayjs from "dayjs";
import { InfoBoard } from "@components/shared/forms/InfoBoard/viewer";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useForms } from "./hooks/useForms";
import { ClientsTable } from "@components/shared/others/ClientsTable";
import { FormProvider } from "react-hook-form";
import { ClientsModal } from "@components/shared/others/ClientsTable/modals/ClientsModal";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { Button } from "@components/shared/forms/Button";

type Props = {
  dispatcher: MessagesDispatcherShape;
};

dayjs.extend(customParseFormat);
export function DispatcherPreview({ dispatcher }: Props) {
  const {
    clients,
    setClientsSelected,
    clientsSelected,
    formMethods,
    clientsDispatchers,
    isLoading,
    handleSubmit,
    submit,
  } = useForms({
    dispatcher,
  });

  return (
    <>
      <div className="Logs mb-4">
        <SmartTable
          options={{
            filters: {
              tag: {
                key: "status",
              },
            },
          }}
          tHeads={{
            data: [
              i18n("Words.name"),
              i18n("Words.message"),
              i18n("Words.status"),
              i18n("Words.platform"),
              i18n("Words.send_at"),
            ],
          }}
          data={clientsDispatchers.map((client) => ({
            name: client.client_name,
            message: client.message_title,
            status: i18n(`Words.${client.status.toLocaleLowerCase()}`),
            platform: client.platform,
            send_at: client?.send_at
              ? dayjs(client?.send_at).format("DD/MM/YYYY HH:MM")
              : "--",
          }))}
          title={i18n("Words.dispatchers_historic")}
        />
      </div>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(submit)}>
          <div className="bg-white py-7 px-4 rounded-lg">
            <div className="mb-6">
              <FormBoardHeader dispatcher={dispatcher} />
            </div>
            <InfoBoard>
              <TSpan
                text={i18n("Words.title")}
                value={dispatcher.title}
                dataTestId="title"
              />
              <TSpan
                text={i18n("Words.platforms")}
                value={dispatcher.platforms}
              />
              <TSpan
                text={i18n("Words.period")}
                value={
                  dispatcher.period
                    ? i18n(`Words.${dispatcher.period?.toLocaleLowerCase()}`)
                    : "--"
                }
              />
              <TSpan
                text={i18n("Words.started_at")}
                value={dayjs(dispatcher.started_at).format("DD/MM/YYYY HH:mm")}
              />
              <TSpan
                text={i18n("Words.scheduled_at")}
                value={dispatcher.scheduled_at ?? "--"}
              />
              <TSpan text={i18n("Words.author")} value={dispatcher.author} />
            </InfoBoard>
          </div>
          <div className="mt-4">
            <ClientsTable
              title={i18n("Words.new_dispatchers")}
              clients={clients ?? []}
              handleUpdateClients={setClientsSelected}
              clientsSelected={clientsSelected}
            />
          </div>
          <div className="bg-white p-4  mt-4">
            <div className="max-w-[200px] ml-auto">
              <Button
                type="submit"
                text={i18n("Words.update")}
                isLoading={isLoading}
              />
            </div>
          </div>
        </form>
      </FormProvider>
      <div className="mt-4">
        <ClientsModal
          clients={clients}
          handleAddClients={setClientsSelected}
          clientsSelected={clientsSelected}
        />
      </div>
    </>
  );
}
