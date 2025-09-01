import { Section } from "@components/shared/layouts/Section";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { Input } from "@components/shared/forms/Input";
import { useSubscribe } from "./hooks/useSubscribe";
import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/forms/Button";
import { Phone } from "@components/shared/forms/Phone";
import { CLIENTS } from "./clients";
import { useI18n } from "@contexts/I18n";

export function Subscribe() {
  const { formMethods, handleSubmit, register, isLoading, onSubmit } =
    useSubscribe();
  const { t } = useI18n();
  return (
    <Section>
      <div className="content">
        <div className="text-sm md:text-md text-center md:text-left title md:mb-4">
          <span>{t("Screens.home.newsletter.title")}</span>
          <h1 className="text-lg md:text-2xl text-center md:text-left text-red">
            <strong>{t("Screens.home.newsletter.subtitle")}</strong>
          </h1>
        </div>
        <div className="flex flex-wrap ">
          <div className="w-full md:w-2/5 mt-4 md:mt-10">
            <div>
              <h3 className="text-center md:text-left font-semibold">
                {t("Screens.home.newsletter.description")}
              </h3>
            </div>
            <div>
              <FormProvider {...formMethods}>
                <form onSubmit={handleSubmit(onSubmit)} className="md:mr-8">
                  <div className="my-3">
                    <Input
                      dataTestId="name"
                      {...register("name")}
                      label={t("Words.name")}
                    />
                  </div>
                  <div className="my-3">
                    <Phone
                      dataTestId="phone"
                      {...register("phone")}
                      label={t("Words.phone")}
                    />
                  </div>
                  <div>
                    <Button
                      text="Inscrever-se"
                      className="text-white font-semibold"
                      isLoading={isLoading}
                    />
                  </div>
                </form>
              </FormProvider>
            </div>
          </div>
          <div className="w-full md:w-3/5 mt-8 md:mt-0">
            <Swiper
              slidesPerView={2}
              modules={[Autoplay, Navigation]}
              spaceBetween={30}
              navigation={{
                nextEl: ".gallery-button-next",
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  // telas pequenas (celulares)
                  slidesPerView: 1,
                },
                1024: {
                  // notebooks
                  slidesPerView: 2,
                },
              }}
            >
              {CLIENTS.map((client, key) => (
                <SwiperSlide key={`photo_${key}`}>
                  <div>
                    <Image
                      src={"/imgs/travel-comments.png"}
                      alt={t(`Screens.home.testimonials.${key}.title`)}
                      width={500}
                      height={500}
                      className="absolute top-0 z-0"
                    />
                    <div className="mt-9 pt-5 md:pt-16 lg:pt-10 xl:pt-5 pl-5 pr-20 md:pr-24 lg:pr-16">
                      <p className="relative text-sm line-clamp-4 z-10">
                        {t(`Screens.home.testimonials.${key}.text`)}
                      </p>
                    </div>
                  </div>
                  <div className="mt-24 md:mt-24 lg:mt-16">
                    <div className="flex items-center">
                      <div>
                        <Image
                          src={client.src}
                          alt={client.alt}
                          width={500}
                          height={500}
                          className="rounded-full h-28 w-28 object-cover border-2 border-dashed border-rose-900 p-1"
                        />
                      </div>
                      <div className="ml-4">
                        <span className="font-semibold">
                          {t(`Screens.home.testimonials.${key}.author`)}
                        </span>
                        <p className="text-sm">
                          <i>{t(`Screens.home.testimonials.${key}.info`)}</i>
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </Section>
  );
}
