import { Close } from "@assets/Icons/black/CloseClean";
import { ModalProps } from "./type";
import { When } from "@components/utilities/When";

export function Modal({ children, title, isShowModal, handleModal }: ModalProps) {
  return (
    <When value={isShowModal}>
      <div className="modal fixed top-0 left-0 Z-[999] w-full h-full bg-[#00000059] flex justify-center items-center">
        <div className="bg-white sm:max-w-[60%] max-h-[98vh] overflow-x-hidden overflow-y-auto p-6 rounded-xl">
          <div className="flex items-center border-b-2 border-b-secondary pb-4 mb-6">
            <div>
              <h4 className="text-xl">
                <strong>{title}</strong>
              </h4>
            </div>
            <div
              className="ml-auto bg-tertiary rounded-lg p-1 cursor-pointer"
              onClick={() => handleModal(false)}
            >
              <Close />
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </When>
  );
}
