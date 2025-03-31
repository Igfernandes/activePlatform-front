import i18n from "@configs/i18n";
import { Notice } from "@components/shared/others/Notice";
import { useModalContext } from "@contexts/Modal";
import { FormsCardProps, ModalFormsOperationType } from "../type";
import { Cards } from "@components/shared/layouts/Cards";
import { useFormsOverview } from "./hooks/useFormsOverview";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { AmountInscribes } from "./AmountInscribes";

export function FormsCard({ search, filterObjects }: FormsCardProps) {
  const { forms, handleCopy, handleToggleStatusForm } = useFormsOverview({
    filter: search,
    handleFilter: filterObjects,
  });
  const { forms: formsRoute } = privateRoutes;
  const { handleToggleModal, modal } =
    useModalContext<ModalFormsOperationType>();

  return (
    <>
      <div>
        <Cards
          items={forms.map((form) => ({
            description: form.description,
            alert: form.name,
            link: `${formsRoute}/create`,
            createdAt: form.created_at,
            dotsActions: [
              {
                handle: () => handleCopy(form.slug),
                text: i18n(`words.link_copy`),
              },
              {
                handle: () => handleToggleModal("DESATIVE"),
                text: i18n(`words.desative`),
              },
            ],
            foot: {
              items: [<AmountInscribes key={"amountInscribes"} />],
            },
          }))}
        />
      </div>
      <Notice
        headerTitle={i18n("words.attention")}
        title={i18n("services.modal.title_already_exclude")}
        text={i18n("services.modal.text_already_exclude")}
        onSubmit={handleToggleStatusForm}
        isShowModal={modal.type === "DESATIVE"}
        onModal={handleToggleModal}
      />
    </>
  );
}
