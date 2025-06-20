import useGetForms from "@services/CustomForms/Get/useGetForms";
import useGetServices from "@services/Services/Get/useGetServices";
import { FormsShape } from "@type/Forms";
import { useEffect, useState } from "react";

export function useFormsData() {
  const { data: services } = useGetServices();
  const { data: formsData } = useGetForms();
  const [forms, setForms] = useState<Array<FormsShape>>([]);

  useEffect(() => {
    if (!formsData) return;

    setForms(formsData);
  }, [formsData]);

  return {
    forms,
    services,
  };
}
