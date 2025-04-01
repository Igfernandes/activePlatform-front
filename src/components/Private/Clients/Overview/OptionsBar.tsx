import { Search } from "@components/shared/forms/Search";
import i18n from "@configs/i18n";
import { useModalContext } from "@contexts/Modal";
import { ModalClientsOperationType } from "../type";
import { Button } from "@components/shared/layouts/Button";

type Props = {
  handleSearch: (words: string) => void;
};

export function OptionsBar({ handleSearch }: Props) {
  const { handleToggleModal } = useModalContext<ModalClientsOperationType>();
  return (
    <div className="flex justify-between flex-wrap md:flex-nowrap mb-6">
      <Search
        label={i18n("words.research")}
        dataTestId="users"
        handleSearch={handleSearch}
        className="w-full md:w-[45%] xl:w-[25%]"
      />
      <div className="mt-5 md:mt-0 w-full md:w-[75%] flex justify-around md:justify-end">
        <div className="mx-0 md:mx-2">
          <Button
            className="border border-zinc-300 px-3 font-bold rounded-xl bg-secondary text-primary"
            text={i18n("words.register")}
            type="button"
            onClick={() => handleToggleModal("CLIENT")}
          />
        </div>
        <div className="mx-2">
          <Button
            className="border border-zinc-300 px-3 font-bold rounded-xl"
            text={i18n("words.category_manager")}
            type="button"
            onClick={() => handleToggleModal("CATEGORY")}
          />
        </div>
      </div>
    </div>
  );
}
