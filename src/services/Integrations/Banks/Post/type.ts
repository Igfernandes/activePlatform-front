import { IntegrationBanksShape } from "@type/integrations";

export type PostIntegrationBankPayload = Omit<
  IntegrationBanksShape,
  "id" | "created_at"
>;
