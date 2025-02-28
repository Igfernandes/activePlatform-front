import i18n from "@configs/i18n";
import { useTags } from "./hooks/useTags";
import { TagProps } from "./type";

export function Tags<TableData extends Array<Record<string, unknown>>>(
  props: TagProps<TableData>
) {
  const { tags, totalTags, handleChangeTargetTag } = useTags<TableData>(props);

  return (
    <div className=" relative hidden md:block">
      <ul className="flex items-center mx-4 w-[28vw] lg:w-[35vw] h-10 only-arrows overflow-x-auto whitespace-nowrap ">
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
        className="absolute bottom-4 right-0 w-[8%] h-7 "
        style={{
          background: "linear-gradient(380deg, #ffffff, #ffffffce)",
          filter: "blur(4px)",
        }}
      ></span>
    </div>
  );
}
