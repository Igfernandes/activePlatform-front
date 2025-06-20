import i18n from "@configs/i18n";
import { RecoverPasswordForm } from "./Form";
import { EmailForward } from "@assets/Icons/colorful/EmailForward";
import { SquareRoundedChevronLeft } from "@assets/Icons/black/SquareRoundedChevronLeft";
import Link from "next/link";
import { publicRoutes } from "@configs/routes/Web/navigation";
import { useEffect, useState } from "react";

export function ForgotPasswordContent() {
  const { login } = publicRoutes;
  const [texts, setTexts] = useState<Record<string, string>>({});

  useEffect(() => {
    setTexts({
      title: "Screens.forgot-password.title",
      text: "Screens.forgot-password.text",
      back_page: "Texts.back_page",
    });
  }, []);

  return (
    <>
      <div className="mb-5 sm:mt-2">
        <EmailForward className="mx-auto" />
      </div>
      <div className="mb-1">
        <h2 className="text-2xl">
          <strong>{i18n(texts?.title)}</strong>
        </h2>
      </div>
      <div className="mb-6">
        <p className="text-sm">{i18n(texts?.text)}</p>
      </div>
      <RecoverPasswordForm />
      <div className="sm:px-8 mt-4">
        <Link
          className="border-2 px-3 h-[48px] text-sm sm:text-md rounded-xl flex items-center justify-center"
          href={login}
        >
          <SquareRoundedChevronLeft className="mr-2" />
          <strong>{i18n(texts?.back_page)}</strong>
        </Link>
      </div>
    </>
  );
}
