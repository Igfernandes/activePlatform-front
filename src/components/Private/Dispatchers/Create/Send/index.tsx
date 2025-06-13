import { ClientsTable } from "@components/shared/others/ClientsTable";
import { ClientsProps } from "../type";
import { TextEdit } from "@components/shared/forms/TextEdit";
import i18n from "@configs/i18n";
import { useSend } from "./hooks/useSend";
import { Select } from "@components/shared/forms/Select";
import { Checkbox } from "@components/shared/forms/Checkbox";
import { useFormContext } from "react-hook-form";
import { FormsPayload } from "../schema";

type Props = ClientsProps;

export function Send({ clients, clientsSelected, handleUpdateClients }: Props) {
  const { services, charges } = useSend();
  const { register, getValues } = useFormContext<FormsPayload>();

  return (
    <div>
      <div className="mb-8">
        <div className="row flex flex-wrap justify-between">
          <div className="col w-full md:w-[48%]">
            <div className="form-title mb-2">
              <h4 className="font-semibold">Selecione uma serviço:</h4>
            </div>
            <Select
              {...register("service_id")}
              dataTestId="services"
              label={i18n("Words.services")}
              options={[
                {
                  text: "--",
                  value: "",
                },
                ...services.map((service) => ({
                  text: service.name,
                  value: service.id,
                })),
              ]}
            />
          </div>
          <div className="col w-full md:w-[48%]">
            <div className="md:mb-8">
              <div className="form-title mb-2">
                <h4 className="font-semibold">Selecione uma cobrança:</h4>
              </div>
              <Select
                {...register("charge_id")}
                dataTestId="charges"
                label={i18n("Words.charges")}
                options={[
                  {
                    text: "--",
                    value: "",
                  },
                  ...charges.map((charge) => ({
                    text: charge.title,
                    value: charge.id,
                  })),
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6 md:mb-4">
        <TextEdit
          name="content"
          defaultValue={getValues("content") ?? ""}
          label={i18n("Words.overlay_text")}
          dataTestId="overlay_text"
          style={{
            minHeight: "400px",
          }}
        />
      </div>
      <ClientsTable
        clients={clients}
        clientsSelected={clientsSelected}
        handleUpdateClients={handleUpdateClients}
      />
      <div className="mx-6 mt-6">
        <Checkbox
          {...register("all_clients")}
          dataTestId="all_clients"
          label={"Para selecionar todos os clientes disponíveis."}
        />
      </div>
    </div>
  );
}
