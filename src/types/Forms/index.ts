export type FormsShape = {
  id: number;
  name: string;
  slug: string;
  components: string;
  description?: string;
  status: "PUBLISHED" | "DRAFT";
  color_mark?: string;
  thanks_message?: string;
  inscribes: number;
  service_id: number;
  started_at: string;
  expired_at: string;
  created_at: string;
  updated_at: string;
};
