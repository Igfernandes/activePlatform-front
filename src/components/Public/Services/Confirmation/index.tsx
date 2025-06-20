import { Checks } from "@assets/Icons/colorful/Checks";
import { Button } from "@components/shared/layouts/Button";
import { When } from "@components/utilities/When";
import i18n from "@configs/i18n";
import { ServicePreviewShape } from "@type/Services";
import dayjs from "dayjs";
import { useServiceConfirmation } from "./hooks/useServiceConfirmation";

type Props = {
  service: ServicePreviewShape;
};

export function ConfirmationContent({ service }: Props) {
  const { handleConfirmInscribe } = useServiceConfirmation();
  return (
    <>
      <div className="mb-6 mt-3">
        <Checks className="mx-auto" />
      </div>
      <div className="text-center mb-6">
        <h2 className="text-2xl">
          <strong>{i18n(`Screens.services.confirmation.title`)}</strong>
        </h2>
      </div>
      <div>
        <ul className="text-sm bg-cross-white-secondary p-4 rounded-lg my-2">
          <li className="my-2">
            <strong>{i18n("Words.activity")}:</strong> {service.name}
          </li>
          <li className="my-2">
            <strong>{i18n("Words.date")}:</strong>{" "}
            {dayjs(service.realized_at).format(i18n("Configs.format.datetime"))}
            <When value={!!service.expired_at}>
              {" "}
              até{" "}
              {dayjs(service.expired_at).format(
                i18n("Configs.format.datetime")
              )}
            </When>
          </li>
          <li className="my-2">
            <strong>{i18n("Words.address")}:</strong> {service.address}
          </li>
        </ul>
      </div>
      <div className="text-justify mb-6">
        <p className="text-sm">{i18n("Screens.services.confirmation.text")}</p>
      </div>
      <div>
        <Button
          onClick={() => handleConfirmInscribe()}
          text={i18n("Words.confirm")}
          className="bg-red text-white font-semibold"
        />
      </div>
    </>
  );
}
