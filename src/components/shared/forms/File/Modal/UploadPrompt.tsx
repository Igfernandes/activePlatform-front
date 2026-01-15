import { CloudUpload } from "@assets/Icons/black/CloudUpload";
import i18n from "@configs/i18n";
type Props = {
  fileId: string;
};

export function UploadPrompt({ fileId }: Props) {
  return (
    <div>
      <label
        htmlFor={fileId}
        className="max-h-[104px] md:w-[376px]  mx-auto block border rounded-lg border-dashed border-secondary px-0 pb-5 pt-4 text-center cursor-pointer"
      >
        <CloudUpload className="mx-auto mb-2" />
        <span className="text-sm">{i18n("Texts.text_upload")}</span>
      </label>
    </div>
  );
}
