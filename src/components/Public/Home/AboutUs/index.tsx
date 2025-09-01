import Image from "next/image";
import { ICONS } from "./icons";
import { Section } from "@components/shared/layouts/Section";
import { useI18n } from "@contexts/I18n";

export function AboutUs() {
  const { t } = useI18n();

  return (
    <Section>
      <div id="about_us">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-[60%] lg:pr-10">
            <div className="text-center md:text-left ">
              <span> {t("Screens.home.about.title")}</span>
              <h1 className="text-2xl text-red">
                <strong>{t("Screens.home.about.subtitle")}</strong>
              </h1>
            </div>
            <div>
              <p className="text-justify mt-5">
                {t("Screens.home.about.description_1")}
                <br /> <br />
                {t("Screens.home.about.description_2")}
              </p>
            </div>
            <div className="mt-6">
              <ul className="flex flex-wrap md:flex-nowrap justify-around md:justify-between ">
                {ICONS.map((icon, key) => (
                  <li className="w-1/4 md:w-auto mx-2" key={`icon_${key}`}>
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      width={300}
                      height={300}
                      className="w-24 h-24 object-contain mx-auto"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="agm my-4 w-full md:w-[70%] lg:w-[40%] mx-auto">
            <Image
              src="/imgs/AGM-TEAM.jpeg"
              width={800}
              height={800}
              className="rounded-lg shadow-md"
              alt="agm"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
