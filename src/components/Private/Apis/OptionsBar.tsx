import { Search } from "@components/shared/forms/Search";
import i18n from "@configs/i18n";

type Props = {
  handleSearch: (words: string) => void;
};

export function OptionsBar({ handleSearch }: Props) {
  return (
    <div className="flex justify-between flex-wrap md:flex-nowrap mb-6">
      <Search
        label={i18n("Words.research")}
        dataTestId="users"
        handleSearch={handleSearch}
        className="w-full md:w-[50%]"
      />
    </div>
  );
}
