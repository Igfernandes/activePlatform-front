import i18n from "@configs/i18n";
import { handleMaskCPF } from "@helpers/string";
import { DependentsViewerProps } from "./type";
import { BtnDelete } from "./BtnDelete";
import { Close } from "@assets/Icons/black/CloseClean";

export function DesktopDependentsViewer({
  rows,
  setRows,
  setValue,
}: DependentsViewerProps) {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="border-2 border-cross-white-primary">
            {i18n("Words.name")}
          </th>
          <th className="border-2 border-cross-white-primary w-[180px]">
            {i18n("Words.cpf")}
          </th>
          <th className="border-2 border-cross-white-primary w-[180px]">
            {i18n("Words.birthdate")}
          </th>
          <th className="px-2 border-2 border-cross-white-primary"></th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, key) => (
          <tr key={`row_${key}`}>
            <td className="border-2 border-cross-white-primary">
              <input
                name={`field_name_${key}`}
                onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                  const refRows = rows;

                  refRows[key].name = ev.currentTarget.value;
                  setRows(refRows);
                  setValue(JSON.stringify(refRows));
                }}
                className="w-full outline-none"
                type="text"
              />
            </td>
            <td className="px-2 border-2 border-cross-white-primary">
              <input
                className="w-full outline-none"
                type="text"
                name={`field_cpf_${key}`}
                onChange={(ev) => {
                  const refRows = rows;

                  refRows[key].cpf = ev.currentTarget.value;
                  handleMaskCPF(ev);
                  setRows(refRows);

                  setValue(JSON.stringify(refRows));
                }}
              />
            </td>
            <td className="px-2 border-2 border-cross-white-primary">
              <input
                name={`field_birthdate_${key}`}
                onChange={(ev) => {
                  const refRows = rows;

                  refRows[key].birthdate = ev.currentTarget.value;
                  setRows(refRows);
                  setValue(JSON.stringify(refRows));
                }}
                className="w-full outline-none"
                type="Date"
              />
            </td>
            <td className="px-2 border-2 border-cross-white-primary w-10">
              <BtnDelete
                rows={rows}
                index={key}
                setRows={setRows}
                setValue={setValue}
                text={<Close fill={"red"} />}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
