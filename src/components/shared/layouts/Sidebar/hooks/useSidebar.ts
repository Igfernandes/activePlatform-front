import useWindow from "@hooks/useWindow";
import { useEffect, useState } from "react";

export function useSidebar() {
  const { screenType } = useWindow();
  const [showSidebar, setShowSidebar] = useState<boolean>(true);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    if(!screenType) return;
    
    setShowSidebar(screenType == "DESKTOP");
  }, [screenType]);

  return {
    showSidebar,
    handleToggleSidebar,
  };
}
