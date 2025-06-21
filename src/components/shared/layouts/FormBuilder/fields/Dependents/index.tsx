import React, { useEffect, useState } from "react";

import { InputProps } from "./type";
import i18n from "@configs/i18n";
import { handleMaskCPF } from "@helpers/string";
import { Close } from "@assets/Icons/black/CloseClean";
import { useDependent } from "./hooks/useDependent";

export function Dependents({ id, label, name, errors }: InputProps) {
  const IdCurrent = id;
  const { rows, setRows } = useDependent();
  const [value, setValue] = useState<string>();

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
        <table className="w-full">
          <thead>
            <tr>
              <th className="border-2 border-cross-white-primary">
                {i18n("Words.name")}
              </th>
              <th className="border-2 border-cross-white-primary w-[180px]">
                {i18n("Words.cpf")}
              </th>
              <th className="border-2 border-cross-white-primary w-[180px]">
                {i18n("Words.birthdate")}
              </th>
              <th className="px-2 border-2 border-cross-white-primary"></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, key) => (
              <tr key={`row_${key}`}>
                <td className="border-2 border-cross-white-primary">
                  <input
                    name={`field_name_${key}`}
                    onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                      const refRows = rows;

                      refRows[key].name = ev.currentTarget.value;
                      setRows(refRows);
                      setValue(JSON.stringify(refRows));
                    }}
                    className="w-full"
                    type="text"
                  />
                </td>
                <td className="px-2 border-2 border-cross-white-primary">
                  <input
                    className="w-full"
                    type="text"
                    name={`field_cpf_${key}`}
                    onChange={(ev) => {
                      const refRows = rows;

                      refRows[key].cpf = ev.currentTarget.value;
                      handleMaskCPF(ev);
                      setRows(refRows);

                      setValue(JSON.stringify(refRows));
                    }}
                  />
                </td>
                <td className="px-2 border-2 border-cross-white-primary">
                  <input
                    name={`field_birthdate_${key}`}
                    onChange={(ev) => {
                      const refRows = rows;

                      refRows[key].birthdate = ev.currentTarget.value;
                      setRows(refRows);
                      setValue(JSON.stringify(refRows));
                    }}
                    className="w-full"
                    type="Date"
                  />
                </td>
                <td className="px-2 border-2 border-cross-white-primary w-10">
                  <button
                    onClick={() => {
                      const rowsUpdated = rows.filter(
                        (refValue, refKey) => refKey !== key
                      );
                      setRows(rowsUpdated);

                      setValue(JSON.stringify(rowsUpdated));
                    }}
                    type="button"
                    className="bg-white shadow-2xl"
                  >
                    <Close fill={"red"} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
