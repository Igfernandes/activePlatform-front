import { MenuShape } from "@constants/menu/type";
import { JSX, SVGProps } from "react";

export type ItemProps = {
  menu: Array<MenuShape>;
  index: string | number;
  isActive: boolean;
  sidebarState: boolean;
  link: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
};
