import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation } from "swiper/modules";
import { ArrowRight } from "@assets/Icons/black/ArrowRight";
import { Section } from "@components/shared/layouts/Section";
import { useI18n } from "@contexts/I18n";
import Link from "next/link";
import { publicRoutes } from "@configs/routes/Web/navigation";
import { useGallery } from "./hooks/useGallery";
import { When } from "@components/utilities/When";

export function Gallery() {
  const { photos } = useGallery()
  const { t } = useI18n();

  return (
    <When value={photos.length > 0}>
      <Section>
        <div className="gallery flex flex-wrap mt-20">
          <div className="text-sm md:text-md text-center md:text-left w-full lg:w-[30%] md:pr-5">
            <span>{t("Screens.home.gallery.title")}</span>
            <h1 className="text-lg md:text-2xl text-rose-500">
              <strong>{t("Screens.home.gallery.subtitle")}</strong>
            </h1>
            <p className="text-justify mt-5">
              {t("Screens.home.gallery.description")}
            </p>
            <div className="mt-5">
              <Link href={publicRoutes.galleries}>
                <span className="bg-rose-500 inline-block px-6 py-2 rounded-md text-white font-semibold">Ver todas Galerias</span>
              </Link>
            </div>
          </div>

          <button className="gallery-button-next absolute hidden xl:right-[-20] top-1/2 -translate-y-1/2 z-50  p-2 ">
            <ArrowRight className="w-8 h-8" fill="red" />
          </button>
          <div className="relative w-full lg:w-[70%] mt-8">
            <Swiper
              slidesPerView={3}
              modules={[Autoplay, Navigation]}
              spaceBetween={5}
              navigation={{
                nextEl: ".gallery-button-next",
              }}
              autoplay={{
                delay: 4000,
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
              }}
            >
              {photos.map((photo, key) => (
                <SwiperSlide key={`photo_${key}`}>
                  <Image
                    src={photo.src}
                    alt={"Matrilha Foto Gallery"}
                    width={700}
                    height={700}
                    className="w-full md:w-[30vw] h-60 object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Section>
    </When>
  );
}
