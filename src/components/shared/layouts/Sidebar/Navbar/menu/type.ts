import { JSX, SVGProps } from "react";

export type MenuShape = {
  title: string;
  link: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  isActive: boolean;
  permissions?: Array<string>;
};
