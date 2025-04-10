import { IntegrationChatsShape } from "@type/integrations";

export type PostIntegrationChatPayload = Omit<
  IntegrationChatsShape,
  "id" | "created_at"
>;
