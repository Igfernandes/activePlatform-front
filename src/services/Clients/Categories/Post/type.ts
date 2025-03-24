export type PostCreateCategoryPayload = {
  categories: Array<CategoryData>;
};

type CategoryData = {
  name: string;
  description?: string;
};
