import { UsersShape } from "@type/Users/Users";

export type PostCreateUsersPayload = Pick<UsersShape, "cpf" | "birthdate"> & {
  password: string;
  keyword: string;
};
