import { useMemo, useState } from "react";

type Props = {
  tabs: string[];
};

export function useTabs({ tabs }: Props) {
  const currentTab = useMemo(() => Array.isArray(tabs) ? tabs[0] : "settings", [tabs]);
  const [activeTab, setActiveTab] = useState<string>(currentTab);

  const handleChangeTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  return {
    activeTab,
    handleChangeTab,
  };
}
