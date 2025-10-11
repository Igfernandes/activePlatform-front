export type EventShape = {
  id: number;
  name: string;
  banner: string;
  description?: string;
  alerts?: string;
  stock: number;
  status: "ACTIVE" | "INACTIVE";
  address?: string;
  realized_at?: string;
  inscribes?: Array<InscribeData>;
  confirmation_expired_time?: number;
  form_id?: number;
  feedback_id?: number;
  completed_at?: string;
  created_at: string;
  updated_at: string;
};

type InscribeData = {
  event_id: number;
  client_id: number;
  is_confirm: boolean;
  created_at: string;
};

export type EventPreviewShape = Pick<
  EventShape,
  "name" | "description" | "banner" | "address" | "completed_at" | "realized_at"
> & {
  title: string;
};
