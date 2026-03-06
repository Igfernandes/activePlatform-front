import i18n from "@configs/i18n";
import { useTags } from "./hooks/useTags";
import { TagProps } from "./type";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export function Tags<TableData extends Array<Record<string, unknown>>>(
  props: TagProps<TableData>
) {
  const { tags, totalTags, handleChangeTargetTag, targetTag } =
    useTags<TableData>(props);

  return (
    <div className="relative lg:max-w-[30vw] xl:max-w-[47vw] z-0">
      <Swiper spaceBetween={10} slidesPerView={"auto"}>
        <SwiperSlide
          style={{ width: "auto" }}
          className={`border-[1px] border-secondary px-3 rounded-xl cursor-pointer ${
            !targetTag ? "bg-red text-white" : ""
          }`}
          onClick={() => handleChangeTargetTag("")}
        >
          <span className="uppercase font-semibold text-xs">
            {`${i18n("Words.all")} (${totalTags})`}{" "}
          </span>
        </SwiperSlide>
        {tags.map((tag) => (
          <SwiperSlide
            style={{ width: "auto" }}
            key={`tag_${tag.text}`}
            className={`border-[1px] border-secondary px-3 rounded-xl cursor-pointer ${
              targetTag == tag.text ? "bg-red text-white" : ""
            }`}
            onClick={() => handleChangeTargetTag(tag.text)}
          >
            <span className="uppercase font-semibold text-xs">{`${tag.text} (${tag.amount})`}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
