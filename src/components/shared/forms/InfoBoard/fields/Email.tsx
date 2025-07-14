import { useFormContext } from "react-hook-form";
import { TFields } from "../type";

export function TEmail({
  label,
  name,
  className,
  type,
  required,
  ...props
}: TFields) {
  const { register } = useFormContext();
  const currentId = `input_${name}`;
  return (
    <tr
      className={`border-t-2 border-t-zinc-200 ${
        type == "hidden" ? "hidden" : ""
      }`}
    >
      <td className="py-2 pl-4 w-2/6">
        <strong>{label}</strong>
      </td>
      <td className="py-2">
        <div className="flex">
          <input
            {...register(name)}
            {...props}
            required={required === "true"}
            type="email"
            className={`w-full pl-2 py-1 bg-zinc-100 ${className}`}
            data-testid={currentId}
            id={String(props.id)}
          />
        </div>
      </td>
    </tr>
  );
}
