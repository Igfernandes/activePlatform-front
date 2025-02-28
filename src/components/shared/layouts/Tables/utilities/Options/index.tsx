import { BtnDots } from "@assets/Icons/black/BtnDots";
import { When } from "@components/utilities/When";
import { TableOptionsProps } from "./type";
import { useOptions } from "./hooks";

export function Options({ actions }: TableOptionsProps) {
  const { handleToggleOptions, showOptions } = useOptions();

  return (
    <div className="relative" onMouseLeave={() => handleToggleOptions(false)}>
      <div>
        <BtnDots
          onMouseEnter={() => handleToggleOptions(true)}
          className="cursor-pointer"
        />
      </div>
      <When value={showOptions}>
        <div className="absolute right-0 bg-white shadow-xl z-[1] min-w-[32vh] px-3 py-2 rounded-xl">
          <ul>
            {actions.map((action, index) => (
              <li
                className="my-2 cursor-pointer"
                key={`btn_config_item_${index}`}
                onClick={action.handle}
              >
                <span>{action.text}</span>
              </li>
            ))}
            <li></li>
          </ul>
        </div>
      </When>
    </div>
  );
}
