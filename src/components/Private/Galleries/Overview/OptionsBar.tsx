import { Search } from "@components/shared/forms/Search";
import i18n from "@configs/i18n";
import { useModalContext } from "@contexts/Modal";
import { ModalGalleryOperationType } from "../type";
import { Button } from "@components/shared/layouts/Button";
import { AccessControl } from "@components/shared/settings/AccessControl";
import { PERMISSIONS } from "@constants/permissions";

type Props = {
  handleSearch: (words: string) => void;
};

export function OptionsBar({ handleSearch }: Props) {
  const { handleToggleModal } = useModalContext<ModalGalleryOperationType>();
  return (
    <div className="flex justify-between flex-wrap md:flex-nowrap mb-6">
      <Search
        label={i18n("Words.research")}
        dataTestId="users"
        handleSearch={handleSearch}
        className="w-full md:w-[45%] xl:w-[25%]"
      />
      <div className="mt-5 md:mt-0 w-full flex-wrap lg:flex-none md:w-[75%] flex justify-around md:justify-end">
        <div className="w-full md:w-auto mx-0 md:mx-2 mb-3 lg:my-0">
          <AccessControl targetPermissions={[PERMISSIONS.galleries.create]}>
            <Button
              className="border border-zinc-300 px-3 font-bold rounded-xl bg-secondary text-rose-500"
              text={i18n("Words.register")}
              type="button"
              onClick={() => handleToggleModal("CREATE")}
            />
          </AccessControl>
        </div>
      </div>
    </div>
  );
}
