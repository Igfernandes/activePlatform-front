import { useEffect, useRef, useState } from "react";
import i18n from "@configs/i18n";
import { useModalContext } from "@contexts/Modal";
import {
  HookServicesProps,
  ModalServicesOperationType,
  TDataServices,
} from "../../type";
import { ServicesShape } from "../../../../../types/Services";
import { ServicesActions } from "../ServicesActions";
import dayjs from "dayjs";
import useGetServices from "../../../../../services/Services/Get/useGetServices";
import useDeleteServices from "../../../../../services/Services/Delete/useDelete";
import { Status } from "@type/status";

export function useServices({
  handleFilter,
  filter,
}: HookServicesProps<ServicesShape>) {
  const [tDataServices, setTDataServices] = useState<
    Array<Record<string, unknown>>
  >([]);
  const { handleToggleModal, modal } =
    useModalContext<ModalServicesOperationType>();
  const { data: servicesData } = useGetServices();
  const { mutateAsync: deleteService } = useDeleteServices();
  const tHeadsServices = useRef<Array<string>>([
    "ID",
    i18n("Words.name"),
    i18n("Words.status"),
    i18n("Words.data_initial"),
    i18n("Words.data_expired"),
    i18n("Words.actions"),
  ]);

  const updateUserForTable = ({
    id,
    name,
    status,
    realized_at,
    expired_at,
  }: ServicesShape): TDataServices => {
    return {
      id,
      name,
      status: i18n(`Words.${status.toLowerCase()}`) as Status,
      realized_at: dayjs(realized_at).format(i18n("Configs.format.date")),
      expired_at:  expired_at ? dayjs(expired_at).format(i18n("Configs.format.date")) : "--",
      actions: (
        <ServicesActions handleToggleModal={handleToggleModal} id={id} />
      ),
    };
  };

  const handleDeleteService = () => {
    deleteService({ id: modal.id as number }).then(() =>
      handleToggleModal(false)
    );
  };

  /** Adding news keys of table and the lasted column to table data services */
  useEffect(() => {
    if (!servicesData || !Array.isArray(servicesData)) return;

    const servicesFiltered = servicesData.filter((tDataService) =>
      handleFilter(tDataService)
    );

    const tDataService = servicesFiltered.map((service) =>
      updateUserForTable(service)
    );

    setTDataServices(tDataService);
  }, [servicesData, filter]);

  return {
    tDataServices,
    tHeadsServices,
    handleDeleteService,
  };
}
