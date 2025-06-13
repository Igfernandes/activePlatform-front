import { Button } from "@components/shared/forms/Button";
import { When } from "@components/utilities/When";
import i18n from "@configs/i18n";
import { ChargeType } from "@type/Charges";
import { useRef } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  type: ChargeType;
  products: Array<Product>;
  isLoading: boolean;
  hasAllFilledFields: () => boolean;
};
type Product = {
  title: string;
  price: number;
  amount: number;
  max: number;
};

export function OrderSummary({
  type,
  products,
  isLoading,
  hasAllFilledFields,
}: Props) {
  const { register } = useFormContext();
  const total = useRef<number>(
    products
      .map((product) => product.price)
      .reduce((total, price) => total + price, 0)
  );

  return (
    <div className="order-summary p-6 border-2 border-stone-200 rounded-lg ml-6">
      <div className="title mb-4">
        <h5>
          <strong>{i18n("Words.order_summary")}</strong>
        </h5>
      </div>
      <div className="product-title flex items-center">
        <span className="text-xs uppercase font-semibold">
          {i18n("Words.products")}
        </span>{" "}
        <hr className="w-[80%] text-stone-300 ml-2" />
      </div>

      <div className="product-text my-2 pb-2 border-b-2 border-b-stone-200">
        {products.map(({ title, price, amount, max }: Product, index) => (
          <div className="product-item" key={`${index}_${title}`}>
            <div className="flex justify-between">
              <div className="product-label line-clamp-1">
                <p>{title}</p>
              </div>
              <div className="product-price">
                <span>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(price)}
                </span>
              </div>
            </div>
            <When value={type !== "APPELLANT"}>
              <div className="amount flex justify-between">
                <div className="w-1/2">
                  <label htmlFor={`amounts.${index}`} className="text-xs">
                    {i18n("Words.amount")}
                  </label>
                </div>
                <div className="w-1/2 text-end">
                  <span>x</span>
                  <input
                    className="w-14 text-center border-none outline-none"
                    type="number"
                    {...register(`amounts.${index}`)}
                    id={`amounts.${index}`}
                    required={true}
                    defaultValue={amount}
                    min="1"
                    max={max}
                  />
                </div>
              </div>
              <div>
                <span className="text-xs text-red">
                  {max == 1 ? "Resta" : "Restam"} apenas {max}{" "}
                  {max == 1 ? "disponível" : "disponíveis"}*
                </span>
              </div>
            </When>
          </div>
        ))}
      </div>

      <div className="total flex justify-between pb-4 my-4 border-b-2 border-b-stone-200">
        <div className="title">
          <span className="font-semibold">{i18n("Words.total")}</span>
        </div>
        <div className="text">
          <span className="font-semibold">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(total.current)}
          </span>
        </div>
      </div>
      <div className="submit">
        <Button
          text={i18n("Words.continue")}
          type="submit"
          isLoading={isLoading}
          disabled={!hasAllFilledFields()}
        />
      </div>
    </div>
  );
}
