import { StoreItem, Store } from "../App";

type Props = {
  store: Store;
  getItemImagePath: (item: StoreItem) => string;
  increaseCartQuantity: (item: StoreItem) => void;
};

export function Header({
  store,
  getItemImagePath,
  increaseCartQuantity,
}: Props) {
  return (
    <header id="store">
      <h1>Grocero</h1>
      <ul className="item-list store--item-list">
        {store.map((item) => (
          <li>
            <div className=".store--item-icon">
              <img src={getItemImagePath(item)} />
            </div>
            <button
              onClick={function () {
                increaseCartQuantity(item);
              }}
            >
              Add to cart ({item.stock})
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}