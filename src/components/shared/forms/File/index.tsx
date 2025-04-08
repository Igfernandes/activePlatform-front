import { When } from "@components/utilities/When";
import { InputProps } from "./type";
import React, { useEffect } from "react";
import ErrorMessage from "@components/shared/others/ErrorMessage";
import { Upload } from "@assets/Icons/black/Upload";
import { textColors } from "@assets/colors/colors";
import { CircleRed } from "@assets/Icons/red/CircleRed";
import { FileModal } from "./Modal";
import { useFile } from "./hooks/useFile";

export const File = React.forwardRef<HTMLInputElement, InputProps>(
  function File(
    {
      dataTestId,
      className,
      id,
      label,
      errors,
      type = "file",
      name,
      required,
      value,
      defaultValue,
      handledChange,
      ...rest
    }: InputProps,
    ref
  ) {
    const IdCurrent = id ?? dataTestId;
    const {
      currentValue,
      isShowModal,
      setCurrentValue,
      setIsShowModal,
      setValue,
      watch,
    } = useFile();

    useEffect(() => {
      if (value || defaultValue) {
        setCurrentValue({
          name: `${defaultValue ?? value}`,
        } as File);
        return;
      }

      const files = watch(`${name}`);

      if (!files) return;

      setCurrentValue(files[0]);
    }, [watch(`${name}`), name]);

    return (
      <>
        <div className="relative ">
          <label
            className={`${
              !!errors ? "border-amber-500 outline-amber-500" : ""
            } ${
              className ?? ""
            }  w-full pl-3 pr-7 pb-3 pt-5 h-14  line-clamp-1 bg-white  border-secondary  cursor-pointer border-2 rounded-lg text-primary text-sm disabled:bg-disable`}
            onClick={() => setIsShowModal(true)}
          >
            <span className="font-medium"> {currentValue?.name as string}</span>
            <span
              className={`absolute transition-all duration-350`}
              style={{
                left: !!currentValue ? ".75rem" : "1rem",
                top: !!currentValue ? ".10rem" : "1rem",
                fontSize: !!currentValue ? ".75rem" : "1rem",
              }}
            >
              {label}
              <When value={required}>
                <i className="text-red">*</i>
              </When>
            </span>
            <When value={!currentValue}>
              <Upload className="absolute right-2 top-5" />
            </When>
          </label>
          <When value={!!currentValue}>
            <CircleRed
              className="absolute right-[2px] top-5 pr-0 w-7 cursor-pointer bg-white"
              fill={textColors.red}
              onClick={() => {
                setValue(`${name}`, undefined);
                setCurrentValue(undefined);
              }}
            />
          </When>
          <input
            {...rest}
            ref={ref}
            name={name}
            type={type}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
              if (rest.onChange) rest.onChange(ev);
              if (handledChange) handledChange(ev);
            }}
            className={`${className} hidden`}
            data-testid={dataTestId}
            id={IdCurrent}
          />
        </div>
        <div className="relative z-10">
          <FileModal
            isShowModal={isShowModal}
            handleModal={setIsShowModal}
            fileId={IdCurrent}
            name={`${name}`}
            accept={rest.accept}
          />
        </div>
        <ErrorMessage errors={errors?.message} />
      </>
    );
  }
);
