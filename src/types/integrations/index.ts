export type IntegrationBanksShape = {
  id: number;
  type: IntegrationBanksTypes;
  public_token?: string;
  private_token?: string;
  username?: string;
  login?: string;
  password?: string;
  created_at?: string;
};

export type IntegrationBanksTypes = "MERCADO_PAGO";

export type IntegrationChatsShape = {
  id: number;
  type: IntegrationChatsTypes;
  public_token?: string;
  private_token?: string;
  username?: string;
  login?: string;
  password?: string;
  created_at?: string;
};
export type IntegrationChatsTypes = "FACEBOOK" | "INSTAGRAM" | "WHATSAPP"