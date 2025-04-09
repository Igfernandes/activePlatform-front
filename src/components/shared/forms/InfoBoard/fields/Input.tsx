import ErrorMessage from "@components/shared/others/ErrorMessage";
import { When } from "@components/utilities/When";
import { FieldError, useFormContext } from "react-hook-form";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  dataTestId?: string;
  action?: React.ReactNode;
  errors?: FieldError;
};

export function TInput({
  label,
  name,
  dataTestId,
  className,
  action,
  errors,
  ...props
}: Props) {
  const { register } = useFormContext();

  return (
    <tr className="border-t-2 border-t-zinc-200">
      <td className="py-2 pl-4">
        <strong>{label}</strong>
      </td>
      <td className="py-2">
        <div className="flex">
          <input
            className={`w-full pl-2 py-1 bg-zinc-100 ${className}`}
            data-testid={dataTestId}
            {...register(name)}
            {...props}
          />

          <When value={!!action}>{action}</When>
        </div>
        <ErrorMessage errors={errors?.message} />
      </td>
    </tr>
  );
}
