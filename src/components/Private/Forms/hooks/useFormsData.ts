import useGetCategories from "@services/Clients/Categories/Get/useGetCategories";
import useGetForms from "@services/CustomForms/Get/useGetForms";
import useGetEvents from "@services/Events/Get/useGetServices";
import useGetServices from "@services/Services/Get/useGetServices";
import { FormsShape } from "@type/Forms";
import { ServicesShape } from "@type/Services";
import { useEffect, useState } from "react";

type Props = {
  formId?: number;
};

export function useFormsData({ formId }: Props = {}) {
  const { data: services } = useGetServices();
  const { data: formsData } = useGetForms();
  const { data: categories } = useGetCategories();
  const { data: events } = useGetEvents({
    form_id: formId,
  });
  const [forms, setForms] = useState<Array<FormsShape>>([]);

  useEffect(() => {
    if (!formsData) return;

    setForms(formsData);
  }, [formsData]);

  return {
    forms,
    services: services as Array<ServicesShape>,
    categories,
    events,
  };
}
