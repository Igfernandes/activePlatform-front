import { useEffect, useState } from "react";
import { UseFormSetValue, UseFormWatch } from "react-hook-form";
import { FormsPayload } from "../../schema";
import { platformsCards } from "../../../constants/platforms";
import { GroupCardItemShape } from "@components/shared/forms/GroupCards/type";

type Props = {
  watch: UseFormWatch<FormsPayload>;
  setValue: UseFormSetValue<FormsPayload>;
};

export function useDefinitions({ watch, setValue }: Props) {
  const [platforms, setPlatforms] = useState<Array<GroupCardItemShape>>([]);

  useEffect(() => {
    const hasImage = watch("has_image");
    const hasFile = watch("has_file");

    if (hasImage == "NÃO" && hasFile == "NÃO")
      return setPlatforms(platformsCards);

    setValue("platforms", []);

    let platformsAvailable = platformsCards.map((card) => ({
      ...card,
      disabled: hasImage == "SIM" && card.hasImage == "NÃO",
    }));

    if (hasFile == "SIM")
      platformsAvailable = platformsAvailable.map((card) => ({
        ...card,
        disabled: hasFile == "SIM" && card.hasFile == "NÃO",
      }));

    setPlatforms(platformsAvailable);
  }, [watch("has_file"), watch("has_image")]);

  return {
    platforms,
  };
}
