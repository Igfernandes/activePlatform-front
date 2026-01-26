import { GroupChecks } from "@components/shared/forms/GroupChecks";
import { Modal } from "@components/shared/layouts/Modal";
import { ClientsPayedPayload } from "./type";
import { useModalContext } from "@contexts/Modal";
import { FormProvider } from "react-hook-form";
import i18n from "@configs/i18n";
import { Button } from "@components/shared/layouts/Button";
import { useEffect } from "react";
import { Search } from "@components/shared/forms/Search";
import { Select } from "@components/shared/forms/Select";
import { ClientEventShape } from "@type/Clients/ClientEvent";
import { ClientShape } from "@type/Clients";
import { useInscribes } from "./hooks/useInscribes";

type Props = {
  clients: ClientShape[];
  handleAddClients: (inscribeIds: Array<number>) => void;
  clientsSelected: Array<ClientEventShape>;
  isLoading?: boolean;
};

export function ClientsModal({
  clients,
  handleAddClients,
  clientsSelected,
  isLoading,
}: Props) {
  const {
    formMethods,
    handleSubmit,
    register,
    submit,
    handleSearch,
    getClientsFiltered,
    categories,
  } = useInscribes({
    handleAddClients,
    clientsSelected,
  });
  const { reset } = formMethods
  const { modal, handleToggleModal } = useModalContext();

  useEffect(() => {
    if (!clientsSelected) return;

    const clientsSelectedId = clientsSelected.map(
      (clientSelect) => clientSelect.id
    );
    reset({
      clients: clients.map((client) =>
        clientsSelectedId.includes(client.id) ? String(client.id) : ""
      )
    });
  }, [clientsSelected, clients, reset]);

  return (
    <Modal
      title={i18n("Texts.clients_add")}
      isShowModal={modal.type == "ADD_CLIENT"}
      handleModal={handleToggleModal}
    >
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(submit)}>
          <div className="w-full">
            <Search
              label={i18n("Words.research")}
              dataTestId="users"
              handleSearch={handleSearch}
              className="w-full"
            />
          </div>
          <div className="my-4">
            <Select
              {...register("category")}
              dataTestId="categories"
              label={i18n("Words.categories")}
              options={[
                {
                  text: "--",
                  value: "",
                },
                ...categories?.map((category) => ({
                  text: category.name,
                  value: category.id,
                })),
              ]}
            />
          </div>
          <div>
            <div className="form-title mt-6 mb-4">
              <h4 className="text-sm md:text-lg md:w-[400px]">
                <strong className="mr-2">
                  {i18n("Components.clients_table.add_clients_text")}:
                </strong>
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
              isLoading={isLoading}
              text={i18n("Words.save")}
              className="bg-red text-white"
            />
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
}
