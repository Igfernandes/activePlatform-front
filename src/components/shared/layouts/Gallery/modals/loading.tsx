import { useModalContext } from "@contexts/Modal";
import { Modal } from "../../Modal";
import Image from "next/image";

export function LoadingModal() {
    const { handleToggleModal, modal } = useModalContext()

    return (
        <Modal  title="Carregando as imagens" handleModal={handleToggleModal}
            isShowModal={modal.type === "LOADING"}>
            <div>
                <div>
                    <Image className="mx-auto" src={"/agm_logo.png"} alt="loading files" width={200} height={200} />
                </div>
                <div className="text-center text-lg font-semibold mt-5">
                    <span>{"Aguarde enquanto carregamos as imagens"}</span>

                    <div className="w-full h-2 rounded bg-gray-800 overflow-hidden">
                        <div
                            className="h-full w-full bg-gradient-to-r from-primary via-blue-500 to-primary
           animate-pulse shadow-[0_0_15px_#38f858]"
                        ></div>
                    </div>


                </div>
            </div>
        </Modal>
    )
}