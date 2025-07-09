import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import i18n from "@configs/i18n";
import { useFillFields } from "./hooks/useFillFields";
import { FilledFormsActions } from "./FilledFormsActions";
import { FieldShape } from "@components/shared/layouts/FormBuilder/type";

type Props = {
  formId: number;
  serviceId: number;
  components: FieldShape[];
};

export function FilledFormsTable(props: Props) {
  const { tDataFields, tHeadsFields, handleChangeColumn } = useFillFields(props);

  return (
    <>
      <SmartTable
        options={{
          pagination: {
            max: 6,
          },
          buttons: (
            <FilledFormsActions
              formId={props.formId}
              components={props.components}
              handleChangeColumn={handleChangeColumn}
            />
          ),
        }}
        data={tDataFields}
        title={i18n("Words.registers")}
        tHeads={{
          data: tHeadsFields.current,
          widths: [60, 300, 150, 180, 48],
        }}
      />
    </>
  );
}
