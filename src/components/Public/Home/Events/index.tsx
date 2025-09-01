import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { ServicesShape } from "@type/Services";
import { useEffect, useState } from "react";
import useGetServicesPreview from "@services/Services/GetPreview/useGet";
import { Card } from "./Card";

import { Autoplay, Navigation } from "swiper/modules";
import { ArrowLeft } from "@assets/Icons/black/ArrowLeft";
import { ArrowRight } from "@assets/Icons/black/ArrowRight";
import { When } from "@components/utilities/When";
import { useI18n } from "@contexts/I18n";

export function Events() {
  const { data } = useGetServicesPreview({});
  const [services, SetServices] = useState<Array<ServicesShape>>([]);
  const { t } = useI18n();

  useEffect(() => {
    if (!data) return;

    SetServices(data as Array<ServicesShape>);
  }, [data]);

  return (
    <section id={"events"} className="relative pt-10 mt-16 pb-10 ">
      <div className="overlay absolute z-0 left-0 top-0 h-full  w-full  max-h-[600px] ">
        <Image
          src={"/imgs/backgrounds/marica-background.jpg"}
          alt="background"
          width={1200}
          height={1000}
          className=" w-full h-full brightness-50 bg-fixed"
        />
      </div>
      <div className="content relative text-center md:text-left px-8 md:px-10 max-w-[1250px] mx-auto">
        <div className="relative z-10">
          <div>
            <span className="text-sm md:text-md text-white">
              {t("Screens.home.events.title")}
            </span>
            <h1 className="text-xl md:text-2xl text-white">
              <strong> {t("Screens.home.events.subtitle")}</strong>
            </h1>
          </div>
        </div>
        <div className="mt-10">
          <button className="button-prev absolute left-0 md:left-0 top-1/2 -translate-y-1/2 z-10 p-2 ">
            <ArrowLeft className="w-8 h-8" fill="white" />
          </button>
          <button className="button-next absolute right-0 md:right-0 top-1/2 -translate-y-1/2 z-10  p-2 ">
            <ArrowRight className="w-8 h-8" fill="white" />
          </button>
          <Swiper
            slidesPerView={4}
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            navigation={{
              nextEl: ".button-next",
              prevEl: ".button-prev",
            }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                // telas pequenas (celulares)
                slidesPerView: 1,
              },
              640: {
                // tablets em pé
                slidesPerView: 3,
              },
              1024: {
                // notebooks
                slidesPerView: 4,
              },
            }}
          >
            <When value={services.length > 0}>
              {services.map((serviceProps, i) => (
                <SwiperSlide key={`event_${i}`}>
                  <Card {...serviceProps} />
                </SwiperSlide>
              ))}
            </When>
            <Card
              id={0}
              name={t("Screens.home.events.not_available.title")}
              photo=""
              stock={0}
              snippet={t("Screens.home.events.not_available.text")}
            />
          </Swiper>
        </div>
      </div>
    </section>
  );
}
