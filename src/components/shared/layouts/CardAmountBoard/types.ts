export type CardAmountBoardProps = {
  viewLimit: number;
  items: Array<CardItemShape>;
  isLoading?: boolean;
};

export type CardItemShape = {
  key?: string;
  title?: string;
  suffix?: string;
  prefix?: string;
  background?: string;
  value?: string;
  icon?: React.ReactNode;
};
