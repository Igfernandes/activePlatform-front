import { useEffect, useRef, useState } from "react";
import i18n from "@configs/i18n";
import { useModalContext } from "@contexts/Modal";
import {
  HookServicesProps,
  ModalServicesOperationType,
  TDataServices,
} from "../type";
import { ServicesShape } from "../../../../types/Services";
import { ServicesActions } from "../ServicesActions";
import dayjs from "dayjs";
import useGetServices from "../../../../services/Services/Get/useGetServices";

export function useServices({
  handleFilter,
  filter,
}: HookServicesProps<ServicesShape>) {
  const [tDataServices, setTDataServices] = useState<
    Array<Record<string, unknown>>
  >([]);
  const { handleToggleModal } = useModalContext<ModalServicesOperationType>();
  const { data: servicesData } = useGetServices();
  const tHeadsServices = useRef<Array<string>>([
    "ID",
    i18n("words.name"),
    i18n("words.type"),
    i18n("words.stock"),
    i18n("words.status"),
    i18n("words.data_initial"),
    i18n("words.actions"),
  ]);

  const updateUserForTable = ({
    id,
    name,
    type,
    status,
    stock,
    created_at,
  }: ServicesShape): TDataServices => {
    return {
      id,
      name,
      type: i18n(`words.${type.toLowerCase()}`),
      stock,
      status: i18n(`words.${status.toLowerCase()}`),
      created_at: dayjs(created_at).format(i18n("configs.formats.date")),
      actions: (
        <ServicesActions handleToggleModal={handleToggleModal} id={id} />
      ),
    };
  };

  /** Adding news keys of table and the lasted column to table data services */
  useEffect(() => {
    if (!servicesData) return;

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
  };
}
