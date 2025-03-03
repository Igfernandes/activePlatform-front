export type UsersShape = {
  id: number;
  name: string;
  avatar: string | null;
  status: "ACTIVE" | "INACTIVE";
  cpf: string;
  cnpj: string;
  category: string;
  email: string;
  phone: string;
  group: string;
  created_at: string;
  updated_at: string;
};
