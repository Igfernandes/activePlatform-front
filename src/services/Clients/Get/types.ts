export type GetClientsRequest = {
  name?: string;
  name_contains?: string;
  phone_contains?: string;
  phone?: string;
  email?: string;
  category?: CategoryData;
  birthdate?: string;
  status?: "ACTIVE" | "INACTIVE";
  description_contains?: string;
};

export type CategoryData = {
  id: number;
  name: string;
};
