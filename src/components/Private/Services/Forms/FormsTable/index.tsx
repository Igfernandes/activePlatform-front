import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import i18n from "@configs/i18n";
import { ServicesShape } from "@type/Services";
import useGetForms from "@services/CustomForms/Get/useGetForms";
import dayjs from "dayjs";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { DotsOptions } from "@components/shared/others/DotsOptions";
import { useRouter } from "next/router";

type Props = {
  service: ServicesShape;
};

export function FormsTable({ service }: Props) {
  const { data: forms = [] } = useGetForms({ service_id: service.id });
  const router = useRouter()

  return (
    <div>
      <SmartTable
        data={forms.map((form) => ({
          ID: form.id,
          name: form.name,
          status: i18n(`Words.${form.status.toLocaleLowerCase()}`),
          started_at: dayjs(form.started_at).format("DD/MM/YYYY HH:MM"),
          expired_at: dayjs(form.expired_at).format("DD/MM/YYYY HH:MM"),
          actions: (
            <DotsOptions
              actions={[
              {
                handle: () => router.push(`${privateRoutes.forms}/${form.id}`),
                text: i18n("Texts.see_more"),
              }
              ]}
            />
          ),
        }))}
        tHeads={{
          data: [
            "ID",
            i18n("Words.name"),
            i18n("Words.status"),
            i18n("Words.started_at"),
            i18n("Words.expired_at"),
            i18n("Words.actions"),
          ],
          widths: [50, 200, 100, 150, 150, 10],
        }}
        options={{}}
        title={i18n("Texts.linked_forms")}
      />
    </div>
  );
}
