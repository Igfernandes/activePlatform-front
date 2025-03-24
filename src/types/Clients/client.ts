export type ClientShape = {
  id: number;
  name: string;
  avatar?: string;
  phone: string;
  status: "ACTIVE" | "INACTIVE";
  email?: string;
  categories: UserCategoryData[];
  birthdate?: string;
  created_at: string;
  updated_at: string;
};

export type UserCategoryData = {
  name: string;
  id: number;
};
