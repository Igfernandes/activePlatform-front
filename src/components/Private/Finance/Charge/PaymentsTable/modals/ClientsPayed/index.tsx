import { GroupChecks } from "@components/shared/forms/GroupChecks";
import { Modal } from "@components/shared/layouts/Modal";
import { useClientsPayed } from "./hooks/useClientsPayed";
import { ClientsPayedPayload } from "./type";
import { useModalContext } from "@contexts/Modal";
import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import { ClientShape } from "@type/Clients";
import { useEffect } from "react";
import { Search } from "@components/shared/forms/Search";
import { useI18n } from "@contexts/I18n";

type Props = {
  clients: ClientShape[];
  handleAddClients: (clients: Array<ClientShape>) => void;
  clientsSelected: Array<ClientShape>;
};

export function ClientsPayedModal({
  clients,
  handleAddClients,
  clientsSelected,
}: Props) {
  const { t } = useI18n()
  const {
    formMethods,
    handleSubmit,
    register,
    submit,
    handleSearch,
    getClientsFiltered,
  } = useClientsPayed({
    handleAddClients,
    clients,
  });
  const { modal, handleToggleModal } = useModalContext();

  useEffect(() => {
    if (!clientsSelected) return;

    formMethods.setValue(
      "clients",
      clientsSelected.map((clientSelect) => String(clientSelect.id))
    );
  }, [clientsSelected, clients, formMethods]);

  return (
    <Modal
      title={t("Texts.clients_add")}
      isShowModal={modal.type == "ADD_CLIENT"}
      handleModal={handleToggleModal}
    >
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(submit)}>
          <div className="w-full">
            <Search
              label={t("Words.research")}
              dataTestId="users"
              handleSearch={handleSearch}
              className="w-full"
            />
          </div>
          <div>
            <div className="form-title mt-6 mb-4">
              <h4 className="text-lg w-[400px]">
                <strong>{t("finances.modal.add_clients_text")}:</strong>
              </h4>
            </div>
            <GroupChecks<ClientsPayedPayload>
              register={register}
              name={"clients"}
              items={getClientsFiltered(clients).map((client) => ({
                label: client.name,
                value: client.id,
              }))}
            />
          </div>
          <div>
            <Button
              type="submit"
              text={t("Words.save")}
              className="bg-red text-white"
            />
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
}
