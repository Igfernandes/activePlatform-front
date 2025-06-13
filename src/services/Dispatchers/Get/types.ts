import { MessagesDispatcherShape } from "@type/MessagesDispatcherShape";
import { Status } from "@type/status";

export type GetMessagesDispatcherRequest = Omit<
  MessagesDispatcherShape,
  "id" | "status" | "title" | "created_at" | "updated_at"
> & {
  id?: number;
  in_ids?: Array<number>;
  status?: Status;
};
