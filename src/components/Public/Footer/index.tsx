import { When } from "@components/utilities/When";
import { FooterSimple } from "./Simple";

export type FooterProps = {
  type?: "SIMPLE";
};

export function Footer({ type = "SIMPLE" }: FooterProps) {
  return (
    <footer>
      <When value={type === "SIMPLE"}>
        <FooterSimple />
      </When>
    </footer>
  );
}
