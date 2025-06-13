import i18n from "@configs/i18n";
import { StepItemProps } from "./type";
import { statusColors } from "@assets/colors/default";
import { bgColors } from "@assets/colors/colors";
import { SymbolChecked } from "@assets/Icons/white/SymbolChecked";
import { When } from "@components/utilities/When";

export function StepItem({ title, status, id, width }: StepItemProps) {
  const STATUS_STYLED = {
    PENDENT: {
      color: statusColors.void,
    },
    COMPLETE: {
      color: statusColors.success,
    },
    PROGRESS: {
      color: statusColors.warning,
    },
  };
  return (
    <div className="flex-auto mr-4" style={{
      width: `${width}%`
    }}>
      <div className="flex items-center">
        <div>
          <p
            className="border-[1px] inline-block border-zinc-300 w-6 h-6 rounded-2xl"
            style={{
              padding: ["PROGRESS"].includes(status) ? "5px" : "2px",
            }}
          >
            <span
              className="block w-full h-full rounded-2xl pt-[5px] pl-[3px]"
              style={{
                background: ["PROGRESS", "COMPLETE"].includes(status)
                  ? bgColors.red
                  : "#fff",
              }}
            >
              <When value={status === "COMPLETE"}>
                <SymbolChecked />
              </When>
            </span>
          </p>
        </div>
        <div className="w-full mb-2 ml-2">
          <hr className="text-zinc-300" />
        </div>
      </div>
      <div>
        <div>
          <span className="text-xs text-zinc-700 font-medium">{`STEP ${id}`}</span>
        </div>
        <div>
          <p className="text-base md:text-lg">
            <strong>{title}</strong>
          </p>
        </div>
        <div>
          <span
            className="text-xs font-medium"
            style={{
              color: STATUS_STYLED[status].color as string,
            }}
          >
            {i18n(`Words.${status.toLocaleLowerCase()}`)}
          </span>
        </div>
      </div>
    </div>
  );
}
