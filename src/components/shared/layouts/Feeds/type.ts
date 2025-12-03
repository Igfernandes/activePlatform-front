export type FeedProps = {
  title: string;
  data: Array<FeedDataShape>;
};

export type FeedDataShape = {
  message: string;
  scape: string;
};
