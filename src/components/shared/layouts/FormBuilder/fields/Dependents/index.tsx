import React from "react";

import { InputProps } from "./type";
import i18n from "@configs/i18n";
import { useDependent } from "./hooks/useDependent";
import { DesktopDependentsViewer } from "./Desktop";
import { When } from "@components/utilities/When";
import useWindow from "@hooks/useWindow";
import { MobileDependentsViewer } from "./Mobile";
import { useFields } from "../../hooks/useFields";

export
  function Dependents(
    {
      id,
      label,
      required,
      name,
    }: InputProps,
  ) {
  const IdCurrent = id;
  const { rows, handleChanges, setRows } = useDependent({ name });
  const { error } = useFields({ name, required });
  const { screenType } = useWindow();

  return (
    <>
      <div
        className={`relative ${error?.message ? "border-yellow" : ""
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
              className="bg-rose-500 p-2 rounded-lg text-white"
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
        <When value={["DESKTOP", "TABLET"].includes(screenType)}>
          <DesktopDependentsViewer rows={rows} setRows={handleChanges} />
        </When>
        <When value={screenType === "MOBILE"}>
          <MobileDependentsViewer rows={rows} setRows={handleChanges} />
        </When>
      </div>
    </>
  );
}