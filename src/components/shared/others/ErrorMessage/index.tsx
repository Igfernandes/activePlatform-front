import { When } from "@components/utilities/When";

type Props = {
    errors?: string;
}

export default function ErrorMessage({errors}: Props) {
  return (
    <When value={!!errors}>
      <div className="text-left">
        <span className="text-amber-500 text-xs">{errors}</span>
      </div>
    </When>
  );
}
