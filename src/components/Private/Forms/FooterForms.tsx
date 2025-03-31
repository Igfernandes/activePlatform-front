import { SquareRoundedChevronRight } from "@assets/Icons/black/SquareRoundedChevronRight";
import { Button } from "@components/shared/layouts/Button";
import { When } from "@components/utilities/When";
import i18n from "@configs/i18n";

type Props = {
  onNextStep: () => void;
  onPrevStep: () => void;
  isLoading: boolean;
  isLastStep: boolean;
};

export function FooterForms({
  onNextStep,
  onPrevStep,
  isLoading,
  isLastStep,
}: Props) {
  return (
    <div className="bg-white flex items-center justify-between px-6 rounded-xl py-4 mt-6">
      <div>
        <span className="font-semibold cursor-pointer">
          {i18n(`words.clean`)}
        </span>
      </div>
      <div className="flex">
        <div className="mx-2">
          <Button
          type="button"
            className="font-semibold border-2 border-zinc-300 px-2"
            text={i18n("words.cancel")}
            onClick={onPrevStep}
          />
        </div>
        <div className="mx-2">
          <When value={isLastStep}>
            <Button
              type={"submit"}
              className="bg-red py-2 px-3 text-white"
              text={i18n("words.save")}
              rightIcon={<SquareRoundedChevronRight fill={"#fff"} />}
              onClick={onNextStep}
              isLoading={isLoading}
            />
          </When>
          <When value={!isLastStep}>
            <Button
              type={"button"}
              className="bg-red py-2 px-3 text-white"
              text={i18n("words.continue")}
              rightIcon={<SquareRoundedChevronRight fill={"#fff"} />}
              onClick={onNextStep}
              isLoading={isLoading}
            />
          </When>
        </div>
      </div>
    </div>
  );
}
