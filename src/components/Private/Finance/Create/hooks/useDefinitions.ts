import useGetServices from "@services/Services/Get/useGetServices";
import { useMemo } from "react";

export function useDefinitions() {
  const { data: servicesData } = useGetServices({ status: "ACTIVE" });
  const services = useMemo(() => servicesData ?? [], [servicesData]);

  return {
    services,
  };
}
