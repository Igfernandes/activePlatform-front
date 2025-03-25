export type ServicesShape = {
  id: number;
  name: string;
  photo: string;
  description?: string;
  stock: number;
  reservations: number;
  type: "APPELLANT" | "PUNCTUAL";
  status: "ACTIVE" | "INACTIVE";
  privacy: "PUBLIC" | "PRIVATE";
  created_at: string;
  updated_at: string;
};
