import { DependentsData } from "@components/shared/layouts/FormBuilder/fields/Dependents/type";
import i18n from "@configs/i18n";
import { getYearsOld } from "@helpers/date";
import { FieldsShape } from "@type/Fields";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export function TDependents({ label, type, name, defaultValue }: FieldsShape) {
  const [dependents, setDependents] = useState<Array<DependentsData>>([]);

  useEffect(() => {
    if (!defaultValue) return;

    setDependents(JSON.parse(defaultValue) as Array<DependentsData>);
  }, [defaultValue]);

  return (
    <tr
      className={`border-t-2 border-t-zinc-200 ${
        type == "hidden" ? "hidden" : ""
      }`}
    >
      <td className="py-2 pl-4 w-2/6">
        <strong>{label}</strong>
      </td>
      <td className="py-2">
        <div className="header flex w-full bg-disabled  text-sm font-semibold rounded-t-sm">
          <div className="column w-6/12 px-1">{i18n("Words.name")}</div>
          <div className="column w-3/12 px-1">{i18n("Words.cpf")}</div>
          <div className="column w-1/12 px-1">{i18n("Words.years_old")}</div>
          <div className="column w-2/12 px-1">{i18n("Words.birthdate")}</div>
        </div>
        <div className="">
          {dependents.map((dependent, key) => (
            <div className="flex" key={`dependents_${name}_${key}`}>
              <div className="column w-6/12 px-1 border-[1px]">
                <span>{dependent.name}</span>
              </div>
              <div className="column w-3/12 px-1 border-[1px]">
                <span>{dependent.cpf}</span>
              </div>
              <div className="column w-1/12 px-1 border-[1px]">
                <span>{getYearsOld(dependent.birthdate)}</span>
              </div>
              <div className="column w-2/12 px-1 border-[1px]">
                <span>{dayjs(dependent.birthdate).format("DD/MM/YYYY")}</span>
              </div>
            </div>
          ))}
        </div>
      </td>
    </tr>
  );
}
