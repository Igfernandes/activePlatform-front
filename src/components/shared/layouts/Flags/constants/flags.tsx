import { FlagBrazilRounded } from "@assets/Icons/colorful/FlagBrazilRounded";
import { FlagESRounded } from "@assets/Icons/colorful/FlagESRounded";
import { FlagEUARounded } from "@assets/Icons/colorful/FlagEUARounded";

export const flags = [
  {
    language: "pt-br",
    icon: <FlagBrazilRounded key={`brl_flag`} className="w-8 h-8" />,
  },
  {
    language: "en",
    icon: <FlagEUARounded key={`eua_flag`} className="w-8 h-8" />,
  },
  {
    language: "es",
    icon: <FlagESRounded key={`es_flag`} className="w-8 h-8" />,
  },
];
