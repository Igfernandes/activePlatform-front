import { Button } from "@components/shared/forms/Button";
import { useForm } from "./hooks/useForm";
import { FormProvider } from "react-hook-form";
import i18n from "@configs/i18n";
import { Input } from "@components/shared/forms/Input";
import { Phone } from "@components/shared/forms/Phone";
import { When } from "@components/utilities/When";
import Link from "next/link";
import { getCPFFormatted } from "@helpers/string";

export function ConfirmationForm() {
  const { formMethods, register, isLoading, handleSubmit, confirmations } =
    useForm();

  return (
    <>
      <When value={!confirmations}>
        <FormProvider {...formMethods}>
          <form onSubmit={handleSubmit}>
            <div className="form-title text-center mb-2">
              <h2 className="font-semibold text-red text-xl">
                {i18n("Screens.confirmations.title")}
              </h2>
            </div>
            <div className="form-text text-center">
              <p className="text-sm">{i18n("Screens.confirmations.text")}</p>
            </div>
            <div className="form-group my-4">
              <Phone
                {...register("phone")}
                dataTestId="phone"
                label={i18n("Words.phone")}
              />
            </div>
            <div className="form-group my-4">
              <Input
                {...register("cpf", {
                  onChange: (e) => {
                    e.target.value = getCPFFormatted(e.target.value);
                  },
                })}
                dataTestId="cpf"
                label={i18n("Words.cpf")}
              />
              <div className="text-justify leading-3 mt-2">
                <span className="text-xs text-red">
                  Insira corretamente o seu cpf para visualizar as suas
                  inscrições e realizar sua confirmação
                </span>
              </div>
            </div>
            <div className="form-submit mt-6">
              <Button
                text={i18n("Words.verify")}
                type="submit"
                isLoading={isLoading}
              />
            </div>
          </form>
        </FormProvider>
      </When>
      <When value={!!confirmations}>
        <When value={confirmations?.length === 0}>
          <div className="p-2 shadow-lg text-center ">
            <h2 className="text-xl font-semibold text-red mb-4">
              Ops. Não há <br /> inscrições Pendentes
            </h2>
            <span>Não foi possível encontrar confirmações relacionadas</span>
          </div>
        </When>
        <When value={(confirmations ?? []).length > 0}>
          <div>
            <div className="mb-5 text-center font-semibold">
              <span className="block text-lg">
                Clique em um dos links abaixo <br/> e faça a confirmação.
              </span>
            </div>
            <ul>
              {confirmations?.map((confirmation, key) => (
                <li
                  className="bg-red hover:border-red border-2 hover:bg-white hover:text-red text-white rounded-md px-2 py-2 my-2"
                  key={key}
                >
                  <Link href={confirmation.link}> {confirmation.title} </Link>
                </li>
              ))}
            </ul>
          </div>
        </When>
      </When>
    </>
  );
}
