import i18n from "@configs/i18n";
import { NotificationShape } from "@type/Notifications/Notifications";
import dayjs from "dayjs";
import Link from "next/link";
import { ROUTES } from "./constants/routes";
import { When } from "@components/utilities/When";

type Props = {
  props: NotificationShape;
};
export function NotificationItem({
  props: { action, scope, message, key },
}: Props) {
  return (
    <div className="bg-tertiary p-4 rounded-xl my-4">
      <div className="flex">
        <div>
          <h4 className="font-semibold">
            {i18n(`Notifications.title_${scope}_${action.toLowerCase()}`)}
          </h4>
        </div>
        <div>
          <span></span>
        </div>
      </div>
      <div className="">
        <div>
          <p className="text-secondary text-sm">
            {message ??
              i18n(`Notifications.text_${scope}_${action.toLowerCase()}`)}
          </p>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-secondary text-sm mt-4">
                {dayjs().format("DD/MM/YYYY - HH:mm")}
              </span>
            </div>
            <When value={!!key && !!ROUTES[scope]}>
              <Link href={`${ROUTES[scope]}/${key}`}>
                <span className="text-cross-black-secondary text-sm cursor-pointer">
                  {i18n("Words.see_more")}
                </span>
              </Link>
            </When>
          </div>
        </div>
      </div>
    </div>
  );
}
