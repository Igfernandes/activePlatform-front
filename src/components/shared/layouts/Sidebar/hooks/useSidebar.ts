import { useState } from "react";

export function useSidebar() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return {
    showSidebar,
    handleToggleSidebar,
  };
}
