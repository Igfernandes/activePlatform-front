import { useGalleries } from "./hooks/useGalleries";
import i18n from "@configs/i18n";
import { Notice } from "@components/shared/others/Notice";
import { Selector } from "@components/shared/layouts/Selector";
import { useModalContext } from "@contexts/Modal";
import { ModalGalleryOperationType, GalleriesStructProps } from "../type";
import SelectorProvider from "@components/shared/layouts/Selector/contexts";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { PERMISSIONS } from "@constants/permissions";
import { useUserNavigationContext } from "@contexts/UserNavigation";
import { GalleryCreateModal } from "./Modals/Store";

export function GalleriesTable({ search, filterObjects }: GalleriesStructProps) {
  const {
    tDataGalleries,
    tHeadsGalleries,
    selectors,
    setSelectors,
    handleDeleteGallery,
    getSelectedGalleriesName,
    isLoadingGalleryDelete,
  } = useGalleries({
    filter: search,
    handleFilter: filterObjects,
  });
  const { handleToggleModal, modal } =
    useModalContext<ModalGalleryOperationType>();
  const { hasPermission } = useUserNavigationContext();

  return (
    <>
      <div>
        <SelectorProvider selectors={selectors} setSelectors={setSelectors}>
          <SmartTable
            options={{
              pagination: {
                max: 6,
              },
              actions: [
                {
                  handle: () =>
                    handleToggleModal(
                      "DELETE",
                      getSelectedGalleriesName(selectors)
                    ),
                  text: i18n("Words.exclude"),
                  permissions: [PERMISSIONS.galleries.delete],
                },
              ].filter((action) => hasPermission(action.permissions)),
              buttons: (
                <>
                  <Selector
                    value={"all"}
                    label={i18n(`Words.select_all`)}
                    textSize="text-[0px] md:text-base"
                  />
                </>
              ),
            }}
            data={tDataGalleries}
            title={i18n("Words.galleries")}
            excludes={[ "updated_at"]}
            tHeads={{
              data: tHeadsGalleries.current,
              widths: [60, 300, 70, 80, 48],
            }}
          />
        </SelectorProvider>
      </div>

      <div>
        <Notice
          headerTitle={i18n("Words.attention")}
          title={i18n("Screens.dashboard.galleries.title_already_exclude")}
          text={i18n("Screens.dashboard.galleries.text_already_exclude")}
          onSubmit={handleDeleteGallery}
          isShowModal={modal.type === "DELETE"}
          onModal={handleToggleModal}
          isLoading={isLoadingGalleryDelete}
        />
      </div>
      <GalleryCreateModal />
    </>
  );
}
