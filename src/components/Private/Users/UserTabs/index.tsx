import i18n from "@configs/i18n";
import { useUserContext } from "../context";
import { useUserTabs } from "./hooks/useUserTabs";

export function UserTabs() {
  const { handleChangeTab, targetTab, userFields } = useUserContext();
  const TAILWIND_CLASS =
    "hover:bg-red hover:text-white font-medium text-xs px-4 py-1 uppercase rounded-xl shadow-sm border-secondary border-2 cursor-pointer";
  const { handleToggleTab, uniqueFieldsByGroup } = useUserTabs({ targetTab });
  const filesAmount = userFields.filter((field) => field.isFile);

  return (
    <div className="mt-4">
      <ul className="flex">
        <li key={`field_group_all`} className="mx-2">
          <span
            className={`${TAILWIND_CLASS} ${handleToggleTab("ALL")}`}
            onClick={() => handleChangeTab("ALL")}
          >
            {i18n(`words.all`)}
          </span>
        </li>
        {uniqueFieldsByGroup(userFields).map((userField, key) => (
          <li key={`field_group_${key}`} className="mx-2">
            <span
              className={`${TAILWIND_CLASS} ${handleToggleTab(
                userField.group
              )}`}
              onClick={() => handleChangeTab(userField.group)}
            >
              {i18n(`words.${userField.group.toLowerCase()}`)}
            </span>
          </li>
        ))}
        <li key={`field_group_attachment`} className="mx-2">
          <span
            className={`${TAILWIND_CLASS} ${handleToggleTab("ATTACHMENTS")}`}
            onClick={() => handleChangeTab("ATTACHMENTS")}
          >
            {`${i18n(`words.attachment`)} (${filesAmount.length})`}
          </span>
        </li>
      </ul>
    </div>
  );
}
