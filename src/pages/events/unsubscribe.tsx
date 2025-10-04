import { Checks } from "@assets/Icons/colorful/Checks";
import { ExternalContainer } from "@components/shared/layouts/ExternalContainer";
import i18n from "@configs/i18n";

export default function Unsubscribe() {
  return (
    <ExternalContainer>
      <div className="row">
        <div className="column">
          <div className="mb-6 mt-3">
            <Checks className="mx-auto" />
          </div>
          <div className="text-center mb-6">
            <h2 className="text-2xl">
              <strong>{i18n(`Texts.send_subscribe`)}</strong>
            </h2>
          </div>
          <div className="text-justify mb-6">
            <p className="text-sm">{i18n("Texts.text_thanks")}</p>
          </div>
        </div>
      </div>
    </ExternalContainer>
  );
}
