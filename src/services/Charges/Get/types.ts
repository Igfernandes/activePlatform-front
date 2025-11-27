import { ChargeShape } from "@type/Charges";
import { Status } from "@type/status";

export type GetChargesRequest = Omit<
  ChargeShape,
  | "id"
  | "title"
  | "status"
  | "amount"
  | "privacy"
  | "type"
  | "price"
  | "reference"
> & {
  id?: number;
  title_contains?: string;
  description_contains?: string;
  status?: Status;
  amount?: number;
  privacy?: "PUBLIC" | "PRIVATE";
  type?: string;
  price?: number;
  reference?: string;
  services?: Array<ServiceData>;
};

type Data = {
  id: number;
  name: string;
};
export type ServiceData = Data;
export type ChargesResponse<T extends GetChargesRequest> =
  T["id"] extends number ? ChargeShape : ChargeShape[];
