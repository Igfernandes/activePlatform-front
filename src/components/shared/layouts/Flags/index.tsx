import { ArrowDownSimple } from "@assets/Icons/black/ArrowDownSimple";
import { useEffect, useRef, useState } from "react";
import { flags } from "./constants/flags";
import { getCookie } from "cookies-next";
import { useI18n } from "@contexts/I18n";
import { TranslateOptions } from "@contexts/I18n/types";

export function Flags() {
  const styleFlags = useRef<string>(
    "border-2 border-white hover:border-black rounded-full cursor-pointer mb-2 mt-2"
  );
  const [targetFlag, setTargetFlag] = useState<number>(0);
  const [isShowFlags, setIsShowFlags] = useState<boolean>(false);
  const { setLocale } = useI18n();

  useEffect(() => {
    const language = getCookie("language");
    const flagIndexSwitched = flags.findIndex(
      (flag) => flag.language === language
    );

    if (flagIndexSwitched === -1) return;

    setTargetFlag(flagIndexSwitched);
  }, []);

  return (
    <div
      className="relative mx-4 z-[1]"
      onMouseEnter={() => setIsShowFlags(true)}
      onMouseLeave={() => setIsShowFlags(false)}
    >
      <div className="switched-language flex items-center">
        {flags[targetFlag]?.icon}
        <ArrowDownSimple className="ml-2" />
      </div>
      <ul
        className="absolute left-[-8px] top-10 bg-white shadow-md px-4 rounded-b-lg transition-all overflow-hidden"
        style={{
          height: isShowFlags ? "9rem" : "0rem",
        }}
      >
        {flags.map((flag, key) => (
          <li
            key={key}
            className={styleFlags.current}
            onClick={() => {
              setTargetFlag(key);
              setLocale(flag.language as TranslateOptions);
            }}
          >
            {flag.icon}
          </li>
        ))}
      </ul>
    </div>
  );
}
