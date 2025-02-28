import { BtnDots } from "@assets/Icons/black/BtnDots";
import { When } from "@components/utilities/When";
import { useState } from "react";

type Props = {
  actions: Array<Actions>;
};

type Actions = {
  text: string;
  handle: () => void;
};

export function DotsOptions({ actions = [] }: Props) {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  return (
    <div className="relative" onMouseLeave={() => setShowOptions(false)}>
      <div>
        <BtnDots
          onMouseEnter={() => setShowOptions(true)}
          className="cursor-pointer"
        />
      </div>
      <When value={showOptions}>
        <div className="absolute right-[0rem] bg-white shadow-xl z-[10000] w-40 px-3 py-2 rounded-xl">
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
