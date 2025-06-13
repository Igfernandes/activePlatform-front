import i18n from "@configs/i18n";

type Props = {
  name: string;
  label: string;
};

export function FormTable({ label, name }: Props) {
  return (
    <div className="form-group my-3">
      <label htmlFor="label" className="font-semibold">{i18n(`Words.${label}`)}</label>
      <table className="w-full">
        <thead className="border-zinc-400 border-2">
          <tr>
            <th className="font-semibold border-r-2 border-zinc-400">{i18n("Words.name")}</th>
            <th className="font-semibold">{i18n("Words.value")}</th>
          </tr>
        </thead>
        <tbody className="border-zinc-400 border-2">
          <tr >
            <td className="font-semibold border-r-2 border-zinc-400">
              <input className="w-full" name={name} />
            </td>
            <td>
              <input className="w-full" name={name} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
