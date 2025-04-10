type Props = {
  items: Array<string>;
  isActiveTab?: string;
  handleToggleTab: (tab: string) => void;
};

export function TabsApis({ items, isActiveTab, handleToggleTab }: Props) {
  return (
    <div>
      <ul className="flex flex-wrap">
        {items.map((item, key) => (
          <li
            key={key}
            className={`${
              item === isActiveTab ? "bg-white text-black" : "bg-red text-white"
            } py-3 px-5 rounded-t-xl mx-2 hover:bg-white  hover:text-black cursor-pointer`}
            onClick={() => handleToggleTab(item)}
          >
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
