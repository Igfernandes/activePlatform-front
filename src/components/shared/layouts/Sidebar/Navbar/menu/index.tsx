import { privateRoutes } from "@configs/routes/Web/navigation";
import { MenuShape } from "./type";
import { Graphic } from "@assets/Icons/black/Graphic";
import i18n from "@configs/i18n";
import { Box } from "@assets/Icons/black/Box";
import { Wallet } from "@assets/Icons/black/Wallet";
import { UsersManager } from "@assets/Icons/black/UsersManager";
import { Gear } from "@assets/Icons/black/Gear";
import { Spreadsheet } from "@assets/Icons/black/Spreadsheet";
import { GoOut } from "@assets/Icons/black/GoOut";
import { Peoples } from "@assets/Icons/black/Peoples";
import { Config } from "@assets/Icons/black/Config";
import { Schedule } from "@assets/Icons/black/Schedule";
import { Form } from "@assets/Icons/black/Form";
import { TravelBag } from "@assets/Icons/black/TravelBag";
import { GalleriesBI } from "@assets/Icons/black/GalleriesBI";

export function useMenu() {
  const MAIN_MENU = [
    {
      title: "Dashboard",
      Icon: Graphic,
      link: privateRoutes.dashboard,
    },
    {
      title: i18n("Words.clients"),
      Icon: Peoples,
      link: privateRoutes.clients,
      permissions: ["clients_view"],
    },
    {
      title: i18n("Texts.sending_management"),
      Icon: Spreadsheet,
      link: privateRoutes.dispatcher,
      permissions: ["dispatchers_view"],
    },
    {
      title: i18n("Words.forms"),
      Icon: Form,
      link: privateRoutes.forms,
      permissions: ["forms_view"],
    },
    {
      title: i18n("Words.events"),
      Icon: TravelBag,
      link: privateRoutes.events,
      permissions: ["events_view"],
    },
    {
      title: i18n("Words.schedule"),
      Icon: Schedule,
      link: privateRoutes.schedule,
      permissions: ["dispatchers_view"],
    },
    {
      title: i18n("Words.services"),
      Icon: Box,
      link: privateRoutes.services,
      permissions: ["services_view"],
    }, 
    {
      title: i18n("Words.galleries"),
      Icon: GalleriesBI,
      link: privateRoutes.galleries,
    },
    {
      title: i18n("Words.finance"),
      Icon: Wallet,
      link: privateRoutes.finance,
      permissions: ["charges_view"],
    },
  ] as Array<MenuShape>;

  const ADMINISTRATIVE_MENU = [
    {
      title: i18n("Texts.users_manager"),
      Icon: UsersManager,
      link: privateRoutes.usersManager,
      permissions: ["users_view"],
    },
    {
      title: i18n("Texts.apis_manager"),
      Icon: Config,
      link: privateRoutes.apisManager,
      permissions: ["integrations_view"],
    },
    {
      title: i18n("Words.settings"),
      Icon: Gear,
      link: privateRoutes.settings,
    },
  ] as Array<MenuShape>;

  const SYSTEM_MENU = [
    {
      title: i18n("Words.go_out"),
      Icon: GoOut,
      link: privateRoutes.logout,
    },
  ] as Array<MenuShape>;

  return {
    ADMINISTRATIVE_MENU,
    SYSTEM_MENU,
    MAIN_MENU,
  };
}
