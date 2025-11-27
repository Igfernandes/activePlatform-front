import { SquareRoundedChevronRight } from "@assets/Icons/black/SquareRoundedChevronRight";
import { Button } from "@components/shared/layouts/Button";
import { When } from "@components/utilities/When";
import i18n from "@configs/i18n";
import { useFormContext } from "react-hook-form";

type Props = {
  onNextStep: () => void;
  onPrevStep: () => void;
  isLoading: boolean;
  isLastStep: boolean;
  isFirstStep: boolean;
  formId?: number;
  handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
};

export function FooterForms({
  onNextStep,
  onPrevStep,
  isLoading,
  isLastStep,
  isFirstStep,
  handleSubmit,
  formId
}: Props) {
  const { reset } = useFormContext();

  return (
    <div className="bg-white flex flex-wrap md:flex-auto items-center justify-between px-6 rounded-xl py-4 mt-6">
      <div>
        <span onClick={() => reset()} className="font-semibold cursor-pointer">
          {i18n(`Words.clean`)}
        </span>
      </div>
      <div className="flex w-full md:w-auto mt-4 md:mt-auto">
        <div className="mx-2">
          <Button
            type="button"
            className={`font-semibold border-2 border-zinc-300 px-2 ${isFirstStep ? "bg-disabled text-gray" : ""
              }`}
            text={i18n("Words.back")}
            onClick={onPrevStep}
          />
        </div>
        <div className="flex  mx-2">
          <When value={!isLastStep}>
            <Button
              type={"button"}
              className="border-red border-2 py-2 px-3 text-red"
              text={i18n("Words.continue")}
              rightIcon={<SquareRoundedChevronRight fill={"#f00"} />}
              onClick={onNextStep}
            />
          </When>
          <When value={!!formId || isLastStep}>
            <div className="mx-2">
              <Button
                type={"button"}
                className="bg-red py-2 px-6 md:px-3 text-white"
                text={i18n("Words.save")}
                onClick={handleSubmit}
                isLoading={isLoading}
              />
            </div>
          </When>
        </div>
      </div>
    </div>
  );
}
