import i18n from "@configs/i18n";
import { Notice } from "@components/shared/others/Notice";
import { useModalContext } from "@contexts/Modal";
import { FormsCardProps, ModalFormsOperationType } from "../type";
import { Cards } from "@components/shared/layouts/Cards";
import { useFormsOverview } from "./hooks/useFormsOverview";
import { privateRoutes, publicRoutes } from "@configs/routes/Web/navigation";
import { AmountInscribes } from "./AmountInscribes";
import { useNavigator } from "@hooks/useNavigator";
import useWindow from "@hooks/useWindow";
import dayjs from "dayjs";

export function FormsCard({ search, filterObjects }: FormsCardProps) {
  const { forms, handleToggleStatusForm, isLoadingDeleteForm } = useFormsOverview({
    filter: search,
    handleFilter: filterObjects,
  });
  const { forms: formsRoutePublic } = publicRoutes;
  const { handleCopy } = useNavigator();
  const { forms: formsRoute } = privateRoutes;
  const { handleToggleModal, modal } =
    useModalContext<ModalFormsOperationType>();
  const { baseUrl } = useWindow();

  return (
    <>
      <div>
        <Cards
          items={forms.map((form) => ({
            description: form.name ?? "",
            alert: form.description ?? "",
            link: `${formsRoute}/${form.id}`,
            createdAt: dayjs(form.created_at).format("DD/MM/YYYY HH:mm"),
            dotsActions: [
              {
                handle: () =>
                  handleCopy(`${baseUrl}${formsRoutePublic}/${form.slug}`),
                text: i18n(`Words.link_copy`),
              },
              {
                handle: () => handleToggleModal("EXCLUDE", form.id),
                text: i18n(`Words.exclude`),
              },
            ],
            foot: {
              items: [<AmountInscribes key={"amountInscribes"} />],
            },
          }))}
        />
      </div>
      <Notice
        headerTitle={i18n("Words.attention")}
        title={i18n("Screens.dashboard.forms.title_already_exclude")}
        text={i18n("Screens.dashboard.forms.text_already_exclude")}
        onSubmit={handleToggleStatusForm}
        isShowModal={modal.type === "EXCLUDE"}
        onModal={handleToggleModal}
        isLoading={isLoadingDeleteForm}
      />
    </>
  );
}
