import { useInvites } from "./hooks/useInvites";
import { InvitesStructProps, ModalUserOperationType } from "../type";
import i18n from "@configs/i18n";
import { Notice } from "@components/shared/others/Notice";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { useModalContext } from "@contexts/Modal";
import useInviteUserResend from "../../../../services/Invites/Resend/Users/useInviteUserResend";
import useDeleteInviteUser from "../../../../services/Invites/Delete/Users/useDeleteInviteUser";

export function Invites({ search, filterObjects }: InvitesStructProps) {
  const { tDataInvites, tHeadsInvite } = useInvites({
    filter: search,
    handleFilter: filterObjects,
  });
  const { modal, handleToggleModal } =
    useModalContext<ModalUserOperationType>();
  const { mutateAsync: inviteUserResend, isPending: isPendingResend } =
    useInviteUserResend();
  const { mutateAsync: deleteInviteUser, isPending: isPendingDelete } =
    useDeleteInviteUser();

  return (
    <>
      <div className="mt-6">
        <SmartTable
          options={{
            pagination: {
              max: 5,
            },
          }}
          data={tDataInvites}
          title={i18n("words.invites")}
          tHeads={{
            data: tHeadsInvite.current,
            widths: [60, 250, 80, 166.5, 166.5, 48],
          }}
        />
      </div>
      <Notice
        headerTitle={i18n("words.attention")}
        title={i18n("manager_user.modal.invites.title_already_resend")}
        text={i18n("manager_user.modal.invites.text_already_resend")}
        onSubmit={() =>
          inviteUserResend({
            id: modal.id as number,
          }).then(() => handleToggleModal(false))
        }
        isShowModal={modal.type === "RESEND_INVITE"}
        onModal={handleToggleModal}
        isLoading={isPendingResend}
      />
      <Notice
        headerTitle={i18n("words.attention")}
        title={i18n("manager_user.modal.invites.title_already_exclude")}
        text={i18n("manager_user.modal.invites.text_already_exclude")}
        onSubmit={() =>
          deleteInviteUser({
            id: modal.id as number,
          }).then(() => handleToggleModal(false))
        }
        isShowModal={modal.type === "DELETE_INVITE"}
        onModal={handleToggleModal}
        isLoading={isPendingDelete}
      />
    </>
  );
}
