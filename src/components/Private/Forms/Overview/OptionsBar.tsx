import { Search } from "@components/shared/forms/Search";
import i18n from "@configs/i18n";
import { Button } from "@components/shared/layouts/Button";
import { useRouter } from "next/navigation";
import { privateRoutes } from "@configs/routes/Web/navigation";

type Props = {
  handleSearch: (words: string) => void;
};

export function OptionsBar({ handleSearch }: Props) {
  const route = useRouter();
  const { forms } = privateRoutes;

  return (
    <div className="flex flex-wrap md:flex-none items-center justify-between mb-6">
      <Search
        label={i18n("Words.research")}
        dataTestId="services"
        handleSearch={handleSearch}
        className="w-full md:w-[45%] xl:w-[25%]"
      />
      <div className="w-full md:w-[55%] xl:w-[75%] flex justify-end mt-2 md:mt-0">
        <div className="mx-2 w-full md:w-auto">
          <Button
            className="border border-zinc-300 px-3 font-bold rounded-xl bg-secondary text-primary"
            text={i18n("Words.new_form")}
            type="button"
            onClick={() => route.push(`${forms}/create`)}
          />
        </div>
      </div>
    </div>
  );
}
