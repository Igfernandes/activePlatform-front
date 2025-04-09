import { Button } from "@components/shared/layouts/Button";
import i18n from "@configs/i18n";
import { FormProvider, UseFormReturn } from "react-hook-form";

type Props<Payload extends Record<string, unknown>> = {
  formMethods: UseFormReturn<Payload>;
  submit: (payload: Payload) => void;
  children: React.ReactNode;
};

export function InfoBoard<Payload extends Record<string, unknown>>({
  formMethods,
  submit,
  children,
}: Props<Payload>) {
  const { handleSubmit } = formMethods;
  return (
    <FormProvider {...formMethods}>
      <form className="bg-white" onSubmit={handleSubmit(submit)}>
        <table className="w-full">
          <tbody>{children}</tbody>
        </table>
        <div className="form-submit w-full md:w-1/6 ml-auto mt-6">
            <Button type="submit" text={i18n("words.save")} className="bg-red text-white"  />
        </div>
      </form>
    </FormProvider>
  );
}
