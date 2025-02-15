import { textColors } from "@assets/colors/colors";
import { textDefaultColors } from "@assets/colors/default";
import { When } from "@components/utilities/When";
import Link from "next/link";
import { ItemProps } from "./type";
import { useEffect, useState } from "react";

export function Item({
  menu,
  index,
  isActive,
  sidebarState,
  link,
  Icon,
  title,
}: ItemProps) {
  const [itemStyle, setItemStyle] = useState(textDefaultColors.primary);

  useEffect(() => {
    if (isActive) setItemStyle(textColors.red);
  }, [isActive]);

  return (
    <li
      onMouseEnter={() => setItemStyle(textColors.red)}
      onMouseLeave={() =>
        setItemStyle(isActive ? textColors.red : textDefaultColors.primary)
      }
      className={`hover:text-red text-xs ${
        index != menu.length - 1 ? "border-b-2 border-b-zinc-200" : ""
      } py-3  ${sidebarState ? "px-1" : ""}`}
      style={{
        color: isActive ? textColors.red : textDefaultColors.primary,
      }}
    >
      <Link
        href={link}
        className="flex items-center hover:text-red duration-300"
        style={{
          justifyContent: sidebarState ? "" : "end",
        }}
      >
        <Icon fill={itemStyle} />
        <When value={sidebarState}>
          <strong className="ml-2">{title}</strong>
        </When>
      </Link>
    </li>
  );
}
