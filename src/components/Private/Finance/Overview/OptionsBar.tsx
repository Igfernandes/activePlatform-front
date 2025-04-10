import { Search } from "@components/shared/forms/Search";
import i18n from "@configs/i18n";
import Link from "next/link";
import { privateRoutes } from "@configs/routes/Web/navigation";

type Props = {
  handleSearch: (words: string) => void;
};

export function OptionsBar({ handleSearch }: Props) {
  return (
    <div className="flex justify-between flex-wrap md:flex-nowrap mb-6">
      <Search
        label={i18n("words.research")}
        dataTestId="finances"
        handleSearch={handleSearch}
        className="w-full md:w-[45%] xl:w-[25%]"
      />
      <div className=" mt-7 md:mt-0 w-full flex-wrap lg:flex-none md:w-[75%] flex justify-around md:justify-end">
        <div className="w-full lg:w-auto mx-0 lg:mx-2">
          <Link
            href={privateRoutes.financesCreate}
            className="inline-block border border-zinc-300 px-3 py-3 font-bold rounded-xl"
            type="button"
          >
            {i18n("words.generate_charge")}
          </Link>
        </div>
      </div>
    </div>
  );
}
