import { useState } from "react";

export function useTabs() {
  const [activeTab, setActiveTab] = useState<string>("settings");

  const handleChangeTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  return {
    activeTab,
    handleChangeTab,
  };
}
