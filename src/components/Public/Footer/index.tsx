import { When } from "@components/utilities/When";
import { FooterLogin } from "./Login";
import { PrivacyAndCookies } from "@components/shared/layouts/PrivacyAndCookies";
import { FooterOptions } from "./type";
import { FooterDefault } from "./Default";

export type FooterProps = {
  type?: FooterOptions;
};

export function Footer({ type = "DEFAULT" }: FooterProps) {
  return (
    <>
      <footer>
        <When value={type === "DEFAULT" || !type}>
          <FooterDefault />
        </When>{" "}
        <When value={type === "LOGIN"}>
          <FooterLogin />
        </When>
      </footer>
      <PrivacyAndCookies />
    </>
  );
}
