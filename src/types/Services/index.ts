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
  inscribes?: Array<InscribeData>;
  expired_at?: string;
  created_at: string;
  updated_at: string;
};

type InscribeData = {
  service_id: number;
  client_id: number;
  is_confirm: boolean;
  created_at: string;
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
  forms: {
    name: string;
    slug: string;
  }[];
  charge: Pick<
    ChargeShape,
    "title" | "price" | "promotional_price" | "amount" | "reference"
  > & {
    sold_out: boolean;
  };
};
