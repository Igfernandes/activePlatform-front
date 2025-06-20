import { LockCog } from "@assets/Icons/colorful/LockCog";
import i18n from "@configs/i18n";
import { AlterPasswordForm } from "./Form";
import { useEffect, useState } from "react";

export function AlterPasswordContent() {
  const [texts, setTexts] = useState<Record<string, string>>({});

  useEffect(() => {
    setTexts({
      title: "Screens.alter-password.title",
      text: "Screens.alter-password.text",
    });
  }, []);

  return (
    <>
      <div className="mb-4">
        <LockCog className="mx-auto" />
      </div>
      <div className="mb-1">
        <h2 className="text-2xl">
          <strong>{i18n(texts?.title)}</strong>
        </h2>
      </div>
      <div className="mb-6">
        <p className="text-sm">{i18n(texts?.text)}</p>
      </div>
      <AlterPasswordForm />
    </>
  );
}
