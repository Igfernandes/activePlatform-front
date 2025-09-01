import { Accordion } from "@components/shared/layouts/Accordion";
import { AccordionItem } from "@components/shared/layouts/Accordion/AccordionItem";
import { AccordionItemContent } from "@components/shared/layouts/Accordion/AccordionItemContent";
import { AccordionItemHeader } from "@components/shared/layouts/Accordion/AccordionItemHeader";
import { QUESTIONS } from "./questions";
import { Section } from "@components/shared/layouts/Section";
import { useI18n } from "@contexts/I18n";

export function FAQ() {
  const { t } = useI18n();
  return (
    <Section>
      <div className="faq ">
        <div className="text-sm md:text-md text-center md:text-left title mb-4">
          <span>{t("Screens.home.faq.title")}</span>
          <h1 className="text-lg md:text-2xl text-red">
            <strong>{t("Screens.home.faq.description")}</strong>
          </h1>
        </div>
        <div>
          <Accordion className="flex flex-wrap">
            {QUESTIONS.map((question, key) => (
              <AccordionItem
                key={`question_${key + 1}`}
                className="w-full md:w-1/2  px-3 shadow-sm my-3"
              >
                <AccordionItemHeader
                  title={t(`Screens.home.faq.questions.${key}.question`)}
                  accordionId={key + 1}
                  key={"question_01"}
                />
                <AccordionItemContent accordionId={key + 1}>
                  <div className="text-justify  bg-slate-100 p-4">
                    <p>{t(`Screens.home.faq.questions.${key}.answer`)}</p>
                  </div>
                </AccordionItemContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  );
}
