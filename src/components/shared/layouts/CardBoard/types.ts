export type CardBoardProps = {
  viewLimit: number;
  items: Array<CardItemShape>;
};

export type CardItemShape = {
  title?: string;
  suffix?: string;
  prefix?: string;
  value?: string;
  icon?: React.ReactNode;
};
