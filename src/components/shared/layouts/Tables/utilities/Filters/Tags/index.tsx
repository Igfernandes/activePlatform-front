import i18n from "@configs/i18n";
import { useTags } from "./hooks/useTags";
import { TagProps } from "./type";

export function Tags<TableData extends Array<Record<string, unknown>>>(
  props: TagProps<TableData>
) {
  const { tags, totalTags, handleChangeTargetTag } = useTags<TableData>(props);

  return (
    <div className="relative">
      <ul className="flex items-center px-2 w-full lg:w-[30vw] h-11 mb-[-15px] only-arrows overflow-y-hidden overflow-x-auto whitespace-nowrap ">
        <li
          className="border-[1px] border-secondary px-3 rounded-xl cursor-pointer mx-[.25rem] inline-block"
          onClick={() => handleChangeTargetTag("")}
        >
          <span className="uppercase font-semibold text-xs ">
            {`${i18n("words.all")} (${totalTags.current})`}{" "}
          </span>
        </li>
        {tags.map((tag) => (
          <li
            key={`tag_${tag.text}`}
            className="border-[1px] border-secondary px-3 rounded-xl cursor-pointer mx-[.25rem] inline-block"
            onClick={() => handleChangeTargetTag(tag.text)}
          >
            <span className="uppercase font-semibold text-xs">{`${tag.text} (${tag.amount})`}</span>
          </li>
        ))}
      </ul>
      <span
        className="absolute bottom-1 lg:bottom-0 right-[-10px] w-[5%] lg:w-[5%] h-8"
        style={gradientStyle}
      ></span>
      <span
        className="absolute bottom-1 lg:bottom-0 left-[-1px] w-[5%] lg:w-[2%] h-8"
        style={gradientStyle}
      ></span>
    </div>
  );
}
const gradientStyle = {
  background: "linear-gradient(350deg, #ffffff, #ffffffce)",
  filter: "blur(4px)",
};
