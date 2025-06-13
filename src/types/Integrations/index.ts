import { Status } from "@type/status";

export type IntegrationShape = {
  id: number;
  provider: string;
  type: string;
  status: Status;
  logotype: string;
  public_token?: string;
  private_token?: string;
  action?: string;
  created_at?: string;
};
