import { JSX } from "react";
import { MessagesDispatcherShape } from "@type/MessagesDispatcherShape";

export type HookMessagesDispatcherProps<MessagesDispatcherType> = {
  filter: string;
  handleFilter: (data: MessagesDispatcherType) => boolean;
};

export type TDataMessagesDispatcher = Pick<
  MessagesDispatcherShape,
  "id" | "title" | "author" | "linked" | "status"
> & {
  actions: JSX.Element;
};

export type MessagesDispatcherProps = {
  filterObjects: <ObjectShape extends Record<string, unknown>>(
    object: ObjectShape
  ) => boolean;
  search: string;
};

export type ModalMessagesDispatcherOperationType = "DELETE" | boolean;
