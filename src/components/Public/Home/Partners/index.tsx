import Image from "next/image";
import { PARTNERS } from "./partners";
import { Section } from "@components/shared/layouts/Section";
import { useI18n } from "@contexts/I18n";

export function Partners() {
  const { t } = useI18n();
  return (
    <Section>
      <div id="partners" className="partners">
        <div className="text-sm md:text-md text-center md:text-left title mb-4">
          <span> {t("Screens.home.support_network.title")}</span>
          <h1 className="text-lg md:text-2xl text-red">
            <strong>{t("Screens.home.support_network.subtitle")}</strong>
          </h1>
        </div>
        <div>
          <ul className="flex flex-wrap justify-around mt-8">
            {PARTNERS.map(({ logo, name }, key) => (
              <li
                key={`partners_${key}`}
                className="relative w-[80%] md:w-60 lg:w-[23%]  border-4 border-white shadow mx-1 md:mx-2 my-2 lg:my-0 lg:mx-3"
              >
                <div className="profile">
                  <Image
                    src={logo}
                    alt={name}
                    width={1000}
                    height={1000}
                    className="w-full lg:w-[20vw] h-40 object-contain"
                  />
                </div>
                <div className="bg-slate-50 ">
                  <div className="agm w-full">
                    <div className="w-16 mx-auto bg-white p-2 pb-0 shadow-sm rounded-md">
                      <Image
                        src={"/imgs/selo.png"}
                        width={400}
                        height={400}
                        alt="selo AGM"
                      />
                    </div>
                  </div>
                  <div className="social-media  text-red font-semibold text-center pt-3 pb-3">
                    <h3>{name}</h3>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
