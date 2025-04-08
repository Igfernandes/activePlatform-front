import { CardItem } from "./CardItem";
import { CardsProps } from "./type";

export function Cards({ items = [] }: CardsProps) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-box flex flex-wrap ">
          {items.map((item, key) => (
            <CardItem {...item} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
}
