import { Item } from "./Item";
import i18n from "@configs/i18n";
import { OptionData } from "../../../type";
import { useFormBuilderContext } from "../../../context";

type Props = {
  options: Array<OptionData>;
  id: string;
  title: string;
};

export function Options({ options, id, title }: Props) {
  const { accordionActive, handleCollapse } = useFormBuilderContext();

  return (
    <div>
      <div
        className="border-2 border-slate-200 p-2 text-center cursor-pointer"
        onClick={() => handleCollapse(id)}
      >
        <p>{i18n(`Words.${title}`)}</p>
      </div>
      <div
        className="accordion-content overflow-y-auto break-words"
        style={{
          scrollbarWidth: "thin",
          maxHeight: accordionActive == id ? "33vh" : "0vh",
          transition: "all .5s ease-in-out",
        }}
      >
        <ul className="mx-1">
          {options.map((option, index) => (
            <li key={index} className="border-b-2 border-slate-100 mt-1">
              <Item
                key={option.field}
                id={option.id}
                icon={option.icon}
                text={option.id}
                group={id}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
