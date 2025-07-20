export type PostCreateCategoryPayload = {
  categories: Array<CategoryData>;
};

type CategoryData = {
  id: number;
  name: string;
  description?: string;
};
