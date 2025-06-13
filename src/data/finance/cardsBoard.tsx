import { ChartPie } from "@assets/Icons/black/ChartPie";
import { UserDollar } from "@assets/Icons/black/UserDollar";
import { UserCode } from "@assets/Icons/black/UserCode";
import { CardItemShape } from "@components/shared/layouts/CardBoard/types";
import i18n from "@configs/i18n";
import { UserCancel } from "@assets/Icons/black/UserCancel";

export const financeCardsBoard = [
  {
    key: "monthly_income",
    icon: <ChartPie />,
    prefix: "R$ ",
    title: i18n("Words.monthly_income"),
  },
  {
    key: "annual_revenue",
    icon: <ChartPie />,
    prefix: "R$ ",
    title: i18n("Words.annual_revenue"),
  },
  {
    key: "linked_customers",
    icon: <UserCode />,
    title: i18n("Words.linked_customers"),
  },
  {
    key: "non_compliant",
    icon: <UserDollar />,
    title: i18n("Words.non_compliant"),
  },
  {
    key: "defaulter",
    icon: <UserCancel />,
    title: i18n("Words.defaulter"),
  },
] as Array<CardItemShape>;
