import i18n from "@configs/i18n";
import { DependentsViewerProps } from "./type";
import { Accordion } from "@components/shared/layouts/Accordion";
import { AccordionItem } from "@components/shared/layouts/Accordion/AccordionItem";
import { AccordionItemHeader } from "@components/shared/layouts/Accordion/AccordionItemHeader";
import { BtnDelete } from "./BtnDelete";
import { AccordionItemContent } from "@components/shared/layouts/Accordion/AccordionItemContent";
import { handleMaskCPF } from "@helpers/string";

export function MobileDependentsViewer({
  rows,
  setRows,
}: DependentsViewerProps) {
  return (
    <Accordion>
      {rows.map((row, key) => {
        return (
          <AccordionItem key={`accordion_item_${key}`}>
            <AccordionItemHeader
              accordionId={key}
              title={`${key} - ${row.name}`}
            />
            <AccordionItemContent accordionId={key as number}>
              <ul className="p-2">
                <li className="text-sm mb-3">
                  <div className="mb-2">
                    <span className="bg-disabled text-white block p-1">
                      {i18n("Words.name")}
                    </span>
                  </div>
                  <div>
                    <input
                      name={`field_name_${key}`}
                      onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                        const refRows = rows;

                        refRows[key].name = ev.currentTarget.value;
                        setRows(refRows);
                      }}
                      className="w-full outline-none border-b-2"
                      type="text"
                    />
                  </div>
                </li>
                <li className="text-sm mb-3">
                  <div className="mb-2">
                    <span className="bg-disabled text-white block p-1">
                      {i18n("Words.cpf")}
                    </span>
                  </div>
                  <div>
                    <input
                      className="w-full outline-none border-b-2"
                      type="text"
                      name={`field_cpf_${key}`}
                      onChange={(ev) => {
                        const refRows = rows;

                        refRows[key].cpf = ev.currentTarget.value;
                        handleMaskCPF(ev);
                        setRows(refRows);
                      }}
                    />
                  </div>
                </li>
                <li className="text-sm mb-3">
                  <div className="mb-2">
                    <span className="bg-disabled text-white block p-1">
                      {i18n("Words.birthdate")}
                    </span>
                  </div>
                  <div>
                    <input
                      name={`field_birthdate_${key}`}
                      onChange={(ev) => {
                        const refRows = rows;

                        refRows[key].birthdate = ev.currentTarget.value;
                        setRows(refRows);
                      }}
                      className="w-full outline-none border-b-2"
                      type="Date"
                    />
                  </div>
                </li>
                <li>
                  <div className="text-end">
                    <BtnDelete
                      rows={rows}
                      setRows={setRows}
                      index={key}
                      text={
                        <span className="block w-full text-white bg-red p-2 rounded-md">
                          {i18n("Words.remove")}
                        </span>
                      }
                    />
                  </div>
                </li>
              </ul>
            </AccordionItemContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
