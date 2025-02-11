import { useTranslation } from "next-i18next";
import { CriteriaStatusShape } from "./type";
import { COLORS } from "@constants/colors";
import { statusColors } from "@assets/colors/default";

export function ValidationList({
  hasLowercase,
  hasMinEightLetters,
  hasNumber,
  hasSpecialLetter,
  hasUppercase,
}: CriteriaStatusShape) {
  const { t } = useTranslation("common");

  return (
    <div className="mt-2">
      <ul className="text-left list-disc px-5 text-gray-500">
        <li
          className={`text-xs`}
          style={{
            color: statusColors[hasMinEightLetters],
          }}
        >
          {t("texts.has_min_eight_letters")}
        </li>
        <li
          className={`text-xs`}
          style={{
            color: statusColors[hasUppercase],
          }}
        >
          {t("texts.has_min_one_uppercase")}
        </li>
        <li
          className={`${COLORS[hasLowercase]} text-xs`}
          style={{
            color: statusColors[hasLowercase],
          }}
        >
          {t("texts.has_min_one_lowercase")}
        </li>
        <li
          className={`text-xs`}
          style={{
            color: statusColors[hasNumber],
          }}
        >
          {t("texts.has_min_one_number")}
        </li>
        <li
          className={`text-xs`}
          style={{
            color: statusColors[hasSpecialLetter],
          }}
        >
          {t("texts.has_min_one_special_character")}
        </li>
      </ul>
    </div>
  );
}
