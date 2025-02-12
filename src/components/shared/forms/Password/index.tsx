import { When } from "@components/utilities/When";
import React from "react";
import { EyeOpened } from "@assets/Icons/black/EyeOpened";
import { EyeClosed } from "@assets/Icons/black/EyeClosed";
import { PasswordProps } from "./type";
import { usePassword } from "./hooks/usePassword";
import { Input } from "../Input";

export const Password = React.forwardRef<HTMLInputElement, PasswordProps>(
  function Password(props: PasswordProps, ref) {
    const { handleToggleTypeInput, isShowPassword } = usePassword();

    return (
      <>
        <div className="relative">
          <Input
            {...props}
            ref={ref}
            type={isShowPassword ? "text" : "password"}
          />
          <div
            className="eye absolute right-4 top-4 cursor-pointer"
            onClick={handleToggleTypeInput}
          >
            <When value={!isShowPassword}>
              <EyeClosed />
            </When>
            <When value={isShowPassword}>
              <EyeOpened />
            </When>
          </div>
        </div>
      </>
    );
  }
);
