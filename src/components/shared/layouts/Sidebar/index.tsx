import { Bars } from "@assets/Icons/black/Bars";
import { COMPANY_PROFILE } from "@configs/envs";
import { Navbar } from "./Navbar";
import i18n from "@configs/i18n";
import { ADMINISTRATIVE_MENU, MAIN_MENU, SYSTEM_MENU } from "@constants/menu";
import { useSidebar } from "./hooks/useSidebar";

export function Sidebar() {
  const { handleToggleSidebar, showSidebar } = useSidebar();

  return (
    <aside
      className="w-[320] bg-white transition-all duration-500"
      style={{
        marginLeft: !showSidebar ? "-15rem" : "",
      }}
    >
      <div className="px-6 pt-6">
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
        <div className="h-[83vh] overflow-auto hidden-scroll transition-all duration-500">
          <Navbar
            sidebarState={showSidebar}
            menu={MAIN_MENU}
            title={i18n("words.main")}
            className="mb-8"
          />
          <Navbar
            sidebarState={showSidebar}
            menu={ADMINISTRATIVE_MENU}
            title={i18n("words.administrative")}
            className="mb-8"
          />
          <Navbar
            sidebarState={showSidebar}
            menu={SYSTEM_MENU}
            title={i18n("words.system")}
          />
        </div>
      </div>
    </aside>
  );
}
