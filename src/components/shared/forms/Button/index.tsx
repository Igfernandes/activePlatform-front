import { RotateClockwise } from "@assets/Icons/white/RotateClockwise";
import { When } from "@components/utilities/When";
import { ButtonProps } from "./type";
import { useButton } from "./hooks/useButton";
import { useEffect, useState } from "react";

export function Button({
  text,
  className,
  LeftIcon,
  rightIcon,
  isLoading = false,
  disabled = false,
  ...props
}: ButtonProps) {
  const [isLoadingForm, setIsLoadingForm] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(
    disabled || isLoadingForm
  );
  const { isBtnSubmit } = useButton();
  const styledBtn = `${className} flex items-center justify-center text-white bg-red active:scale-[95%] duration-75 w-[82.98%]  px-3 min-h-[48px] rounded-md mx-auto disabled:bg-disable disabled:text-disabled cursor-pointer`;

  useEffect(() => {
    setIsDisabled(disabled || isLoadingForm);
  }, [disabled, isLoadingForm]);

  useEffect(() => {
    const currentStatusOfBtn = isLoading;
    if (currentStatusOfBtn) setIsLoadingForm(true);

    const interval = setTimeout(() => {
      setIsLoadingForm(isLoading);
    }, 1500);

    return () => clearInterval(interval);
  }, [isLoading, isLoadingForm]);

  return (
    <div className="relative">
      <When value={isBtnSubmit(props.type)}>
        <When value={isLoadingForm}>
          <RotateClockwise
            fill="gray"
            className="absolute top-3 left-28 animate-spin"
          />
        </When>
        <input
          type="submit"
          value={isLoadingForm ? "Carregando" : text}
          className={styledBtn}
          disabled={disabled || isLoadingForm}
        />
      </When>
      <When value={!isBtnSubmit(props.type)}>
        <button {...props} disabled={isDisabled} className={styledBtn}>
          <When value={isLoading}>
            <RotateClockwise className="mr-2 animate-spin" />
          </When>
          <When value={!!LeftIcon}>{LeftIcon}</When>
          <span>{isLoading ? "Carregando" : text}</span>
          <When value={!!rightIcon}>{rightIcon}</When>
        </button>
      </When>
    </div>
  );
}
