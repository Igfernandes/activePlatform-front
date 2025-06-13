import { CriteriaStatusShape } from "./type";
import { COLORS } from "@constants/colors";
import { statusColors } from "@assets/colors/default";
import i18n from "@configs/i18n";

export function ValidationList({
  hasLowercase,
  hasMinEightLetters,
  hasNumber,
  hasSpecialLetter,
  hasUppercase,
}: CriteriaStatusShape) {

  return (
    <div className="mt-2">
      <ul className="text-left list-disc px-5 text-gray-500">
        <li
          className={`text-xs`}
          style={{
            color: statusColors[hasMinEightLetters],
          }}
        >
          {i18n("Validations.has_min_eight_letters")}
        </li>
        <li
          className={`text-xs`}
          style={{
            color: statusColors[hasUppercase],
          }}
        >
          {i18n("Validations.has_min_one_uppercase")}
        </li>
        <li
          className={`${COLORS[hasLowercase]} text-xs`}
          style={{
            color: statusColors[hasLowercase],
          }}
        >
          {i18n("Validations.has_min_one_lowercase")}
        </li>
        <li
          className={`text-xs`}
          style={{
            color: statusColors[hasNumber],
          }}
        >
          {i18n("Validations.has_min_one_number")}
        </li>
        <li
          className={`text-xs`}
          style={{
            color: statusColors[hasSpecialLetter],
          }}
        >
          {i18n("Validations.has_min_one_special_character")}
        </li>
      </ul>
    </div>
  );
}
