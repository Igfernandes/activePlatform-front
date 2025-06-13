import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { PresetsFieldsTabsProps } from "./type";
import i18n from "@configs/i18n";
import { When } from "@components/utilities/When";

export function FieldsTabsMobile({
  fields,
  fieldsGroups,
  handleChangeTab,
  handleToggleTab,
  tailwindClass,
}: PresetsFieldsTabsProps) {
  return (
    <div className="relative">
      <Swiper spaceBetween={15} slidesPerView={"auto"}>
        {[
          {
            name: "ALL",
            id: null,
          },
          ...fieldsGroups,
        ].map((group, key) => (
          <SwiperSlide key={key} className="mr-2" style={{ width: "auto" }}>
            <span
              className={`${tailwindClass} ${handleToggleTab(group.name)}`}
              onClick={() => handleChangeTab(group.name)}
            >
              {i18n(`Words.${group.name.toLowerCase()}`)}
              <When value={group.name !== "ALL"}>
                ({fields.filter((fields) => fields.group_id == group.id).length}
                )
              </When>
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="mt-4 flex justify-between text-center">
        <span className="inline-block w-[44%] lg:w-[20px] h-8 border-2 border-zinc-300  rounded-xl px-4 py-1 mr-2 hover:bg-red hover:text-white">
          {i18n("Words.prev")}
        </span>
        <span className="inline-block w-[44%] lg:w-[12px] h-8 border-2 border-zinc-300 rounded-xl px-4 py-1 mr-2 hover:bg-red hover:text-white">
          {i18n("Words.next")}
        </span>
      </div> */}
    </div>
  );
}
