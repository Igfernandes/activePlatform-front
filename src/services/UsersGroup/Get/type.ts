export type UsersGroupShape = {
  id: number;
  name: string;
  status: "ACTIVE" | "INACTIVE";
  total: number;
  created_at: string;
  updated_at: string;
};
