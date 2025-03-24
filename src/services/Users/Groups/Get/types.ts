export type GetGroupsRequest = {
  id: number;
  in_ids: Array<number>;
  name?: string;
  name_contains?: string;
  status: "ACTIVE" | "INACTIVE";
};
