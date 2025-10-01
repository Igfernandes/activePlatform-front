import useGetCategories from "@services/Clients/Categories/Get/useGetCategories";
import useGetForms from "@services/CustomForms/Get/useGetForms";
import useGetServices from "@services/Services/Get/useGetServices";
import { FormsShape } from "@type/Forms";
import { ServicesShape } from "@type/Services";
import { useEffect, useState } from "react";

export function useFormsData() {
  const { data: services } = useGetServices();
  const { data: formsData } = useGetForms();
  const { data: categories } = useGetCategories();
  const [forms, setForms] = useState<Array<FormsShape>>([]);

  useEffect(() => {
    if (!formsData) return;

    setForms(formsData);
  }, [formsData]);

  return {
    forms,
    services: services as Array<ServicesShape>,
    categories,
  };
}
