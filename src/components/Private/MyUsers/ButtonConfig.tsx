import { Gear } from "@assets/Icons/black/Gear";
import Link from "next/link";

type Props = {
  link: string;
};

export function ButtonConfig({ link }: Props) {
  return (
    <Link href={link}>
      <Gear />
    </Link>
  );
}
