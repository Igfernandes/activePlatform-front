import useGetCharges from "@services/Charges/Get/useGetCharges";
import useGetServices from "@services/Services/Get/useGetServices";
import { ChargeShape } from "@type/Charges";
import { ServicesShape } from "@type/Services";
import { useEffect, useState } from "react";

export function useSend() {
  const { data: serviceData } = useGetServices();
  const [services, setServices] = useState<Array<ServicesShape>>([]);
  const { data: chargesData } = useGetCharges();
  const [charges, setCharges] = useState<Array<ChargeShape>>([]);

  useEffect(() => {
    setServices(serviceData ?? []);
  }, [serviceData]);
  useEffect(() => {
    setCharges(chargesData ?? []);
  }, [chargesData]);
  
  return {
    services,
    charges,
  };
}
