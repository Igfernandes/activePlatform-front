import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import i18n from "@configs/i18n";
import { GetServerSideProps } from "next";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { getFillFields } from "@services/Forms/Fills/Get/SSR";
import { getForms } from "@services/CustomForms/Get/SSR";
import { FormFillField } from "@type/Forms/FormsFill";
import { InfoBoard } from "@components/shared/forms/InfoBoard/viewer";
import { useFillFields } from "@components/Private/Forms/Fills/hooks/useFillFields";
import {
  FieldsPageProps,
  FillFieldData,
} from "@components/Private/Forms/Fills/type";
import { TViewer } from "@components/shared/forms/InfoBoard/fields/Viewer";

export default function FillField({ fields, form }: FieldsPageProps) {
  const { fieldsData } = useFillFields({ fields, form });

  return (
    <DashboardContainer>
      <div className="bg-white">
        <div className="title p-4">
          <h1 className="text-2xl font-semibold">
            {i18n("Words.fill_register")}
          </h1>
        </div>
        <InfoBoard>
          {fieldsData.map((props: FillFieldData, key) => (
            <TViewer
              key={`${props.text.replaceAll(" ", "")}_${key}`}
              {...props}
            />
          ))}
        </InfoBoard>
      </div>
    </DashboardContainer>
  );
}
const settings404 = {
  redirect: {
    destination: `${privateRoutes.forms}?alert=${i18n(
      "errors.system.not_found_register"
    )}`, // Redireciona para a página principal
    permanent: true, // Define como redirecionamento temporário (status 307)
  },
};

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<FieldsPageProps> = async ({
  params,
  req,
}) => {
  const tokenNavigation = req.cookies["token_navigation"] ?? "";
  const { id, ref } = params as { id: string; ref: string }; // Tipando o params
  const forms = await getForms(tokenNavigation, { id: parseInt(id) });
  const fields = await getFillFields(tokenNavigation, {
    formId: parseInt(id),
    ref,
  });

  const form = Array.isArray(forms) ? forms[0] : forms;

  if (!forms || !fields) {
    return settings404;
  }
  if (Object.hasOwn(forms, "errors") || Object.hasOwn(fields, "errors")) {
    return settings404;
  }

  return {
    props: {
      form,
      fields: fields as Array<FormFillField>, // Passa o ID para o componente
    },
  };
};
