import { When } from "@components/utilities/When";
import { Banks } from "./Banks";
import { TabsApis } from "./Tabs";
import { useState } from "react";
import { Chats } from "./Chats";
import {
  IntegrationBanksTypes,
  IntegrationChatsTypes,
} from "@type/integrations";

export function ApiBoard() {
  const [isActiveTab, setIsActiveTab] = useState<string>("Bancos");

  return (
    <div>
      <div>
        <TabsApis
          isActiveTab={isActiveTab}
          handleToggleTab={setIsActiveTab}
          items={["Bancos", "Mídias Sociais"]}
        />
        <When value={isActiveTab === "Bancos"}>
          {(["MERCADO_PAGO"] as IntegrationBanksTypes[]).map((bank) => (
            <Banks key={bank} type={bank} />
          ))}
        </When>
        <When value={isActiveTab === "Mídias Sociais"}>
          {(
            ["FACEBOOK", "INSTAGRAM", "WHATSAPP"] as IntegrationChatsTypes[]
          ).map((chat) => (
            <Chats key={chat} type={chat} />
          ))}
        </When>
      </div>
    </div>
  );
}
