import useWindow from "@hooks/useWindow";
import { useEffect, useState } from "react";

export function useSidebar() {
  const { screenType } = useWindow();
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    setShowSidebar(screenType == "DESKTOP");
  }, [screenType]);

  return {
    showSidebar,
    handleToggleSidebar,
  };
}
