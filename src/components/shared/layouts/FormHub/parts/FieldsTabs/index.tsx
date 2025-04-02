import i18n from "@configs/i18n";
import { useFieldContext } from "../../context";
import { useFieldsTabs } from "./hooks/useFieldsTabs";

export function FieldsTabs() {
  const { handleChangeTab, targetTab, fields, fieldsGroups } =
    useFieldContext();
  const TAILWIND_CLASS =
    "hover:bg-red hover:text-white font-medium text-xs px-4 py-1 uppercase rounded-xl shadow-sm border-secondary border-2 cursor-pointer";
  const { handleToggleTab } = useFieldsTabs({ targetTab });
  const filesAmount = fields.filter((field) => field.isFile);

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
        {fieldsGroups.map((group, key) => (
          <li key={`field_group_${key}`} className="mx-2">
            <span
              className={`${TAILWIND_CLASS} ${handleToggleTab(group.name)}`}
              onClick={() => handleChangeTab(group.name)}
            >
              {i18n(`words.${group.name.toLowerCase()}`)}(
              {fields.filter((fields) => fields.group_id == group.id).length})
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
