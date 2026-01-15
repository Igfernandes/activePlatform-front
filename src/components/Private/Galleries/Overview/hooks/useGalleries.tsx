import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { SelectorShape } from "@components/shared/layouts/Selector/type";
import { useModalContext } from "@contexts/Modal";
import { GalleriesActions } from "../GalleriesActions";
import { DeleteGalleryPayload, HookGalleriesProps, ModalGalleryOperationType, TDataGallery } from "../../type";
import { GalleryShape } from "@type/Galleries";
import dayjs from "dayjs";
import { useI18n } from "@contexts/I18n";
import useGetGalleries from "@services/Galleries/Get/useGet";
import useDeleteGalleries from "@services/Galleries/Delete/useDelete";
import { Selector } from "@components/shared/layouts/Selector";

export function useGalleries({
  handleFilter,
  filter,
}: HookGalleriesProps<GalleryShape>) {
  const { data: galleriesData } = useGetGalleries();
  const galleries = useMemo(() => galleriesData, [galleriesData]);
  const { t } = useI18n()
  const [selectors, setSelectors] = useState<SelectorShape[]>([]);
  const [tDataGalleries, setTDataGalleries] = useState<
    Array<Record<string, unknown>>
  >([]);
  const { handleToggleModal, modal } =
    useModalContext<ModalGalleryOperationType>();
  const { mutateAsync: deleteGallery, isPending: isLoadingGalleryDelete } =
    useDeleteGalleries();

  const tHeadsGalleries = useRef<Array<string>>([
    "ID",
    t("Words.title"),
    t("Words.status"),
    t("Words.created_at"),
    t("Words.actions"),
  ]);

  const getSelectedGalleriesName = (selectors: Array<SelectorShape>) => {
    return selectors
      .filter((selector) => selector.value != "all" && selector.isChecked)
      .map((selector) => selector.value)
      .join(",");
  };

  const updateClientForTable = useCallback(
    ({
      id,
      title,
      status,
      created_at,
    }: GalleryShape): TDataGallery => {

      return {
        id: <Selector label={id.toString()} value={id.toString()} />,
        title,
        status: t(`Words.${status.toLowerCase()}`),
        created_at: dayjs(created_at).format(t("Configs.format.datetime")),
        actions: <GalleriesActions handleToggleModal={handleToggleModal} id={id} />,
      };
    },
    [handleToggleModal, t]
  );

  const handleDeleteGallery = () => {
    const payload = {} as DeleteGalleryPayload;
    const IdString = modal.id.toLocaleString();

    if (IdString.indexOf(","))
      payload["in_galleries"] = IdString.split(",").map((galleryId) =>
        parseInt(galleryId)
      );
    else payload["gallery_id"] = modal.id as number;

    deleteGallery(payload).then(() => {
      handleToggleModal(false);
    });
  };

  /** Adding news keys of table and the lasted column to table data users */
  useEffect(() => {
    if (!galleries) return;

    const galleriesFiltered = galleries.filter((tDataGallery) =>
      handleFilter(tDataGallery)
    );

    setSelectors([
      ...galleriesFiltered.map((gallery) => ({
        value: gallery.id.toString(),
        isChecked: false,
      })),
      {
        value: "all",
        isChecked: false,
      },
    ] as Array<SelectorShape>);

    const tDataClient = galleriesFiltered.map((GalleryProps) =>
      updateClientForTable(GalleryProps)
    );

    setTDataGalleries(tDataClient);
  }, [galleries, filter, updateClientForTable, handleFilter]);

  return {
    tDataGalleries,
    tHeadsGalleries,
    setSelectors,
    selectors,
    handleDeleteGallery,
    getSelectedGalleriesName,
    isLoadingGalleryDelete,
  };
}
