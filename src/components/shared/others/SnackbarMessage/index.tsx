import React from "react";
import { SnackbarProps } from "@contexts/Snackbar/types";
import useSnackbarMessage from "./hooks/useSnackbarMessage";
import { CircleClose } from "@assets/Icons/black/CircleClose";
import { Close } from "@assets/Icons/black/CloseClean";
import { statusColors } from "@assets/colors/default";
import { CircleCheck } from "@assets/Icons/black/CircleCheck";
import { When } from "@components/utilities/When";
import { AlertTriangle } from "@assets/Icons/black/AlertTriangle";

interface Props {
  snackbar: SnackbarProps;
  deleteSnackbar?: () => void;
}

const SnackbarMessage = ({ deleteSnackbar, snackbar }: Props) => {
  const { handleDeleteSnackbar, show, typeSnackbar } = useSnackbarMessage({
    deleteSnackbar,
    snackbar,
  });

  return (
    <div style={{ position: "fixed", zIndex: 9998, right: 0, top: 0}}>
      <div
        className={`bg-white border-l-[6px]
            transition-opacity duration-200 animate-fadeInAnimation ${
              show ? "opacity-1" : "opacity-0"
            }
            flex pointer-events-auto overflow-hidden 
            p-4 md:w-[400px] rounded-2xl text-primary-white bg-no-repeat ml-auto mt-8 mr-4`}
        style={{
          boxShadow: "0 0 10px #00000084",
          borderLeftColor: statusColors[typeSnackbar ?? "notice"],
        }}
        data-testid={"snackbarMessage-" + typeSnackbar}
      >
        <div>
          <When value={typeSnackbar === "error"}>
            <CircleClose className="w-5" />
          </When>
          <When value={typeSnackbar === "notice"}>
            <AlertTriangle className="w-5 h-5" />
          </When>
          <When value={typeSnackbar === "success"}>
            <CircleCheck className="w-5" />
          </When>
        </div>
        <div className="mr-5 ml-2">
          <h5 className={"w-full text-sm md:text-base"}>
            <strong>{snackbar.title}</strong>
          </h5>
          <p className="text-xs md:text-sm">{snackbar.message}</p>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <span
            data-testid={"closeIcon"}
            className={"flex cursor-pointer rounded-xl w-fit h-fit "}
            onClick={handleDeleteSnackbar}
          >
            <Close />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SnackbarMessage;
