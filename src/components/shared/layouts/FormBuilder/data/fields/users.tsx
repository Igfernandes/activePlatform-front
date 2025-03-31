import { FieldShape } from "../../type";

export const classNameDefault = "w-full h-7 py-1 px-2";
export const fieldsUser = {
  email: ({ className, ...props }: FieldShape) => (
    <input
      type="email"
      className={`${classNameDefault} ${className}`}
      {...props}
    />
  ),
  password: ({ className, ...props }: FieldShape) => (
    <input
      type="password"
      className={`${classNameDefault} py-1 px-2 ${className}`}
      {...props}
    />
  ),
};
