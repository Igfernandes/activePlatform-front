import { privateRoutes } from "@configs/routes/Web/navigation";
import { MenuShape } from "./type";
import { Graphic } from "@assets/Icons/black/Graphic";
import i18n from "@configs/i18n";
import { Box } from "@assets/Icons/black/Box";
import { Wallet } from "@assets/Icons/black/Wallet";
import { UsersManager } from "@assets/Icons/black/UsersManager";
import { Gear } from "@assets/Icons/black/Gear";
import { Spreadsheet } from "@assets/Icons/black/Spreadsheet";
import { Schedule } from "@assets/Icons/black/schedule";
import { GoOut } from "@assets/Icons/black/GoOut";
import { Peoples } from "@assets/Icons/black/Peoples";

export const MAIN_MENU = [
  {
    title: "Dashboard",
    Icon: Graphic,
    isActive: true,
    link: privateRoutes.dashboard,
  },
  {
    title: i18n("words.my_users"),
    Icon: Peoples,
    link: privateRoutes.myUsers,
  },
  {
    title: i18n("words.sending_management"),
    Icon: Spreadsheet ,
    link: privateRoutes.sendingManagement,
  },
  {
    title: i18n("words.schedule"),
    Icon: Schedule,
    link: privateRoutes.schedule,
  },
  {
    title: i18n("words.services"),
    Icon: Box,
    link: privateRoutes.services,
  },
  {
    title: i18n("words.finance"),
    Icon: Wallet,
    link: privateRoutes.finance,
  },
] as Array<MenuShape>;

export const ADMINISTRATIVE_MENU = [
  {
    title: i18n("words.users_manager"),
    Icon: UsersManager,
    link: privateRoutes.usersManager,
  },
  {
    title: i18n("words.apis_manager"),
    Icon: Graphic,
    link: privateRoutes.apisManager,
  },
  {
    title: i18n("words.settings"),
    Icon: Gear,
    link: privateRoutes.settings,
  },
] as Array<MenuShape>;

export const SYSTEM_MENU = [
  {
    title: i18n("words.go_out"),
    Icon: GoOut,
    link: privateRoutes.logout,
  },
] as Array<MenuShape>;
