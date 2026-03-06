import i18n from "@configs/i18n";
import { Notice } from "@components/shared/others/Notice";
import { useModalContext } from "@contexts/Modal";
import { FormsCardProps, FormType, ModalFormsOperationType } from "../type";
import { Cards } from "@components/shared/layouts/Cards";
import { useFormsOverview } from "./hooks/useFormsOverview";
import { privateRoutes, publicRoutes } from "@configs/routes/Web/navigation";
import { AmountInscribes } from "./AmountInscribes";
import { useNavigator } from "@hooks/useNavigator";
import useWindow from "@hooks/useWindow";
import dayjs from "dayjs";
import { useUserNavigationContext } from "@contexts/UserNavigation";
import { useState } from "react";

export function FormsCard({ search, filterObjects }: FormsCardProps) {
  const { forms, handleToggleStatusForm, isLoadingDeleteForm, handleFilterForms } =
    useFormsOverview({
      filter: search,
      handleFilter: filterObjects,
    });
  const [formStatus, setFormStatus] = useState<FormType>("OPENED");
  const { forms: formsRoutePublic } = publicRoutes;
  const { handleCopy } = useNavigator();
  const { forms: formsRoute } = privateRoutes;
  const { handleToggleModal, modal } =
    useModalContext<ModalFormsOperationType>();
  const { baseUrl } = useWindow();
  const { hasPermission } = useUserNavigationContext();

  return (
    <>
      <div>
        <div className="tabs">
          <ul className="flex">
            <li
              onClick={() => setFormStatus("OPENED")}
              className={` px-10 py-3 shadow-sm border-r-2 border-t-2 border-l-2 border-stone-400 
            rounded-md rounded-b-none mr-2 cursor-pointer ${formStatus == "OPENED" ? "bg-red text-white" : "bg-white"
                }  `}
            >
              <span>
                <strong>{i18n("Words.opened")}</strong>
              </span>
            </li>
            <li
              onClick={() => setFormStatus("TERMINATED")}
              className={` px-10 py-3 shadow-sm border-r-2 border-t-2 border-l-2 border-stone-400 
            rounded-md rounded-b-none mr-2 cursor-pointer ${formStatus == "TERMINATED" ? "bg-red text-white" : "bg-white"
                } `}
            >
              <span>
                <strong>{i18n("Words.terminated")}</strong>
              </span>
            </li>
            <li
              onClick={() => setFormStatus("RELEASES")}
              className={` px-10 py-3 shadow-sm border-r-2 border-t-2 border-l-2 border-stone-400 
            rounded-md rounded-b-none mr-2 cursor-pointer ${formStatus == "RELEASES" ? "bg-red text-white" : "bg-white"
                } `}
            >
              <span>
                <strong>{i18n("Words.releases")}</strong>
              </span>
            </li>
          </ul>
        </div>
        <Cards
          items={forms
            .filter((form) => handleFilterForms(formStatus, form))
            .map((form) => ({
              description: form.name ?? "",
              alert: form.description ?? "",
              link: `${formsRoute}/${form.id}`,
              color: form.color_mark,
              createdAt: dayjs(form.created_at).format("DD/MM/YYYY HH:mm"),
              dotsActions: [
                {
                  handle: () =>
                    handleCopy(`${baseUrl}${formsRoutePublic}/${form.slug}`),
                  text: i18n(`Words.link_copy`) as string,
                },
                {
                  handle: () => handleToggleModal("EXCLUDE", form.id),
                  text: i18n(`Words.exclude`) as string,
                  permissions: ["forms_delete"],
                },
              ].filter(
                (dotAction) =>
                  !dotAction.permissions ||
                  hasPermission(dotAction.permissions)
              ),
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
