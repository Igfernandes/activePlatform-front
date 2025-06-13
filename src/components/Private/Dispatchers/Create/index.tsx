import { When } from "@components/utilities/When";
import { Definitions } from "./Definitions";
import { ClientsProps } from "./type";
import { Send } from "./Send";

type Props = {
  step: number;
} & ClientsProps;

export function MessagesDispatcherForm({
  step,
  clients,
  clientsSelected,
  handleUpdateClients,
}: Props) {

  return (
    <div className="mt-6 p-6 bg-white">
      <When value={step === 1}>
        <Definitions />
      </When>
      <When value={step === 2}>
        <Send
          clients={clients}
          clientsSelected={clientsSelected}
          handleUpdateClients={handleUpdateClients}
        />
      </When>
    </div>
  );
}
