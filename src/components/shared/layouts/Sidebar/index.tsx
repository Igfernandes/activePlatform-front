import { Bars } from "@assets/Icons/black/Bars";
import { COMPANY_PROFILE } from "@configs/envs";
import { Navbar } from "./Navbar";
import i18n from "@configs/i18n";
import { ADMINISTRATIVE_MENU, MAIN_MENU, SYSTEM_MENU } from "@constants/menu";
import useWindow from "@hooks/useWindow";
import { useEffect, useState } from "react";

type Props = {
  showSidebar: boolean;
  handleToggleSidebar: () => void;
};

export function Sidebar({ handleToggleSidebar, showSidebar }: Props) {
  const { screenType } = useWindow();
  const [indentValue, setIndentValue] = useState<string>();

  useEffect(() => {
    setIndentValue(
      ["TABLET", "MOBILE"].includes(screenType ?? "") ? "-100vw" : "-15rem"
    );
  }, [screenType]);

  return (
    <aside
      className={`fixed lg:relative z-40 lg:z-0 w-full h-[100vh] lg:h-full lg:w-[320px] bg-white transition-all duration-300`}
      style={{
        marginLeft: !showSidebar ? indentValue : "0",
      }}
    >
      <div className="px-6 pt-6 h-[90vh]">
        <div className="flex justify-between mb-8">
          <div>
            <h3 className="text-2xl">
              <strong>{COMPANY_PROFILE.name}</strong>
            </h3>
          </div>
          <div className="cursor-pointer">
            <Bars onClick={handleToggleSidebar} />
          </div>
        </div>
        <div className="h-[82vh] lg:h-full flex flex-col  justify-between overflow-x-hidden overflow-y-auto hidden-scroll transition-all duration-500">
          <Navbar
            sidebarState={showSidebar}
            menu={MAIN_MENU}
            title={i18n("Words.main")}
            className="mb-6 lg:mb-0 xl:mb-3"
          />
          <Navbar
            sidebarState={showSidebar}
            menu={ADMINISTRATIVE_MENU}
            title={i18n("Words.administrative")}
            className="mb-6 xl:mb-3"
          />
          <Navbar
            sidebarState={showSidebar}
            menu={SYSTEM_MENU}
            title={i18n("Words.system")}
          />
        </div>
      </div>
    </aside>
  );
}
