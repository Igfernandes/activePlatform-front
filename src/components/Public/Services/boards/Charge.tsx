import { When } from "@components/utilities/When";
import i18n from "@configs/i18n";
import { ServicePreviewShape } from "@type/Services";

type Props = Pick<ServicePreviewShape, "charge">;

export function BoardCharge({ charge }: Props) {
  const { title, promotional_price, price, sold_out, reference } = charge ?? {};
  return (
    <div className="content">
      <div className="title">
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <div className="Price mt-4 mb-2">
        <p className="text-xs">{i18n("Words.only_for")}</p>
        <p className="text-2xl mt-2">
          <When value={!promotional_price}>
            <strong>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(price)}
            </strong>
          </When>
          <When value={!!promotional_price}>
            <s className="mr-2">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(price)}
            </s>
            <strong>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(promotional_price ?? 0)}
            </strong>
          </When>
        </p>
      </div>
      <div className="button mt-7">
        <When value={!sold_out}>
          <a
            className="bg-red text-white py-2 px-10 rounded-lg font-semibold"
            href={`/checkout/?charge=${reference}`}
          >
            {i18n("Words.make_payment")}
          </a>
        </When>
        <When value={!!sold_out}>
          <span className="bg-disabled text-white py-2 px-10 rounded-lg font-semibold cursor-not-allowed">
            {i18n("Words.sold_out")}
          </span>
        </When>
      </div>
    </div>
  );
}
