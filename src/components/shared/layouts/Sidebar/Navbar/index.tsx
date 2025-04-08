import { MenuShape } from "@constants/menu/type";
import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from "react";
import { Item } from "./Item";
import { useRouter } from "next/router";
import { When } from "@components/utilities/When";

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  title: string;
  menu: Array<MenuShape>;
  sidebarState: boolean;
  defaultActiveItem?: string;
};

export function Navbar({
  menu = [],
  title,
  sidebarState,
  defaultActiveItem = "",
  ...rest
}: Props) {
  const { route } = useRouter();
  const [isActiveItem, setIsActiveItem] = useState("");

  useEffect(() => {
    const foundCurrentNavbarItem = menu.find((item) => item.link == route);

    if (!foundCurrentNavbarItem && !defaultActiveItem) return;
    setIsActiveItem(foundCurrentNavbarItem?.title ?? defaultActiveItem);
  }, []);

  return (
    <div {...rest}>
      <When value={sidebarState}>
        <div className="text-[10px]">
          <h4>{title.toUpperCase()}</h4>
        </div>
      </When>
      <div>
        <ul>
          {menu.map((props, index) => (
            <Item
              {...props}
              index={index}
              key={index}
              menu={menu}
              sidebarState={sidebarState}
              isActive={isActiveItem == props.title}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
