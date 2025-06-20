import { ArrowNarrowLeft } from "@assets/Icons/black/ArrowNarrowLeft";
import { Bars } from "@assets/Icons/black/Bars";
import { Bell } from "@assets/Icons/black/Bell";
import { When } from "@components/utilities/When";
import i18n from "@configs/i18n";
import { useUserNavigationContext } from "@contexts/UserNavigation";
import useWindow from "@hooks/useWindow";
import { useRouter } from "next/router";
import { useRef } from "react";
import { Flags } from "../../shared/layouts/Flags";

type Props = {
  title?: string;
  handleSidebar: () => void;
  handleNotification: (isShow: boolean) => void;
  notificationsAmount: string;
};

export function Header({
  handleSidebar,
  handleNotification,
  title,
  notificationsAmount,
}: Props) {
  const { screenType } = useWindow();
  const { userAuth } = useUserNavigationContext();
  const welcomeMessage = i18n("Words.welcome_message") as string;
  const route = useRouter();
  const isShowBackRoute = useRef(route.asPath.split("/").length > 3);

  return (
    <header className="w-full border-b-2 border-zinc-200 p-6">
      <div className="flex justify-between">
        <When value={["MOBILE", "TABLET"].includes(screenType)}>
          <Bars onClick={handleSidebar} className="rotate-180" />
        </When>
        <div>
          <h3>
            <When value={!!userAuth && !isShowBackRoute.current}>
              <strong>
                {welcomeMessage.replace(
                  ", {name}",
                  screenType == "DESKTOP" ? `, ${userAuth?.name}` : ""
                )}
              </strong>
            </When>
            <When value={isShowBackRoute.current}>
              <strong className="flex">
                <ArrowNarrowLeft
                  className="mr-2 cursor-pointer"
                  onClick={() => route.back()}
                />
                {title ?? i18n("Words.back_before_page")}
              </strong>
            </When>
          </h3>
        </div>
        <div className="flex relative z-1">
          <div>
            <Flags />
          </div>
          <div>
            <div
              className="relative bg-tertiary rounded-sm cursor-pointer"
              onClick={() => handleNotification(true)}
            >
              <span className="bg-red px-1 pt-[3px] w-5 h-[19px] text-center rounded-xl text-[10px] text-white absolute right-[-4px] top-[-13px]">
                {notificationsAmount}
              </span>
              <Bell className="w-6" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
