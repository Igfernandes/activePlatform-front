import { FormProvider } from "react-hook-form";
import i18n from "@configs/i18n";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { ClientsTable } from "@components/shared/others/ClientsTable";
import { Definitions } from "@components/Private/Finance/Create/Definitions";
import { Button } from "@components/shared/layouts/Button";
import { useCharge } from "./hooks/useCharge";
import { ClientShape } from "@type/Clients";
import { useRouter } from "next/router";

type Props = {
  clientsSelected: Array<ClientShape>;
  clients: Array<ClientShape>;
  handleUpdateClients: (clients: Array<ClientShape>) => void;
};

export function CreateCharge({
  clientsSelected,
  clients,
  handleUpdateClients,
}: Props) {
  const { formMethods, submit, isPending } = useCharge({ clientsSelected });
  const router = useRouter();

  return (
    <div>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(submit)} className="">
          <Definitions />
          <ClientsTable
            clientsSelected={clientsSelected}
            clients={clients}
            handleUpdateClients={handleUpdateClients}
          />
          <div
            className={
              "flex items-center flex-wrap lg:flex-nowrap w-full lg:w-auto mt-6 bg-white rounded-lg py-4 px-6"
            }
          >
            <div className="md:ml-auto mb-2 md:md-auto lg:w-[70%] md:absolute lg:static top-0 right-0">
              <span
                onClick={() => {
                  formMethods.reset();
                  handleUpdateClients([]);
                }}
              >
                {i18n(`Words.clean`)}
              </span>
            </div>
            <div className="flex justify-end w-full">
              <div className="lg:ml-8 w-[47%] lg:w-auto">
                <Button
                  className="p-3 border-[1px] border-secondary rounded-xl w-full"
                  text={i18n(`Words.cancel`)}
                  type="button"
                  onClick={() => router.push(privateRoutes.finance)}
                />
              </div>
              <div className="ml-4 w-[47%] lg:w-auto">
                <Button
                  className="p-3 bg-red text-white rounded-xl w-full"
                  text={true ? i18n(`Words.save`) : i18n(`Words.update`)}
                  isLoading={isPending}
                />
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
