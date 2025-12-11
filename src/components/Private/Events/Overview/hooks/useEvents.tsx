import { useEffect, useRef, useState } from "react";
import i18n from "@configs/i18n";
import { useModalContext } from "@contexts/Modal";

import { EventsActions } from "../EventsActions";
import dayjs from "dayjs";
import { Status } from "@type/status";
import {
  HookEventsProps,
  ModalEventsOperationType,
  TDataEvents,
} from "../../type";
import { EventShape } from "@type/Events";
import useGetEvents from "@services/Events/Get/useGetServices";
import useDeleteEvents from "@services/Events/Delete/useDelete";

export function useEvents({
  handleFilter,
  filter,
}: HookEventsProps<EventShape>) {
  const [tData, setTData] = useState<Array<Record<string, unknown>>>([]);
  const { handleToggleModal, modal } =
    useModalContext<ModalEventsOperationType>();
  const { data: eventsData } = useGetEvents();
  const { mutateAsync: deleteEvent } = useDeleteEvents();
  const tHeads = useRef<Array<string>>([
    "ID",
    i18n("Words.name"),
    i18n("Words.inscribes"),
    i18n("Words.status"),
    i18n("Words.updated_at"),
    i18n("Words.actions"),
  ]);

  const updateForTable = ({
    id,
    name,
    status,
    inscribes,
    updated_at,
  }: EventShape): TDataEvents => {
    return {
      id,
      name,
      inscribes: inscribes?.length ?? 0,
      status: i18n(`Words.${status.toLowerCase()}`) as Status,
      updated_at: dayjs(updated_at).format(i18n("Configs.format.date")),
      actions: (
        <EventsActions handleToggleModal={handleToggleModal} id={id} />
      ),
    };
  };

  const handleDelete = () => {
    deleteEvent({ id: modal.id as number }).then(() =>
      handleToggleModal(false)
    );
  };

  useEffect(() => {
    if (!eventsData || !Array.isArray(eventsData)) return;

    const eventsFiltered = eventsData.filter((tData) => handleFilter(tData));

    const tDataEvent = eventsFiltered.map((event) => updateForTable(event));

    setTData(tDataEvent);
  }, [eventsData, filter]);

  return {
    tData,
    tHeads,
    handleDelete,
  };
}
