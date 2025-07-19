import React from "react";

import { InputProps } from "./type";
import i18n from "@configs/i18n";
import { useDependent } from "./hooks/useDependent";
import { DesktopDependentsViewer } from "./Desktop";
import { When } from "@components/utilities/When";
import useWindow from "@hooks/useWindow";
import { MobileDependentsViewer } from "./Mobile";

export function Dependents({ id, label, name, errors, setValue }: InputProps) {
  const IdCurrent = id;
  const { rows, handleChanges, setRows } = useDependent({ setValue, name });
  const { screenType } = useWindow();

  return (
    <>
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
