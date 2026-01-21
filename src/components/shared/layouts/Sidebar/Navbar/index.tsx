
import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from "react";
import { Item } from "./Item";
import { usePathname } from "next/navigation";
import { When } from "@components/utilities/When";
import { MenuShape } from "./menu/type";

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
  const pathname = usePathname();
  const [isActiveItem, setIsActiveItem] = useState("");

  useEffect(() => {
    const foundCurrentNavbarItem = menu.find((item) => pathname.includes(item.link));

    if (!foundCurrentNavbarItem && !defaultActiveItem) return;
    setIsActiveItem(foundCurrentNavbarItem?.title ?? defaultActiveItem);
  }, [pathname, menu, defaultActiveItem]);

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
