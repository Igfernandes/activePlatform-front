import { useEffect, useRef, useState } from "react";
import i18n from "@configs/i18n";
import { HookProps, ModalUserOperationType, TDataInvite } from "../../type";
import { ButtonConfig } from "@components/shared/others/ButtonConfig";
import { useModalContext } from "@contexts/Modal";
import { InvitesShape } from "../../../../../types/Invites/invites";
import useGetUsersInvite from "../../../../../services/Invites/Get/Users/useGetUsersInvite";
import dayjs from "dayjs";

export function useInvites({ handleFilter, filter }: HookProps<InvitesShape>) {
  const { handleToggleModal, modal } =
    useModalContext<ModalUserOperationType>();
  const { data } = useGetUsersInvite();
  const [tDataInvites, setTDataInvites] = useState<
    Array<Record<string, unknown>>
  >([]);
  const tHeadsInvite = useRef<Array<string>>([
    "ID",
    i18n("words.email"),
    i18n("words.is_valid"),
    i18n("words.expired_at"),
    i18n("words.created_at"),
    i18n("words.actions"),
  ]);

  const updateInviteForTable = ({
    id,
    email,
    is_valid,
    expired_at,
    created_at,
  }: InvitesShape): TDataInvite => {
    const expiredAtDate = dayjs(expired_at).format(
      i18n("configs.formats.datetime")
    );
    const createdAtDate = dayjs(created_at).format(
      i18n("configs.formats.datetime")
    );

    return {
      id,
      email,
      is_valid: is_valid ? i18n("words.yes") : i18n("words.not"),
      expired_at: expiredAtDate != "Invalid Date" ? expiredAtDate : created_at,
      created_at: createdAtDate != "Invalid Date" ? createdAtDate : created_at,
      actions: (
        <ButtonConfig
          actions={[
            {
              text: i18n("words.resend"),
              handle: () =>  handleToggleModal("RESEND_INVITE", id),
            },
            {
              text: i18n("words.exclude"),
              handle: () => handleToggleModal("DELETE_INVITE", id),
            },
          ]}
        />
      ),
    };
  };

  /** Adding news keys of table and the lasted column to table data invites */
  useEffect(() => {
    if (!data) return setTDataInvites([]);

    const invite = data.filter((invite: InvitesShape) => handleFilter(invite));
    const tDataInvite = invite.map(updateInviteForTable);

    setTDataInvites(tDataInvite);
  }, [data, filter]);

  return {
    tDataInvites,
    tHeadsInvite,
    modal,
    handleToggleModal,
  };
}
