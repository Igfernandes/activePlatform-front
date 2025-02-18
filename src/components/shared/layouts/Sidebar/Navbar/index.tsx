import { MenuShape } from "@constants/menu/type";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Item } from "./Item";

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  title: string;
  menu: Array<MenuShape>;
  sidebarState: boolean;
};

export function Navbar({ menu = [], title, sidebarState, ...rest }: Props) {
  return (
    <div {...rest}>
      <div className="text-[10px]">
        <h4>{title.toUpperCase()}</h4>
      </div>
      <div>
        <ul>
          {menu.map((props, index) => (
            <Item
              {...props}
              index={index}
              key={index}
              menu={menu}
              sidebarState={sidebarState}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
