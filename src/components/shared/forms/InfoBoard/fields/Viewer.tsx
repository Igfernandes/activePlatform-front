import { Upload } from "@assets/Icons/black/Upload";
import { When } from "@components/utilities/When";
import i18n from "@configs/i18n";
import Link from "next/link";
import { FieldError } from "react-hook-form";

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  text: string;
  component: string;
  value?: string | number | unknown;
  dataTestId?: string;
  errors?: FieldError;
};

export function TViewer({
  text,
  dataTestId,
  component,
  className,
  value,
}: Props) {
  return (
    <tr className={`border-t-2 border-t-zinc-200`}>
      <td className="py-2 pl-4 w-2/6">
        <strong>{text}</strong>
      </td>
      <td className="py-2">
        <div className="flex">
          <When value={component === "file"}>
            <Link
              href={value ?? ""}
              target="_blank"
              className={`w-full flex pl-2 py-1 bg-zinc-100 ${className}`}
              data-testid={dataTestId}
            >
              <span className="mr-2">{i18n(`Texts.viewer_file`)}</span>{" "}
              <Upload />
            </Link>
          </When>
          <When value={!["file", "gallery"].includes(component)}>
            <span>{String(value)}</span>
          </When>
        </div>
      </td>
    </tr>
  );
}
