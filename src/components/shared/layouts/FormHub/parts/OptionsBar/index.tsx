import Image from "next/image";
import { When } from "@components/utilities/When";
import { formatNumber } from "@helpers/numbers";
import { USER_OPTIONS } from "@constants/options";
import { Button } from "@components/shared/layouts/Button";
import i18n from "@configs/i18n";
import { Avatar } from "@assets/Icons/black/Avatar";
import { useFieldContext } from "../../context";
import { FormBuildProps } from "../../type";

type Props = Pick<FormBuildProps, "handleShared">;

export function OptionsBar({ handleShared }: Props) {
  const { viewedField, handleToggleModal } = useFieldContext();

  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <div className="mr-2">
          <When value={!!viewedField.avatar}>
            <Image src={`${viewedField.avatar}`} alt="Profile photo" />
          </When>
          <When value={!viewedField.avatar}>
            <Avatar />
          </When>
        </div>
        <div className="mx-2">
          <p className="text-xl">
            <strong>{viewedField.name}</strong>
          </p>
        </div>
        <div className="mx-2">
          <span className="text-sm bg-green px-4 py-[2px] rounded-xl font-semibold ">
            {formatNumber(viewedField.id, USER_OPTIONS.idLength)}
          </span>
        </div>
      </div>
      <div className="flex">
        <div className="mx-2">
          <Button
            className="border border-zinc-300 px-3 font-bold rounded-xl bg-secondary text-primary"
            text={i18n("words.shared")}
            type="button"
            onClick={() => handleShared(viewedField.id)}
          />
        </div>
        <div className="mx-2">
          <Button
            className="border border-zinc-300 px-3 font-bold rounded-xl"
            text={i18n("words.new_register")}
            type="button"
            onClick={() => handleToggleModal(true)}
          />
        </div>
      </div>
    </div>
  );
}
