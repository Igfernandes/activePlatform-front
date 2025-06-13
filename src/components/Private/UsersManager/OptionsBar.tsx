import { Search } from "@components/shared/forms/Search";
import { Button } from "@components/shared/layouts/Button";
import i18n from "@configs/i18n";
import { useModalContext } from "@contexts/Modal";
import { ModalUserOperationType } from "./type";

type Props = {
  handleSearch: (words: string) => void;
};

export function OptionsBar({ handleSearch }: Props) {
  const { handleToggleModal } = useModalContext<ModalUserOperationType>();

  return (
    <div>
      <div className="flex justify-between mb-6 flex-wrap md:flex-nowrap">
        <Search
          label={i18n("Words.research")}
          dataTestId="users"
          handleSearch={handleSearch}
          className="w-full md:w-[25%]"
        />
        <div className="w-full mt-4 md:mt-0 md:w-[75%] flex justify-end flex-wrap md:flex-nowrap">
          <div className="mx-2 w-full md:w-auto mb-3 md:mb-0">
            <Button
              className="border border-zinc-300 px-3 font-bold rounded-xl"
              text={i18n("Screens.dashboard.users.create_user_groups")}
              type="button"
              onClick={() => handleToggleModal("DEFAULT_GROUP")}
            />
          </div>
          <div className="mx-2 w-full md:w-auto">
            <Button
              className="border border-zinc-300 px-3 font-bold rounded-xl"
              text={i18n("Screens.dashboard.users.invite_users")}
              type="button"
              onClick={() => handleToggleModal("DEFAULT_USER")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
