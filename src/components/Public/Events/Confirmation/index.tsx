import { Checks } from "@assets/Icons/colorful/Checks";
import { Button } from "@components/shared/layouts/Button";
import { When } from "@components/utilities/When";
import i18n from "@configs/i18n";
import dayjs from "dayjs";
import { useServiceConfirmation } from "./hooks/useServiceConfirmation";
import { EventPreviewShape } from "@type/Events";

type Props = {
  event: EventPreviewShape;
};

export function ConfirmationContent({ event }: Props) {
  const { handleConfirmInscribe } = useServiceConfirmation();

  return (
    <>
      <div className="mb-4 mt-3">
        <Checks className="mx-auto" />
      </div>
      <div className="text-center mb-3">
        <h2 className="text-2xl">
          <strong>{i18n(`Screens.events.confirmation.title`)}</strong>
        </h2>
      </div>
      <div>
        <ul className="text-sm bg-cross-white-secondary shadow-md p-4 rounded-lg my-2">
          <li className="my-2">
            <strong>{i18n("Words.activity")}:</strong> {event.name}
          </li>
          <li className="my-2">
            <strong>{i18n("Words.date")}:</strong>
            {dayjs(event.realized_at).format(i18n("Configs.format.datetime"))}
            <When value={!!event.completed_at}>
              até
              {dayjs(event.completed_at).format(
                i18n("Configs.format.datetime")
              )}
            </When>
          </li>
          <li className="my-2">
            <strong>{i18n("Words.address")}:</strong> {event.address}
          </li>
        </ul>
      </div>
      <div className="text-justify my-5">
        <p className="text-sm">{i18n("Screens.events.confirmation.text")}</p>
      </div>
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="w-full md:w-1/2 mx-1">
          <Button
            onClick={() => handleConfirmInscribe(false)}
            text={i18n("Words.not")}
            className="bg-white text-red border-red border-2 font-semibold"
          />
        </div>
        <div className="w-full md:w-1/2 mx-1">
          <Button
            onClick={() => handleConfirmInscribe(true)}
            text={i18n("Words.yes")}
            className="bg-red text-white font-semibold"
          />
        </div>
      </div>
    </>
  );
}
