import i18n from "@configs/i18n";
import { Button } from "@components/shared/layouts/Button";
import { Modal } from "@components/shared/layouts/Modal";
import { NoticeProps } from "./type";

export function Notice({
  isShowModal,
  onModal,
  onSubmit,
  headerTitle,
  title,
  text,
  isLoading,
}: NoticeProps) {
  return (
    <Modal title={headerTitle} isShowModal={isShowModal} handleModal={onModal}>
      <div className="w-[424px]">
        <div className="form-title mb-2 text-center">
          <h4 className="text-lg">
            <strong>{title}</strong>
          </h4>
        </div>
        <div className="text-center mb-4">
          <p>{text}</p>
        </div>
        <div className="form-btn flex justify-around pt-4 border-t-2 border-secondary">
          <div className="w-[45%]">
            <Button
              className="border-secondary border-2 px-4"
              text={i18n("words.continue")}
              onClick={onSubmit}
              isLoading={isLoading}
            />
          </div>
          <div className="w-[45%] ml-5">
            <Button
              onClick={() => onModal(false)}
              className="bg-red text-white"
              text={i18n("words.cancel")}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}
