import { Modal } from "@components/shared/layouts/Modal";
import i18n from "@configs/i18n";
import { useModalContext } from "@contexts/Modal";
import { ClientShape } from "@type/Clients";

type Props = {
  clients: Array<ClientShape>;
};

export function ModalBirthday({ clients }: Props) {
  const { handleToggleModal, modal } = useModalContext();

  return (
    <Modal
      title={i18n("Words.month_birthdays")}
      isShowModal={modal.type === "BIRTHDAY_CLIENTS"}
      handleModal={handleToggleModal}
    >
      <div className="list">
        <ul className="h-[40vh] overflow-auto bg-tertiary p-2 rounded-md">
          {clients
            .filter((client) => client.birthdate === modal.id)
            .map((client) => (
              <li key={client.id} className="bg-white px-2 rounded-md mb-2">
                <span>{client.name}</span>
              </li>
            ))}
        </ul>
      </div>
    </Modal>
  );
}
