import { When } from "@components/utilities/When";
import { ButtonProps } from "./type";

export function Button({
  text,
  className = "",
  LeftIcon,
  rightIcon,
  isLoading = false,
  disabled = false,
  ...props
}: ButtonProps) {
  const classNameBtn = `${className} flex items-center 
  justify-center active:scale-[95%] 
  duration-75 w-full min-h-[48px] rounded-md mx-auto 
  disabled:bg-disable disabled:text-disabled cursor-pointer`;

  return (
    <div className="relative">
      <button
        {...props}
        disabled={disabled || isLoading}
        className={`${classNameBtn}`}
      >
        <When value={!!LeftIcon}>{LeftIcon}</When>
        <span className="px-2">{isLoading ? "Carregando" : text}</span>
        <When value={!!rightIcon}>{rightIcon}</When>
      </button>
    </div>
  );
}
