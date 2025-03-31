export type FormsShape = {
  id: number;
  name: string;
  slug: string;
  type: "PEOPLE" | "COMPANY";
  components: string;
  description: string;
  status: "PUBLISHED" | "DRAFT";
  inscribes: number;
  created_at: string;
  updated_at: string;
};
