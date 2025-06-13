import TimelineChart from "@components/shared/others/Graphics/TimeLineChart/TimelineChart";
import { FormBoard } from "./FormBoard";
import { ChargeShape } from "@type/Charges";
import { usePaymentsData } from "./hooks/usePaymentsData";
import i18n from "@configs/i18n";
import { ClientsTable } from "../../../shared/others/ClientsTable";
import { useCharge } from "./hooks/useCharge";
import { ClientsModal } from "../../../shared/others/ClientsTable/modals/ClientsModal";
import { PaymentsTable } from "./PaymentsTable";

type Props = {
  charge: ChargeShape;
};

export function ChargePreview({ charge }: Props) {
  const { clients, clientsSelected, updateClientsSelected } = useCharge({
    charge,
  });
  const { getPaymentsByMonth, payments } = usePaymentsData({
    chargeId: charge.id,
  });

  return (
    <>
      <TimelineChart
        title={i18n("Words.lasted_operations")}
        data={getPaymentsByMonth()}
      />

      <div className="my-4">
        <PaymentsTable payments={payments} clients={clients} />
      </div>
      <FormBoard charge={charge} />
      <div className="my-4">
        <ClientsTable
          clientsSelected={clientsSelected}
          clients={clients}
          handleUpdateClients={updateClientsSelected}
        />
      </div>
      <ClientsModal
        clientsSelected={clientsSelected}
        clients={clients}
        handleAddClients={updateClientsSelected}
      />
    </>
  );
}
