export type PostCreateUserPayload = {
  categories: Array<CategoryData>;
};

type CategoryData = {
  name: string;
  description?: string;
};
