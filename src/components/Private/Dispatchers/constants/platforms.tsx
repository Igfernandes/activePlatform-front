
import { Email } from "@assets/Icons/black/Email";
import { Facebook } from "@assets/Icons/black/Facebook";
import { Instagram } from "@assets/Icons/black/Instagram";
import { WhatsApp } from "@assets/Icons/black/WhatsApp";
import i18n from "@configs/i18n";

export const platformsCards = [
  {
    icon: <Email />,
    label: i18n("Words.email") as string,
    value: "EMAIL",
    text: "Só pode enviar texto e links.",
    hasFile: "SIM",
    hasImage: "SIM",
  },
  {
    icon: <WhatsApp />,
    label: i18n("Words.whatsapp") as string,
    value: "WHATSAPP",
    text: "Só pode enviar texto e links.",
    hasFile: "NÃO",
    hasImage: "SIM",
  },
  {
    icon: <Instagram />,
    label: i18n("Words.instagram") as string,
    value: "INSTAGRAM",
    text: "Só pode enviar texto e links.",
    hasFile: "NÃO",
    hasImage: "NÃO",
  },
  {
    icon: <Facebook />,
    label: i18n("Words.facebook") as string,
    value: "FACEBOOK",
    text: "Só pode enviar imagens, texto e links.",
    hasFile: "NÃO",
    hasImage: "NÃO",
  },
  // {
  //   icon: <CellPhone />,
  //   label: i18n("Words.device") as string,
  //   value: "DEVICE",
  //   text: "Só pode enviar textos.",
  //   hasFile: "NÃO",
  //   hasImage: "NÃO",
  // },
];
