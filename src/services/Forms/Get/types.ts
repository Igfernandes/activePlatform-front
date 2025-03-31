export type GetFormsRequest = {
  id?: number;
  name?: string;
  slug?: string;
  type?: "PEOPLE" | "COMPANY";
  description_contains?: string;
  status?: "ACTIVE" | "INACTIVE";
};
