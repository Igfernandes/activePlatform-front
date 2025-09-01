import { Footer } from "@components/Public/Footer";
import { PrivacyAndCookies } from "../PrivacyAndCookies";
import { Flags } from "@components/shared/layouts/Flags";
import { FooterOptions } from "@components/Public/Footer/type";

type Props = {
  children: React.ReactNode;
  className?: string;
  footer?: FooterOptions;
};

export function ExternalContainer({ children, className = "", footer = "LOGIN" }: Props) {
  return (
    <main
      className={`${className} bg-[url(/imgs/backgrounds/3d-wave.png)] bg-cover bg-no-repeat min-h-[100vh] flex items-center flex-col justify-center font-poppins`}
    >
      <div className="fixed top-4 right-0 bg-white px-0 py-2 sha">
        <Flags />
      </div>
      <div
        className={`container w-[312px] sm:w-[424px] mx-auto shadow-sm border-secondary border-2 px-6 sm:py-6 py-6 mt-2 rounded-[1.5rem] mb-10`}
      >
        {children}
      </div>
      <Footer type={footer} />
      <PrivacyAndCookies />
    </main>
  );
}
