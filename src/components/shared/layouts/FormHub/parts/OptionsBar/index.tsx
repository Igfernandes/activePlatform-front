import { When } from "@components/utilities/When";
import { formatNumber } from "@helpers/numbers";
import { USER_OPTIONS } from "@constants/options";
import { Button } from "@components/shared/layouts/Button";
import i18n from "@configs/i18n";
import { FormBuildProps } from "../../type";
import { useModalContext } from "../../context/Modal";
import { useFieldContext } from "../../context/Fields";
import { Pencil } from "@assets/Icons/black/Pencil";
import { AccessControl } from "@components/shared/settings/AccessControl";
import { useUserNavigationContext } from "@contexts/UserNavigation";
import { Avatar } from "@assets/Icons/black/Avatar";
import { useEffect, useState } from "react";

type Props = Pick<FormBuildProps, "handleUpdateClient">;

export function OptionsBar({ handleUpdateClient }: Props) {
  const { handleToggleModal } = useModalContext();
  const { viewedField } = useFieldContext();
  const { hasPermission, permissions } = useUserNavigationContext();
  const [isAvailableUpdateClients, setIsAvailableUpdateClients] =
    useState<boolean>(false);

  useEffect(() => {
    setIsAvailableUpdateClients(hasPermission(permissions, ["clients_update"]));
  }, [permissions]);

  return (
    <div className="flex justify-center lg:justify-between flex-wrap lg:flex-none mt-2 lg:mt-0 relative z-0">
      <div className="flex items-center relative">
        <div
          className="flex items-center"
          onClick={() =>
            isAvailableUpdateClients ? handleUpdateClient(true) : null
          }
        >
          <div className="mr-2">
            <When value={!viewedField.avatar}>
              <div className="bg-white p-2 rounded-full cursor-pointer">
                <When value={isAvailableUpdateClients}>
                  <Pencil />
                </When>
                <When value={!isAvailableUpdateClients}>
                  <Avatar />
                </When>
              </div>
            </When>
          </div>
          <div className="mx-2">
            <p className="text-xl">
              <strong>{viewedField.name}</strong>
            </p>
          </div>
        </div>
        <div className="absolute lg:static mx-2 top-[-1.2rem] right-0">
          <span className="text-sm bg-green px-4 py-[2px] rounded-xl font-semibold ">
            {formatNumber(viewedField.id, USER_OPTIONS.idLength)}
          </span>
        </div>
      </div>
      <AccessControl targetPermissions={["fields_create"]}>
        <div className="flex flex-wrap my-1 lg:my-0 lg:flex-none justify-center">
          <div className="mx-2 w-full lg:w-auto">
            <Button
              className="border border-zinc-300 px-3 font-bold rounded-xl"
              text={i18n("Texts.new_field")}
              type="button"
              onClick={() => handleToggleModal(true)}
            />
          </div>
        </div>
      </AccessControl>
    </div>
  );
}
