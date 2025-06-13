import { Button } from "@components/shared/layouts/Button";
import i18n from "@configs/i18n";
import { FormProvider, UseFormReturn } from "react-hook-form";

type Props<Payload extends Record<string, unknown>> = {
  formMethods: UseFormReturn<Payload>;
  submit: (payload: Payload) => void|false;
  children: React.ReactNode;
  isLoading: boolean;
};

export function InfoBoard<Payload extends Record<string, unknown>>({
  formMethods,
  submit,
  children,
  isLoading,
}: Props<Payload>) {
  const { handleSubmit } = formMethods;
  return (
    <div>
      <FormProvider {...formMethods}>
        <form className="bg-white" onSubmit={handleSubmit(submit)}>
          <table className="w-full">
            <tbody>{children}</tbody>
          </table>
          <div className="form-submit w-full md:w-1/6 ml-auto mt-6">
            <Button
              type="submit"
              text={i18n("Words.save")}
              className="bg-red text-white"
              isLoading={isLoading}
            />
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
