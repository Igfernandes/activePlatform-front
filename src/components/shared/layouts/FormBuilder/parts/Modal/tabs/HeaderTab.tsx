import i18n from "@configs/i18n";

type Props = {
  menus: Array<string>;
  activeMenu: string;
  onChangeTab: (tabName: string) => void;
};

export function HeaderTab({ menus, activeMenu, onChangeTab }: Props) {
  return (
    <div>
      <ul className="flex">
        {menus.map((menu, key) => (
          <li
            key={key}
            className={`text-xs rounded-t-lg mx-2 mt-2 p-2 cursor-pointer border-white ${
              activeMenu == menu ? "bg-white" : ""
            }`}
            onClick={() => onChangeTab(menu)}
          >
            {i18n(`Words.${menu}`)}
          </li>
        ))}
      </ul>
    </div>
  );
}
