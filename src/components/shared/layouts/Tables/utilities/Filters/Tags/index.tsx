import i18n from "@configs/i18n";
import { useTags } from "./hooks/useTags";
import { TagProps } from "./type";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export function Tags<TableData extends Array<Record<string, unknown>>>(
  props: TagProps<TableData>
) {
  const { tags, totalTags, handleChangeTargetTag } = useTags<TableData>(props);

  return (
    <div className="relative w-[95%] z-0">
      <Swiper
        spaceBetween={10}
        slidesPerView={"auto"}
      >
        <SwiperSlide style={{ width: 'auto' }}
          className="border-[1px] border-secondary px-3 rounded-xl cursor-pointer "
          onClick={() => handleChangeTargetTag("")}
        >
          <span className="uppercase font-semibold text-xs">
            {`${i18n("words.all")} (${totalTags.current})`}{" "}
          </span>
        </SwiperSlide>
        {tags.map((tag) => (
          <SwiperSlide style={{ width: 'auto' }}
            key={`tag_${tag.text}`}
            className="border-[1px] border-secondary px-3 rounded-xl cursor-pointer"
            onClick={() => handleChangeTargetTag(tag.text)}
          >
            <span className="uppercase font-semibold text-xs">{`${tag.text} (${tag.amount})`}</span>
          </SwiperSlide>
        ))}
      </Swiper>
      <span
        className="absolute bottom-0 lg:bottom-[1px] right-[-10px] w-[5%] lg:w-[20px] h-8  z-10"
        style={gradientStyle}
      ></span>
      <span
        className="absolute bottom-0 lg:bottom-0 left-[0px] w-[1%] lg:w-[12px] h-8  z-10"
        style={gradientStyle}
      ></span>
    </div>
  );
}
const gradientStyle = {
  background: "linear-gradient(350deg, #ffffff, #ffffffce)",
  filter: "blur(4px)",
};
