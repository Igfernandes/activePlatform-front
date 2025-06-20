import { JSX, SVGProps } from "react";
import { MenuShape } from "./menu/type";

export type ItemProps = {
  menu: Array<MenuShape>;
  index: string | number;
  isActive: boolean;
  sidebarState: boolean;
  link: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
};
