import { useState } from "react";

export function useSidebar() {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return {
    showSidebar,
    handleToggleSidebar,
  };
}
