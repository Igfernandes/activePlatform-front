import { UserShare } from "@assets/Icons/colorful/UserShare";
import i18n from "@configs/i18n";
import { LoginForm } from "./Form";
import { CSRFShape } from "@services/Authentications/CSRF/types";
import { useEffect, useState } from "react";

type Props = {
  csrf: CSRFShape;
};

export function LoginContent({ csrf }: Props) {
  const [texts, setTexts] = useState<Record<string, string>>({});

  useEffect(() => {
    setTexts({
      title: "Screens.login.title",
      text: "Screens.login.text",
    });
  }, []);

  return (
    <>
      <div className="my-6">
        <UserShare className="mx-auto" />
      </div>
      <div className="mb-1">
        <h2 className="text-2xl">
          <strong>{i18n(texts?.title)}</strong>
        </h2>
      </div>
      <div className="mb-6">
        <p className="text-sm">{i18n(texts?.text)}</p>
      </div>
      <LoginForm csrf={csrf} />
    </>
  );
}
