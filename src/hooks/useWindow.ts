import { useState, useEffect } from "react";

export type ScreenTypes = "MOBILE" | "DESKTOP";

export default function useWindow() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [screenType, setScreenType] = useState<ScreenTypes>();

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      setScreenType(windowSize.width >= 1024 ? "DESKTOP" : "MOBILE");
    };

    // Atualiza na montagem
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize.width]);

  return {
    windowSize,
    screenType,
  };
}
