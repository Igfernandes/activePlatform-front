import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { SLIDES } from "../slides";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css";
import { Autoplay, EffectFade } from "swiper/modules";
import { Topics } from "./Topics";
import { TravelBag } from "@assets/Icons/black/TravelBag";
import { Signpost } from "@assets/Icons/black/Signpost";
import { PinMap } from "@assets/Icons/black/PinMap";
import { PeoplesTwo } from "@assets/Icons/black/PeoplesTwo";
import { useI18n } from "@contexts/I18n";

export function Main() {
  const { t } = useI18n();
  return (
    <main>
      <div className="content relative z-0 max-h-[600px]">
        <div className="background">
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectFade]}
            effect={"fade"}
          >
            {SLIDES.map((slide, i) => (
              <SwiperSlide key={`slide_${i}`}>
                <Image
                  className="w-full max-h-[600px] h-[95vh] object-cover bg-left-top brightness-75"
                  src={slide.src}
                  alt={slide.alt}
                  width={2400}
                  height={2400}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="relative z-10 mt-[-4rem]">
        <Topics
          items={[
            {
              icon: <Signpost className="w-8 h-8" />,
              text: t("Screens.home.status.tours"),
            },
            {
              icon: <PinMap className="w-8 h-8" />,
              text: t("Screens.home.status.guides"),
            },
            {
              icon: <TravelBag className="w-8 h-8" />,
              text: t("Screens.home.status.modalities"),
            },
            {
              icon: <PeoplesTwo className="w-8 h-8" />,
              text: t("Screens.home.status.travelers"),
            },
          ]}
        />
      </div>
    </main>
  );
}
