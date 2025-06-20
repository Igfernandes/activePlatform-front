import { ChargeShape } from "@type/Charges";

export type ServicesShape = {
  id: number;
  name: string;
  photo: string;
  description?: string;
  alerts?: string;
  stock: number;
  status: "ACTIVE" | "INACTIVE";
  address?: string;
  realized_at?: string;
  gratuity?: number;
  expired_at?: string;
  created_at: string;
  updated_at: string;
};
export type ServicePreviewShape = Pick<
  ServicesShape,
  | "name"
  | "description"
  | "photo"
  | "stock"
  | "address"
  | "expired_at"
  | "realized_at"
> & {
  title: string;
  form: {
    title: string;
    id: string;
  };
  charge: Pick<
    ChargeShape,
    "title" | "price" | "promotional_price" | "amount" | "reference"
  > & {
    sold_out: boolean;
  };
};
