import { CategoryData } from "@services/Clients/Get/types";

export type ClientServiceShape = {
  id: number;
  name: string;
  categories: Array<CategoryData>;
  phone: string;
  is_confirm: boolean;
  service: {
    id: number;
    name: string;
  };
};
