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

export function useServices({
  data: currentServices,
  handleFilter,
  filter,
}: HookServicesProps<ServicesShape>) {
  const [tDataServices, setTDataServices] = useState<
    Array<Record<string, unknown>>
  >([]);
  const { handleToggleModal } = useModalContext<ModalServicesOperationType>();

  const tHeadsServices = useRef<Array<string>>([
    "ID",
    i18n("words.name"),
    i18n("words.type"),
    i18n("words.responsible"),
    i18n("words.status"),
    i18n("words.data_initial"),
    i18n("words.actions"),
  ]);

  const updateUserForTable = ({
    id,
    name,
    type,
    status,
    responsible,
    created_at,
  }: ServicesShape): TDataServices => {
    return {
      id,
      name,
      type,
      responsible: responsible.name,
      status: i18n(`words.${status.toLowerCase()}`),
      created_at: dayjs(created_at).format(i18n("configs.formats.date")),
      actions: (
        <ServicesActions handleToggleModal={handleToggleModal} id={id} />
      ),
    };
  };

  /** Adding news keys of table and the lasted column to table data services */
  useEffect(() => {
    const servicesFiltered = currentServices.filter((tDataService) =>
      handleFilter(tDataService)
    );

    const tDataService = servicesFiltered.map((service) =>
      updateUserForTable(service)
    );

    setTDataServices(tDataService);
  }, [currentServices, filter]);

  return {
    tDataServices,
    tHeadsServices,
  };
}
