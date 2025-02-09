import React from "react";
import { SnackbarProps } from "@contexts/Snackbar/types";
import useSnackbarMessage from "./hooks/useSnackbarMessage";
import { CircleClose } from "@assets/Icons/black/CircleClose";
import { Close } from "@assets/Icons/black/CloseClean";

interface Props {
  snackbar: SnackbarProps;
  deleteSnackbar: () => void;
}

const SnackbarMessage = ({ deleteSnackbar, snackbar }: Props) => {
  const { handleDeleteSnackbar, show, typeSnackbar } = useSnackbarMessage({
    deleteSnackbar,
    snackbar,
  });

  return (
    <div
      className={`bg-white ${
        typeSnackbar === "error" ? "border-l-yellow" : "border-l-green"
      } border-l-[6px]
            transition-opacity duration-200 animate-fadeInAnimation ${
              show ? "opacity-1" : "opacity-0"
            }
            flex pointer-events-auto overflow-hidden 
            p-4 w-[400px] rounded-2xl text-primary-white bg-no-repeat ml-auto mt-8 mr-4`}
      style={{ boxShadow: "0 0 10px #00000084" }}
      data-testid={"snackbarMessage-" + typeSnackbar}
    >
      <div>
        <CircleClose className="w-5" />
      </div>
      <div className="mr-5 ml-2">
        <h5 className={"w-full"}>
          <strong>{snackbar.title}</strong>
        </h5>
        <p className="text-sm">{snackbar.message}</p>
      </div>
      <div style={{marginLeft: "auto"}}>
        <span
          data-testid={"closeIcon"}
          className={"flex cursor-pointer rounded-xl w-fit h-fit "}
          onClick={handleDeleteSnackbar}
        >
          <Close />
        </span>
      </div>
    </div>
  );
};

export default SnackbarMessage;
