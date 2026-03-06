import { Search } from "@components/shared/forms/Search";
import { useModalContext } from "@contexts/Modal";
import { ModalClientsOperationType } from "../type";
import { Button } from "@components/shared/layouts/Button";
import { AccessControl } from "@components/shared/settings/AccessControl";
import { PERMISSIONS } from "@constants/permissions";
import { useI18n } from "@contexts/I18n";
import { ToggleSwitch } from "@components/shared/forms/ToggleSwitch";
import { Status } from "@type/status";

type Props = {
  handleSearch: (words: string) => void;
  setStatus: (status: Status) => void;
};

export function OptionsBar({ handleSearch, setStatus }: Props) {
  const { t } = useI18n()
  const { handleToggleModal } = useModalContext<ModalClientsOperationType>();

  return (
    <div className="flex justify-between items-center flex-wrap md:flex-nowrap mb-6">
      <Search
        label={t("Words.research")}
        dataTestId="users"
        handleSearch={handleSearch}
        className="w-full md:w-[45%] xl:w-[25%]"
      />

      <div className="mt-5 md:mt-0 w-full flex-wrap lg:flex-none items-center md:w-[75%] flex justify-around md:justify-end">
        <div className="mb-4 md:mr-2 md:mb-0">
          <ToggleSwitch

            setValue={(name, value) => setStatus(value)} dataTestId="status" label={t("Words.status")} name="status" options={{
              left: {
                text: t("Words.active") + "s",
                value: "ACTIVE"
              },
              right: {
                text: t("Words.inactive") + "s",
                value: "INACTIVE"
              }
            }} />
        </div>
        <div className="w-full md:w-auto mx-0 md:mx-2 mb-3 lg:my-0">
          <AccessControl targetPermissions={[PERMISSIONS.clients.create]}>
            <Button
              className="border border-zinc-300 px-3 font-bold rounded-xl bg-secondary text-rose-500"
              text={t("Words.register")}
              type="button"
              onClick={() => handleToggleModal("CLIENT")}
            />
          </AccessControl>
        </div>
        <div className="w-full md:w-auto mx-0 lg:mx-2">
          <AccessControl targetPermissions={[PERMISSIONS.categories.create]}>
            <Button
              className="border border-zinc-300 px-3 font-bold rounded-xl"
              text={t("Words.category_manager")}
              type="button"
              onClick={() => handleToggleModal("CATEGORY")}
            />
          </AccessControl>
        </div>
        <div className="w-full md:w-auto mt-4 md:mt-0">
          <AccessControl targetPermissions={[PERMISSIONS.clients.create]}>
            <Button
              className="border border-zinc-300 px-3 font-bold rounded-xl"
              text={t("Words.import_clients")}
              type="button"
              onClick={() => handleToggleModal("IMPORT")}
            ></Button>
          </AccessControl>
        </div>
      </div>
    </div>
  );
}
