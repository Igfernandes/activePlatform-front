import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import i18n from "@configs/i18n";
import { useModalContext } from "@contexts/Modal";
import { useFillFields } from "./hooks/useFillFields";

type Props = {
  formId: number;
};

export function FilledFormsTable(props: Props) {
  const { handleToggleModal } = useModalContext();
  const { tDataFields, tHeadsFields } = useFillFields(props);

  return (
    <>
      <SmartTable
        options={{
          pagination: {
            max: 6,
          },
          actions: [
            {
              handle: () => handleToggleModal("SHARED"),
              text: i18n("Texts.data_shared"),
            },
          ]
        }}
        data={tDataFields}
        title={i18n("Words.registers")}
        tHeads={{
          data: tHeadsFields.current,
          widths: [60, 300, 100, 48],
        }}
      />
    </>
  );
}
