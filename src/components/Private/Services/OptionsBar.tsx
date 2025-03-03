import { Search } from "@components/shared/forms/Search";
import i18n from "@configs/i18n";
import { Button } from "@components/shared/layouts/Button";
import { useRouter } from "next/router";
import { privateRoutes } from "@configs/routes/Web/navigation";

type Props = {
  handleSearch: (words: string) => void;
};

export function OptionsBar({ handleSearch }: Props) {
  const route = useRouter();
  const { services } = privateRoutes;

  return (
    <div className="flex justify-between mb-6">
      <Search
        label={i18n("words.research")}
        dataTestId="services"
        handleSearch={handleSearch}
        className="w-[45%] xl:w-[25%]"
      />
      <div className="w-[75%] flex justify-end">
        <div className="mx-2">
          <Button
            className="border border-zinc-300 px-3 font-bold rounded-xl bg-secondary text-primary"
            text={i18n("words.new_service")}
            type="button"
            onClick={() => route.push(`${services}/create`)}
          />
        </div>
      </div>
    </div>
  );
}
