import { When } from "@components/utilities/When";
import { FooterSimple } from "./Simple";
import { PrivacyAndCookies } from "@components/shared/layouts/PrivacyAndCookies";

export type FooterProps = {
  type?: "SIMPLE";
};

export function Footer({ type = "SIMPLE" }: FooterProps) {
  return (
    <footer>
      <PrivacyAndCookies />
      <When value={type === "SIMPLE"}>
        <FooterSimple />
      </When>
    </footer>
  );
}
