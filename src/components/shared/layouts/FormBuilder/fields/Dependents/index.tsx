import React, { useEffect, useState } from "react";

import { InputProps } from "./type";
import i18n from "@configs/i18n";
import { useDependent } from "./hooks/useDependent";
import { DesktopDependentsViewer } from "./Desktop";
import { When } from "@components/utilities/When";
import useWindow from "@hooks/useWindow";
import { MobileDependentsViewer } from "./Mobile";

export function Dependents({ id, label, name, errors }: InputProps) {
  const IdCurrent = id;
  const { rows, setRows } = useDependent();
  const [value, setValue] = useState<string>();
  const { screenType } = useWindow();

  useEffect(() => {
    if (!rows) return;

    setValue(JSON.stringify(rows));
  }, [rows, setRows]);

  return (
    <>
      <input type="hidden" name={name} value={value} />
      <div
        className={`relative ${
          errors?.message ? "border-yellow" : ""
        } w-full my-4`}
      >
        <div className="flex justify-between mb-4 items-center">
          <label
            htmlFor={IdCurrent}
            className={` transition-all duration-350 line-clamp-1`}
          >
            <strong> {label}</strong>
          </label>
          <div className="btn">
            <button
              type="button"
              className="bg-red p-2 rounded-lg text-white"
              onClick={() => {
                const rowsUpdated = [
                  ...rows,
                  {
                    name: "",
                    cpf: "",
                    birthdate: "",
                  },
                ];
                setRows(rowsUpdated);
              }}
            >
              {i18n("Words.to_add")}
            </button>
          </div>
        </div>
        <div className="dependents">
          <div className="header flex">
            <div>
              <span>{}</span>
            </div>
            <div>
              <span>{i18n("Words.cpf")}</span>
            </div>
            <div>
              <span>{i18n("Words.birthdate")}</span>
            </div>
          </div>
        </div>
        <When value={["DESKTOP", "TABLET"].includes(screenType)}>
          <DesktopDependentsViewer
            rows={rows}
            setRows={setRows}
            setValue={setValue}
          />
        </When>
        <When value={screenType === "MOBILE"}>
          <MobileDependentsViewer
            rows={rows}
            setRows={setRows}
            setValue={setValue}
          />
        </When>
      </div>
    </>
  );
}
