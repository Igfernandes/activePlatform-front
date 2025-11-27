import { UsersShape } from "@type/Users";

export type GetUserRequest = {
  id?: number;
  current?: boolean;
};

export type GetUsersRequest = {
  name?: string;
  name_contains?: string;
};

export type UsersResponse<T extends GetUserRequest> = T["id"] extends number
  ? UsersShape
  : UsersShape[];
