import { ChartPie } from "@assets/Icons/black/ChartPie";
import { UserDollar } from "@assets/Icons/black/UserDollar";
import { UserCode } from "@assets/Icons/black/UserCode";
import { CardItemShape } from "@components/shared/layouts/CardBoard/types";
import i18n from "@configs/i18n";
import { UserCancel } from "@assets/Icons/black/UserCancel";

export const financeCardsBoard = [
  {
    icon: <ChartPie />,
    prefix: "R$ ",
    title: i18n("words.monthly_income"),
  },
  {
    icon: <ChartPie />,
    prefix: "R$ ",
    title: i18n("words.annual_revenue"),
  },
  {
    icon: <UserCode />,
    title: i18n("words.linked_customers"),
  },
  {
    icon: <UserDollar />,
    title: i18n("words.non_compliant"),
  },
  {
    icon: <UserCancel />,
    title: i18n("words.defaulter"),
  },
] as Array<CardItemShape>;
