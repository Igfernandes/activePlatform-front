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
      <div className="flex justify-between mb-6">
        <Search
          label={i18n("words.research")}
          dataTestId="users"
          handleSearch={handleSearch}
          className="w-[25%]"
        />
        <div className="w-[75%] flex justify-end">
          <div className="mx-2">
            <Button
              className="border border-zinc-300 px-3 font-bold rounded-xl"
              text={i18n("words.create_user_groups")}
              type="button"
              onClick={() => handleToggleModal("DEFAULT_GROUP")}
            />
          </div>
          <div className="mx-2">
            <Button
              className="border border-zinc-300 px-3 font-bold rounded-xl"
              text={i18n("words.invite_users")}
              type="button"
              onClick={() => handleToggleModal("DEFAULT_USER")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
