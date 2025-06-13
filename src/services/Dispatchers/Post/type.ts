import { MessagesDispatcherShape } from "@type/MessagesDispatcherShape";
import { Status } from "@type/status";

export type PostMessagesDispatcherPayload = Omit<
  MessagesDispatcherShape,
  "id" | "clients" | "status" | "reference" | "created_at" | "updated_at"
> & {
  all_clients?: boolean;
  clients: Array<number>;
  status?: Status;
};
