import { ActionsData } from "@components/shared/others/DotsOptions/type";

export type CardsProps = {
  items: Array<CardItemProps>;
};

export type CardItemProps = {
  foot: Foot;
  link: string;
  dotsActions: Array<ActionsData>;
  createdAt: string;
  description: string;
  alert: string;
  color?: string;
};

type Foot = {
  items: Array<React.ReactNode>;
};
